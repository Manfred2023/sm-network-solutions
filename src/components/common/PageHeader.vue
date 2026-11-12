<script setup lang="ts">
defineProps<{ title: string; text?: string; eyebrow?: string }>()
</script>
<template>
  <section class="relative overflow-hidden border-b border-line bg-surface">
    <svg class="pointer-events-none absolute inset-0 h-full w-full text-tech opacity-[0.12]" aria-hidden="true">
      <defs><pattern id="ph-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="currentColor" stroke-width=".7" /></pattern></defs>
      <rect width="100%" height="100%" fill="url(#ph-grid)" />
    </svg>
    <div class="container-site relative py-16 md:py-24">
      <p v-if="eyebrow" class="eyebrow mb-3">{{ eyebrow }}</p>
      <h1 class="rise max-w-3xl text-4xl sm:text-5xl md:text-6xl">{{ title }}</h1>
      <p v-if="text" class="rise mt-5 max-w-2xl text-lg text-muted" style="animation-delay:.1s">{{ text }}</p>
    </div>
  </section>
</template>
