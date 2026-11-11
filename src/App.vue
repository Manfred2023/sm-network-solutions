<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import { t } from './i18n'
</script>
<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white">{{ t('a11y.skip') }}</a>
  <Navbar />
  <main id="main"><RouterView /></main>
  <Footer />
</template>
