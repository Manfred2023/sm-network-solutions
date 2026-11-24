<script setup lang="ts">
// Mentions légales (/legal) et politique de confidentialité (/privacy) : même gabarit, contenu dans data/legal.ts.
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/common/PageHeader.vue'
import { legalSections, legalUpdated, privacySections, publisherFacts } from '../data/legal'
import { t, tr, type T } from '../i18n'

const route = useRoute()
const privacy = computed(() => route.path === '/privacy')
const sections = computed(() => (privacy.value ? privacySections : legalSections))
const facts = computed(() => publisherFacts.filter((f): f is [T, string | T] => f[1] !== null))
const val = (v: string | T) => (typeof v === 'string' ? v : tr(v))
</script>
<template>
  <div>
    <PageHeader
      :eyebrow="t('footer.legal')"
      :title="t(privacy ? 'page.privacy.title' : 'page.legal.title')"
      :text="t(privacy ? 'page.privacy.text' : 'page.legal.text')"
    />
    <section class="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
      <aside class="lg:col-span-4">
        <div class="lg:sticky lg:top-28">
          <p class="text-sm text-muted">{{ t('legal.updated') }} : {{ tr(legalUpdated) }}</p>
          <nav class="mt-6 flex flex-col gap-1 border-l border-line">
            <RouterLink to="/legal" class="legal-tab" :class="{ 'is-active': !privacy }">{{ t('footer.legalNotice') }}</RouterLink>
            <RouterLink to="/privacy" class="legal-tab" :class="{ 'is-active': privacy }">{{ t('footer.privacy') }}</RouterLink>
          </nav>
        </div>
      </aside>
      <div class="max-w-[68ch] lg:col-span-8">
        <template v-if="!privacy">
          <h2 class="text-2xl">{{ tr({ fr: 'Éditeur du site', en: 'Website publisher' }) }}</h2>
          <dl class="cartouche mt-5">
            <div v-for="f in facts" :key="f[0].fr" class="cartouche__row">
              <dt>{{ tr(f[0]) }}</dt>
              <dd>{{ val(f[1]) }}</dd>
            </div>
          </dl>
        </template>
        <article v-for="(sct, i) in sections" :key="sct.title.fr" :class="i === 0 && privacy ? '' : 'mt-12'">
          <h2 class="text-2xl">{{ tr(sct.title) }}</h2>
          <p v-for="(para, j) in tr(sct.body)" :key="j" class="mt-4 leading-relaxed text-ink/85">{{ para }}</p>
        </article>
        <p class="mt-12 text-muted">
          <RouterLink to="/contact" class="font-semibold text-tech underline-offset-4 hover:underline">{{ t('nav.contact') }} →</RouterLink>
        </p>
      </div>
    </section>
  </div>
</template>
<style scoped>
.legal-tab { margin-left: -1px; padding: 0.4rem 0 0.4rem 1rem; border-left: 2px solid transparent; font-size: 0.9375rem; font-weight: 600; color: rgb(var(--muted)); transition: color 150ms, border-color 150ms; }
.legal-tab:hover { color: rgb(var(--ink)); }
.legal-tab.is-active { border-left-color: rgb(var(--tech)); color: rgb(var(--ink)); }
</style>
