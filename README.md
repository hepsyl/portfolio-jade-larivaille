# Portfolio Jade Larivaille

Portfolio personnel — React + Vite + Tailwind CSS, déployé sur GitHub Pages.

## 🌐 Déploiement sur GitHub Pages

### Étape 1 — Crée ton repo GitHub
1. Va sur github.com → **New repository**
2. Nomme-le `portfolio-jade-larivaille` (ou autre nom de ton choix)
3. Laisse-le **public**

### Étape 2 — Configure les fichiers

Dans `package.json`, remplace :
```json
"homepage": "https://TON-USERNAME.github.io/portfolio-jade-larivaille"
```
par ton vrai username GitHub.

Dans `vite.config.js`, remplace :
```js
base: '/portfolio-jade/'
```
par le nom exact de ton repo (doit correspondre à l'URL GitHub Pages).

### Étape 3 — Initialise Git et pousse le code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/hepsyl/portfolio-jade-larivaille.git
git push -u origin main
```

### Étape 4 — Déploie
```bash
npm run deploy
```

Cette commande :
1. Build le projet (`npm run build`)
2. Pousse le dossier `dist/` sur la branche `gh-pages`

### Étape 5 — Active GitHub Pages
1. Va dans ton repo → **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **gh-pages** / **(root)**
4. Sauvegarde

Ton site sera disponible à : `https://TON-USERNAME.github.io/portfolio-jade/`

---

## 🔄 Mettre à jour le site

À chaque modification :
```bash
git add .
git commit -m "Description de ta modification"
git push
npm run deploy
```

---

## 📁 Structure du projet

```
portfolio-jade/
├── public/
│   └── logo.png          ← ton logo (favicon + navbar)
├── src/
│   ├── assets/           ← images de projets
│   ├── components/
│   │   ├── Cursor.jsx    ← curseur personnalisé
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx      ← section héro
│   │   ├── Navbar.jsx    ← navigation
│   │   ├── Projects.jsx  ← grille de projets ← modifier ici
│   │   ├── SectionDivider.jsx
│   │   ├── Services.jsx  ← services proposés ← modifier ici
│   │   └── useReveal.js  ← hook scroll animations
│   ├── pages/
│   │   ├── About.jsx     ← page À propos complète
│   │   └── Home.jsx      ← page Accueil
│   ├── App.jsx           ← routing
│   ├── index.css         ← styles globaux + Tailwind
│   └── main.jsx          ← point d'entrée
├── index.html
├── tailwind.config.js    ← couleurs et polices de la charte
├── vite.config.js        ← config Vite + base path GitHub Pages
└── package.json
```
