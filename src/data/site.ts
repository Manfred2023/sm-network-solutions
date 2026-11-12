// Contenu configurable FR / EN. Les valeurs null = non fournies : ne rien inventer.
import type { T } from '../i18n'

const s = (fr: string, en: string): T => ({ fr, en })
const list = (fr: string[], en: string[]): T<string[]> => ({ fr, en })

export const company = {
  name: 'SM Network Solutions', legal: 'SM NETWORK SOLUTIONS SARL',
  city: s('Douala, Cameroun', 'Douala, Cameroon'),
  tagline: 'Engineering technology. Building connectivity.',
  email: null as string | null, phone: null as string | null, address: null as string | null, hours: null as string | null,
}

export const nav = [
  { to: '/', key: 'nav.home' }, { to: '/about', key: 'nav.about' }, { to: '/expertise', key: 'nav.expertise' },
  { to: '/services', key: 'nav.services' }, { to: '/projects', key: 'nav.projects' }, { to: '/contact', key: 'nav.contact' },
] as const

export const expertise: { title: T; items: T<string[]> }[] = [
  { title: s('Télécommunications', 'Telecommunications'), items: list(['Réseaux mobiles 2G / 3G / 4G / 5G', 'RAN et stations de base', 'Antennes', 'Radio planning', 'Radio optimisation'], ['2G / 3G / 4G / 5G mobile networks', 'RAN and base stations', 'Antennas', 'Radio planning', 'Radio optimisation']) },
  { title: s('Transmission & Réseaux', 'Transmission & Networks'), items: list(['Réseaux IP', 'Ethernet', 'Faisceaux hertziens', 'Transmission', 'Supervision'], ['IP networks', 'Ethernet', 'Microwave links', 'Transmission', 'Monitoring']) },
  { title: s('Fibre optique', 'Fibre optics'), items: list(['FTTH / FTTx', 'Déploiement', 'Raccordement', 'Maintenance'], ['FTTH / FTTx', 'Deployment', 'Connection', 'Maintenance']) },
  { title: s('Génie civil & infrastructures', 'Civil works & infrastructure'), items: list(['Pylônes et supports', 'Câblage', 'Tranchées', 'Installations télécom'], ['Towers and supports', 'Cabling', 'Trenching', 'Telecom installations']) },
  { title: s('Solutions numériques', 'Digital solutions'), items: list(['Développement logiciel', 'Applications mobiles', 'Plateformes web et SaaS', 'API', 'Bases de données', 'Cloud'], ['Software development', 'Mobile apps', 'Web and SaaS platforms', 'APIs', 'Databases', 'Cloud']) },
  { title: s('Cybersécurité & IA', 'Cybersecurity & AI'), items: list(['Sécurisation des infrastructures', 'Intelligence artificielle', 'Automatisation'], ['Infrastructure security', 'Artificial intelligence', 'Automation']) },
  { title: s('Énergie & systèmes de secours', 'Energy & backup systems'), items: list(['Systèmes d’alimentation', 'Batteries', 'Solaire', 'Mise à la terre', 'Protection électrique'], ['Power systems', 'Batteries', 'Solar', 'Earthing', 'Electrical protection']) },
  { title: s('Assistance technique & formation', 'Technical support & training'), items: list(['Études et audit', 'Conseil', 'Assistance technique', 'Formation'], ['Studies and audits', 'Consulting', 'Technical support', 'Training']) },
]

export const services: { title: T; text: T }[] = [
  { title: s('Étudier', 'Study'), text: s('Analyse des besoins, études techniques, audits et conception d’architectures.', 'Needs analysis, technical studies, audits and architecture design.') },
  { title: s('Concevoir', 'Design'), text: s('Conception de réseaux, infrastructures et solutions numériques.', 'Design of networks, infrastructure and digital solutions.') },
  { title: s('Déployer', 'Deploy'), text: s('Installation, déploiement, intégration et mise en service.', 'Installation, roll-out, integration and commissioning.') },
  { title: s('Maintenir', 'Maintain'), text: s('Maintenance préventive, corrective et optimisation des infrastructures.', 'Preventive and corrective maintenance and infrastructure optimisation.') },
  { title: s('Sécuriser', 'Secure'), text: s('Sécurisation des réseaux, systèmes et infrastructures numériques.', 'Securing networks, systems and digital infrastructure.') },
  { title: s('Digitaliser', 'Digitalise'), text: s('Logiciels, applications, plateformes et solutions SaaS.', 'Software, applications, platforms and SaaS solutions.') },
]

