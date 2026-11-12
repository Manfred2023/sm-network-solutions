<script setup lang="ts">
// Nœud « Cœur de réseau » : le silence voulu avant le pic. Beaucoup d'espace, petits caractères,
// un nœud central et quatre domaines qui dérivent lentement à des vitesses différentes.
// La ligne de signal quitte la marge et vient au centre (repère centré), puis repart.
import NodeMark from '../signal/NodeMark.vue'
import { expertise } from '../../data/site'
import { t, tr } from '../../i18n'
const core = expertise.slice(4)
const rates = ['-0.05', '0.04', '-0.03', '0.06']
</script>
<template>
  <section id="node-core" class="core" data-sc-act="flow">
    <div class="container-site relative">
      <!-- point de passage : la ligne longe la marge avant de rejoindre le centre -->
      <span class="node-at core__wp" aria-hidden="true"><span data-signal="wp-core"></span></span>
      <div class="core__head" data-sc-in>
        <h2 class="core__title">{{ t('core.title') }}</h2>
        <p class="core__text">{{ t('core.text') }}</p>
      </div>
      <div class="core__map rail-pad">
        <span class="core__node"><NodeMark id="core" :label="t('route.core')" /></span>
        <div v-for="(e, i) in core" :key="e.title.fr" class="core__item" :class="`core__item--${i}`" :data-sc-parallax="rates[i]">
          <h3>{{ tr(e.title) }}</h3>
          <p>{{ tr(e.items).join(' · ') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.core { position: relative; padding-block: clamp(6rem, 14vw, 12rem); background: rgb(var(--surface)); }
.core__wp { position: absolute; top: 0; width: 14px; height: 14px; }
.core__wp span { display: block; width: 14px; height: 14px; }
.core__head { max-width: 34rem; margin-inline: auto; text-align: center; }
.core__title { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: rgb(var(--tech)); }
.core__text { margin-top: 1rem; font-size: clamp(1.15rem, 1rem + 0.6vw, 1.5rem); font-weight: 600; line-height: 1.45; letter-spacing: -0.01em; color: rgb(var(--ink)); text-wrap: balance; }
.core__map { position: relative; margin-top: clamp(4rem, 9vw, 7rem); display: grid; grid-template-columns: 1fr 1fr; gap: 3rem 2rem; }
.core__node { position: absolute; left: 50%; top: 50%; translate: -7px -7px; }
.core__item { max-width: 17rem; }
.core__item h3 { font-size: 0.95rem; font-weight: 800; letter-spacing: -0.005em; }
.core__item p { margin-top: 0.4rem; font-size: 0.8125rem; line-height: 1.6; color: rgb(var(--muted)); }
.core__item--1, .core__item--3 { justify-self: end; text-align: right; }
@media (min-width: 768px) {
  .core__map { min-height: 26rem; gap: 7rem 12rem; }
}
@media (max-width: 767px) {
  .core__map { grid-template-columns: 1fr; gap: 2rem; padding-top: 5rem; }
  .core__node { top: 0; left: 0; translate: 0 0; }
  .core__item--1, .core__item--3 { justify-self: start; text-align: left; }
  .core__item { max-width: none; padding-left: 0; }
}
</style>
