<script setup lang="ts">
import SectionTitle from '../components/common/SectionTitle.vue'
import ContactForm from '../components/common/ContactForm.vue'
import { company } from '../data/site'
</script>
<template><section class="mx-auto max-w-7xl px-5 py-20 grid gap-12 lg:grid-cols-3">
  <div><SectionTitle title="Contact" /><p class="font-semibold">{{ company.legal }}</p><p>{{ company.city }}</p>
    <p v-if="company.phone">{{ company.phone }}</p><p v-if="company.email">{{ company.email }}</p></div>
  <div class="lg:col-span-2"><ContactForm /></div>
</section></template>
