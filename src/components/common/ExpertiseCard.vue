<script setup lang="ts">
// Domaine d'expertise. Les quatre domaines de terrain portent leur planche technique (comme sur l'accueil).
import FieldDrawing from '../drawings/FieldDrawing.vue'
defineProps<{ title: string; items: string[]; kind?: 'radio' | 'transmission' | 'fibre' | 'civil' }>()
</script>
<template>
  <article class="h-full">
    <div v-if="kind" class="plate__frame mb-5" data-sc-in><FieldDrawing :kind="kind" /></div>
    <div v-else class="mb-5 h-px bg-line"><span class="block h-0.5 w-10 bg-tech"></span></div>
    <h3 class="text-xl">{{ title }}</h3>
    <ul class="spec-list mt-3 text-sm">
      <li v-for="i in items" :key="i">{{ i }}</li>
    </ul>
  </article>
</template>
