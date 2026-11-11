<script setup lang="ts">
import { company, nav } from '../../data/site'
import { t, tr } from '../../i18n'
import BrandLogo from './BrandLogo.vue'
const year = new Date().getFullYear()
</script>
<template>
  <footer class="bg-band text-white/70 dark:border-t dark:border-line">
    <div class="container-site grid gap-10 py-14 md:grid-cols-4">
      <div class="md:col-span-2">
        <BrandLogo inverse class="h-11" />
        <p class="mt-4 max-w-sm">{{ company.tagline }}</p>
        <p class="mt-4 text-sm">{{ tr(company.city) }}</p>
        <p v-if="company.email" class="text-sm"><a :href="`mailto:${company.email}`" class="hover:text-white">{{ company.email }}</a></p>
        <p v-if="company.phone" class="text-sm">{{ company.phone }}</p>
      </div>
      <div>
        <p class="mb-3 font-semibold text-white">{{ t('footer.company') }}</p>
        <RouterLink v-for="n in nav.slice(1)" :key="n.to" :to="n.to" class="block py-1 text-sm hover:text-white">{{ t(n.key) }}</RouterLink>
      </div>
      <div>
        <p class="mb-3 font-semibold text-white">{{ t('footer.legal') }}</p>
        <RouterLink to="/legal" class="block py-1 text-sm hover:text-white">{{ t('footer.legalNotice') }}</RouterLink>
        <RouterLink to="/privacy" class="block py-1 text-sm hover:text-white">{{ t('footer.privacy') }}</RouterLink>
      </div>
    </div>
    <p class="border-t border-white/10 py-5 text-center text-xs">© {{ year }} {{ company.legal }}. {{ t('footer.rights') }}</p>
  </footer>
</template>
