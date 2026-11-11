<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import CTAButton from '../common/CTAButton.vue'
import { chain, company } from '../../data/site'
import { t, tr } from '../../i18n'
</script>
<template>
  <section class="py-20 md:py-28">
    <div class="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <SectionTitle :eyebrow="t('nav.about')" :title="t('about.title')" />
        <p class="text-lg text-ink/80">{{ t('about.p1') }}</p>
        <p class="mt-4 text-muted">{{ t('about.p2') }}</p>
        <div class="mt-8"><CTAButton to="/about" variant="outline">{{ t('cta.more') }}</CTAButton></div>
      </div>
      <ul class="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line">
        <li class="col-span-2 bg-card p-6">
          <p class="eyebrow">{{ company.legal }}</p>
          <p class="mt-2 font-display text-2xl font-extrabold">{{ tr(company.city) }}</p>
        </li>
        <li v-for="(c, i) in chain" :key="c.fr" class="flex items-center gap-3 bg-card p-6 font-display text-xl font-bold" :class="i === chain.length - 1 ? 'col-span-2' : ''">
          <span class="h-2 w-2 shrink-0 rounded-sm bg-tech" aria-hidden="true"></span>{{ tr(c) }}
        </li>
      </ul>
    </div>
  </section>
</template>
