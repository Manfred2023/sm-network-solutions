# Implémentation

## Fichiers de référence

- `tokens.json` (ce système) et `mypass.tokens.json` (format W3C DTCG) sont la source de vérité. `mypass.css` expose les mêmes noms en variables CSS `--mp-*`, thèmes clair et sombre inclus ; `tailwind.preset.js` les mappe pour Tailwind.
- `components/bundle.css` contient les styles de référence des composants (classes `.mp-*`). Le reconstruire dans le framework du produit en conservant les mêmes tokens.

## Règles de consommation

- Composants : uniquement les tokens sémantiques (`--mp-bg-surface`, `--mp-action-primary-bg`…). Les primitives (`--mp-volt-400`) servent au marketing et aux visuels.
- Thème : `data-theme="light" | "dark" | "system"` sur `<html>`. Le ticket et le QR forcent les couleurs claires.
- Polices : Google Fonts (`Bricolage Grotesque` opsz/wdth/wght, `Geist`, `Geist Mono`, licence OFL) avec `display=swap` ; en production, auto-héberger les woff2 sous-ensemble latin + latin-ext.
- Montants : `new Intl.NumberFormat(locale, { style: 'currency', currency })` avec la devise de l'événement. XAF s'affiche « 15 000 FCFA » (pas de décimales). Ne jamais convertir une devise à l'affichage sans le dire.
- Dates : `Intl.DateTimeFormat` dans le fuseau de l'événement, avec le fuseau affiché si l'acheteur est ailleurs.
- Références de billets : alphabet Crockford base32 sans 0/O/1/I/L/U, préfixe `MP-`, groupes de 4.
- QR : niveau de correction Q, marge 4 modules, rendu en SVG `shape-rendering="crispEdges"`, jamais redimensionné en bitmap flou.

## Checklist de revue

- [ ] Aucune couleur littérale hors tokens.
- [ ] Un seul `.mp-btn.brand` par écran.
- [ ] Chaque statut a icône + mot.
- [ ] Focus visible sur tous les éléments interactifs.
- [ ] Chiffres tabulaires dans prix, KPI, tableaux.
- [ ] Testé à 320px, 768px, 1280px et en `data-theme="dark"`.
- [ ] Contrastes vérifiés avec le rapport `contrast-report.md` pour toute nouvelle paire.
