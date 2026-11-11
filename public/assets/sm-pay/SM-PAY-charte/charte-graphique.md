# SM-PAY

Charte graphique de SM-PAY, l'API de paiement qui relie les marchands à leurs clients. La marque doit inspirer la même chose qu'un bon paiement : **fiable, rapide, sans friction**.

## Le logo

![Logo SM-PAY](logos/png/smpay-logo.png)

Le symbole est un **rail en S** posé dans une tuile émeraude : un trait continu qui part d'un côté et arrive de l'autre, comme l'argent qui circule d'un compte à un autre. La **pièce dorée** en haut à droite marque le point de départ du flux : la transaction qui part.

- Le S se lit à la fois comme l'initiale de SM-PAY et comme un chemin de paiement.
- Le trait garde la même épaisseur partout, avec des terminaisons arrondies : la marque est douce, pas agressive.
- Dans le wordmark, le **tiret** prend la couleur `brand` (ou `gold` sur fond sombre) : c'est le seul élément coloré du texte.

### Construction

| Élément | Valeur |
| --- | --- |
| Tuile | carré de 48 unités, rayon 12 (25 %) |
| Rail | trait de 5 unités, rayons des courbes 6, extrémités arrondies |
| Pièce | disque de rayon 3,6, couleur `gold` |
| Wordmark | Space Grotesk Bold, converti en tracés, approche −0,5 |
| Écart symbole–texte | 14 unités |

### Versions

| Fichier | Quand l'utiliser |
| --- | --- |
| `smpay-logo.svg` | Version principale, sur `surface` clair ou blanc. |
| `smpay-logo-reverse.svg` | Sur fonds sombres (`ink`, photos sombres) : texte papier, tiret or. |
| `smpay-logo-mono.svg` | Impression une couleur, tampons, documents fax : tout en `ink`. |
| `smpay-mark.svg` | Icône d'app, favicon, avatar de réseaux sociaux. |
| `smpay-mark-gold.svg` | Symbole sur tuile `ink`, pour les supports premium ou sombres. |

### Règles

- **Zone de protection** : autour du logo, laisser au moins un quart de la hauteur de la tuile (12px pour une tuile de 48px, soit `space-3`).
- **Taille minimale** : symbole seul 24px ; logo complet 120px de large.
- **À ne pas faire** : déformer, changer les couleurs de la tuile, retirer la pièce, ajouter une ombre ou un dégradé, poser la version principale sur une photo chargée, réécrire « SM-PAY » dans une autre police.
- Le nom s'écrit toujours **SM-PAY** en capitales avec tiret dans le logo ; dans le texte courant, « SM-PAY » aussi (jamais « Smpay » ni « SM Pay »).

## Couleurs

La palette repose sur un **vert émeraude** (confiance, argent, croissance) et un **or** (la pièce, la valeur). Le reste est neutre et chaud, pour que les montants et les statuts ressortent.

- `brand` porte l'action : un seul bouton principal par écran.
- `gold` est un accent rare : la pièce du logo, un badge « nouveau », une mise en avant. Jamais en texte sur fond clair.
- `mint` et `gold-soft` sont des fonds de relief, pas des couleurs de texte.
- Les statuts de paiement utilisent `success`, `warning` et `danger`, toujours accompagnés d'un libellé ou d'une icône : la couleur seule ne suffit jamais.

## Typographie

- **Space Grotesk** (`display`) pour le logo, les titres et les **montants** : ses chiffres géométriques donnent du caractère aux soldes.
- **Manrope** (`sans`) pour toute l'interface et le texte courant : lisible en petite taille, sur mobile.
- **JetBrains Mono** (`mono`) pour la documentation de l'API, les clés et les références de transaction.

Les trois polices sont gratuites sur Google Fonts.

Montants : toujours avec séparateur de milliers en espace et la devise après — `125 000 FCFA`, `2 500 XAF`.

## Ton et rédaction

SM-PAY parle comme un partenaire de confiance, en français clair.

- **Direct** : « Paiement reçu » plutôt que « Votre transaction a été traitée avec succès ».
- **Rassurant en cas d'erreur** : dire ce qui s'est passé et quoi faire. « Le paiement n'a pas abouti. Votre compte n'a pas été débité. Réessayez. »
- **Vouvoiement** pour les clients finaux et les marchands.
- Pas de jargon technique côté client ; il est réservé à la documentation développeurs.

Signature : *Payez. Encaissez. Simplement.*

## Formes et espacement

- Grille de 4px (`space-1` à `space-12`).
- Coins arrondis cohérents avec la tuile du logo : `radius-md` pour les boutons, `radius-lg` pour les cartes.
- Reliefs par bordures fines (`line`) ; une seule ombre légère (`shadow-card`).
- Motif de marque : le rail arrondi et la pièce peuvent être repris en grand, en aplats, sur les couvertures et visuels marketing. Pas d'illustrations ni de dégradés.

## Iconographie

Icônes au trait, 1,5–2px, extrémités arrondies (comme le rail du logo), en `ink` ou `brand`. Une bibliothèque comme Lucide convient.
