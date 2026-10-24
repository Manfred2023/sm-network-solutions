# Button

Boutons d'action : un CTA Volt pour convertir, un primaire Nuit pour agir, un secondaire et un tertiaire pour le reste.

## Variantes
| Classe | Usage | Tokens |
|---|---|---|
| `.mp-btn.brand` | Conversion uniquement : Acheter, Payer, Publier. **Un seul par écran.** | `mp-action-brand-bg` / `-hover` / `-active`, texte `mp-action-brand-text` |
| `.mp-btn.primary` | Action principale hors achat (Enregistrer, Créer). Nuit en clair, Volt en sombre. | `mp-action-primary-*` |
| `.mp-btn.secondary` | Action alternative à côté d'un primaire. Contour 1,5px. | `mp-action-secondary-border`, `-bg-hover` |
| `.mp-btn.tertiary` | Action discrète, annulation, lien d'action. Toujours souligné. | `mp-action-tertiary-bg-hover` |
| `.mp-btn.danger` | Action destructive, toujours confirmée par une modale. | `mp-action-danger-*` |

## Tailles
`s` 32px (tableaux, filtres desktop) · par défaut 44px (cible tactile minimale) · `l` 52px (paiement, mobile). Bouton icône seule : carré, `aria-label` obligatoire.

## Le consommateur fournit
Un libellé verbe + objet (« Payer 31 200 FCFA », pas « Valider »), l'icône facultative à droite pour une progression (`arrow`) ou à gauche pour un ajout (`plus`), l'état `disabled` ou `aria-busy`.

## À faire / à éviter
- Afficher le montant dans le CTA de paiement.
- En chargement, garder la largeur, remplacer l'icône par le spinner et le libellé par l'action en cours (« Paiement… »).
- Ne jamais mettre deux boutons Volt côte à côte. Ne jamais poser un bouton Volt sur un aplat Volt.
- Ne jamais désactiver un bouton sans dire pourquoi à proximité.
