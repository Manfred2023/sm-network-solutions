<script setup lang="ts">
import { ref } from 'vue'
import { nav, company } from '../../data/site'
const open = ref(false)
</script>
<template>
  <header class="sticky top-0 z-50 bg-navy text-white border-b border-white/10">
    <div class="mx-auto max-w-7xl flex items-center justify-between px-5 h-16">
      <RouterLink to="/" class="font-display text-xl font-bold tracking-wide" @click="open = false">{{ company.name }}</RouterLink>
      <nav class="hidden lg:flex gap-7 text-sm">
        <RouterLink v-for="n in nav" :key="n.to + n.label" :to="n.to" class="text-white/75 hover:text-white" active-class="!text-white">{{ n.label }}</RouterLink>
      </nav>
      <RouterLink to="/contact" class="hidden lg:block bg-tech px-5 py-2 text-sm font-semibold hover:bg-blue-600">Demander un devis</RouterLink>
      <button class="lg:hidden p-2" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path v-if="!open" d="M3 6h18M3 12h18M3 18h18" /><path v-else d="M5 5l14 14M19 5L5 19" /></svg>
      </button>
    </div>
    <div v-if="open" class="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-deep px-5 py-8 flex flex-col gap-5 overflow-y-auto">
      <RouterLink v-for="n in nav" :key="n.to + n.label" :to="n.to" class="font-display text-3xl" @click="open = false">{{ n.label }}</RouterLink>
      <RouterLink to="/contact" class="mt-4 bg-tech text-center py-4 font-semibold" @click="open = false">Demander un devis</RouterLink>
    </div>
  </header>
</template>
