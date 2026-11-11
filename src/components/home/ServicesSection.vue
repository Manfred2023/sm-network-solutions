<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import ServiceCard from '../common/ServiceCard.vue'
import { services } from '../../data/site'
import { t, tr } from '../../i18n'
</script>
<template>
  <section class="py-20 md:py-28">
    <div class="container-site">
      <SectionTitle :eyebrow="t('nav.services')" :title="t('services.title')" :text="t('services.text')" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard v-for="(s, i) in services" :key="s.title.fr" :index="i" :title="tr(s.title)" :text="tr(s.text)" />
      </div>
    </div>
  </section>
</template>
