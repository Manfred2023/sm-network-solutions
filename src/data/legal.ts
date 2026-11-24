// Mentions légales et politique de confidentialité (FR / EN).
// Décrit ce que fait réellement le site : hébergement Vercel, police Google Fonts,
// préférences (thème, langue) en localStorage, aucun outil de mesure d'audience ni cookie publicitaire.
// À relire si l'un de ces points change (ex. formulaire branché à une API, ajout d'analytics).
import type { T } from '../i18n'
import { company, managers } from './site'

const s = (fr: string, en: string): T => ({ fr, en })

export type LegalSection = { title: T; body: T<string[]> }
const sec = (title: T, fr: string[], en: string[]): LegalSection => ({ title, body: { fr, en } })

export const legalUpdated = s('24 novembre 2026', '24 November 2026')

// Cartouche « Éditeur » : les valeurs null sont masquées.
export const publisherFacts: [T, string | T | null][] = [
  [s('Raison sociale', 'Company name'), company.legal],
  [s('Forme juridique', 'Legal form'), s('Société à Responsabilité Limitée (SARL)', 'Limited liability company (SARL)')],
  [s('Capital social', 'Share capital'), company.capital],
  [s('Siège social', 'Registered office'), company.address ?? company.city],
  [s('RCCM', 'Trade register (RCCM)'), company.rccm],
  [s('N° contribuable (NIU)', 'Taxpayer ID (NIU)'), company.niu],
  [s('Co-gérants', 'Co-managers'), s(managers.join(' et '), managers.join(' and '))],
  [s('Directeur de la publication', 'Publication director'), company.director],
  [s('E-mail', 'Email'), company.email],
  [s('Téléphone', 'Phone'), company.phone],
]

export const legalSections: LegalSection[] = [
  sec(s('Hébergement', 'Hosting'),
    ['Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.'],
    ['The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States — vercel.com.']),
  sec(s('Propriété intellectuelle', 'Intellectual property'),
    [
      `L’ensemble des contenus de ce site (textes, illustrations, logos, charte graphique, code) est la propriété de ${company.legal} ou de ses partenaires, et est protégé par le droit de la propriété intellectuelle.`,
      'Les noms et logos des plateformes présentées (VotMe, SM-PAY, mySchool, Mboa Auto, MyPass, WDone) sont des marques de leurs titulaires respectifs. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.',
    ],
    [
      `All content on this website (text, illustrations, logos, visual identity, code) is the property of ${company.legal} or its partners and is protected by intellectual property law.`,
      'The names and logos of the platforms shown (VotMe, SM-PAY, mySchool, Mboa Auto, MyPass, WDone) are trademarks of their respective owners. Any full or partial reproduction or reuse without prior written permission is prohibited.',
    ]),
  sec(s('Responsabilité', 'Liability'),
    [
      'Les informations publiées sur ce site sont fournies à titre indicatif. Nous veillons à leur exactitude mais ne pouvons garantir qu’elles soient complètes ou à jour en permanence.',
      'Les liens vers des sites tiers (par exemple votme.cm ou wdone.cm) sont proposés pour votre commodité ; leur contenu relève de la seule responsabilité de leurs éditeurs.',
    ],
    [
      'Information published on this website is provided for guidance only. We take care to keep it accurate but cannot guarantee that it is always complete or up to date.',
      'Links to third-party websites (for example votme.cm or wdone.cm) are provided for convenience; their content is the sole responsibility of their publishers.',
    ]),
  sec(s('Données personnelles', 'Personal data'),
    ['Le traitement des données personnelles est décrit dans notre politique de confidentialité.'],
    ['How personal data is processed is described in our privacy policy.']),
  sec(s('Droit applicable', 'Governing law'),
    ['Le présent site et ses mentions sont régis par le droit camerounais. Tout litige relève des juridictions compétentes de Douala.'],
    ['This website and this notice are governed by Cameroonian law. Any dispute falls under the jurisdiction of the competent courts of Douala.']),
]

