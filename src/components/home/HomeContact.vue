<script setup lang="ts">
// Dernier nœud : le terminal. La ligne de signal arrive au formulaire ; quand le formulaire est validé,
// le nœud du symbole SM s'allume. L'écran final tient (il ne s'efface pas).
import NodeMark from '../signal/NodeMark.vue'
import ContactForm from '../common/ContactForm.vue'
import { company } from '../../data/site'
import { signal } from '../../composables/signal'
import { t, tr } from '../../i18n'
</script>
<template>
  <section id="node-contact" class="home-sec home-sec--grid terminal" :class="{ 'is-delivered': signal.delivered }">
    <div class="container-site relative">
      <NodeMark id="contact" :label="t('route.contact')" class="node-at" />
      <div class="rail-pad grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-5" data-sc-in>
          <h2 class="text-3xl sm:text-4xl md:text-5xl">{{ t('final.title') }}</h2>
          <p class="mt-4 text-lg text-muted">{{ t('final.text') }}</p>
          <div class="terminal__id">
            <img class="terminal__mark" src="/assets/SM-Network-Solutions_Identite-visuelle/03_Symbole/SVG/SMNS_symbole_inverse_fond-bleu-nuit.svg" alt="" width="84" height="50" />
            <div>
              <p class="font-extrabold">{{ company.legal }}</p>
              <p class="text-sm text-muted">{{ tr(company.city) }}</p>
              <p v-if="signal.delivered" class="mt-1 text-sm font-bold text-tech" role="status">✓ {{ t('contact.validated') }}</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-7" data-sc-in>
          <ContactForm @sent="signal.delivered = true" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.terminal__id { margin-top: 2.5rem; display: flex; align-items: center; gap: 1rem; }
.terminal__mark {
  width: 84px; height: 50px; border-radius: 10px; flex: none; padding: 6px 8px; background: #0B1530;
  filter: grayscale(1) brightness(0.8); transition: filter 420ms var(--sc-ease-out), box-shadow 420ms var(--sc-ease-out);
}
.is-delivered .terminal__mark { filter: none; box-shadow: var(--sc-e2); }
</style>
