<script setup lang="ts">
// Signature de l'accueil : le scroll trace le réseau.
// Une ligne relie les repères [data-signal] posés dans chaque section (routage orthogonal à pans coupés,
// comme une piste de circuit). La part tracée suit la main du visiteur ; un paquet en parcourt la tête,
// avec une traîne qui s'allonge quand on scrolle vite. Chaque repère franchi passe à « raccordé » (signal.on).
// Mouvement réduit : la ligne est tracée entièrement d'emblée, sans paquet.
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { signal } from '../../composables/signal'
import { prefersReducedMotion } from '../../composables/useScrollCraft'

type Pt = { x: number; y: number }
type Seg = { d: string; len: number; start: number }
type Mark = { id: string; at: number; pt: Pt }

const svg = ref<SVGSVGElement | null>(null)
const size = ref({ w: 0, h: 0 })
const segs = ref<Seg[]>([])
const marks = ref<Mark[]>([])
const head = ref<Pt | null>(null)
const trail = ref({ seg: -1, dash: '0 1', offset: 0 })
const drawn = ref(0) // longueur tracée, en px le long du chemin

let host: HTMLElement | null = null
let ro: ResizeObserver | null = null
let raf = 0
let target = 0
let lastY = 0
let speed = 0
let reduced = false
let probe: SVGPathElement | null = null
let samples: { s: number; i: number; l: number; p: Pt }[] = []
const C = 12 // pan coupé à 45°

function centre(el: Element): Pt {
  const r = el.getBoundingClientRect()
  const h = host!.getBoundingClientRect()
  return { x: Math.round(r.left - h.left + r.width / 2), y: Math.round(r.top - h.top + r.height / 2) }
}

// A → B : descente, pan coupé, horizontale, pan coupé, descente.
function route(a: Pt, b: Pt) {
  const dx = b.x - a.x
  if (Math.abs(dx) < 2) return ` L${b.x} ${b.y}`
  const s = Math.sign(dx)
  const my = Math.max(a.y + C * 2, b.y - 72)
  return ` L${a.x} ${my - C} L${a.x + s * C} ${my} L${b.x - s * C} ${my} L${b.x} ${my + C} L${b.x} ${b.y}`
}

function layout() {
  if (!host || !svg.value) return
  size.value = { w: host.offsetWidth, h: host.offsetHeight }
  const els = Array.from(host.querySelectorAll<HTMLElement>('[data-signal]'))
  // data-signal-break : la ligne s'interrompt avant ce repère (l'acte épinglé trace son propre signal).
  const out: { d: string; ids: { id: string; pt: Pt }[] }[] = []
  let cur: { d: string; ids: { id: string; pt: Pt }[] } | null = null
  let prev: Pt | null = null
  for (const el of els) {
    const pt = centre(el)
    const id = el.dataset.signal!
    if (!cur || el.hasAttribute('data-signal-resume')) {
      cur = { d: `M${pt.x} ${pt.y}`, ids: [] }
      out.push(cur)
    } else cur.d += route(prev!, pt)
    cur.ids.push({ id, pt })
    prev = pt
    if (el.hasAttribute('data-signal-break')) { cur = null }
  }
  // Longueurs mesurées sur un chemin sonde hors écran.
  probe ??= document.createElementNS('http://www.w3.org/2000/svg', 'path')
  if (!probe.isConnected) svg.value.appendChild(probe)
  let start = 0
  const sg: Seg[] = []
  const mk: Mark[] = []
  samples = []
  out.forEach((o, i) => {
    probe!.setAttribute('d', o.d)
    const len = probe!.getTotalLength()
    // Position de chaque repère le long du segment.
    let l = 0
    for (const n of o.ids) {
      while (l < len) { const p = probe!.getPointAtLength(l); if (Math.hypot(p.x - n.pt.x, p.y - n.pt.y) < 3) break; l += 2 }
      mk.push({ id: n.id, at: start + Math.min(l, len), pt: n.pt })
    }
    for (let s = 0; s <= len; s += 6) { const p = probe!.getPointAtLength(s); samples.push({ s: start + s, i, l: s, p: { x: p.x, y: p.y } }) }
    // dernier point exactement en bout de segment, sinon le repère final n'est jamais atteint
    const e = probe!.getPointAtLength(len); samples.push({ s: start + len, i, l: len, p: { x: e.x, y: e.y } })
    sg.push({ d: o.d, len, start })
    start += len
  })
  probe.setAttribute('d', '')
  segs.value = sg
  marks.value = mk
  read()
  if (reduced) drawn.value = target
}

