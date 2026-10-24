<script setup lang="ts">
import SectionTitle from '../components/common/SectionTitle.vue'
import ProductCard from '../components/common/ProductCard.vue'
import CTAButton from '../components/common/CTAButton.vue'
import { products } from '../data/site'
</script>
<template><section class="mx-auto max-w-7xl px-5 py-20">
  <SectionTitle title="Solutions SaaS" text="Vote en ligne, collecte de fonds, billetterie : les plateformes éditées par SM Network Solutions." />
  <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"><ProductCard v-for="p in products" :key="p.name" :product="p" /></div>
  <div class="mt-14 border-l-2 border-tech bg-mist p-6 md:flex md:items-center md:justify-between md:gap-6">
    <p class="text-lg">Besoin d’une plateforme sur mesure ? Nous développons aussi des solutions SaaS pour votre organisation.</p>
    <div class="mt-4 md:mt-0 shrink-0"><CTAButton to="/contact">Parler de votre projet</CTAButton></div>
  </div>
</section></template>
