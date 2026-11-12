<script setup lang="ts">
// Nœud « Méthode » : confiance, en format compact (c'est de l'information, pas de la mise en scène).
// La méthode en 5 étapes sur une ligne qui se trace, les 6 services en registre, les secteurs en une ligne.
import NodeMark from '../signal/NodeMark.vue'
import { process, services, industries } from '../../data/site'
import { t, tr } from '../../i18n'
</script>
<template>
  <section id="node-method" class="home-sec">
    <div class="container-site relative">
      <NodeMark id="method" :label="t('route.method')" class="node-at" resume />
      <div class="rail-pad">
        <h2 class="text-3xl sm:text-4xl md:text-5xl" data-sc-in>{{ t('process.title') }}</h2>
        <ol class="steps mt-10" data-sc-in data-sc-stagger="70">
          <li v-for="(p, i) in process" :key="p.title.fr" class="steps__item">
            <span class="steps__dot" aria-hidden="true"></span>
            <h3 class="text-lg"><span class="sr-only">{{ i + 1 }}. </span>{{ tr(p.title) }}</h3>
            <p class="mt-1 text-sm text-muted">{{ tr(p.text) }}</p>
          </li>
        </ol>

        <div class="mt-20 grid gap-10 lg:grid-cols-12 md:mt-28">
          <div class="lg:col-span-4" data-sc-in>
            <h2 class="text-3xl sm:text-4xl">{{ t('services.title') }}</h2>
            <p class="mt-3 text-muted">{{ t('services.text') }}</p>
            <RouterLink to="/services" class="link-arrow mt-6">{{ t('cta.more') }}</RouterLink>
          </div>
          <dl class="ledger lg:col-span-8" data-sc-in data-sc-stagger="50">
            <div v-for="s in services" :key="s.title.fr" class="ledger__row">
              <dt>{{ tr(s.title) }}</dt>
              <dd>{{ tr(s.text) }}</dd>
            </div>
          </dl>
        </div>

        <div class="mt-20 md:mt-24" data-sc-in>
          <h2 class="text-sm font-extrabold uppercase tracking-[0.16em] text-tech">{{ t('industries.title') }}</h2>
          <p class="mt-4 max-w-4xl text-xl font-semibold leading-relaxed sm:text-2xl">
            <template v-for="(ind, i) in industries" :key="ind.fr">{{ tr(ind) }}<span v-if="i < industries.length - 1" class="text-tech" aria-hidden="true"> / </span><span v-if="i < industries.length - 1" class="sr-only">, </span></template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.steps { list-style: none; padding: 0; margin-left: 0; display: grid; gap: 1.75rem; position: relative; }
.steps__item { position: relative; padding-left: 1.75rem; }
.steps__dot { position: absolute; left: 0; top: 0.4rem; width: 10px; height: 10px; border-radius: 2px; background: rgb(var(--tech)); rotate: 45deg; }
.steps::before { content: ''; position: absolute; left: 4px; top: 0.6rem; bottom: 0.6rem; width: 2px; background: rgb(var(--tech) / 0.3); }
@media (min-width: 1024px) {
  .steps { grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 2rem; }
  .steps__item { padding-left: 0; padding-top: 2rem; }
  .steps__dot { top: 0; }
  .steps::before { left: 0.3rem; right: 0; top: 4px; bottom: auto; width: auto; height: 2px; }
}
.ledger { border-top: 1px solid rgb(var(--line)); }
.ledger__row { display: grid; gap: 0.25rem; padding-block: 1.1rem; border-bottom: 1px solid rgb(var(--line)); }
.ledger__row dt { font-family: Manrope, sans-serif; font-size: clamp(1.4rem, 1.1rem + 1vw, 1.9rem); font-weight: 800; letter-spacing: -0.03em; }
.ledger__row dd { color: rgb(var(--muted)); }
@media (min-width: 640px) { .ledger__row { grid-template-columns: 13rem 1fr; align-items: baseline; gap: 2rem; } }
</style>
