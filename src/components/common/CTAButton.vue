<script setup lang="ts">
// primary : bouton plein · outline : contour selon le thème · ghost : contour clair sur bande sombre
withDefaults(defineProps<{ to: string; variant?: 'primary' | 'outline' | 'ghost' }>(), { variant: 'primary' })
</script>
<template>
  <RouterLink :to="to" class="group inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-colors"
    :class="{
      'bg-brand text-white hover:bg-brand-hover': variant === 'primary',
      'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-bg': variant === 'outline',
      'border border-white/30 text-white hover:bg-white/10': variant === 'ghost',
    }">
    <slot />
    <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
  </RouterLink>
</template>
