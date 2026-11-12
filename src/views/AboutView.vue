<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue'
import ProcessSection from '../components/home/ProcessSection.vue'
import FinalCTA from '../components/home/FinalCTA.vue'
import TeamCard from '../components/common/TeamCard.vue'
import { aboutFacts, team } from '../data/site'
import { t, tr } from '../i18n'
// Vision, mission et valeurs : à rédiger avec la direction avant publication.
import { ref } from 'vue'
import { useScrollCraft } from '../composables/useScrollCraft'
const root = ref<HTMLElement | null>(null)
useScrollCraft(root)
</script>
<template>
  <div ref="root">
  <PageHeader :eyebrow="t('nav.about')" :title="t('about.title')" :text="t('page.about.text')" />
  <section class="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
    <div class="space-y-4 text-lg">
      <p class="text-ink/85">{{ t('about.p1') }}</p>
      <p class="text-muted">{{ t('about.p2') }}</p>
    </div>
    <dl class="cartouche" data-sc-in>
      <div v-for="f in aboutFacts" :key="f[0].fr" class="cartouche__row">
        <dt>{{ tr(f[0]) }}</dt>
        <dd>{{ tr(f[1]) }}</dd>
      </div>
    </dl>
  </section>
  <section class="border-t border-line bg-surface py-16 md:py-24">
    <div class="container-site">
      <div class="mb-10 grid gap-4 md:mb-14 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div>
          <p class="eyebrow mb-3">{{ t('team.eyebrow') }}</p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl">{{ t('team.title') }}</h2>
        </div>
        <p class="max-w-xl text-lg leading-relaxed text-muted">{{ t('team.text') }}</p>
      </div>
      <ul class="grid gap-6 xl:grid-cols-2 xl:gap-8" data-sc-in data-sc-stagger="80">
        <li v-for="m in team" :key="m.name"><TeamCard :member="m" /></li>
      </ul>
    </div>
  </section>
  <ProcessSection />
  <div class="pt-20 md:pt-28"><FinalCTA /></div>
  </div>
</template>
