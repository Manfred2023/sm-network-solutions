import { watch } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { locale, tr, type T } from './i18n'

declare module 'vue-router' {
  interface RouteMeta { title?: T; description?: T }
}

const s = (fr: string, en: string): T => ({ fr, en })
const meta = (title: T, description: T) => ({ title, description })

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to) => (to.hash ? { el: to.hash, top: 80 } : { top: 0, behavior: 'instant' as ScrollBehavior }),
  routes: [
    { path: '/', component: () => import('./views/HomeView.vue'), meta: meta(
      s('Télécommunications, réseaux et solutions numériques', 'Telecommunications, networks and digital solutions'),
      s('Ingénierie technologique à Douala, Cameroun : télécom, fibre optique, infrastructures réseaux et solutions numériques.', 'Technology engineering in Douala, Cameroon: telecom, fibre optics, network infrastructure and digital solutions.')) },
    { path: '/about', component: () => import('./views/AboutView.vue'), meta: meta(
      s('À propos', 'About'), s('SM NETWORK SOLUTIONS SARL, société d’ingénierie technologique basée à Douala.', 'SM NETWORK SOLUTIONS SARL, a technology engineering company based in Douala.')) },
    { path: '/services', component: () => import('./views/ServicesView.vue'), meta: meta(
      s('Services', 'Services'), s('Étudier, concevoir, déployer, maintenir, sécuriser et digitaliser vos infrastructures.', 'Study, design, deploy, maintain, secure and digitalise your infrastructure.')) },
    { path: '/expertise', component: () => import('./views/ExpertiseView.vue'), meta: meta(
      s('Expertise', 'Expertise'), s('Télécom, réseaux, fibre, développement logiciel, cloud, cybersécurité, IA et énergie.', 'Telecom, networks, fibre, software development, cloud, cybersecurity, AI and energy.')) },
    { path: '/projects', component: () => import('./views/ProjectsView.vue'), meta: meta(
      s('Réalisations', 'Projects'),
      s('SM-PAY, mySchool, Mboa Auto, MyPass, VotMe et WDone : les plateformes réalisées par SM Network Solutions.', 'SM-PAY, mySchool, Mboa Auto, MyPass, VotMe and WDone: platforms built by SM Network Solutions.')) },
    { path: '/solutions', redirect: '/projects' },
    { path: '/contact', component: () => import('./views/ContactView.vue'), meta: meta(
      s('Contact', 'Contact'), s('Demander un devis ou parler à un expert.', 'Request a quote or talk to an expert.')) },
    { path: '/legal', component: () => import('./views/LegalView.vue'), meta: meta(s('Mentions légales', 'Legal notice'), s('Mentions légales.', 'Legal notice.')) },
    { path: '/privacy', component: () => import('./views/LegalView.vue'), meta: meta(s('Politique de confidentialité', 'Privacy policy'), s('Politique de confidentialité.', 'Privacy policy.')) },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

function applyMeta() {
  const m = router.currentRoute.value.meta
  document.title = m.title ? `${tr(m.title)} | SM Network Solutions` : 'SM Network Solutions'
  document.querySelector('meta[name="description"]')?.setAttribute('content', m.description ? tr(m.description) : '')
}
router.afterEach(applyMeta)
watch(locale, applyMeta)

export default router
