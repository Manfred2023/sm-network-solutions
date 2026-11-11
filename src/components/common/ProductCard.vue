<script setup lang="ts">
import type { Product } from '../../data/site'
import { t, tr } from '../../i18n'
// Le bandeau respecte la charte du produit (fond + logo officiel) dans les deux thèmes ; le reste suit la charte SMNS.
defineProps<{ product: Product }>()
</script>
<template>
  <article class="card group flex flex-col overflow-hidden transition-colors hover:border-tech/60">
    <div class="relative flex h-44 items-center justify-center px-8" :style="{ backgroundColor: product.panel }">
      <img :src="product.logo" :alt="product.name" class="max-h-[70%] max-w-[75%] object-contain transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
      <span class="absolute bottom-0 left-0 h-1 w-16" :style="{ backgroundColor: product.accent }" aria-hidden="true"></span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <p class="eyebrow">{{ tr(product.category) }}</p>
      <h3 class="mt-2 text-2xl">{{ product.name }}</h3>
      <p class="mt-3 text-muted">{{ tr(product.text) }}</p>
      <div class="mt-auto pt-6">
        <a v-if="product.url" :href="product.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 font-bold hover:text-tech">
          {{ product.url.replace('https://', '') }} <span aria-hidden="true">↗</span><span class="sr-only">{{ t('a11y.newTab') }}</span>
        </a>
        <RouterLink v-else :to="`/projects#${product.slug}`" class="inline-flex items-center gap-2 font-bold hover:text-tech">{{ t('cta.more') }} <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>
  </article>
</template>
