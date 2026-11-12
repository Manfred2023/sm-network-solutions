<script setup lang="ts">
// Nœuds « terrain » : les quatre expertises de terrain, chacune en planche technique qui se trace à l'entrée.
// Grille asymétrique (7/5 puis 5/7) : pas de rangée de cartes identiques.
import NodeMark from '../signal/NodeMark.vue'
import FieldDrawing from '../drawings/FieldDrawing.vue'
import { expertise } from '../../data/site'
import { t, tr } from '../../i18n'
const plates = [
  { id: 'radio', kind: 'radio', e: expertise[0], span: 'lg:col-span-7' },
  { id: 'transmission', kind: 'transmission', e: expertise[1], span: 'lg:col-span-5' },
  { id: 'fibre', kind: 'fibre', e: expertise[2], span: 'lg:col-span-5' },
  { id: 'civil', kind: 'civil', e: expertise[3], span: 'lg:col-span-7' },
] as const
const routeKey = { radio: 'route.radio', transmission: 'route.transmission', fibre: 'route.fibre', civil: 'route.civil' } as const
</script>
<template>
  <section class="home-sec home-sec--grid">
    <div class="container-site relative">
      <div class="rail-pad mb-12 max-w-3xl md:mb-16" data-sc-in>
        <h2 class="text-3xl sm:text-4xl md:text-5xl">{{ t('expertise.title') }}</h2>
        <p class="mt-4 text-lg text-muted">{{ t('expertise.text') }}</p>
      </div>
      <div class="grid gap-x-10 gap-y-16 lg:grid-cols-12">
        <article v-for="p in plates" :id="`node-${p.id}`" :key="p.id" class="plate relative" :class="p.span">
          <NodeMark :id="p.id" :label="t(routeKey[p.id])" class="node-at" />
          <div class="rail-pad">
            <div class="plate__frame" data-sc-in>
              <FieldDrawing :kind="p.kind" />
            </div>
            <h3 class="mt-6 text-2xl">{{ tr(p.e.title) }}</h3>
            <ul class="spec-list mt-3">
              <li v-for="it in tr(p.e.items)" :key="it">{{ it }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
