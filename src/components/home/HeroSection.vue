<script setup lang="ts">
import CTAButton from '../common/CTAButton.vue'
import { chain } from '../../data/site'
// Remplacer le fond par une photo (antenne, fibre, datacenter) : <img> en absolute + overlay bg-deep/70.
</script>
<template>
  <section class="relative bg-deep text-white min-h-[calc(100svh-4rem)] flex items-center overflow-hidden">
    <svg class="absolute inset-0 w-full h-full opacity-20" aria-hidden="true"><defs><pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#1E6BFF" stroke-width=".6"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
    <div class="relative mx-auto max-w-7xl px-5 py-20 w-full">
      <h1 class="rise text-5xl sm:text-6xl lg:text-8xl max-w-4xl">Construire les infrastructures technologiques de demain.</h1>
      <p class="rise mt-6 max-w-2xl text-lg text-white/75" style="animation-delay:.15s">SM NETWORK SOLUTIONS accompagne les entreprises, opérateurs et organisations dans la conception, le déploiement et la maintenance de leurs infrastructures télécom, réseaux et solutions numériques.</p>
      <div class="rise mt-8 flex flex-col sm:flex-row gap-3" style="animation-delay:.3s">
        <CTAButton to="/expertise">Découvrir nos expertises</CTAButton><CTAButton to="/contact" variant="ghost">Parler à un expert</CTAButton>
      </div>
      <svg class="mt-14 w-full max-w-3xl" viewBox="0 0 600 70" role="img" aria-label="Télécom, Infrastructure, Digital, Cloud, Sécurité">
        <line x1="30" y1="25" x2="570" y2="25" stroke="#1E6BFF" stroke-width="2" class="flow"/>
        <g v-for="(c, i) in chain" :key="c"><circle :cx="30 + i * 135" cy="25" r="7" fill="#06101F" stroke="#F2A63B" stroke-width="2"/>
          <text :x="30 + i * 135" y="58" text-anchor="middle" fill="#fff" font-size="14" font-family="Barlow">{{ c }}</text></g>
      </svg>
    </div>
  </section>
</template>
