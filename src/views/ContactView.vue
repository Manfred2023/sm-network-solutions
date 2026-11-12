<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue'
import ContactForm from '../components/common/ContactForm.vue'
import { company } from '../data/site'
import { t, tr } from '../i18n'
import { ref } from 'vue'
import { useScrollCraft } from '../composables/useScrollCraft'
const root = ref<HTMLElement | null>(null)
useScrollCraft(root)
</script>
<template>
  <div ref="root">
  <PageHeader :eyebrow="t('nav.contact')" :title="t('cta.quote')" :text="t('page.contact.text')" />
  <section class="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-3">
    <div class="space-y-1">
      <p class="font-display text-xl font-extrabold">{{ company.legal }}</p>
      <p class="text-muted">{{ tr(company.city) }}</p>
      <p v-if="company.phone"><a :href="`tel:${company.phone}`" class="hover:text-tech">{{ company.phone }}</a></p>
      <p v-if="company.email"><a :href="`mailto:${company.email}`" class="hover:text-tech">{{ company.email }}</a></p>
    </div>
    <div class="lg:col-span-2" data-sc-in><ContactForm /></div>
  </section>
  </div>
</template>
