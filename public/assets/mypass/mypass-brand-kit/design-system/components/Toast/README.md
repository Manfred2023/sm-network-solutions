# Toast

Toast : confirmation brève d'une action, en bas au centre (mobile) ou en bas à gauche (desktop).

- Surface `mp-bg-inverse`, texte `mp-text-inverse`, pastille d'icône de statut. Une phrase, au passé (« Événement publié. »).
- 5 s par défaut, 8 s avec une action (Annuler, Voir). Pause au survol et au focus. Jamais pour une erreur bloquante : utiliser l'erreur en ligne.
- `role="status"` (succès, info) ou `role="alert"` (échec).
