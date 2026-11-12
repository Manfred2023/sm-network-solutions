<script setup lang="ts">
defineProps<{ title: string; items: string[] }>()
</script>
<template>
  <article class="card h-full p-6 transition-colors hover:border-tech/60">
    <span class="block h-1 w-10 rounded-full bg-tech" aria-hidden="true"></span>
    <h3 class="mt-5 text-xl">{{ title }}</h3>
    <ul class="mt-4 space-y-2 text-sm text-muted">
      <li v-for="i in items" :key="i" class="flex gap-2.5"><span class="mt-[0.55rem] h-px w-3 shrink-0 bg-tech" aria-hidden="true"></span>{{ i }}</li>
    </ul>
  </article>
</template>
