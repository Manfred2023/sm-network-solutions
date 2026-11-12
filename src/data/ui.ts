// Textes d'interface FR / EN. Ajouter une clé ici puis l'utiliser avec t('clé').
const s = (fr: string, en: string) => ({ fr, en })

export const ui = {
  // Navigation et actions
  'nav.home': s('Accueil', 'Home'),
  'nav.about': s('À propos', 'About'),
  'nav.services': s('Services', 'Services'),
  'nav.expertise': s('Expertise', 'Expertise'),
  'nav.projects': s('Réalisations', 'Projects'),
  'nav.contact': s('Contact', 'Contact'),
  'cta.quote': s('Demander un devis', 'Request a quote'),
  'cta.contact': s('Nous contacter', 'Contact us'),
  'cta.expert': s('Parler à un expert', 'Talk to an expert'),
  'cta.more': s('En savoir plus', 'Learn more'),
  'cta.demo': s('Demander une démo', 'Request a demo'),
  'cta.allProjects': s('Toutes nos réalisations', 'All our projects'),
  'cta.discover': s('Découvrir nos expertises', 'Explore our expertise'),
  'cta.custom': s('Parler de votre projet', 'Discuss your project'),
  'a11y.menu': s('Menu', 'Menu'),
  'a11y.newTab': s('(nouvel onglet)', '(opens in a new tab)'),
  'a11y.themeToDark': s('Passer au thème sombre', 'Switch to dark theme'),
  'a11y.themeToLight': s('Passer au thème clair', 'Switch to light theme'),
  'a11y.lang': s('Langue', 'Language'),
  'a11y.skip': s('Aller au contenu', 'Skip to content'),

  // Accueil
  'hero.eyebrow': s('Ingénierie technologique · Douala, Cameroun', 'Technology engineering · Douala, Cameroon'),
  'hero.title': s('Construire les infrastructures technologiques de demain.', 'Building tomorrow’s technology infrastructure.'),
  'hero.text': s(
    'SM Network Solutions accompagne les entreprises, opérateurs et organisations dans la conception, le déploiement et la maintenance de leurs infrastructures télécom, réseaux et solutions numériques.',
    'SM Network Solutions helps companies, operators and organisations design, deploy and maintain their telecom infrastructure, networks and digital solutions.',
  ),
  'about.title': s('Une société d’ingénierie technologique', 'A technology engineering company'),
  'about.p1': s(
    'SM Network Solutions est spécialisée dans les télécommunications, les infrastructures de communications électroniques, les réseaux informatiques et les solutions numériques.',
    'SM Network Solutions specialises in telecommunications, electronic communications infrastructure, computer networks and digital solutions.',
  ),
  'about.p2': s(
    'Nous combinons ingénierie terrain, expertise technologique et solutions digitales pour concevoir, déployer, intégrer, maintenir et faire évoluer vos infrastructures.',
    'We combine field engineering, technology expertise and digital products to design, deploy, integrate, maintain and evolve your infrastructure.',
  ),
  'expertise.title': s('Nos domaines d’expertise', 'Our areas of expertise'),
  'expertise.text': s('Du réseau radio au cloud, une ingénierie couvrant toute la chaîne technique.', 'From radio networks to the cloud, engineering across the whole technical chain.'),
  'services.title': s('Nos services', 'Our services'),
  'services.text': s('Un accompagnement de l’étude à la maintenance.', 'Support from initial study through to maintenance.'),
  'projects.title': s('Projets réalisés', 'Delivered projects'),
  'projects.text': s(
    'Des plateformes conçues, développées et exploitées par nos équipes : paiement, éducation, mobilité, billetterie, vote et collecte de fonds.',
    'Platforms designed, built and operated by our teams: payments, education, mobility, ticketing, voting and fundraising.',
  ),
  'process.title': s('Notre approche', 'Our approach'),
  'industries.title': s('Secteurs d’intervention', 'Industries we serve'),
  'industries.text': s('Opérateurs, équipementiers, intégrateurs, entreprises publiques et privées.', 'Operators, vendors, integrators, public and private organisations.'),
  'final.title': s('Un projet d’infrastructure ou de transformation digitale ?', 'An infrastructure or digital transformation project?'),
  'final.text': s('Parlons de votre besoin et construisons ensemble une solution adaptée.', 'Tell us what you need and let’s build the right solution together.'),

  // Pages
  'team.eyebrow': s('Direction', 'Leadership'),
  'team.title': s('L’équipe de direction', 'Our leadership team'),
  'page.about.text': s('Qui nous sommes et ce que nous faisons.', 'Who we are and what we do.'),
  'page.expertise.text': s('Les compétences techniques de SM Network Solutions.', 'The technical capabilities of SM Network Solutions.'),
  'page.services.text': s('Six métiers pour couvrir le cycle de vie complet de vos infrastructures.', 'Six disciplines covering the full lifecycle of your infrastructure.'),
  'page.projects.text': s(
    'Nos réalisations : des plateformes numériques en production, utilisées par des organisations et le grand public.',
    'Our work: digital platforms in production, used by organisations and the general public.',
  ),
  'page.projects.custom': s(
    'Besoin d’une plateforme sur mesure ? Nous concevons et développons aussi des solutions SaaS pour votre organisation.',
    'Need a custom platform? We also design and build SaaS solutions for your organisation.',
  ),
  'page.projects.features': s('Fonctionnalités clés', 'Key features'),
  'page.contact.title': s('Contact', 'Contact'),
  'page.contact.text': s('Décrivez votre besoin, nous revenons vers vous rapidement.', 'Tell us about your needs and we’ll get back to you shortly.'),
  'page.legal.title': s('Informations légales', 'Legal information'),
  'page.legal.text': s(
    'Contenu à fournir : immatriculation, représentant légal, hébergeur, traitement des données.',
    'Content to be provided: registration, legal representative, hosting provider, data processing.',
  ),

  // Formulaire
  'form.name': s('Nom complet', 'Full name'),
  'form.company': s('Entreprise', 'Company'),
  'form.email': s('Email', 'Email'),
  'form.phone': s('Téléphone', 'Phone'),
  'form.type': s('Type de besoin', 'Type of request'),
  'form.message': s('Message', 'Message'),
  'form.send': s('Envoyer ma demande', 'Send my request'),
  'form.sent': s(
    'Formulaire validé. L’envoi sera actif une fois le service de messagerie connecté.',
    'Form validated. Sending will be enabled once the email service is connected.',
  ),

  // Pied de page
  'footer.company': s('Entreprise', 'Company'),
  'footer.legal': s('Légal', 'Legal'),
  'footer.legalNotice': s('Mentions légales', 'Legal notice'),
  'footer.privacy': s('Politique de confidentialité', 'Privacy policy'),
  'footer.rights': s('Tous droits réservés.', 'All rights reserved.'),
}
