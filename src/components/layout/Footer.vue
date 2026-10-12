<script setup lang="ts">
import { company } from '../../data/site'
const cols = [
  ['Entreprise', [['À propos', '/about'], ['Expertise', '/expertise'], ['Services', '/services'], ['Projets', '/projects'], ['Contact', '/contact']]],
  ['Légal', [['Mentions légales', '/legal'], ['Politique de confidentialité', '/privacy']]],
] as const
</script>
<template>
  <footer class="bg-deep text-white/70">
    <div class="mx-auto max-w-7xl px-5 py-14 grid gap-10 md:grid-cols-4">
      <div class="md:col-span-2"><p class="font-display text-2xl text-white">{{ company.name }}</p><p class="mt-2">{{ company.tagline }}</p>
        <p class="mt-4 text-sm">{{ company.city }}</p>
        <p v-if="company.email" class="text-sm">{{ company.email }}</p><p v-if="company.phone" class="text-sm">{{ company.phone }}</p></div>
      <div v-for="c in cols" :key="c[0]"><p class="text-white font-semibold mb-3">{{ c[0] }}</p>
        <RouterLink v-for="l in c[1]" :key="l[1]" :to="l[1]" class="block py-1 text-sm hover:text-white">{{ l[0] }}</RouterLink></div>
    </div>
    <p class="border-t border-white/10 py-5 text-center text-xs">© 2026 {{ company.legal }}. Tous droits réservés.</p>
  </footer>
</template>
