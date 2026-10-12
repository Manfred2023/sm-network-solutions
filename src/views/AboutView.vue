<script setup lang="ts">
import SectionTitle from '../components/common/SectionTitle.vue'
import { company } from '../data/site'
const facts = [['Nom', company.legal], ['Forme', 'Société à Responsabilité Limitée'], ['Siège', company.city], ['Statuts', '2026'], ['Activité', 'Télécommunications, infrastructures, informatique et solutions numériques']]
</script>
<template><section class="mx-auto max-w-7xl px-5 py-20">
  <SectionTitle title="À propos" text="Vision, mission et valeurs : à rédiger avec la direction avant publication." />
  <dl class="max-w-2xl divide-y divide-line border-y border-line"><div v-for="f in facts" :key="f[0]" class="grid grid-cols-3 gap-4 py-4"><dt class="font-semibold">{{ f[0] }}</dt><dd class="col-span-2 text-navy/75">{{ f[1] }}</dd></div></dl>
</section></template>
