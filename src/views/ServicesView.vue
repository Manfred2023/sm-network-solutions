<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/common/PageHeader.vue'
import ProcessSection from '../components/home/ProcessSection.vue'
import FinalCTA from '../components/home/FinalCTA.vue'
import { services } from '../data/site'
import { t, tr } from '../i18n'
import { useScrollCraft } from '../composables/useScrollCraft'
const root = ref<HTMLElement | null>(null)
useScrollCraft(root)
</script>
<template>
  <div ref="root">
    <PageHeader :eyebrow="t('nav.services')" :title="t('services.title')" :text="t('page.services.text')" />
    <section class="container-site py-16 md:py-24">
      <dl class="svc" data-sc-in data-sc-stagger="50">
        <div v-for="s in services" :key="s.title.fr" class="svc__row">
          <dt>{{ tr(s.title) }}</dt>
          <dd>{{ tr(s.text) }}</dd>
        </div>
      </dl>
    </section>
    <ProcessSection />
    <div class="pt-20 md:pt-28"><FinalCTA /></div>
  </div>
</template>
<style scoped>
.svc { border-top: 1px solid rgb(var(--line)); }
.svc__row { display: grid; gap: 0.25rem; padding-block: 1.5rem; border-bottom: 1px solid rgb(var(--line)); }
.svc__row dt { font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem); font-weight: 800; letter-spacing: -0.035em; line-height: 1.05; }
.svc__row dd { color: rgb(var(--muted)); font-size: 1.0625rem; max-width: 46ch; }
@media (min-width: 768px) { .svc__row { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); align-items: baseline; gap: 2rem; } }
</style>
