MyPass vend et contrôle des billets pour des concerts, conférences, festivals, matchs et rencontres, de Douala à New York. La marque tient en une image : **la porte qui s'ouvre** au moment où l'on entre. Tout le système sert deux promesses en même temps : l'énergie de l'événement et la fiabilité d'un moyen de paiement.

## Principes

1. **Neutre d'abord, Volt au bon moment.** Dans le produit, Nuit et Craie couvrent plus de 90 % de la surface. Volt marque le moment décisif : acheter, entrer, l'élément sélectionné. Dans le marketing, Volt peut couvrir tout le format.
2. **Lisible avant d'être beau.** Contrastes AA vérifiés pour chaque paire de tokens, cibles de 44px, chiffres tabulaires, statuts jamais portés par la seule couleur.
3. **Une forme, partout.** L'arche du symbole (demi-cercle sur un fût droit) est la seule forme décorative : dans les visuels d'événement, les états vides, les supports marketing, le ticket.
4. **Local dans le détail, international dans la forme.** Devises, moyens de paiement et formats de date suivent la locale ; la marque ne change pas.

## Voix et contenu

- Tutoiement interdit, vouvoiement sobre en français ; « you » direct en anglais. Pas d'emoji dans l'interface.
- Verbes d'action précis sur les boutons : « Payer 31 200 FCFA », « Publier l'événement », « Voir mes billets ». Jamais « Valider » ou « OK ».
- Les messages d'erreur disent ce qui s'est passé et quoi faire : « Paiement refusé par l'opérateur. Réessayez ou changez de moyen. »
- Rassurer sur l'argent et les billets à chaque incident : « Aucun paiement n'a été débité. »
- Majuscule initiale seulement, y compris dans les titres. Capitales réservées à `mp-overline`, `mp-code` et aux résultats de scan.
- Le nom s'écrit toujours **MyPass** : M et P capitales, en un mot, jamais « Mypass », « My Pass » ou « MYPASS » dans un texte.
- Signature de marque : « Entrez. » (en anglais « Step in. »), utilisée en fin d'accroche, jamais seule sur un bouton.

## Couleur

- Fond d'application `mp-bg-canvas` (Craie) ; panneaux, cartes et tableaux sur `mp-bg-surface` ; menus et modales sur `mp-bg-surface-raised`.
- Texte `mp-text-primary` ; métadonnées `mp-text-secondary`. Ne jamais descendre sous `mp-text-secondary` pour un texte lisible.
- Volt pur (`mp-volt-400`) n'est **jamais** un texte sur fond clair (1,29:1). Pour un texte accentué sur clair, utiliser `mp-text-brand`. Sur Volt, le texte est toujours `mp-text-on-brand` (Nuit, 14,5:1).
- Le CTA de conversion `mp-action-brand-bg` apparaît une fois par écran. L'action primaire courante est `mp-action-primary-bg` (Nuit en clair, Volt en sombre).
- Sélection : `mp-selected-bg` + `mp-selected-indicator`. Bordure de contrôle : `mp-border-default` (≥ 3:1).
- Statuts : `mp-status-success|warning|danger|info-fg` sur leur `-bg`, toujours avec icône et mot.
- Accents `mp-braise-400`, `mp-lagune-400`, `mp-iris-400` : marketing, visuels d'événement par catégorie (Braise = musique et nuit, Lagune = sport et plein air, Iris = culture et conférences). Jamais dans l'interface fonctionnelle, jamais comme statut.
- Pas de dégradé de marque. Le seul dégradé autorisé est le reflet des skeletons.

## Typographie

- **Bricolage Grotesque** (display) : `mp-display-xl`, `mp-display-l`, `mp-heading-1`, `mp-heading-2`. Graisse 700–800, `font-stretch: 90 %` pour les tailles display. Jamais sous 22px, jamais pour un paragraphe.
- **Geist** (texte et interface) : tout le reste, de `mp-heading-3` à `mp-caption`, boutons, prix, statistiques.
- **Geist Mono** : `mp-code` et `mp-code-l` uniquement — références de billets, commandes, codes promo, incidents.
- Prix, montants, statistiques et colonnes de tableau en `font-variant-numeric: tabular-nums` (`mp-price`, `mp-stat`, `mp-data`).
- Les tailles des tokens sont mobiles ; à partir de `mp-bp-lg` (1024px), les titres prennent leur taille desktop indiquée dans chaque style.
- Lignes de 45 à 75 caractères (`mp-size-content-reading` = 680px).

