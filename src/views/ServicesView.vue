<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue'
import ServiceCard from '../components/common/ServiceCard.vue'
import ProcessSection from '../components/home/ProcessSection.vue'
import FinalCTA from '../components/home/FinalCTA.vue'
import { services } from '../data/site'
import { t, tr } from '../i18n'
</script>
<template>
  <PageHeader :eyebrow="t('nav.services')" :title="t('services.title')" :text="t('page.services.text')" />
  <section class="container-site py-16 md:py-24">
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceCard v-for="(s, i) in services" :key="s.title.fr" :index="i" :title="tr(s.title)" :text="tr(s.text)" />
    </div>
  </section>
  <ProcessSection />
  <div class="pt-20 md:pt-28"><FinalCTA /></div>
</template>
