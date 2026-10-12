// Contenu configurable. Les valeurs null = non fournies : ne rien inventer.
export const company = {
  name: 'SM NETWORK SOLUTIONS', legal: 'SM NETWORK SOLUTIONS SARL', city: 'Douala, Cameroun',
  tagline: 'Engineering technology. Building connectivity.',
  email: null as string | null, phone: null as string | null, address: null as string | null, hours: null as string | null,
}
export const nav = [
  { to: '/', label: 'Accueil' }, { to: '/about', label: 'À propos' }, { to: '/services', label: 'Services' },
  { to: '/expertise', label: 'Expertise' }, { to: '/projects', label: 'Projets' }, { to: '/contact', label: 'À l’international' },
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
