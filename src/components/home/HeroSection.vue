<script setup lang="ts">
import CTAButton from '../common/CTAButton.vue'
import { chain } from '../../data/site'
import { t, tr } from '../../i18n'
// Schéma réseau : un nœud central relié aux 5 maillons de la chaîne technique.
const nodes = chain.map((label, i) => {
  const a = ((-90 + i * 72) * Math.PI) / 180
  return { label, x: 200 + 135 * Math.cos(a), y: 200 + 135 * Math.sin(a) }
})
</script>
<template>
  <section class="relative overflow-hidden border-b border-line">
    <svg class="pointer-events-none absolute inset-0 h-full w-full text-tech opacity-[0.14]" aria-hidden="true">
      <defs><pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="currentColor" stroke-width=".6" /></pattern></defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
    <div class="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-tech/20 blur-3xl" aria-hidden="true"></div>

    <div class="container-site relative grid items-center gap-12 py-16 md:py-24 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p class="rise eyebrow">{{ t('hero.eyebrow') }}</p>
        <h1 class="rise mt-5 text-4xl sm:text-6xl xl:text-7xl" style="animation-delay:.05s">{{ t('hero.title') }}</h1>
        <p class="rise mt-6 max-w-xl text-lg text-muted" style="animation-delay:.15s">{{ t('hero.text') }}</p>
        <div class="rise mt-9 flex flex-col gap-3 sm:flex-row" style="animation-delay:.3s">
          <CTAButton to="/expertise">{{ t('cta.discover') }}</CTAButton>
          <CTAButton to="/contact" variant="outline">{{ t('cta.expert') }}</CTAButton>
        </div>
      </div>

      <svg class="rise mx-auto w-full max-w-md text-ink" style="animation-delay:.2s" viewBox="0 0 400 400" role="img" :aria-label="chain.map(tr).join(', ')">
        <circle cx="200" cy="200" r="135" fill="none" stroke="currentColor" stroke-opacity=".12" />
        <circle cx="200" cy="200" r="70" fill="none" stroke="currentColor" stroke-opacity=".08" />
        <line v-for="n in nodes" :key="'l' + n.label.fr" x1="200" y1="200" :x2="n.x" :y2="n.y" class="flow text-tech" stroke="currentColor" stroke-width="1.5" />
        <g v-for="(n, i) in nodes" :key="n.label.fr">
          <circle :cx="n.x" :cy="n.y" r="22" class="pulse-node text-tech" fill="currentColor" fill-opacity=".15" :style="{ animationDelay: `${i * 0.4}s` }" />
          <circle :cx="n.x" :cy="n.y" r="7" class="text-tech" fill="currentColor" />
          <text :x="n.x" :y="n.y + (n.y > 200 ? 42 : -32)" text-anchor="middle" fill="currentColor" font-size="15" font-weight="700" font-family="Manrope">{{ tr(n.label) }}</text>
        </g>
        <rect x="168" y="168" width="64" height="64" rx="16" fill="#0B1530" class="dark:stroke-tech" stroke-width="1.5" />
        <image href="/assets/SM-Network-Solutions_Identite-visuelle/03_Symbole/SVG/SMNS_symbole_inverse_transparent.svg" x="178" y="178" width="44" height="44" />
      </svg>
    </div>
  </section>
</template>
