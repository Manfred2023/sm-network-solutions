<script setup lang="ts">
// Carte profil d'un membre de la direction (page À propos).
// Photo : renseigner `photo` dans src/data/site.ts (ex. '/team/junior-fatcha.jpg' dans public/team/),
// portrait 4:5, au moins 800×1000 px. Sans photo, un visuel monogramme s'affiche à la place.
import type { TeamMember } from '../../data/site'
import { t, tr } from '../../i18n'

const props = defineProps<{ member: TeamMember }>()
const initials = props.member.name.split(' ').map((w) => w[0]).join('').toUpperCase()
const emailParts = props.member.email.split('@')
// +237699896336 -> +237 699 89 63 36
// WhatsApp : https://wa.me/<numéro sans + ni espaces>
const waLink = (p: string) => `https://wa.me/${p.replace(/\D/g, '')}`
const fmtPhone = (p: string) => p.replace(/^\+237(\d{3})(\d{2})(\d{2})(\d{2})$/, '+237 $1 $2 $3 $4')
</script>
<template>
  <article class="group grid h-full overflow-hidden rounded-3xl border border-line bg-card shadow-[0_1px_2px_rgb(11_21_48/0.04),0_16px_40px_-20px_rgb(11_21_48/0.25)] transition-shadow duration-300 hover:shadow-[0_1px_2px_rgb(11_21_48/0.06),0_28px_56px_-24px_rgb(11_21_48/0.35)] sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:grid-cols-[14rem_minmax(0,1fr)]">
    <!-- Portrait -->
    <div class="relative aspect-square overflow-hidden bg-[#0B1530] sm:aspect-auto sm:min-h-[21rem]">
      <img
        v-if="member.photo"
        :src="member.photo"
        :alt="member.name"
        class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div v-else class="absolute inset-0" aria-hidden="true">
        <div class="absolute inset-0 bg-[radial-gradient(110%_70%_at_100%_0%,rgba(36,107,253,0.9)_0%,rgba(36,107,253,0.18)_45%,transparent_70%)]"></div>
        <svg class="absolute inset-0 h-full w-full text-white opacity-[0.06]">
          <defs><pattern :id="`tg-${initials}`" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="currentColor" stroke-width="1" /></pattern></defs>
          <rect width="100%" height="100%" :fill="`url(#tg-${initials})`" />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="select-none font-display text-[6.5rem] font-extrabold leading-none tracking-tighter text-white/90 transition-transform duration-700 ease-out group-hover:scale-105 sm:text-[7rem] xl:text-[6rem]">{{ initials }}</span>
        </div>
      </div>
      <span class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#060B1A]/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        <span class="h-1.5 w-1.5 rounded-full bg-[#6E9DFF]" aria-hidden="true"></span>{{ tr(member.pole) }}
      </span>
      <span class="absolute bottom-0 left-0 h-1 w-16 bg-brand" aria-hidden="true"></span>
    </div>

    <!-- Identité + coordonnées -->
    <div class="flex flex-col p-6 sm:p-7">
      <h3 class="text-2xl sm:text-[1.65rem]">{{ member.name }}</h3>
      <p class="mt-2 font-semibold leading-snug text-tech">{{ tr(member.role) }}</p>
      <p class="mt-1 text-sm text-muted">{{ tr(member.title) }}</p>

      <div class="min-h-6 flex-1" aria-hidden="true"></div>
      <ul class="space-y-1 border-t border-line pt-5">
        <li>
          <a :href="`mailto:${member.email}`" class="-mx-2.5 flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tech/10 text-tech">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            </span>
            <span class="min-w-0">
              <span class="block text-xs text-muted">{{ t('form.email') }}</span>
              <span class="block text-sm font-semibold text-ink">{{ emailParts[0] }}<wbr />@{{ emailParts[1] }}</span>
            </span>
          </a>
        </li>
        <li v-for="ph in member.phones" :key="ph">
          <a :href="waLink(ph)" target="_blank" rel="noopener" class="-mx-2.5 flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tech/10 text-tech">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.38 9.38 0 0 1 9.43 9.44c0 5.2-4.24 9.42-9.44 9.42zm8.03-17.46A11.27 11.27 0 0 0 12.04.72C5.78.72.68 5.82.68 12.08c0 2 .52 3.95 1.52 5.67L.58 23.28l5.67-1.49a11.3 11.3 0 0 0 5.79 1.48h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.34-8.03z"/></svg>
            </span>
            <span>
              <span class="block text-xs text-muted">WhatsApp<span class="sr-only"> {{ t('a11y.newTab') }}</span></span>
              <span class="block whitespace-nowrap text-sm font-semibold tabular-nums text-ink">{{ fmtPhone(ph) }}</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </article>
</template>
