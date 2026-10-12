<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import ServiceCard from '../common/ServiceCard.vue'
import { services } from '../../data/site'
</script>
<template>
  <section class="py-20"><div class="mx-auto max-w-7xl px-5">
    <SectionTitle title="Nos services" text="Un accompagnement de l’étude à la maintenance." />
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><ServiceCard v-for="s in services" :key="s.title" v-bind="s" /></div>
  </div></section>
</template>
