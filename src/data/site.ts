// Contenu configurable. Les valeurs null = non fournies : ne rien inventer.
export const company = {
  name: 'SM Network Solutions', legal: 'SM NETWORK SOLUTIONS SARL', city: 'Douala, Cameroun',
  tagline: 'Engineering technology. Building connectivity.',
  email: null as string | null, phone: null as string | null, address: null as string | null, hours: null as string | null,
}
export const nav = [
  { to: '/', label: 'Accueil' }, { to: '/about', label: 'À propos' }, { to: '/services', label: 'Services' },
  { to: '/expertise', label: 'Expertise' }, { to: '/solutions', label: 'Solutions SaaS' }, { to: '/projects', label: 'Projets' }, { to: '/contact', label: 'Contact' },
]
export const expertise = [
  { title: 'Télécommunications', items: ['Réseaux mobiles 2G / 3G / 4G / 5G', 'RAN et stations de base', 'Antennes', 'Radio planning', 'Radio optimisation'] },
  { title: 'Transmission & Réseaux', items: ['Réseaux IP', 'Ethernet', 'Faisceaux hertziens', 'Transmission', 'Supervision'] },
  { title: 'Fibre optique', items: ['FTTH / FTTx', 'Déploiement', 'Raccordement', 'Maintenance'] },
  { title: 'Génie civil & infrastructures', items: ['Pylônes et supports', 'Câblage', 'Tranchées', 'Installations télécom'] },
  { title: 'Solutions numériques', items: ['Développement logiciel', 'Applications mobiles', 'Plateformes web et SaaS', 'API', 'Bases de données', 'Cloud'] },
  { title: 'Cybersécurité & IA', items: ['Sécurisation des infrastructures', 'Intelligence artificielle', 'Automatisation'] },
  { title: 'Énergie & systèmes de secours', items: ['Systèmes d’alimentation', 'Batteries', 'Solaire', 'Mise à la terre', 'Protection électrique'] },
  { title: 'Assistance technique & formation', items: ['Études et audit', 'Conseil', 'Assistance technique', 'Formation'] },
]
export const services = [
  { title: 'Étudier', text: 'Analyse des besoins, études techniques, audits et conception d’architectures.' },
  { title: 'Concevoir', text: 'Conception de réseaux, infrastructures et solutions numériques.' },
  { title: 'Déployer', text: 'Installation, déploiement, intégration et mise en service.' },
  { title: 'Maintenir', text: 'Maintenance préventive, corrective et optimisation des infrastructures.' },
  { title: 'Sécuriser', text: 'Sécurisation des réseaux, systèmes et infrastructures numériques.' },
  { title: 'Digitaliser', text: 'Logiciels, applications, plateformes et solutions SaaS.' },
]
export const process = [
  ['Analyse', 'Comprendre les besoins et contraintes.'], ['Étude', 'Élaborer l’architecture et la solution technique.'],
  ['Conception', 'Préparer la solution et les ressources nécessaires.'], ['Déploiement', 'Installer, intégrer et mettre en service.'],
  ['Maintenance', 'Assurer le suivi, la maintenance et l’optimisation.'],
]
export const industries = ['Télécommunications', 'Entreprises', 'Administrations', 'Industrie', 'Infrastructures', 'IT et digital', 'Énergie', 'Opérateurs et intégrateurs', 'Organisations publiques et privées']
export const chain = ['Télécom', 'Infrastructure', 'Digital', 'Cloud', 'Sécurité']
// Solutions SaaS éditées par SM Network Solutions. Couleurs et logos : public/assets/<produit> (charte propre à chaque produit).
export type Product = {
  name: string; category: string; text: string; features: string[]; url: string | null
  logo: string; panel: string; accent: string
}
export const products: Product[] = [
  {
    name: 'VotMe', category: 'Vote en ligne', url: 'https://votme.cm',
    text: 'Application de vote en ligne : votez pour vos candidats par Mobile Money.',
    features: ['Vote pour vos candidats', 'Paiement par Mobile Money'],
    logo: '/assets/votme/logo/VotMe_Brand_Guideline-07.png', panel: '#FBF9EF', accent: '#B71C1C',
  },
  {
    name: 'WDone', category: 'Collecte de fonds', url: 'https://wdone.cm',
    text: 'Application de collecte de fonds : ensemble, donnons vie aux projets qui comptent. Besoins urgents, rêves personnels ou projets communautaires.',
    features: ['Création de collectes', 'Objectif et progression visibles', 'Partage avec la communauté'],
    logo: '/assets/wdone/logos/wdone-logo-horizontal-inverse.svg', panel: '#1B2B6B', accent: '#F2603A',
  },
  {
    name: 'MyPass', category: 'Billetterie', url: null,
    text: 'Application de vente de tickets pour les organisateurs d’événements : mise en vente, paiement et contrôle d’accès.',
    features: ['Vente de billets en ligne', 'Billets numériques', 'Contrôle d’accès par scan', 'Tableau de bord organisateur'],
    logo: '/assets/mypass/mypass-brand-kit/logo/svg/mypass-logo-horizontal-inverse.svg', panel: '#111218', accent: '#D4F03C',
  },
]
