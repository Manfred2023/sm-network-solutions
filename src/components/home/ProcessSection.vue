<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import { process } from '../../data/site'
</script>
<template>
  <section class="bg-navy text-white py-20"><div class="mx-auto max-w-7xl px-5">
    <SectionTitle dark title="Notre approche" />
    <ol class="grid gap-8 lg:grid-cols-5 lg:gap-0">
      <li v-for="(p, i) in process" :key="p[0]" class="relative pl-10 lg:pl-0 lg:pt-10 lg:pr-6">
        <span class="absolute left-0 top-1 lg:top-0 h-6 w-6 rounded-full border-2 border-tech bg-navy text-xs flex items-center justify-center">{{ i + 1 }}</span>
        <span class="absolute left-3 top-8 bottom-[-2rem] w-px bg-tech/50 lg:left-6 lg:right-0 lg:top-3 lg:bottom-auto lg:h-px lg:w-auto" v-if="i < process.length - 1"></span>
        <h3 class="text-2xl">{{ p[0] }}</h3><p class="mt-1 text-white/70 text-sm">{{ p[1] }}</p>
      </li>
    </ol>
  </div></section>
</template>
