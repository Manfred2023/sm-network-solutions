<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue'
import ProcessSection from '../components/home/ProcessSection.vue'
import FinalCTA from '../components/home/FinalCTA.vue'
import { aboutFacts } from '../data/site'
import { t, tr } from '../i18n'
// Vision, mission et valeurs : à rédiger avec la direction avant publication.
</script>
<template>
  <PageHeader :eyebrow="t('nav.about')" :title="t('about.title')" :text="t('page.about.text')" />
  <section class="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
    <div class="space-y-4 text-lg">
      <p class="text-ink/85">{{ t('about.p1') }}</p>
      <p class="text-muted">{{ t('about.p2') }}</p>
    </div>
    <dl class="card divide-y divide-line px-6">
      <div v-for="f in aboutFacts" :key="f[0].fr" class="grid grid-cols-3 gap-4 py-4">
        <dt class="font-semibold">{{ tr(f[0]) }}</dt>
        <dd class="col-span-2 text-muted">{{ tr(f[1]) }}</dd>
      </div>
    </dl>
  </section>
  <ProcessSection />
  <div class="pt-20 md:pt-28"><FinalCTA /></div>
</template>
