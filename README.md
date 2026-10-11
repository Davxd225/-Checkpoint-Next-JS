# Portfolio Next.js — Yokoli François

Portfolio de Yokoli François construit avec l’App Router de Next.js. Les pages
sont définies par les dossiers de routes sous `app/`, les éléments partagés
vivent dans `components/`, les styles globaux sont dans `styles/` et les images
locales se trouvent dans `public/images/`.

## Pages

```text
app/
  page.tsx             Accueil (/)
  a-propos/page.tsx    À propos (/a-propos)
  projets/page.tsx     Projets (/projets)
  contact/page.tsx     Contact (/contact)
  structure/page.tsx   Exemple de structure (/structure)
components/
  project-card.tsx     Carte projet avec lien GitHub
  site-header.tsx      Navigation partagée
  site-footer.tsx      Pied de page partagé
styles/
  globals.css          Styles globaux et responsive
public/images/
  yokoli-francois.png
```

La photo de profil est `public/images/yokoli-francois.png`. Les projets
renvoient vers le profil GitHub : `https://github.com/Davxd225?tab=repositories`.
Ajoute une adresse e-mail ou un autre moyen de contact dans
`app/contact/page.tsx` avant de publier le site.

Les routes utilisent l’App Router et leurs pages sont des composants serveur
par défaut. Le déploiement reste à effectuer sur une plateforme d’hébergement,
par exemple Vercel.

## Démarrer le projet

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Vérifier le projet

```bash
npm run lint
npm run build
```
