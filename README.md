# Dox — Développeur Fullstack & Designer
  
> Interface moderne, animée et multilingue, conçue avec TypeScript et un ensemble de bibliothèques d'animation avancées.

---

## ✨ Aperçu

Le portfolio présente mes services, ma stack technique, mes réalisations et mes informations de contact. Il est disponible en **quatre langues** (Français, English, Español, Português) et propose un **thème sombre et clair** commutables à la volée.

---

## 🛠️ Technologies utilisées

### Langage principal
| Technologie | Rôle |
|---|---|
| **TypeScript** | Langage principal — typage statique sur tout le code source |

### Bundler & outillage
| Outil | Rôle |
|---|---|
| **Vite** | Bundler ultra-rapide, dev server HMR, build optimisé |
| **Node.js** | Environnement d'exécution pour le build |

### Bibliothèques d'animation & visuels
| Bibliothèque | Version | Rôle |
|---|---|---|
| **GSAP** *(GreenSock)* | 3.12.5 | Moteur d'animation principal : entrées de page, scroll-triggered reveals, compteurs animés, tilt 3D, floating cards |
| **GSAP ScrollTrigger** | 3.12.5 | Plugin GSAP — déclenche les animations à l'entrée dans le viewport |
| **Three.js** | r128 | Rendu WebGL — nuage de particules 3D en arrière-plan avec parallaxe souris |
| **Typed.js** | 2.0.16 | Effet de frappe animée dans le titre hero (Web / Mobile / Design / Code) |
| **Lottie Web** | 5.12.2 | Lecture d'animations vectorielles (badge flottant du profil) |

### Typographie
| Police | Rôle |
|---|---|
| **Space Grotesk** | Titres, marque, chiffres — font display moderne |
| **Inter** | Corps de texte — lisibilité optimale à toutes les tailles |

### CSS
- Variables CSS custom properties pour le système de design tokens (couleurs, espacements, rayons)
- Deux thèmes complets (**dark** / **light**) commutés via `data-theme` sur `<html>`
- Grilles CSS natives (`grid-template-columns`) pour toutes les sections
- `@media print` dédié pour l'export PDF fidèle

---

## 🌍 Internationalisation (i18n)

Quatre langues disponibles, commutables sans rechargement de page :

| Code | Langue |
|---|---|
| `fr` | 🇫🇷 Français (défaut) |
| `en` | 🇬🇧 English |
| `es` | 🇪🇸 Español |
| `pt` | 🇧🇷 Português |

Le choix est persisté dans `localStorage`. Toute la page est traduite via des attributs `data-i18n` — les noms propres (nom du développeur, noms de projets) restent intentionnellement en français.

---

## 🎨 Système de thèmes

| Thème | Fond | Accent |
|---|---|---|
| **Dark** (défaut) | `#080b12` | `#4f8ef7` |
| **Light** | `#f8faff` | `#2563eb` |

Le thème est persisté dans `localStorage` et appliqué avant le premier rendu pour éviter tout flash.

---

## 📄 Export PDF du portfolio

Le bouton **Portfolio** dans la navigation génère un PDF fidèle via `window.print()` avec une feuille de style `@media print` qui :

- Masque les éléments dynamiques (nav, canvas, animations, formulaire)
- Force le thème sombre ou clair avec `print-color-adjust: exact`
- Adapte la mise en page au format A4 (grilles 2 colonnes, padding réduit)
- Évite les coupures de page dans les cartes

---

## 📦 Dépendances CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.16/typed.umd.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
```

---

## ♿ Accessibilité & performances

- `aria-label`, `aria-expanded`, `role` sur tous les composants interactifs
- `@media (prefers-reduced-motion: reduce)` — désactive toutes les animations
- Curseur personnalisé et tilt 3D désactivés sur les appareils tactiles (`pointer: coarse`)
- Polices préchargées avec `preconnect`

---

## 👤 Auteur

**Dodge Elfry** — Développeur Fullstack & Designer  
[LinkedIn](https://www.linkedin.com/in/dodge-nguia/) · [GitHub](https://github.com/DodgeElfry) · [Portfolio](https://dodgeelfry.github.io/portfolio-updated/)

---

*Conçu avec passion ✦ Développé avec précision*
