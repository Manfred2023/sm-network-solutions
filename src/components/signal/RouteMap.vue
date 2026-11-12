<script setup lang="ts">
// Navigation de l'accueil : l'itinéraire du signal. Chaque nœud est cliquable, le nœud courant est marqué,
// les nœuds déjà raccordés gardent leur coche. Rail fixe à droite sur grand écran ; bouton + panneau sinon.
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { signal } from '../../composables/signal'
import { t, tr } from '../../i18n'
import { prefersReducedMotion } from '../../composables/useScrollCraft'

const open = ref(false)
const sheet = ref<HTMLElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)

function go(id: string) {
  open.value = false
  const el = document.getElementById(`node-${id}`)
  el?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
}
const currentLabel = () => {
  const n = signal.nodes.find((x) => x.id === signal.current)
  return n ? tr(n.label) : ''
}
function onKey(e: KeyboardEvent) { if (e.key === 'Escape' && open.value) { open.value = false; trigger.value?.focus() } }
watch(open, async (o) => {
  if (o) { await nextTick(); sheet.value?.querySelector<HTMLElement>('button')?.focus(); addEventListener('keydown', onKey) }
  else removeEventListener('keydown', onKey)
})
onBeforeUnmount(() => removeEventListener('keydown', onKey))
</script>

<template>
  <!-- Grand écran -->
  <nav class="route-rail" :aria-label="t('route.title')">
    <p class="route-rail__title">{{ t('route.title') }}</p>
    <ol>
      <li v-for="n in signal.nodes" :key="n.id">
        <button type="button" class="route-item" :class="{ 'is-on': signal.on[n.id], 'is-current': signal.current === n.id }"
          :aria-current="signal.current === n.id ? 'step' : undefined" @click="go(n.id)">
          <span class="route-item__sq" aria-hidden="true"></span>
          <span class="route-item__label">{{ tr(n.label) }}<span v-if="signal.on[n.id]" class="sr-only"> ({{ t('route.on') }})</span></span>
        </button>
      </li>
    </ol>
  </nav>

  <!-- Mobile et tablette -->
  <button ref="trigger" type="button" class="route-fab" :class="{ 'is-tucked': signal.current === 'platforms' && !open }" :aria-expanded="open" aria-controls="route-sheet" @click="open = !open">
    <span class="route-fab__sq" aria-hidden="true"></span>
    <span class="route-fab__k">{{ t('route.title') }}</span>
    <span class="route-fab__v">{{ currentLabel() }}</span>
  </button>
  <Teleport to="body">
    <div v-if="open" class="route-backdrop" @click="open = false"></div>
    <div v-if="open" id="route-sheet" ref="sheet" class="route-sheet" role="dialog" aria-modal="true" :aria-label="t('route.title')">
      <p class="route-sheet__title">{{ t('route.title') }}</p>
      <ol>
        <li v-for="n in signal.nodes" :key="n.id">
          <button type="button" class="route-item route-item--sheet" :class="{ 'is-on': signal.on[n.id], 'is-current': signal.current === n.id }"
            :aria-current="signal.current === n.id ? 'step' : undefined" @click="go(n.id)">
            <span class="route-item__sq" aria-hidden="true"></span>
            <span class="route-item__label">{{ tr(n.label) }}</span>
            <span v-if="signal.on[n.id]" class="route-item__ok">✓ {{ t('route.on') }}</span>
          </button>
        </li>
      </ol>
    </div>
  </Teleport>
</template>

