<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue'
import ProjectCard from '../components/common/ProjectCard.vue'
import CTAButton from '../components/common/CTAButton.vue'
import { products } from '../data/site'
import { t } from '../i18n'
import { ref } from 'vue'
import { useScrollCraft } from '../composables/useScrollCraft'
const root = ref<HTMLElement | null>(null)
useScrollCraft(root)
</script>
<template>
  <div ref="root">
  <PageHeader :eyebrow="t('nav.projects')" :title="t('projects.title')" :text="t('page.projects.text')" />
  <section class="container-site py-16 md:py-24">
    <!-- Accès rapide -->
    <nav class="mb-12 flex flex-wrap gap-2" :aria-label="t('nav.projects')">
      <a v-for="p in products" :key="p.slug" :href="`#${p.slug}`" class="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-tech/60">
        <span class="h-2.5 w-2.5 rounded-full" :style="{ backgroundColor: p.accent }" aria-hidden="true"></span>{{ p.name }}
      </a>
    </nav>
    <div class="space-y-8" data-sc-in data-sc-stagger="80">
      <ProjectCard v-for="(p, i) in products" :key="p.slug" :product="p" :reverse="i % 2 === 1" />
    </div>
    <div class="card mt-16 flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between" data-sc-in>
      <p class="max-w-2xl text-lg">{{ t('page.projects.custom') }}</p>
      <div class="shrink-0"><CTAButton to="/contact">{{ t('cta.custom') }}</CTAButton></div>
    </div>
  </section>
  </div>
</template>
