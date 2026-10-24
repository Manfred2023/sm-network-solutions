<script setup lang="ts">
import type { Product } from '../../data/site'
// Le bandeau respecte la charte du produit (fond + logo officiel) ; le reste de la carte suit la charte SM Network Solutions.
defineProps<{ product: Product }>()
</script>
<template>
  <article class="flex flex-col border border-line bg-white">
    <div class="relative h-44 flex items-center justify-center px-8" :style="{ backgroundColor: product.panel }">
      <img :src="product.logo" :alt="product.name" class="max-h-full max-w-[70%] object-contain" loading="lazy" />
      <span class="absolute bottom-0 left-0 h-1 w-16" :style="{ backgroundColor: product.accent }" aria-hidden="true"></span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <p class="text-xs font-bold uppercase tracking-[0.18em] text-tech">{{ product.category }}</p>
      <h3 class="mt-2 text-2xl">{{ product.name }}</h3>
      <p class="mt-3 text-navy/70">{{ product.text }}</p>
      <ul class="mt-4 space-y-1.5 text-sm text-navy/75">
        <li v-for="f in product.features" :key="f" class="flex gap-2"><span class="mt-[0.45rem] h-1.5 w-1.5 bg-tech shrink-0"></span>{{ f }}</li>
      </ul>
      <div class="mt-auto pt-6">
        <a v-if="product.url" :href="product.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 font-bold text-navy hover:text-tech">
          {{ product.url.replace('https://', '') }} <span aria-hidden="true">↗</span><span class="sr-only">(nouvel onglet)</span>
        </a>
        <RouterLink v-else to="/contact" class="inline-flex items-center gap-2 font-bold text-navy hover:text-tech">Demander une démo <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>
  </article>
</template>
