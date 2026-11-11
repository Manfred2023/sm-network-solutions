import { ref, watchEffect } from 'vue'
import { ui } from './data/ui'

export type Locale = 'fr' | 'en'
/** Valeur traduite : une entrée par langue. */
export type T<V = string> = Record<Locale, V>

const read = (k: string) => { try { return localStorage.getItem(k) } catch { return null } }
const saved = read('locale')

export const locale = ref<Locale>(saved === 'en' || saved === 'fr' ? saved : 'fr')

watchEffect(() => {
  document.documentElement.lang = locale.value
  try { localStorage.setItem('locale', locale.value) } catch { /* stockage indisponible */ }
})

export const setLocale = (l: Locale) => { locale.value = l }
/** Choisit la valeur dans la langue active. */
export const tr = <V>(v: T<V>): V => v[locale.value]
/** Texte d'interface (src/data/ui.ts). */
export const t = (key: keyof typeof ui): string => ui[key][locale.value]
