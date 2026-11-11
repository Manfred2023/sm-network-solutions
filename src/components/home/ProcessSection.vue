<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import { process } from '../../data/site'
import { t, tr } from '../../i18n'
</script>
<template>
  <section class="bg-band py-20 text-white md:py-28">
    <div class="container-site">
      <SectionTitle dark :title="t('process.title')" />
      <ol class="grid gap-8 lg:grid-cols-5 lg:gap-0">
        <li v-for="(p, i) in process" :key="p.title.fr" class="relative pl-12 lg:pl-0 lg:pr-6 lg:pt-14">
          <span class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#5C91FF] bg-band text-xs font-bold">{{ i + 1 }}</span>
          <span v-if="i < process.length - 1" class="absolute bottom-[-2rem] left-4 top-9 w-px bg-[#5C91FF]/40 lg:bottom-auto lg:left-9 lg:right-0 lg:top-4 lg:h-px lg:w-auto" aria-hidden="true"></span>
          <h3 class="text-2xl">{{ tr(p.title) }}</h3>
          <p class="mt-1 text-sm text-white/70">{{ tr(p.text) }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
