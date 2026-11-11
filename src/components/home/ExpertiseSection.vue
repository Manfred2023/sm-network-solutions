<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import ExpertiseCard from '../common/ExpertiseCard.vue'
import { expertise } from '../../data/site'
import { t, tr } from '../../i18n'
</script>
<template>
  <section class="bg-surface py-20 md:py-28">
    <div class="container-site">
      <SectionTitle :eyebrow="t('nav.expertise')" :title="t('expertise.title')" :text="t('expertise.text')" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ExpertiseCard v-for="e in expertise" :key="e.title.fr" :title="tr(e.title)" :items="tr(e.items)" />
      </div>
    </div>
  </section>
</template>
