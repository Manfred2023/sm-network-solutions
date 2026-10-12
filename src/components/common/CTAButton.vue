<script setup lang="ts">
withDefaults(defineProps<{ to: string; variant?: 'primary' | 'ghost' | 'dark' }>(), { variant: 'primary' })
</script>
<template>
  <RouterLink :to="to" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-colors"
    :class="{ 'bg-tech text-white hover:bg-blue-600': variant === 'primary', 'border border-white/40 text-white hover:bg-white/10': variant === 'ghost', 'border border-navy text-navy hover:bg-navy hover:text-white': variant === 'dark' }">
    <slot />
  </RouterLink>
</template>
