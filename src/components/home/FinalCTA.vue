<script setup lang="ts">
import CTAButton from '../common/CTAButton.vue'
import { t } from '../../i18n'
</script>
<template>
  <section class="container-site pb-20 md:pb-28">
    <div class="relative overflow-hidden rounded-3xl bg-band px-6 py-16 text-center text-white sm:px-12 md:py-20 dark:border dark:border-line">
      <div class="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#246BFD]/30 blur-3xl" aria-hidden="true"></div>
      <div class="relative mx-auto max-w-3xl">
        <h2 class="text-3xl sm:text-4xl md:text-5xl">{{ t('final.title') }}</h2>
        <p class="mt-5 text-lg text-white/70">{{ t('final.text') }}</p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton to="/contact">{{ t('cta.quote') }}</CTAButton>
          <CTAButton to="/contact" variant="ghost">{{ t('cta.contact') }}</CTAButton>
        </div>
      </div>
    </div>
  </section>
</template>
