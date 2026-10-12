import { createRouter, createWebHistory } from 'vue-router'
const meta = (title: string, description: string) => ({ title: `${title} | SM NETWORK SOLUTIONS`, description })
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: () => import('./views/HomeView.vue'), meta: meta('Télécommunications, réseaux et solutions numériques', 'Ingénierie technologique à Douala, Cameroun : télécom, fibre optique, infrastructures réseaux et solutions numériques.') },
    { path: '/about', component: () => import('./views/AboutView.vue'), meta: meta('À propos', 'SM NETWORK SOLUTIONS SARL, société d’ingénierie technologique basée à Douala.') },
    { path: '/services', component: () => import('./views/ServicesView.vue'), meta: meta('Services', 'Étudier, concevoir, déployer, maintenir, sécuriser et digitaliser vos infrastructures.') },
    { path: '/expertise', component: () => import('./views/ExpertiseView.vue'), meta: meta('Expertise', 'Télécom, réseaux, fibre, développement logiciel, cloud, cybersécurité, IA et énergie.') },
    { path: '/projects', component: () => import('./views/ProjectsView.vue'), meta: meta('Projets', 'Réalisations de SM NETWORK SOLUTIONS.') },
    { path: '/contact', component: () => import('./views/ContactView.vue'), meta: meta('Contact', 'Demander un devis ou parler à un expert.') },
    { path: '/legal', component: () => import('./views/LegalView.vue'), meta: meta('Mentions légales', 'Mentions légales.') },
    { path: '/privacy', component: () => import('./views/LegalView.vue'), meta: meta('Politique de confidentialité', 'Politique de confidentialité.') },
  ],
})
router.afterEach((to) => {
  document.title = String(to.meta.title ?? 'SM NETWORK SOLUTIONS')
  document.querySelector('meta[name="description"]')?.setAttribute('content', String(to.meta.description ?? ''))
})
export default router