<style scoped>
.route-rail { display: none; }
@media (min-width: 1280px) {
  .route-rail {
    display: block; position: fixed; right: 1rem; top: 50%; translate: 0 -50%; z-index: 40;
    padding: 0.75rem 0.5rem; border-radius: 12px;
    transition: background-color 180ms var(--sc-ease-out), box-shadow 180ms var(--sc-ease-out);
  }
  .route-rail:hover, .route-rail:focus-within { background: rgb(var(--card) / 0.96); box-shadow: var(--sc-e2); }
  .route-rail__title { font-size: 0.625rem; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: rgb(var(--muted)); padding: 0 0.5rem 0.5rem; opacity: 0; transition: opacity 180ms var(--sc-ease-out); }
  .route-rail:hover .route-rail__title, .route-rail:focus-within .route-rail__title { opacity: 1; }
  .route-rail .route-item__label { max-width: 0; opacity: 0; overflow: hidden; transition: opacity 180ms var(--sc-ease-out); }
  .route-rail:hover .route-item__label, .route-rail:focus-within .route-item__label { max-width: 14rem; opacity: 1; }
  .route-fab { display: none !important; }
}
ol { list-style: none; margin: 0; padding: 0; }
.route-item {
  display: flex; align-items: center; gap: 0.625rem; width: 100%; min-height: 32px; padding: 0.25rem 0.5rem;
  border-radius: 8px; text-align: left; font-size: 0.8125rem; font-weight: 600; color: rgb(var(--muted)); background: none; border: 0; cursor: pointer;
}
.route-item:hover { color: rgb(var(--ink)); }
.route-item.is-current { color: rgb(var(--ink)); }
.route-item__sq { width: 9px; height: 9px; flex: none; border-radius: 1.5px; border: 1.5px solid rgb(var(--tech) / 0.5); background: rgb(var(--bg)); transition: transform 200ms var(--sc-ease-out), background-color 200ms var(--sc-ease-out); }
.route-item.is-on .route-item__sq { background: rgb(var(--tech)); border-color: rgb(var(--tech)); }
.route-item.is-current .route-item__sq { transform: rotate(45deg) scale(1.25); }
.route-item__label { white-space: nowrap; }

.route-fab {
  position: fixed; right: 1rem; bottom: max(1rem, env(safe-area-inset-bottom)); z-index: 40;
  display: inline-flex; align-items: center; gap: 0.5rem; min-height: 44px; max-width: calc(100vw - 2rem);
  padding: 0 1rem; border-radius: 999px; border: 1px solid rgb(var(--line)); background: rgb(var(--card) / 0.96);
  box-shadow: var(--sc-e2); font-size: 0.8125rem; color: rgb(var(--ink)); cursor: pointer;
  backdrop-filter: blur(8px);
}
.route-fab:active { transform: scale(0.97); }
/* rangé pendant le pic : il masquerait la dernière rangée de tuiles */
.route-fab { transition: opacity 200ms var(--sc-ease-out), transform 200ms var(--sc-ease-out); }
.route-fab.is-tucked { opacity: 0; transform: translateY(12px); pointer-events: none; }
.route-fab__sq { width: 9px; height: 9px; border-radius: 1.5px; background: rgb(var(--tech)); rotate: 45deg; flex: none; }
.route-fab__k { font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; font-size: 0.6875rem; color: rgb(var(--muted)); }
.route-fab__v { font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.route-backdrop { position: fixed; inset: 0; z-index: 70; background: rgb(6 11 26 / 0.5); }
.route-sheet {
  position: fixed; inset: auto 0 0 0; z-index: 71; max-height: 80svh; overflow-y: auto;
  padding: 1.25rem 1rem max(1.25rem, env(safe-area-inset-bottom)); border-radius: 20px 20px 0 0;
  background: rgb(var(--card)); border-top: 1px solid rgb(var(--line)); box-shadow: var(--sc-e3);
  animation: sheet-in 260ms var(--sc-ease-drawer);
}
.route-sheet__title { font-size: 0.6875rem; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: rgb(var(--muted)); padding: 0 0.5rem 0.5rem; }
.route-item--sheet { min-height: 48px; font-size: 1rem; }
.route-item__ok { margin-left: auto; font-size: 0.75rem; font-weight: 700; color: rgb(var(--tech)); }
@keyframes sheet-in { from { transform: translateY(24px); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .route-sheet { animation: none; } }
</style>
