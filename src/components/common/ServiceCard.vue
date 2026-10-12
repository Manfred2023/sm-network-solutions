<script setup lang="ts">defineProps<{ title: string; text: string }>();</script>
<template>
  <article class="p-6 border-l-2 border-tech bg-mist">
    <h3 class="text-2xl">{{ title }}</h3>
    <p class="mt-2 text-navy/70">{{ text }}</p>
  </article>
</template>
