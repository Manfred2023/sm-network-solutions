<script setup lang="ts">
// Repère d'un nœud du réseau, posé dans une section. SignalTrace relie les repères entre eux ;
// le tampon « raccordé » apparaît quand la ligne l'atteint et reste.
import { computed } from 'vue'
import { signal } from '../../composables/signal'
import { t } from '../../i18n'
const props = defineProps<{ id: string; label?: string; brk?: boolean; resume?: boolean }>()
const on = computed(() => !!signal.on[props.id])
</script>
<template>
  <span class="node-mark" :class="{ 'is-on': on }">
    <span class="node-mark__sq" aria-hidden="true" :data-signal="id" :data-signal-break="brk ? '' : undefined" :data-signal-resume="resume ? '' : undefined"></span>
    <span v-if="label" class="node-mark__label" aria-hidden="true">
      <span class="node-mark__name">{{ label }}</span>
      <span class="node-mark__stamp">✓ {{ t('route.on') }}</span>
    </span>
  </span>
</template>
<style scoped>
.node-mark { position: absolute; display: flex; align-items: center; gap: 0.75rem; z-index: 3; pointer-events: none; }
.node-mark__sq {
  width: 14px; height: 14px; border-radius: 2px; flex: none;
  border: 1.5px solid rgb(var(--tech) / 0.55); background: rgb(var(--bg));
  transition: background-color 240ms var(--sc-ease-out), border-color 240ms var(--sc-ease-out), transform 240ms var(--sc-ease-out);
}
.is-on .node-mark__sq { background: rgb(var(--tech)); border-color: rgb(var(--tech)); transform: rotate(45deg) scale(0.92); }
.node-mark__label { display: flex; flex-direction: column; line-height: 1.2; white-space: nowrap; }
.node-mark__name { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgb(var(--muted)); }
.node-mark__stamp {
  font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.06em; color: rgb(var(--tech));
  opacity: 0; transform: translateY(3px); transition: opacity 240ms var(--sc-ease-out), transform 240ms var(--sc-ease-out);
}
.is-on .node-mark__stamp { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .node-mark__sq, .node-mark__stamp { transition: none; }
  .node-mark__stamp { transform: none; }
}
</style>
