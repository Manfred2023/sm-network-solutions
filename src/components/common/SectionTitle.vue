<script setup lang="ts">
defineProps<{ title: string; text?: string; eyebrow?: string; dark?: boolean }>()
</script>
<template>
  <div class="mb-10 max-w-2xl md:mb-14">
    <p v-if="eyebrow" class="eyebrow mb-3" :class="dark ? '!text-[#8FB3FF]' : ''">{{ eyebrow }}</p>
    <h2 class="text-3xl sm:text-4xl md:text-5xl" :class="dark ? 'text-white' : 'text-ink'">{{ title }}</h2>
    <p v-if="text" class="mt-4 text-lg leading-relaxed" :class="dark ? 'text-white/70' : 'text-muted'">{{ text }}</p>
  </div>
</template>
