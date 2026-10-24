# EventCard

Carte d'événement : visuel 4:3, pastille de date, catégorie, titre, lieu, prix « dès ».

- Image `mp-radius-lg`, pastille date Craie en haut à gauche, bouton Enregistrer en haut à droite (voile sombre, `aria-pressed`).
- Sans photo de l'organisateur, le visuel génératif « Arche » prend une couleur d'accent selon la catégorie.
- Prix formaté avec `Intl.NumberFormat` dans la devise de l'événement : « Dès 15 000 FCFA », « Dès 49 € », « From £35.00 ».
- Urgence (« Plus que 40 places ») en `mp-status-warning-fg` avec icône, jamais en rouge.
- La carte entière est un lien ; pas d'ombre au repos, `mp-shadow-1` au survol sur desktop.
