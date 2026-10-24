# DataTable

Tableau de données : listes de commandes, participants, transactions dans le dashboard.

- En-tête `mp-bg-subtle`, libellés 12px capitales. Lignes de 52px, séparateurs `mp-border-subtle`, pas de zébrage.
- Chiffres en `tabular-nums`, alignés à droite. Montants avec devise, en 600.
- Ligne sélectionnée : `mp-selected-bg`. Survol : `mp-bg-subtle`.
- Statut toujours en badge. Actions de ligne derrière un bouton « … » avec `aria-label`.
- Sous `mp-bp-md`, chaque ligne devient une carte empilée (participant, montant, statut).
