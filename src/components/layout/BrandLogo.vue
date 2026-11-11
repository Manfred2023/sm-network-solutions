<script setup lang="ts">
// Logo SMNS : version couleur en thème clair, version inversée en thème sombre (ou forcée via `inverse`).
import { company } from '../../data/site'
defineProps<{ inverse?: boolean }>()
const base = '/assets/SM-Network-Solutions_Identite-visuelle/01_Logo-horizontal/SVG/SMNS_logo-horizontal_'
</script>
<template>
  <span class="inline-flex">
    <img v-if="!inverse" :src="`${base}couleur_transparent.svg`" :alt="company.name" width="177" height="36" class="h-full w-auto dark:hidden" />
    <img :src="`${base}inverse_transparent.svg`" :alt="company.name" width="177" height="36" class="h-full w-auto" :class="inverse ? '' : 'hidden dark:block'" />
  </span>
</template>
