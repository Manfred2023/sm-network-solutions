<script setup lang="ts">defineProps<{ title: string; text?: string; dark?: boolean }>();</script>
<template>
  <div class="max-w-2xl mb-10 md:mb-14">
    <h2 class="text-4xl md:text-5xl" :class="dark ? 'text-white' : 'text-navy'">{{ title }}</h2>
    <p v-if="text" class="mt-4 text-lg leading-relaxed" :class="dark ? 'text-white/70' : 'text-navy/70'">{{ text }}</p>
  </div>
</template>
