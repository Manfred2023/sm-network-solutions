<script setup lang="ts">
// En-tête des pages secondaires, dans le système « plan » : grille blueprint, un nœud et un départ de ligne
// qui se trace à l'ouverture (rappel sobre du chemin du signal de l'accueil).
defineProps<{ title: string; text?: string; eyebrow?: string }>()
</script>
<template>
  <section class="ph relative overflow-hidden border-b border-line bg-surface">
    <div class="container-site relative py-16 md:py-24">
      <div class="ph__trace" aria-hidden="true"><span class="ph__node"></span><span class="ph__line"></span></div>
      <p v-if="eyebrow" class="eyebrow mb-3 pl-8">{{ eyebrow }}</p>
      <h1 class="rise max-w-3xl text-4xl sm:text-5xl md:text-6xl">{{ title }}</h1>
      <p v-if="text" class="rise mt-5 max-w-2xl text-lg text-muted" style="animation-delay:.1s">{{ text }}</p>
    </div>
  </section>
</template>
<style scoped>
.ph { background-image: var(--bp-grid); background-size: 48px 48px; }
.ph__trace { position: absolute; left: 1rem; right: 1rem; top: calc(4rem + 0.15rem); display: flex; align-items: center; pointer-events: none; }
@media (min-width: 640px) { .ph__trace { left: 1.5rem; right: 1.5rem; } }
@media (min-width: 768px) { .ph__trace { top: calc(6rem + 0.15rem); } }
@media (min-width: 1024px) { .ph__trace { left: 2rem; right: 2rem; } }
.ph__node { width: 11px; height: 11px; flex: none; border-radius: 2px; background: rgb(var(--tech)); rotate: 45deg; }
.ph__line { height: 2px; width: 1.25rem; background: rgb(var(--tech)); transform-origin: left; animation: ph-draw 900ms var(--sc-ease-out) both 150ms; }
@keyframes ph-draw { from { transform: scaleX(0); } }
@media (prefers-reduced-motion: reduce) { .ph__line { animation: none; } }
</style>
