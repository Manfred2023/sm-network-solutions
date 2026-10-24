# Filters

Chips de filtre : sélection multiple visible d'un coup d'œil, résultats mis à jour sans bouton Appliquer.

- Repos : contour `mp-border-default` sur `mp-bg-surface`. Sélectionné : fond `mp-action-primary-bg`, texte `mp-action-primary-text` et icône check (la sélection n'est jamais portée par la couleur seule).
- `aria-pressed` sur chaque chip. Hauteur 36px, rayon `mp-radius-full`.
- Toujours afficher le nombre de résultats et « Effacer les filtres » quand au moins un filtre est actif.
- Sur mobile, les chips défilent horizontalement ; au-delà de 6 critères, un chip « Filtres · n » ouvre une bottom sheet.
