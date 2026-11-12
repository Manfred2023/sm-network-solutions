<script setup lang="ts">
// Accueil · grammaire « le chemin du signal » (voir scrollcraft/builds/smns/BRIEF.md).
// Chaque section est un nœud du réseau, dans l'ordre physique ; SignalTrace les relie et le scroll trace la ligne.
import { onBeforeUnmount, ref } from 'vue'
import HomeHero from '../components/home/HomeHero.vue'
import HomeCompany from '../components/home/HomeCompany.vue'
import HomeField from '../components/home/HomeField.vue'
import HomeCore from '../components/home/HomeCore.vue'
import HomePlatforms from '../components/home/HomePlatforms.vue'
import HomeMethod from '../components/home/HomeMethod.vue'
import HomeTeam from '../components/home/HomeTeam.vue'
import HomeContact from '../components/home/HomeContact.vue'
import SignalTrace from '../components/signal/SignalTrace.vue'
import RouteMap from '../components/signal/RouteMap.vue'
import { useScrollCraft } from '../composables/useScrollCraft'
import { resetSignal } from '../composables/signal'
import type { T } from '../i18n'
import { ui } from '../data/ui'

const ids = ['douala', 'company', 'radio', 'transmission', 'fibre', 'civil', 'core', 'platforms', 'method', 'team', 'contact'] as const
resetSignal(ids.map((id) => ({ id, label: ui[`route.${id}` as keyof typeof ui] as T })))

const root = ref<HTMLElement | null>(null)
useScrollCraft(root)
onBeforeUnmount(() => resetSignal([]))
</script>
<template>
  <div ref="root" class="home relative">
    <SignalTrace />
    <HomeHero />
    <HomeCompany />
    <HomeField />
    <HomeCore />
    <HomePlatforms />
    <HomeMethod />
    <HomeTeam />
    <HomeContact />
    <RouteMap />
  </div>
</template>
