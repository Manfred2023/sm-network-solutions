<script setup lang="ts">
// Appel final des pages secondaires : une seule action (« Demander un devis »), comme partout sur le site.
import { t } from '../../i18n'
</script>
<template>
  <section class="container-site pb-20 md:pb-28">
    <div class="relative overflow-hidden rounded-2xl bg-band px-6 py-14 text-white sm:px-12 md:py-16 dark:border dark:border-line" style="background-image: linear-gradient(rgb(36 107 253 / 0.12) 1px, transparent 1px), linear-gradient(90deg, rgb(36 107 253 / 0.12) 1px, transparent 1px); background-size: 48px 48px;">
      <div class="relative grid items-end gap-8 md:grid-cols-[1fr_auto]">
        <div class="max-w-2xl">
          <h2 class="text-3xl sm:text-4xl">{{ t('final.title') }}</h2>
          <p class="mt-4 text-lg text-white/75">{{ t('final.text') }}</p>
        </div>
        <RouterLink to="/contact" class="btn btn--primary justify-self-start">{{ t('cta.quote') }} <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>
  </section>
</template>
