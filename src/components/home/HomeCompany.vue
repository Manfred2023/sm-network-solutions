<script setup lang="ts">
// Nœud « Société » : calme. Une phrase d'ouverture, deux paragraphes, et la fiche d'identité
// présentée comme le cartouche d'un plan (les vraies informations légales, rien d'autre).
import NodeMark from '../signal/NodeMark.vue'
import { aboutFacts } from '../../data/site'
import { t, tr } from '../../i18n'
</script>
<template>
  <section id="node-company" class="home-sec">
    <div class="container-site relative">
      <NodeMark id="company" :label="t('route.company')" class="node-at" />
      <div class="rail-pad grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-7" data-sc-in>
          <p class="text-pretty font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-[2.1rem]">{{ t('hero.text') }}</p>
          <div class="mt-8 grid gap-5 text-muted sm:grid-cols-2">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
          </div>
          <RouterLink to="/about" class="link-arrow mt-8">{{ t('cta.more') }}</RouterLink>
        </div>
        <!-- cartouche -->
        <dl class="cartouche lg:col-span-5 lg:mt-2" data-sc-in>
          <div v-for="f in aboutFacts" :key="f[0].fr" class="cartouche__row">
            <dt>{{ tr(f[0]) }}</dt>
            <dd>{{ tr(f[1]) }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
