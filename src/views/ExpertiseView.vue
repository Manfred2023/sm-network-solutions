<script setup lang="ts">
import SectionTitle from '../components/common/SectionTitle.vue'
import ExpertiseCard from '../components/common/ExpertiseCard.vue'
import { expertise } from '../data/site'
</script>
<template><section class="mx-auto max-w-7xl px-5 py-20"><SectionTitle title="Expertise" text="Les compétences techniques de SM NETWORK SOLUTIONS." />
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><ExpertiseCard v-for="e in expertise" :key="e.title" v-bind="e" /></div></section></template>
