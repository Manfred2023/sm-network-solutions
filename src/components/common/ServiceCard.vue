<script setup lang="ts">
defineProps<{ title: string; text: string; index: number }>()
</script>
<template>
  <article class="card group relative p-6 transition-colors hover:border-tech/60">
    <span class="font-display text-sm font-extrabold text-tech">{{ String(index + 1).padStart(2, '0') }}</span>
    <h3 class="mt-3 text-2xl">{{ title }}</h3>
    <p class="mt-2 text-muted">{{ text }}</p>
    <span class="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 bg-tech transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true"></span>
  </article>
</template>
