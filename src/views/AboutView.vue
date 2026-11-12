<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue'
import ProcessSection from '../components/home/ProcessSection.vue'
import FinalCTA from '../components/home/FinalCTA.vue'
import SectionTitle from '../components/common/SectionTitle.vue'
import { aboutFacts, team } from '../data/site'
import { t, tr } from '../i18n'
const initials = (n: string) => n.split(' ').map((w) => w[0]).join('').toUpperCase()
// +237699896336 -> +237 699 89 63 36
const fmtPhone = (p: string) => p.replace(/^\+237(\d{3})(\d{2})(\d{2})(\d{2})$/, '+237 $1 $2 $3 $4')
// Vision, mission et valeurs : à rédiger avec la direction avant publication.
</script>
<template>
  <PageHeader :eyebrow="t('nav.about')" :title="t('about.title')" :text="t('page.about.text')" />
  <section class="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
    <div class="space-y-4 text-lg">
      <p class="text-ink/85">{{ t('about.p1') }}</p>
      <p class="text-muted">{{ t('about.p2') }}</p>
    </div>
    <dl class="card divide-y divide-line px-6">
      <div v-for="f in aboutFacts" :key="f[0].fr" class="grid grid-cols-3 gap-4 py-4">
        <dt class="font-semibold">{{ tr(f[0]) }}</dt>
        <dd class="col-span-2 text-muted">{{ tr(f[1]) }}</dd>
      </div>
    </dl>
  </section>
  <section class="border-t border-line bg-surface py-16 md:py-24">
    <div class="container-site">
      <SectionTitle :eyebrow="t('team.eyebrow')" :title="t('team.title')" />
      <ul class="grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
        <li v-for="m in team" :key="m.name" class="card flex flex-col items-start gap-4 p-6 min-[420px]:flex-row min-[420px]:gap-5">
          <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tech/10 font-display text-lg font-extrabold text-tech" aria-hidden="true">{{ initials(m.name) }}</span>
          <div class="min-w-0">
            <h3 class="text-xl">{{ m.name }}</h3>
            <p class="mt-1 font-semibold text-ink/85">{{ tr(m.role) }}</p>
            <p class="mt-0.5 text-sm text-muted">{{ tr(m.title) }}</p>
            <ul class="mt-4 space-y-1.5 text-sm">
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 shrink-0 text-tech" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                <a :href="`mailto:${m.email}`" class="break-all text-ink/85 hover:text-tech hover:underline">{{ m.email }}</a>
              </li>
              <li v-for="ph in m.phones" :key="ph" class="flex items-center gap-2">
                <svg class="h-4 w-4 shrink-0 text-tech" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
                <a :href="`tel:${ph}`" class="whitespace-nowrap text-ink/85 hover:text-tech hover:underline">{{ fmtPhone(ph) }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <ProcessSection />
  <div class="pt-20 md:pt-28"><FinalCTA /></div>
</template>
