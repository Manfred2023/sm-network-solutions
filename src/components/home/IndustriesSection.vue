<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import { industries } from '../../data/site'
import { t, tr } from '../../i18n'
</script>
<template>
  <section class="py-20 md:py-28">
    <div class="container-site">
      <SectionTitle :title="t('industries.title')" :text="t('industries.text')" />
      <ul class="flex flex-wrap gap-3">
        <li v-for="i in industries" :key="i.fr" class="rounded-full border border-line bg-card px-5 py-2.5 font-semibold transition-colors hover:border-tech/60">{{ tr(i) }}</li>
      </ul>
    </div>
  </section>
</template>
