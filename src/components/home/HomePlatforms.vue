<script setup lang="ts">
// LE PIC. Seul acte épinglé de la page, plus grand span. Le signal descend dans un écran ;
// une à une, les six plateformes s'allument dans leurs vraies couleurs : le seul moment en couleur du site.
// Tout est piloté en CSS par --sc-p (publié par le moteur sur l'acte) : chaque tuile a son seuil --t0.
// Mouvement réduit : pas d'épinglage, tout est allumé d'emblée.
import NodeMark from '../signal/NodeMark.vue'
import { products } from '../../data/site'
import { t, tr } from '../../i18n'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { prefersReducedMotion } from '../../composables/useScrollCraft'
const reduced = prefersReducedMotion()

// État visible publié pour le banc de vérification scroll-craft (data-sc-verify-state) :
// signal descendu, bus tracé, tuiles allumées. Après 0,78 c'est un maintien voulu (tout est allumé).
const act = ref<HTMLElement | null>(null)
const vstate = ref('')
const vhold = ref(false)
let raf = 0
function watchP() {
  const p = parseFloat(act.value?.style.getPropertyValue('--sc-p') || '0') || 0
  const lit = products.map((_, i) => Math.round(Math.min(1, Math.max(0, (p - (0.16 + i * 0.095)) * 9)) * 4)).join('')
  const s = `feed${Math.round(Math.min(1, p * 8) * 4)} bus${Math.round(Math.min(1, Math.max(0, (p - 0.1) * 12)) * 4)} lit${lit}`
  if (s !== vstate.value) vstate.value = s
  vhold.value = reduced || p > 0.78
  raf = requestAnimationFrame(watchP)
}
onMounted(() => { raf = requestAnimationFrame(watchP) })
onBeforeUnmount(() => cancelAnimationFrame(raf))
const span = typeof innerWidth !== 'undefined' && innerWidth < 768 ? '2.4' : '3'
</script>
<template>
  <section ref="act" id="node-platforms" class="peak" :data-sc-act="reduced ? undefined : 'pin'" :data-sc-span="reduced ? undefined : span" :class="{ 'peak--static': reduced }">
    <div class="peak__mark container-site"><NodeMark id="platforms" :label="t('route.platforms')" brk class="node-at" /></div>
    <div class="peak__stage" :class="reduced ? '' : 'sc-stage'" :data-sc-stage="reduced ? undefined : ''" :data-sc-verify-state="vstate" :data-sc-verify-hold="vhold ? 'true' : 'false'">
      <div class="peak__feed" aria-hidden="true"></div>
      <div class="container-site peak__inner">
        <div class="peak__copy">
          <h2 class="text-3xl sm:text-4xl md:text-5xl">{{ t('projects.title') }}</h2>
          <p class="peak__text">{{ t('projects.text') }}</p>
          <div class="peak__cta" :data-sc-cue="reduced ? undefined : '0.7'">
            <RouterLink to="/projects" class="btn btn--primary">{{ t('cta.allProjects') }}</RouterLink>
          </div>
        </div>
        <div class="peak__screen">
          <div class="peak__bus" aria-hidden="true"></div>
          <ul class="peak__grid">
            <li v-for="(p, i) in products" :key="p.slug" class="tile" :style="{ '--t0': (0.16 + i * 0.095).toFixed(3) }">
              <RouterLink :to="`/projects#${p.slug}`" class="tile__link">
                <span class="tile__panel">
                  <span class="tile__plan" aria-hidden="true"></span>
                  <span class="tile__lit" :style="{ backgroundColor: p.panel }">
                    <img :src="p.logo" :alt="p.name" loading="lazy" decoding="async" />
                    <span class="tile__accent" :style="{ backgroundColor: p.accent }"></span>
                  </span>
                </span>
                <span class="tile__name">{{ p.name }}</span>
                <span class="tile__cat">{{ tr(p.category) }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.peak { position: relative; background: rgb(var(--bg)); }
.peak__mark { position: absolute; inset: 0 0 auto 0; top: 4.75rem; z-index: 4; height: 0; }
.peak__stage { display: flex; align-items: center; background-image: var(--bp-grid); background-size: 48px 48px; }
.sc-stage.peak__stage { height: 100svh; }
.peak__inner { display: grid; gap: 2.5rem; align-items: center; padding-block: 5rem 3rem; }
@media (min-width: 1024px) { .peak__inner { grid-template-columns: minmax(0, 4fr) minmax(0, 8fr); gap: 4rem; } }
.peak__text { margin-top: 1rem; max-width: 34ch; color: rgb(var(--muted)); font-size: 1.0625rem; }
.peak__cta { margin-top: 2rem; }

/* le signal qui descend dans l'écran */
.peak__feed {
  position: absolute; top: 0; height: 22%; width: 2px; left: calc(50% + 10vw); background: rgb(var(--tech));
  transform-origin: top; transform: scaleY(clamp(0, calc(var(--sc-p, 0) * 8), 1));
}
.peak__screen {
  position: relative; border: 1.5px solid rgb(var(--tech) / 0.6); border-radius: 18px; padding: 2.25rem 1.5rem 1.5rem;
  background: rgb(var(--bg) / 0.86);
}
.peak__screen::after { /* pied d'écran */
  content: ''; position: absolute; left: 50%; bottom: -1.5rem; width: 22%; height: 1.5rem; translate: -50% 0;
  border: 1.5px solid rgb(var(--tech) / 0.6); border-top: 0; border-radius: 0 0 6px 6px;
}
.peak__bus {
  position: absolute; left: 1.5rem; right: 1.5rem; top: 1rem; height: 2px; background: rgb(var(--tech));
  transform-origin: center; transform: scaleX(clamp(0, calc((var(--sc-p, 0) - 0.1) * 12), 1));
}
.peak__grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem 1.25rem; }

