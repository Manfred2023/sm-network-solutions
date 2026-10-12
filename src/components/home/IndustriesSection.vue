<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import { industries } from '../../data/site'
</script>
<template>
  <section class="py-20"><div class="mx-auto max-w-7xl px-5">
    <SectionTitle title="Secteurs d’intervention" text="Opérateurs, équipementiers, intégrateurs, entreprises publiques et privées." />
    <ul class="flex flex-wrap gap-3"><li v-for="i in industries" :key="i" class="border border-line px-4 py-2">{{ i }}</li></ul>
  </div></section>
</template>
