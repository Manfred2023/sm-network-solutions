<script setup lang="ts">
import { locale, setLocale, t, type Locale } from '../../i18n'
const langs: { code: Locale; label: string; name: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
]
</script>
<template>
  <div role="group" :aria-label="t('a11y.lang')" class="inline-flex h-10 items-center rounded-lg border border-line p-1 text-xs font-bold">
    <button v-for="l in langs" :key="l.code" type="button" :lang="l.code" :title="l.name" :aria-pressed="locale === l.code"
      class="h-full rounded-md px-2.5 transition-colors"
      :class="locale === l.code ? 'bg-ink text-bg' : 'text-ink/60 hover:text-ink'" @click="setLocale(l.code)">
      {{ l.label }}
    </button>
  </div>
</template>
