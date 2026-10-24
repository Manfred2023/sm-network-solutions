# DatePicker

Sélecteur de dates : un champ qui ouvre un calendrier en popover (desktop) ou en bottom sheet (mobile).

- Jour sélectionné : disque `mp-action-primary-bg`. Intervalle : `mp-selected-bg`. Aujourd'hui : cercle 1,5px `mp-border-strong`. Un point sous le chiffre signale des événements ce jour.
- Semaine débutant le lundi (fr) ou le dimanche (en-US) selon la locale ; noms de jours via `Intl.DateTimeFormat`.
- Raccourcis au-dessus du calendrier côté public : Aujourd'hui, Ce week-end, Ce mois-ci.
- Clavier : flèches pour les jours, Page Up/Down pour les mois, Entrée pour valider, Échap pour fermer.
