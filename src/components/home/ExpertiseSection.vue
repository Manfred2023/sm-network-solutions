<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import ExpertiseCard from '../common/ExpertiseCard.vue'
import { expertise } from '../../data/site'
</script>
<template>
  <section class="bg-mist py-20"><div class="mx-auto max-w-7xl px-5">
    <SectionTitle title="Nos domaines d’expertise" text="Du réseau radio au cloud, une ingénierie couvrant toute la chaîne technique." />
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><ExpertiseCard v-for="e in expertise" :key="e.title" v-bind="e" /></div>
  </div></section>
</template>
