<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/common/PageHeader.vue'
import ExpertiseCard from '../components/common/ExpertiseCard.vue'
import FinalCTA from '../components/home/FinalCTA.vue'
import { expertise } from '../data/site'
import { t, tr } from '../i18n'
import { useScrollCraft } from '../composables/useScrollCraft'
const kinds = ['radio', 'transmission', 'fibre', 'civil'] as const
const root = ref<HTMLElement | null>(null)
useScrollCraft(root)
</script>
<template>
  <div ref="root">
    <PageHeader :eyebrow="t('nav.expertise')" :title="t('expertise.title')" :text="t('page.expertise.text')" />
    <section class="container-site py-16 md:py-24">
      <div class="grid gap-x-10 gap-y-14 sm:grid-cols-2" data-sc-in data-sc-stagger="60">
        <ExpertiseCard v-for="(e, i) in expertise.slice(0, 4)" :key="e.title.fr" :kind="kinds[i]" :title="tr(e.title)" :items="tr(e.items)" />
      </div>
      <div class="mt-20 grid gap-x-10 gap-y-12 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-4" data-sc-in data-sc-stagger="60">
        <ExpertiseCard v-for="e in expertise.slice(4)" :key="e.title.fr" :title="tr(e.title)" :items="tr(e.items)" />
      </div>
    </section>
    <FinalCTA />
  </div>
</template>
