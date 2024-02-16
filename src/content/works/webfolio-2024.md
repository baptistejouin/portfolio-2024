---
title: Webfolio 2024
description: Site web personnel créé en 2024, refait avec le framework Astro, déployé sur Netlify.
category: web
tags: [UI, UX, Astro, SASS, Markdown, Figma, Github, Netlify]
date: 2024-10-01
thumbnail:
  image: ./images/webfolio-2024/01.png
  alt: Image représentative du site
---

![Image du site](./images/webfolio-2024/01.png)

Fin 2023, j'ai décidé de refaire mon site web. J'ai donc commencé à réfléchir à la structure du site et à son design. J'ai commencé par créer une maquette sur Figma, puis j'ai entamé le codage du site.

J'ai choisi d'utiliser Astro, un framework SSG (Static Site Generator). Il permet de générer un site web statique à partir de fichiers Astro, un langage similaire à JSX, et de fichiers Markdown. Il permet également de scinder le code en composants, et de les réutiliser.

![Image du site](./images/webfolio-2024/02.png)

Il supporte également SASS, TypeScript, et bien d'autres fonctionnalités.

Il me permet de créer facilement des pages de projet à partir du `layout` que j'ai créé. Il me suffit de créer un fichier Markdown et de le placer dans le dossier `src/pages/works/`. Le site est ensuite généré automatiquement.

Grâce à Netlify, le site est déployé automatiquement à chaque commit sur la branche `main` depuis mon dépôt Github.

J'ai ainsi pu créer mon site web en quelques jours, sa maintenance est très simple, son déploiement automatique, tout en restant très performant pour le référencement.

J'ai également apporté une attention particulière à l'accessibilité du site, ainsi qu'à la propreté du code et des bonnes pratiques. Ce qui m'a permis d'obtenir un très bon score Lighthouse.

![Image du site](./images/webfolio-2024/03.png)
