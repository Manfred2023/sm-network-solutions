# MyPass — kit de marque

Direction retenue : **B « La Porte »** — Nuit #111218, Volt #D4F03C, Craie #F7F6F2 ; Bricolage Grotesque (titres), Geist (interface), Geist Mono (références).

## Contenu

| Dossier | Contenu |
|---|---|
| `logo/svg/` | Lockups `horizontal`, `principal` (empilé), `compact` × couleurs `nuit`, `inverse`, `sur-volt`, `mono-noir`, `mono-blanc` ; symboles `nuit`, `volt`, `craie`, `noir`, `blanc`, `currentcolor` ; `favicon.svg` |
| `logo/png/` | Exports @2x des lockups, symboles 512 px, favicons 16/32/48 |
| `logo/app-icon/` | Icône 1024 (plein cadre iOS / arrondie), exports 512/192/180, icône adaptative Android (avant-plan + fond) |
| `logo/favicon.ico` | 16, 32, 48 px |
| `tokens/mypass.tokens.json` | Source de vérité (format W3C Design Tokens) |
| `tokens/mypass.css` | Variables `--mp-*`, thèmes clair / sombre / système, classes typographiques |
| `tokens/tailwind.preset.js` | Preset Tailwind |
| `tokens/contrast-report.md` | Contrastes WCAG 2.2 calculés |
| `design-system/` | Copie du design system : brand book (`README.md`, `logo.md`, `applications.md`, `implementation.md`), `tokens.json`, styles `components/bundle.css` et aperçus HTML de chaque composant |
| `presentation/` | Planches PNG de la charte |

## Démarrage rapide

```html
<link rel="stylesheet" href="tokens/mypass.css">
<html data-theme="light"> <!-- ou "dark", ou "system" -->
```

```css
.buy { background: var(--mp-action-brand-bg); color: var(--mp-action-brand-text); border-radius: var(--mp-radius-md); }
```

Polices : Bricolage Grotesque, Geist et Geist Mono (Google Fonts, licence OFL).
