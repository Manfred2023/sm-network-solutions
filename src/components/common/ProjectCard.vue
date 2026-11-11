<script setup lang="ts">
// Fiche détaillée d'un projet réalisé (page Réalisations), en alternance gauche/droite.
import type { Product } from '../../data/site'
import { t, tr } from '../../i18n'
defineProps<{ product: Product; reverse?: boolean }>()
</script>
<template>
  <article :id="product.slug" class="card grid scroll-mt-24 overflow-hidden lg:grid-cols-2">
    <div class="relative flex min-h-60 items-center justify-center p-10 lg:min-h-80" :class="reverse ? 'lg:order-2' : ''" :style="{ backgroundColor: product.panel }">
      <img :src="product.logo" :alt="product.name" class="max-h-28 max-w-[70%] object-contain lg:max-h-36" loading="lazy" />
      <span class="absolute bottom-0 left-0 h-1.5 w-24" :style="{ backgroundColor: product.accent }" aria-hidden="true"></span>
    </div>
    <div class="flex flex-col p-6 sm:p-10">
      <p class="eyebrow">{{ tr(product.category) }}</p>
      <h2 class="mt-2 text-3xl sm:text-4xl">{{ product.name }}</h2>
      <p v-if="product.tagline" class="mt-2 font-semibold text-ink/80">{{ tr(product.tagline) }}</p>
      <p class="mt-4 text-lg text-muted">{{ tr(product.text) }}</p>
      <p class="mt-6 text-sm font-bold">{{ t('page.projects.features') }}</p>
      <ul class="mt-3 grid gap-2 text-muted sm:grid-cols-2">
        <li v-for="f in tr(product.features)" :key="f" class="flex gap-2.5">
          <svg class="mt-1 h-4 w-4 shrink-0 text-tech" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>{{ f }}
        </li>
      </ul>
      <div class="mt-auto pt-8">
        <a v-if="product.url" :href="product.url" target="_blank" rel="noopener" class="inline-flex h-11 items-center gap-2 rounded-lg border border-ink/25 px-5 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-bg">
          {{ product.url.replace('https://', '') }} <span aria-hidden="true">↗</span><span class="sr-only">{{ t('a11y.newTab') }}</span>
        </a>
        <RouterLink v-else to="/contact" class="inline-flex h-11 items-center gap-2 rounded-lg border border-ink/25 px-5 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-bg">
          {{ t('cta.demo') }} <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </article>
</template>
