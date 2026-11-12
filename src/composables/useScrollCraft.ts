// Monte le moteur scroll-craft (src/scrollcraft, copie intacte) sur un élément de page Vue,
// et le démonte proprement en quittant la route : le moteur pose des écouteurs window et deux boucles rAF.
import { onBeforeUnmount, onMounted, nextTick, watch, type Ref } from 'vue'
import '../scrollcraft/scrollcraft.js'
import { locale } from '../i18n'

type ScApi = { layout: () => void; read: () => void; destroy: () => void }
declare global {
  interface Window { ScrollCraft: { mount: (root: Element, opts?: object) => ScApi; instances: ScApi[] } }
}

export const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

export function useScrollCraft(root: Ref<HTMLElement | null>) {
  let api: ScApi | null = null
  onMounted(async () => {
    await nextTick()
    if (root.value) api = window.ScrollCraft.mount(root.value)
  })
  // Le texte change de longueur d'une langue à l'autre : on recalcule la hauteur des actes.
  watch(locale, async () => { await nextTick(); api?.layout() })
  onBeforeUnmount(() => { api?.destroy(); api = null })
  return { relayout: () => api?.layout() }
}
