# Loading

Chargement : spinner pour une action, loader « porte » pour un écran, barre pour une tâche longue, skeletons pour du contenu.

- Spinner 24px dans les boutons ; loader « porte » (le symbole dont la porte se remplit de Volt) pour les chargements d'écran de plus de 400 ms.
- Barre de progression déterminée dès que la durée est connue (import, export).
- Skeletons qui reprennent la forme exacte du contenu (carte 4:3 + 3 lignes). Animations coupées sous `prefers-reduced-motion`.
