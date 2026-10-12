<script setup lang="ts">
import SectionTitle from '../components/common/SectionTitle.vue'
import ServiceCard from '../components/common/ServiceCard.vue'
import { services } from '../data/site'
</script>
<template><section class="mx-auto max-w-7xl px-5 py-20"><SectionTitle title="Services" />
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><ServiceCard v-for="s in services" :key="s.title" v-bind="s" /></div></section></template>
