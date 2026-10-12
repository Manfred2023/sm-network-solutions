<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import CTAButton from '../common/CTAButton.vue'
</script>
<template>
  <section class="py-20"><div class="mx-auto max-w-7xl px-5 grid gap-10 lg:grid-cols-2">
    <div><SectionTitle title="Une société d’ingénierie technologique" />
      <p class="text-lg text-navy/75">SM NETWORK SOLUTIONS est spécialisée dans les télécommunications, les infrastructures de communications électroniques, les réseaux informatiques et les solutions numériques.</p>
      <p class="mt-4 text-navy/75">Nous combinons ingénierie terrain, expertise technologique et solutions digitales pour concevoir, déployer, intégrer, maintenir et faire évoluer vos infrastructures.</p>
      <div class="mt-6"><CTAButton to="/about" variant="dark">En savoir plus</CTAButton></div></div>
    <dl class="grid grid-cols-2 gap-px bg-line self-start">
      <div v-for="t in ['Douala, Cameroun', 'Télécommunications', 'Infrastructures', 'Solutions numériques', 'Ingénierie & assistance technique']" :key="t" class="bg-white p-5 font-display text-2xl">{{ t }}</div>
    </dl>
  </div></section>
</template>
