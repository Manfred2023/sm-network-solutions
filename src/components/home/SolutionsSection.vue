<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import ProductCard from '../common/ProductCard.vue'
import CTAButton from '../common/CTAButton.vue'
import { products } from '../../data/site'
</script>
<template>
  <section class="bg-mist py-20"><div class="mx-auto max-w-7xl px-5">
    <SectionTitle title="Nos solutions SaaS" text="Des plateformes conçues, développées et exploitées par nos équipes, au service des organisations et du grand public." />
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"><ProductCard v-for="p in products" :key="p.name" :product="p" /></div>
    <div class="mt-10"><CTAButton to="/solutions" variant="dark">Toutes nos solutions</CTAButton></div>
  </div></section>
</template>
