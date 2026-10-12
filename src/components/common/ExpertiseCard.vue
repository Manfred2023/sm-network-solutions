<script setup lang="ts">defineProps<{ title: string; items: string[] }>()</script>
<template>
  <article class="border border-line bg-white p-6 border-t-2 border-t-tech">
    <h3 class="text-2xl">{{ title }}</h3>
    <ul class="mt-4 space-y-1.5 text-sm text-navy/75">
      <li v-for="i in items" :key="i" class="flex gap-2"><span class="mt-2 h-px w-3 bg-tech shrink-0"></span>{{ i }}</li>
    </ul>
  </article>
</template>
