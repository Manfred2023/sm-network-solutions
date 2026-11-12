<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { nav, company } from '../../data/site'
import { t } from '../../i18n'
import ThemeToggle from './ThemeToggle.vue'
import LangSwitch from './LangSwitch.vue'
import BrandLogo from './BrandLogo.vue'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
watch(open, (o) => { document.body.style.overflow = o ? 'hidden' : '' })
</script>
<template>
  <header class="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
    <div class="container-site flex h-16 items-center justify-between gap-4">
      <RouterLink to="/" class="shrink-0" :aria-label="company.name"><BrandLogo class="h-9" /></RouterLink>

      <nav class="hidden lg:flex items-center gap-1 text-sm font-semibold" aria-label="Navigation">
        <RouterLink v-for="n in nav" :key="n.to" :to="n.to" class="rounded-lg px-3 py-2 text-ink/70 transition-colors hover:text-ink"
          exact-active-class="!text-ink bg-surface">{{ t(n.key) }}</RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <LangSwitch class="hidden sm:inline-flex" />
        <ThemeToggle />
        <RouterLink to="/contact" class="hidden lg:inline-flex h-10 items-center rounded-lg bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">{{ t('cta.quote') }}</RouterLink>
        <button type="button" class="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line" :aria-expanded="open" aria-controls="mobile-menu" :aria-label="t('a11y.menu')" @click="open = !open">
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" aria-hidden="true">
            <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" /><path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Teleport : le backdrop-filter du header crée un containing block qui casse position:fixed -->
    <Teleport to="body">
      <div v-if="open" id="mobile-menu" class="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg">
        <nav class="container-site flex flex-col py-6" aria-label="Navigation">
          <RouterLink v-for="n in nav" :key="n.to" :to="n.to" class="border-b border-line py-4 font-display text-2xl font-bold" exact-active-class="text-tech">{{ t(n.key) }}</RouterLink>
          <LangSwitch class="mt-6 self-start sm:hidden" />
          <RouterLink to="/contact" class="mt-6 rounded-lg bg-brand py-4 text-center font-semibold text-white">{{ t('cta.quote') }}</RouterLink>
        </nav>
      </div>
    </Teleport>
  </header>
</template>