// La tête du tracé suit une ligne située à 62 % de la hauteur de l'écran.
function read() {
  if (!host || !samples.length) return
  const headY = window.innerHeight * 0.62 - host.getBoundingClientRect().top
  let best = 0
  for (const s of samples) { if (s.p.y <= headY) best = s.s; else if (s.p.y > headY + 2) break }
  target = reduced ? samples[samples.length - 1].s : best
}

function at(len: number) {
  let lo = 0, hi = samples.length - 1
  while (lo < hi) { const m = (lo + hi + 1) >> 1; if (samples[m].s <= len) lo = m; else hi = m - 1 }
  return samples[lo]
}

function tick() {
  const y = window.scrollY
  speed += (Math.abs(y - lastY) - speed) * 0.12
  lastY = y
  read()
  drawn.value += (target - drawn.value) * (reduced ? 1 : 0.14)
  if (Math.abs(target - drawn.value) < 0.5) drawn.value = target
  const L = drawn.value
  let current = signal.nodes[0]?.id ?? ''
  for (const m of marks.value) {
    const on = L >= m.at - 1
    if (signal.on[m.id] !== on) signal.on[m.id] = on
    if (on) current = m.id
  }
  if (signal.current !== current) signal.current = current
  const s = samples.length ? at(L) : null
  const seg = s ? segs.value[s.i] : null
  const total = samples.length ? samples[samples.length - 1].s : 0
  head.value = !reduced && s && L > 2 && L < total - 2 ? s.p : null
  if (seg && s && !reduced) {
    const tl = Math.min(s.l, 18 + Math.min(speed, 60) * 3)
    trail.value = { seg: s.i, dash: `${tl} ${seg.len + tl}`, offset: -(s.l - tl) }
  } else trail.value = { seg: -1, dash: '0 1', offset: 0 }
  raf = requestAnimationFrame(tick)
}

const offsetOf = (g: Seg) => g.len - Math.max(0, Math.min(drawn.value - g.start, g.len))

let mo: MediaQueryList | null = null
const onMotion = () => { reduced = !!mo?.matches; layout() }

onMounted(() => {
  host = svg.value!.parentElement
  mo = matchMedia('(prefers-reduced-motion: reduce)')
  reduced = prefersReducedMotion()
  mo.addEventListener('change', onMotion)
  ro = new ResizeObserver(() => layout())
  ro.observe(host!)
  document.fonts?.ready.then(layout)
  layout()
  lastY = window.scrollY
  raf = requestAnimationFrame(tick)
})
onBeforeUnmount(() => { cancelAnimationFrame(raf); ro?.disconnect(); mo?.removeEventListener('change', onMotion) })
</script>

<template>
  <svg ref="svg" class="signal-trace" :width="size.w" :height="size.h" :viewBox="`0 0 ${size.w} ${size.h}`" aria-hidden="true" focusable="false">
    <!-- Le tracé prévu : le plan, en pointillés -->
    <path v-for="(g, i) in segs" :key="'p' + i" :d="g.d" class="signal-plan" />
    <!-- Le tracé réalisé : ce que le visiteur a déjà raccordé -->
    <path v-for="(g, i) in segs" :key="'d' + i" :d="g.d" class="signal-done" :style="{ strokeDasharray: `${g.len} ${g.len}`, strokeDashoffset: offsetOf(g) }" />
    <path v-if="trail.seg >= 0" :d="segs[trail.seg].d" class="signal-trail" :style="{ strokeDasharray: trail.dash, strokeDashoffset: trail.offset }" />
    <rect v-if="head" class="signal-packet" :x="head.x - 5" :y="head.y - 5" width="10" height="10" rx="1.5" />
  </svg>
</template>

<style scoped>
.signal-trace { position: absolute; left: 0; top: 0; pointer-events: none; z-index: 1; overflow: visible; }
.signal-plan { fill: none; stroke: rgb(var(--tech) / 0.28); stroke-width: 1; stroke-dasharray: 3 5; }
.signal-done { fill: none; stroke: rgb(var(--tech)); stroke-width: 2; stroke-linejoin: round; }
.signal-trail { fill: none; stroke: rgb(var(--signal-hot)); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.signal-packet { fill: rgb(var(--signal-hot)); }
</style>
