<script setup lang="ts">
// Hero en plans indépendants (du plus loin au plus près) :
//   1. plaque photo : Douala au crépuscule depuis le Wouri  (déplacement le plus faible)
//   2. ondes radio : atmosphère, animée en boucle tant que le hero est visible
//   3. titre et actions (HTML), entre la photo et le pylône
//   4. pylône dessiné : plan médian, se trace au chargement
//   5. sol en coupe (tranchée + fourreaux) : premier plan, le plus rapide ; il masque le pied du pylône
//      pour que le point de contact ne flotte jamais.
// Le scroll pilote --hp (0 → 1 sur la hauteur du hero) ; chaque plan en tire sa propre vitesse.
import { onBeforeUnmount, onMounted, ref } from 'vue'
import TowerDrawing from '../drawings/TowerDrawing.vue'
import NodeMark from '../signal/NodeMark.vue'
import { t } from '../../i18n'
import { vPlan } from '../../composables/plan'

const hero = ref<HTMLElement | null>(null)
const ready = ref(false)
const visible = ref(true)
let raf = 0
let io: IntersectionObserver | null = null

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const el = hero.value
    if (!el) return
    const p = Math.min(1, Math.max(0, window.scrollY / el.offsetHeight))
    el.style.setProperty('--hp', p.toFixed(4))
  })
}
onMounted(() => {
  const img = hero.value?.querySelector('img')
  const go = () => requestAnimationFrame(() => (ready.value = true))
  if (img && !img.complete) { img.addEventListener('load', go, { once: true }); img.addEventListener('error', go, { once: true }) } else go()
  io = new IntersectionObserver(([e]) => (visible.value = e.isIntersecting))
  if (hero.value) io.observe(hero.value)
  addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => { removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); io?.disconnect() })
</script>

<template>
  <section ref="hero" id="node-douala" class="hero" :class="{ 'is-ready': ready, 'is-paused': !visible }">
    <!-- 1. plaque photo -->
    <picture class="hero__plate">
      <source media="(max-width: 767px)" srcset="/scene/douala-m.jpg" />
      <source media="(max-width: 1599px)" srcset="/scene/douala-1440.jpg" />
      <img src="/scene/douala-2400.jpg" alt="" width="2400" height="1350" fetchpriority="high" decoding="async" />
    </picture>
    <!-- 3. titre -->
    <div class="hero__copy container-site">
      <p class="hero__eyebrow">{{ t('hero.eyebrow') }}</p>
      <h1 class="hero__title">{{ t('hero.title') }}</h1>
      <div class="hero__actions">
        <RouterLink to="/contact" class="btn btn--primary">{{ t('cta.quote') }}</RouterLink>
        <RouterLink to="/expertise" class="btn btn--ghost">{{ t('cta.discover') }}</RouterLink>
      </div>
    </div>
    <!-- 4. pylône -->
    <div class="hero__tower" :class="{ 'sc-in': ready }">
      <!-- 2. ondes radio (atmosphère), centrées sur les panneaux, à leur propre vitesse -->
      <div class="hero__waves" aria-hidden="true">
        <span v-for="i in 4" :key="i" :style="{ animationDelay: `${(i - 1) * 0.9}s` }"></span>
      </div>
      <TowerDrawing />
    </div>
    <!-- 5. sol en coupe -->
    <div class="hero__ground" aria-hidden="true">
      <svg v-plan class="plan" :class="{ 'sc-in': ready }" viewBox="0 0 1600 120" preserveAspectRatio="xMidYMin slice" fill="none">
        <path d="M0 18 H1600" />
        <path class="dim" d="M0 40 H1600 M0 64 H1600" />
        <path d="M120 18 V96 H200 V18" /><circle cx="140" cy="78" r="8" /><circle cx="160" cy="78" r="8" class="plan-accent-stroke" /><circle cx="180" cy="78" r="8" />
      </svg>
    </div>
    <span class="hero__node"><NodeMark id="douala" /></span>
  </section>
</template>

<style scoped>
.hero {
  --hp: 0;
  position: relative; overflow: clip; isolation: isolate;
  height: calc(100svh - 4rem); min-height: 36rem; max-height: 62rem;
  background: #0B1530; color: #fff;
}
.hero__plate img {
  position: absolute; inset: -4% 0 auto 0; width: 100%; height: 108%; object-fit: cover; object-position: 50% 78%;
  transform: translate3d(0, calc(var(--hp) * 6%), 0) scale(calc(1.06 - var(--hp) * 0.04));
  opacity: 0; transition: opacity 700ms var(--sc-ease-out);
}
.is-ready .hero__plate img { opacity: 1; }