.tile { --lit: clamp(0, calc((var(--sc-p, 0) - var(--t0)) * 9), 1); }
.tile__link { display: block; border-radius: 12px; }
.tile__panel { position: relative; display: block; aspect-ratio: 16 / 10; border-radius: 10px; overflow: hidden; }
.tile__plan {
  position: absolute; inset: 0; border: 1.5px dashed rgb(var(--tech) / 0.45); border-radius: 10px;
  opacity: calc(1 - var(--lit));
}
.tile__lit {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  opacity: var(--lit); clip-path: circle(calc(var(--lit) * 120%) at 50% 0%);
}
.tile__lit img { max-width: 70%; max-height: 52%; object-fit: contain; transform: scale(calc(0.94 + var(--lit) * 0.06)); }
.tile__accent { position: absolute; left: 0; bottom: 0; height: 4px; width: 32%; }
.tile__name { display: block; margin-top: 0.75rem; font-weight: 800; letter-spacing: -0.01em; }
.tile__cat { display: block; font-size: 0.8125rem; color: rgb(var(--muted)); }
@media (hover: hover) and (pointer: fine) {
  .tile__link:hover .tile__name { color: rgb(var(--tech)); }
}
.tile__link:active { transform: translateY(1px); }

@media (max-width: 1023px) {
  .peak__feed { left: 50%; height: 9%; }
  .peak__inner { padding-block: 4.5rem 2rem; gap: 1.5rem; }
  .peak__cta { margin-top: 1rem; }
}
@media (max-width: 767px) {
  .peak__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.875rem 0.75rem; }
  .peak__screen { padding: 1.75rem 0.875rem 0.875rem; border-radius: 22px; }
  .peak__screen::after { display: none; }
  .peak__bus { left: 0.875rem; right: 0.875rem; top: 0.75rem; }
  .peak__text { font-size: 0.9375rem; }
  .tile__panel { aspect-ratio: 16 / 9; }
  .tile__name { margin-top: 0.4rem; font-size: 0.9375rem; }
  .tile__cat { font-size: 0.75rem; }
}
@media (max-width: 767px) and (max-height: 720px) {
  .peak__text { display: none; }
  .tile__panel { aspect-ratio: 2 / 1; }
}
.peak--static .tile { --lit: 1; }
.peak--static .peak__feed, .peak--static .peak__bus { transform: none; }
.peak--static .peak__inner { padding-block: 6rem; }
</style>
