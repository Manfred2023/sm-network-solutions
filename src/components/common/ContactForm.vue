<script setup lang="ts">
import { ref } from 'vue'
const types = ['Télécommunications', 'Fibre optique', 'Infrastructure', 'Réseau', 'Développement logiciel', 'Cloud', 'Cybersécurité', 'IA / Automatisation', 'Énergie', 'Formation', 'Autre']
const sent = ref(false)
// TODO : brancher à une API (POST /api/quotes) ; aucun envoi réel pour l’instant.
function submit() { sent.value = true }
const f = 'w-full border border-line bg-white px-4 py-3 text-base focus:border-tech'
</script>
<template>
  <form class="grid gap-4 sm:grid-cols-2" @submit.prevent="submit">
    <label class="block">Nom complet<input required :class="f" autocomplete="name" /></label>
    <label class="block">Entreprise<input :class="f" autocomplete="organization" /></label>
    <label class="block">Email<input required type="email" :class="f" autocomplete="email" /></label>
    <label class="block">Téléphone<input type="tel" :class="f" autocomplete="tel" /></label>
    <label class="block sm:col-span-2">Type de besoin
      <select :class="f"><option v-for="t in types" :key="t">{{ t }}</option></select></label>
    <label class="block sm:col-span-2">Message<textarea required rows="5" :class="f"></textarea></label>
    <button class="sm:col-span-2 bg-tech text-white px-6 py-3 font-semibold hover:bg-blue-600">Envoyer ma demande</button>
    <p v-if="sent" class="sm:col-span-2 text-sm text-navy/70" role="status">Formulaire validé. L’envoi sera actif une fois le service de messagerie connecté.</p>
  </form>
</template>
