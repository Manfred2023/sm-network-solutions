# Badge

Badges de statut : une pastille qui combine toujours icône, mot et couleur.

| Statut | Classe | Icône | Exemples |
|---|---|---|---|
| Succès | `.success` | check | Valide, Payé, Scanné |
| Attente | `.warning` | clock / alert | Paiement en attente, Bientôt complet |
| Erreur | `.danger` | x | Annulé, Refusé |
| Information | `.info` | info | Brouillon, Remboursé |
| Neutre | `.neutral` | check / x / clock | Utilisé, Complet, Terminé |
| Marque | `.brand` | arrow | En vente (un seul par écran) |

Fond `mp-status-*-bg`, texte `mp-status-*-fg` (≥ 4.86:1). Libellés de 1 à 3 mots, majuscule initiale seulement. Ne jamais créer de badge avec une couleur d'accent (Braise, Lagune, Iris) : elles sont réservées au marketing.