export const process: { title: T; text: T }[] = [
  { title: s('Analyse', 'Analysis'), text: s('Comprendre les besoins et contraintes.', 'Understand needs and constraints.') },
  { title: s('Étude', 'Study'), text: s('Élaborer l’architecture et la solution technique.', 'Define the architecture and technical solution.') },
  { title: s('Conception', 'Design'), text: s('Préparer la solution et les ressources nécessaires.', 'Prepare the solution and required resources.') },
  { title: s('Déploiement', 'Deployment'), text: s('Installer, intégrer et mettre en service.', 'Install, integrate and commission.') },
  { title: s('Maintenance', 'Maintenance'), text: s('Assurer le suivi, la maintenance et l’optimisation.', 'Ensure follow-up, maintenance and optimisation.') },
]

export const industries: T[] = [
  s('Télécommunications', 'Telecommunications'), s('Entreprises', 'Businesses'), s('Administrations', 'Public administration'),
  s('Industrie', 'Industry'), s('Infrastructures', 'Infrastructure'), s('IT et digital', 'IT & digital'), s('Énergie', 'Energy'),
  s('Opérateurs et intégrateurs', 'Operators & integrators'), s('Organisations publiques et privées', 'Public & private organisations'),
]

export const chain: T[] = [s('Télécom', 'Telecom'), s('Infrastructure', 'Infrastructure'), s('Digital', 'Digital'), s('Cloud', 'Cloud'), s('Sécurité', 'Security')]

export const aboutFacts: [T, T][] = [
  [s('Nom', 'Name'), s(company.legal, company.legal)],
  [s('Forme', 'Legal form'), s('Société à Responsabilité Limitée', 'Limited liability company (SARL)')],
  [s('Siège', 'Headquarters'), company.city],
  [s('Statuts', 'Incorporated'), s('2026', '2026')],
  [s('Activité', 'Activity'), s('Télécommunications, infrastructures, informatique et solutions numériques', 'Telecommunications, infrastructure, IT and digital solutions')],
]

// photo : chemin dans public/ (ex. '/team/junior-fatcha.jpg'), portrait 4:5. Laisser vide = visuel monogramme.
export type TeamMember = { name: string; pole: T; role: T; title: T; email: string; phones: string[]; photo?: string }
export const team: TeamMember[] = [
  {
    name: 'Junior Fatcha', pole: s('Télécom', 'Telecom'),
    role: s('Directeur des opérations Télécom', 'Director of Telecom Operations'), title: s('Ingénieur Télécom', 'Telecom Engineer'),
    email: 'junior.fatcha@smnetworkslt.net', phones: ['+237699896336'],
  },
  {
    name: 'Manfred MOUKATE', pole: s('Digital', 'Digital'),
    role: s('Directeur des solutions numériques', 'Director of Digital Solutions'), title: s('Ingénieur Génie logiciel', 'Software Engineer'),
    email: 'manfred.moukate@smnetworkslt.net', phones: ['+237699888709', '+237672846994'],
  },
]

export const requestTypes: T[] = [
  s('Télécommunications', 'Telecommunications'), s('Fibre optique', 'Fibre optics'), s('Infrastructure', 'Infrastructure'), s('Réseau', 'Networking'),
  s('Développement logiciel', 'Software development'), s('Cloud', 'Cloud'), s('Cybersécurité', 'Cybersecurity'), s('IA / Automatisation', 'AI / Automation'),
  s('Énergie', 'Energy'), s('Formation', 'Training'), s('Autre', 'Other'),
]

// Projets réalisés (plateformes éditées par SM Network Solutions).
// Couleurs et logos : public/assets/<produit> (charte propre à chaque produit). Le bandeau garde ses couleurs dans les deux thèmes.
export type Product = {
  slug: string; name: string; category: T; text: T; features: T<string[]>; tagline?: T; url: string | null
  logo: string; panel: string; accent: string
}

