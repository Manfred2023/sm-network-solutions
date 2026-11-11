<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import ProductCard from '../common/ProductCard.vue'
import CTAButton from '../common/CTAButton.vue'
import { products } from '../../data/site'
import { t } from '../../i18n'
// Défilement continu de droite à gauche : la liste est dupliquée et la piste glisse de -50 % en boucle.
// La copie est inerte (ni lue ni focusable). Pause au survol / focus ; défilement manuel si mouvement réduit.
</script>
<template>
  <section class="bg-surface py-20 md:py-28">
    <div class="container-site">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle :eyebrow="t('nav.projects')" :title="t('projects.title')" :text="t('projects.text')" />
        <div class="mb-10 shrink-0 md:mb-14"><CTAButton to="/projects" variant="outline">{{ t('cta.allProjects') }}</CTAButton></div>
      </div>
    </div>
    <div class="marquee">
      <div class="marquee-track">
        <ul class="flex gap-5 pr-5">
          <li v-for="p in products" :key="p.slug" class="w-[18rem] shrink-0 sm:w-[21rem]"><ProductCard :product="p" class="h-full" /></li>
        </ul>
        <ul class="marquee-copy flex gap-5 pr-5" aria-hidden="true" inert>
          <li v-for="p in products" :key="p.slug" class="w-[18rem] shrink-0 sm:w-[21rem]"><ProductCard :product="p" class="h-full" /></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  padding-block: 4px;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 45s linear infinite;
}
.marquee:hover .marquee-track,
.marquee:focus-within .marquee-track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(-50%); } }

@media (prefers-reduced-motion: reduce) {
  .marquee { overflow-x: auto; -webkit-mask-image: none; mask-image: none; padding-inline: 1rem; }
  .marquee-track { animation: none; }
  .marquee-copy { display: none; }
}
</style>