## Espace, grille et mise en page

- Base 4px : n'utiliser que `mp-space-*`. Écart entre champs `mp-space-6`, entre blocs `mp-space-8`, entre sections `mp-space-12` à `mp-space-16`.
- Grille : 4 colonnes sous 768px (gouttière et marges 16px), 8 colonnes de 768 à 1023px (gouttière 24px, marges 32px), 12 colonnes au-delà (gouttière 24px). Contenu public plafonné à `mp-size-content-max` (1200px), dashboard à `mp-size-dashboard-max` (1440px).
- Mobile d'abord : chaque composant est conçu à 360px puis élargi.

## Forme, bordures et élévation

- Rayons : `mp-radius-md` (10px) pour boutons et champs, `mp-radius-lg` (16px) pour cartes et images, `mp-radius-xl` (24px) pour ticket, modales et bottom sheets, `mp-radius-full` pour chips et badges. Tableaux et QR code : `mp-radius-none`.
- La hiérarchie passe par les surfaces et une bordure `mp-border-subtle`, pas par les ombres. Une carte au repos n'a pas d'ombre.
- `mp-shadow-2` pour menus et popovers, `mp-shadow-3` pour modales et toasts. En sombre, l'élévation est un liseré clair.
- Séparateurs : 1px `mp-border-subtle`. La ligne pointillée est réservée à la perforation du ticket.

## Imagerie

- **Photographie** : moments réels et lumière de scène, cadrages serrés sur le public, les mains, les visages qui réagissent ; jamais de photo de stock posée. Personnes de toutes origines ; un concert à Douala et une conférence à Paris sont traités avec la même exigence. Pas de filtre coloré, pas de texte sur un visage.
- **Visuels génératifs « Arche »** quand l'organisateur n'a pas de visuel : aplat d'accent de la catégorie, grande arche Nuit, porte Volt ou Craie, un disque. Jamais d'autres motifs.
- **Illustrations** : traits 3px `mp-text-primary`, aplats Volt, formes d'arche uniquement, pas de personnages.

## Iconographie

- Icônes au trait, grille 24px, trait 1,75px, extrémités arrondies (style Lucide, licence ISC). Tailles `mp-size-icon-s` (16), `-m` (20), `-l` (24).
- Couleur héritée du texte (`currentColor`). Une icône seule est un bouton avec `aria-label`.
- Pas d'emoji, pas d'icône remplie sauf l'état actif d'un favori.

## Mouvement

- `mp-duration-fast` + `mp-easing-standard` pour hover et focus ; `mp-duration-base` pour menus et toasts ; `mp-duration-slow` pour modales.
- Moment signature : à l'ouverture d'un ticket, la porte du symbole se remplit de Volt (`mp-duration-reveal`, `mp-easing-passage`). Aucun autre effet décoratif.
- Tout mouvement est coupé sous `prefers-reduced-motion`.

## Thèmes

- Clair par défaut pour le site public, le paiement et le dashboard.
- Sombre par défaut pour l'application de scan et le portefeuille de billets ; disponible partout via `data-theme="dark"` ou `data-theme="system"`.
- Le ticket et son QR restent clairs dans les deux thèmes.
- Au MVP, livrer uniquement le thème clair mais consommer exclusivement les tokens sémantiques `mp-*` : le thème sombre s'active ensuite sans toucher aux composants.

## Accessibilité

- WCAG 2.2 AA : texte ≥ 4,5:1, contrôles, icônes porteuses de sens et focus ≥ 3:1, cibles ≥ 24px (44px visés).
- Focus visible partout : anneau 2px `mp-focus-ring` décalé de 2px + halo 4px `mp-focus-halo`.
- Aucun état transmis par la seule couleur : icône + mot pour les statuts, coche pour les sélections, soulignement pour les liens.
- Textes redimensionnables à 200 % sans perte, contenu utilisable à 320px de large.