/* atmosphère : ondes depuis les panneaux du pylône */
.hero__waves {
  position: absolute; z-index: -1; pointer-events: none;
  left: 50%; top: 11%; width: 0; height: 0;
  transform: translate3d(0, calc(var(--hp) * -7vh), 0);
}
.hero__waves span {
  position: absolute; left: -11rem; top: -11rem; width: 22rem; height: 22rem; border-radius: 50%;
  border: 1.5px solid rgb(143 179 255 / 0.75);
  opacity: 0; transform: scale(0.2);
  animation: wave 3.6s var(--sc-ease-out) infinite;
}
.is-paused .hero__waves span { animation-play-state: paused; }
@keyframes wave { 0% { opacity: 0; transform: scale(0.2); } 15% { opacity: 0.8; } 100% { opacity: 0; transform: scale(1.6); } }

/* titre : entre la photo et le pylône */
.hero__copy {
  position: relative; z-index: 2; padding-top: clamp(3rem, 13vh, 8.5rem);
  transform: translate3d(0, calc(var(--hp) * -22vh), 0);
  opacity: calc(1 - var(--hp) * 1.4);
}
.hero__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #8FB3FF; }
.hero__title {
  margin-top: 1.25rem; max-width: 15ch; font-size: clamp(2.4rem, 1.2rem + 4.6vw, 5.4rem);
  line-height: 1.02; letter-spacing: -0.035em; color: #fff;
}
.hero__actions { margin-top: 2.25rem; display: flex; flex-wrap: wrap; gap: 0.75rem; }

/* pylône : plan médian */
.hero__tower {
  position: absolute; z-index: 3; right: 9%; bottom: 7%; height: 86%; aspect-ratio: 240 / 620;
  color: rgb(143 179 255 / 0.9);
  transform: translate3d(0, calc(var(--hp) * -9vh), 0);
}
.hero__tower :deep(svg) { width: 100%; height: 100%; }
.hero__tower :deep(.tower-light) { fill: #246BFD; }
.hero__tower :deep(.tower-cable) { stroke: #246BFD; stroke-width: 1.5; }

/* premier plan : sol en coupe */
.hero__ground {
  position: absolute; z-index: 4; left: 0; right: 0; bottom: 0; height: 13%; min-height: 4.5rem;
  background: linear-gradient(to bottom, rgb(6 11 26 / 0.92), #060B1A 40%);
  color: rgb(143 179 255 / 0.55);
  transform: translate3d(0, calc(var(--hp) * -20vh), 0);
}
.hero__ground::after { content: ''; position: absolute; left: 0; right: 0; bottom: -20vh; height: 20vh; background: #060B1A; }
.hero__ground svg { width: 100%; height: 100%; }
.hero__node { position: absolute; z-index: 5; bottom: 1.25rem; left: 1rem; }
@media (min-width: 640px) { .hero__node { left: 1.5rem; } }
@media (min-width: 1024px) { .hero__node { left: calc(max(0px, (100% - 80rem) / 2) + 2rem); } }

@media (max-width: 767px) {
  .hero { height: calc(100svh - 4rem); min-height: 34rem; }
  .hero__plate img { object-position: 50% 100%; }
  .hero__copy { padding-top: 2.25rem; }
  .hero__title { font-size: clamp(2.1rem, 9.4vw, 2.75rem); max-width: 13ch; }
  .hero__actions { flex-direction: column; align-items: flex-start; }
  .hero__tower { right: 3%; bottom: 9%; height: 46%; }
  .hero__waves span { left: -7rem; top: -7rem; width: 14rem; height: 14rem; }
  .hero__ground { height: 11%; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__plate img, .hero__copy, .hero__tower, .hero__waves, .hero__ground { transform: none; }
  .hero__copy { opacity: 1; }
  .hero__waves span { animation: none; opacity: 0.35; }
  .hero__waves span:nth-child(1) { transform: scale(0.45); }
  .hero__waves span:nth-child(2) { transform: scale(0.8); }
  .hero__waves span:nth-child(3) { transform: scale(1.15); }
  .hero__waves span:nth-child(4) { display: none; }
}
</style>
