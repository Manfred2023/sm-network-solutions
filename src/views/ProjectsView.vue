<script setup lang="ts">
import SectionTitle from '../components/common/SectionTitle.vue'
import ProjectCard from '../components/common/ProjectCard.vue'
</script>
<template><section class="mx-auto max-w-7xl px-5 py-20"><SectionTitle title="Projets" text="Telecom, Fibre, Network, Digital, Infrastructure, Energy : les réalisations seront publiées ici." />
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><ProjectCard v-for="n in 3" :key="n" /></div></section></template>