export const products: Product[] = [
  {
    slug: 'smpay', name: 'SM-PAY', category: s('API de paiement', 'Payment API'), url: null,
    tagline: s('Payez. Encaissez. Simplement.', 'Pay. Get paid. Simply.'),
    text: s(
      'L’API de paiement qui relie les marchands à leurs clients : fiable, rapide et sans friction.',
      'The payment API connecting merchants with their customers: reliable, fast and frictionless.',
    ),
    features: list(
      ['Intégration par API', 'Paiements Mobile Money', 'Suivi des transactions', 'Documentation développeurs'],
      ['API integration', 'Mobile Money payments', 'Transaction tracking', 'Developer documentation'],
    ),
    logo: '/assets/sm-pay/SM-PAY-charte/logos/svg/smpay-logo-reverse.svg', panel: '#0E1A16', accent: '#F2B33D',
  },
  {
    slug: 'myschool', name: 'mySchool', category: s('Gestion scolaire', 'School management'), url: null,
    text: s(
      'Plateforme de gestion scolaire : suivi des élèves, des notes et de la vie de l’établissement.',
      'School management platform: tracking students, grades and day-to-day school life.',
    ),
    features: list(
      ['Gestion des élèves et des classes', 'Saisie des notes et bulletins', 'Tableau de bord établissement'],
      ['Student and class management', 'Grades and report cards', 'School dashboard'],
    ),
    logo: '/assets/myschool/mySchool-charte-graphique/logos/svg/myschool-logo-inverse.svg', panel: '#0E1D44', accent: '#E3A21A',
  },
  {
    slug: 'mboaauto', name: 'Mboa Auto', category: s('Marketplace automobile', 'Car marketplace'), url: null,
    tagline: s('Achetez, vendez ou échangez en toute confiance.', 'Buy, sell or trade with confidence.'),
    text: s(
      'Plateforme pour acheter, vendre ou échanger des véhicules en toute confiance.',
      'A platform to buy, sell or trade vehicles with confidence.',
    ),
    features: list(
      ['Achat de véhicules', 'Vente et dépôt d’annonces', 'Échange de véhicules'],
      ['Buy vehicles', 'Sell and post listings', 'Trade vehicles'],
    ),
    logo: '/assets/mboaauto/Mboa-Auto-Logos/Compact/mboa-auto-compact-negatif.png', panel: '#0D1117', accent: '#C9972B',
  },
  {
    slug: 'mypass', name: 'MyPass', category: s('Billetterie', 'Ticketing'), url: null,
    text: s(
      'Application de vente de tickets pour les organisateurs d’événements : mise en vente, paiement et contrôle d’accès.',
      'Ticketing app for event organisers: ticket sales, payment and access control.',
    ),
    features: list(
      ['Vente de billets en ligne', 'Billets numériques', 'Contrôle d’accès par scan', 'Tableau de bord organisateur'],
      ['Online ticket sales', 'Digital tickets', 'Scan-based access control', 'Organiser dashboard'],
    ),
    logo: '/assets/mypass/mypass-brand-kit/logo/svg/mypass-logo-horizontal-inverse.svg', panel: '#111218', accent: '#D4F03C',
  },
  {
    slug: 'votme', name: 'VotMe', category: s('Vote en ligne', 'Online voting'), url: 'https://votme.cm',
    text: s(
      'Application de vote en ligne : votez pour vos candidats par Mobile Money.',
      'Online voting app: vote for your candidates via Mobile Money.',
    ),
    features: list(['Vote pour vos candidats', 'Paiement par Mobile Money'], ['Vote for your candidates', 'Mobile Money payment']),
    logo: '/assets/votme/logo/VotMe_Brand_Guideline-07.png', panel: '#FBF9EF', accent: '#B71C1C',
  },
  {
    slug: 'wdone', name: 'WDone', category: s('Collecte de fonds', 'Fundraising'), url: 'https://wdone.cm',
    text: s(
      'Application de collecte de fonds : ensemble, donnons vie aux projets qui comptent. Besoins urgents, rêves personnels ou projets communautaires.',
      'Fundraising app: together, let’s bring meaningful projects to life. Urgent needs, personal dreams or community projects.',
    ),
    features: list(
      ['Création de collectes', 'Objectif et progression visibles', 'Partage avec la communauté'],
      ['Create fundraisers', 'Visible goal and progress', 'Share with the community'],
    ),
    logo: '/assets/wdone/logos/wdone-logo-horizontal-inverse.svg', panel: '#1B2B6B', accent: '#F2603A',
  },
]