export const privacySections: LegalSection[] = [
  sec(s('Responsable du traitement', 'Data controller'),
    [`${company.legal}, ${company.city.fr}, est responsable des traitements de données personnelles réalisés via ce site.`],
    [`${company.legal}, ${company.city.en}, is the controller of personal data processed through this website.`]),
  sec(s('Données collectées', 'Data we collect'),
    [
      'Formulaire de contact : nom, entreprise (facultatif), e-mail, téléphone (facultatif), type de demande et message. Ces informations servent uniquement à répondre à votre demande et à en assurer le suivi commercial.',
      'Navigation : comme tout hébergeur, Vercel enregistre des journaux techniques (adresse IP, date, page demandée, navigateur) nécessaires au fonctionnement et à la sécurité du site.',
      'Nous n’utilisons aucun outil de mesure d’audience, aucun pixel publicitaire et aucun cookie de suivi.',
    ],
    [
      'Contact form: name, company (optional), email, phone (optional), request type and message. This information is used only to answer your request and follow up on it.',
      'Browsing: like any host, Vercel records technical logs (IP address, date, requested page, browser) needed to run and secure the website.',
      'We use no audience-measurement tools, no advertising pixels and no tracking cookies.',
    ]),
  sec(s('Stockage local et cookies', 'Local storage and cookies'),
    [
      'Le site enregistre dans votre navigateur (localStorage) deux préférences : la langue et le thème clair/sombre. Elles ne sont jamais transmises et vous pouvez les effacer à tout moment depuis les réglages de votre navigateur.',
      'La police de caractères est chargée depuis Google Fonts : votre adresse IP est alors transmise à Google LLC, conformément à sa propre politique de confidentialité.',
    ],
    [
      'The website stores two preferences in your browser (localStorage): language and light/dark theme. They are never transmitted and you can clear them at any time from your browser settings.',
      'The typeface is loaded from Google Fonts, which means your IP address is sent to Google LLC under its own privacy policy.',
    ]),
  sec(s('Base légale et durée de conservation', 'Legal basis and retention'),
    [
      'Les données du formulaire sont traitées sur la base de votre demande (mesures précontractuelles) et de notre intérêt légitime à y répondre.',
      'Elles sont conservées le temps nécessaire au traitement de votre demande, puis au maximum 3 ans après le dernier échange, sauf relation contractuelle en cours.',
    ],
    [
      'Form data is processed on the basis of your request (pre-contractual steps) and our legitimate interest in answering it.',
      'It is kept for as long as needed to handle your request, then for at most 3 years after the last exchange, unless a contract is ongoing.',
    ]),
  sec(s('Destinataires', 'Recipients'),
    [
      `Vos données sont destinées aux seules équipes de ${company.legal}. Elles ne sont ni vendues, ni louées, ni cédées à des tiers.`,
      'Nos prestataires techniques (hébergement) peuvent y avoir accès dans la stricte limite de leur mission ; certains sont situés hors du Cameroun.',
    ],
    [
      `Your data is intended only for the teams of ${company.legal}. It is never sold, rented or transferred to third parties.`,
      'Our technical providers (hosting) may access it strictly within the scope of their service; some are located outside Cameroon.',
    ]),
  sec(s('Sécurité', 'Security'),
    ['Le site est servi exclusivement en HTTPS. Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données contre la perte, l’accès non autorisé ou la divulgation.'],
    ['The website is served over HTTPS only. We apply appropriate technical and organisational measures to protect your data against loss, unauthorised access or disclosure.']),
  sec(s('Vos droits', 'Your rights'),
    [
      'Conformément à la réglementation camerounaise relative à la protection des données personnelles, vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression de vos données.',
      'Pour l’exercer, écrivez-nous via la page Contact en précisant l’objet « Données personnelles ». Nous répondons dans un délai d’un mois.',
    ],
    [
      'Under Cameroonian personal data protection regulations, you have the right to access, rectify, object to and erase your data.',
      'To exercise these rights, write to us through the Contact page with the subject “Personal data”. We reply within one month.',
    ]),
  sec(s('Modifications', 'Changes'),
    ['Cette politique peut évoluer, notamment si de nouveaux services sont ajoutés au site. La date de dernière mise à jour figure en haut de page.'],
    ['This policy may change, in particular if new services are added to the website. The date of the last update is shown at the top of the page.']),
]
