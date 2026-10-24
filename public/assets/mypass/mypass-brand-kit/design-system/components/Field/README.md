# Field

Champs de formulaire : libellé au-dessus, aide en dessous, erreur annoncée par une icône, un texte et une bordure 2px.

- Hauteur `mp-size-control-m` (44px), rayon `mp-radius-md`, bordure `mp-border-default` (3:1), texte 16px pour éviter le zoom iOS.
- Focus : anneau `mp-focus-ring` + halo `mp-focus-halo`, jamais supprimé.
- Erreur : bordure 2px `mp-status-danger-fg`, message `.mp-help.error` qui dit quoi corriger (« saisissez 9 chiffres »), relié par `aria-describedby`.
- Placeholder = exemple de format, jamais le libellé.
- Champ facultatif marqué « (facultatif) » ; les obligatoires ne portent pas d'astérisque.
- Préfixes (+237, €) dans `.prefix`, en `mp-text-secondary`.
- Le consommateur fournit `id`, `label for`, le message d'aide et l'état de validation.
