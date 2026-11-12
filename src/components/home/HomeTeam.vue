<script setup lang="ts">
// Nœud « Direction » : proximité. Les deux ingénieurs, joignables directement.
import NodeMark from '../signal/NodeMark.vue'
import TeamCard from '../common/TeamCard.vue'
import { team } from '../../data/site'
import { t } from '../../i18n'
</script>
<template>
  <section id="node-team" class="home-sec home-sec--surface">
    <div class="container-site relative">
      <NodeMark id="team" :label="t('route.team')" class="node-at" />
      <div class="rail-pad">
        <div class="mb-10 max-w-2xl md:mb-14" data-sc-in>
          <h2 class="text-3xl sm:text-4xl md:text-5xl">{{ t('team.title') }}</h2>
          <p class="mt-4 text-lg text-muted">{{ t('team.text') }}</p>
        </div>
        <ul class="grid gap-6 xl:grid-cols-2 xl:gap-8" data-sc-in data-sc-stagger="80">
          <li v-for="m in team" :key="m.name"><TeamCard :member="m" /></li>
        </ul>
      </div>
    </div>
  </section>
</template>
