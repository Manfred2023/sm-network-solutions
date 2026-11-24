<script setup lang="ts">
// Les quatre planches du « terrain » : radio (vue de dessus, secteurs), transmission (liaison hertzienne),
// fibre (coupe de câble), génie civil (coupe de tranchée + massif de fondation)
// et génie logiciel (schéma d'architecture : client → API → base de données / services).
import { vPlan } from '../../composables/plan'
defineProps<{ kind: 'radio' | 'transmission' | 'fibre' | 'civil' | 'software' }>()
const lobe = (deg: number) => {
  const r = (deg * Math.PI) / 180
  const p = (a: number, d: number) => `${(200 + d * Math.cos(r + a)).toFixed(1)} ${(125 + d * Math.sin(r + a)).toFixed(1)}`
  return `M200 125 C${p(-0.55, 70)} ${p(-0.42, 118)} ${p(0, 112)} C${p(0.42, 118)} ${p(0.55, 70)} 200 125`
}
const tubes = Array.from({ length: 6 }, (_, i) => {
  const a = (i / 6) * Math.PI * 2 - Math.PI / 2
  return { x: 200 + 46 * Math.cos(a), y: 125 + 46 * Math.sin(a) }
})
const hatch = Array.from({ length: 18 }, (_, i) => `M${10 + i * 22} 52 l-10 10`).join(' ')
</script>
<template>
  <svg v-plan class="plan plan-draw" viewBox="0 0 400 250" fill="none" aria-hidden="true" focusable="false">
    <template v-if="kind === 'radio'">
      <circle class="dim" cx="200" cy="125" r="40" /><circle class="dim" cx="200" cy="125" r="80" /><circle class="dim" cx="200" cy="125" r="118" />
      <path class="dim" d="M200 5 V245 M80 125 H320" />
      <path :d="lobe(-90)" /><path :d="lobe(30)" /><path :d="lobe(150)" />
      <rect x="194" y="119" width="12" height="12" rx="1.5" class="fill plan-accent" />
    </template>
    <template v-else-if="kind === 'transmission'">
      <path d="M10 220 L60 204 L110 212 L160 188 L210 200 L260 178 L310 196 L360 186 L390 194" />
      <path d="M60 204 V70 M50 204 L60 70 L70 204" /><ellipse cx="72" cy="80" rx="5" ry="15" />
      <path d="M340 189 V60 M330 189 L340 60 L350 189" /><ellipse cx="328" cy="70" rx="5" ry="15" />
      <path d="M77 80 L323 70" class="plan-accent-stroke" />
      <ellipse class="dim" cx="200" cy="75" rx="124" ry="22" transform="rotate(-2.3 200 75)" />
    </template>
    <template v-else-if="kind === 'fibre'">
      <circle cx="200" cy="125" r="104" /><circle cx="200" cy="125" r="96" /><circle cx="200" cy="125" r="78" />
      <circle cx="200" cy="125" r="11" />
      <g v-for="(t, i) in tubes" :key="i">
        <circle :cx="t.x" :cy="t.y" r="19" />
        <circle :cx="t.x - 6" :cy="t.y - 5" r="3" :class="i === 0 ? 'fill plan-accent' : ''" />
        <circle :cx="t.x + 6" :cy="t.y - 5" r="3" /><circle :cx="t.x - 6" :cy="t.y + 6" r="3" /><circle :cx="t.x + 6" :cy="t.y + 6" r="3" />
      </g>
      <path class="dim" d="M304 125 H360 M200 21 V8" />
    </template>
    <template v-else-if="kind === 'software'">
      <rect class="dim" x="270" y="22" width="120" height="206" rx="4" />
      <rect x="18" y="40" width="114" height="160" rx="4" /><path d="M18 60 H132" />
      <circle cx="30" cy="50" r="2.5" /><circle cx="40" cy="50" r="2.5" /><circle cx="50" cy="50" r="2.5" />
      <path d="M32 78 H82 M44 94 H108 M44 110 H94 M56 126 H116 M44 142 H88 M32 158 H70" />
      <path class="dim" d="M32 174 H118" />
      <path d="M132 120 H168" class="plan-accent-stroke" />
      <rect x="168" y="96" width="64" height="48" rx="3" />
      <path d="M190 108 q-6 0 -6 6 v2 q0 4 -4 4 q4 0 4 4 v2 q0 6 6 6 M210 108 q6 0 6 6 v2 q0 4 4 4 q-4 0 -4 4 v2 q0 6 -6 6" />
      <rect x="196" y="116" width="8" height="8" rx="1" class="fill plan-accent" />
      <path d="M232 110 H252 L262 100 V78 L272 68 H290 M232 130 H252 L262 140 V166 L272 176 H290" />
      <ellipse cx="330" cy="58" rx="40" ry="10" /><path d="M290 58 V100 M370 58 V100 M290 100 A40 10 0 0 0 370 100" />
      <path class="dim" d="M290 79 A40 10 0 0 0 370 79" />
      <rect x="290" y="150" width="80" height="54" rx="3" /><path class="dim" d="M290 168 H370 M290 186 H370 M316 150 V204 M344 150 V204" />
    </template>
    <template v-else>
      <path d="M0 52 H90 L118 226 H222 L250 52 H400" />
      <path class="dim" :d="hatch" />
      <path d="M116 200 H224" /><path class="dim" d="M108 150 H232" />
      <circle cx="146" cy="214" r="10" /><circle cx="170" cy="214" r="10" class="plan-accent-stroke" /><circle cx="194" cy="214" r="10" />
      <path d="M296 52 V18 M312 52 V18 M328 52 V18" />
      <rect x="282" y="52" width="92" height="120" /><path d="M270 172 H386 V200 H270 Z" />
      <path class="dim" d="M290 70 V190 M366 70 V190" />
    </template>
  </svg>
</template>
