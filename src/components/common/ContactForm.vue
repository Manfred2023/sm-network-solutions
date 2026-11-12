<script setup lang="ts">
import { ref } from 'vue'
import { requestTypes } from '../../data/site'
import { t, tr } from '../../i18n'
const sent = ref(false)
const emit = defineEmits<{ sent: [] }>()
// TODO : brancher à une API (POST /api/quotes) ; aucun envoi réel pour l’instant.
function submit() { sent.value = true; emit('sent') }
const f = 'mt-1.5 w-full rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink transition-colors focus:border-tech focus:outline-none focus:ring-2 focus:ring-tech/30'
const l = 'block text-sm font-semibold'
</script>
<template>
  <form method="post" class="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8" @submit.prevent="submit">
    <label :class="l">{{ t('form.name') }}<input required :class="f" autocomplete="name" /></label>
    <label :class="l">{{ t('form.company') }}<input :class="f" autocomplete="organization" /></label>
    <label :class="l">{{ t('form.email') }}<input required type="email" :class="f" autocomplete="email" /></label>
    <label :class="l">{{ t('form.phone') }}<input type="tel" :class="f" autocomplete="tel" /></label>
    <label :class="[l, 'sm:col-span-2']">{{ t('form.type') }}
      <select :class="f"><option v-for="r in requestTypes" :key="r.fr" :value="r.fr">{{ tr(r) }}</option></select>
    </label>
    <label :class="[l, 'sm:col-span-2']">{{ t('form.message') }}<textarea required rows="5" :class="f"></textarea></label>
    <button class="btn btn--primary sm:col-span-2 sm:justify-self-start">{{ t('form.send') }}</button>
    <p v-if="sent" class="text-sm text-muted sm:col-span-2" role="status">{{ t('form.sent') }}</p>
  </form>
</template>
