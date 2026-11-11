<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue'
import ExpertiseCard from '../components/common/ExpertiseCard.vue'
import FinalCTA from '../components/home/FinalCTA.vue'
import { expertise } from '../data/site'
import { t, tr } from '../i18n'
</script>
<template>
  <PageHeader :eyebrow="t('nav.expertise')" :title="t('expertise.title')" :text="t('page.expertise.text')" />
  <section class="container-site py-16 md:py-24">
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <ExpertiseCard v-for="e in expertise" :key="e.title.fr" :title="tr(e.title)" :items="tr(e.items)" />
    </div>
  </section>
  <FinalCTA />
</template>
