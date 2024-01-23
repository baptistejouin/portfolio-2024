---
title: Bereal Export
description: Création d'un outil pour exporter les photos de l'application Bereal
category: dev
keywords: [Python, Pillow, API]
thumbnail:
  src: /img/labs/bereal-export/featured.jpg
  alt: Rendu d'un export fait avec BeReal Export
layout: ../../layouts/WorkLayout.astro
---

BeReal export est outil que j'ai developpé durant sur mes pauses pendant l'été 2023.

BeReal est une application qui propose à ses utilisateurs de prendre deux photos en simultané par jours (une avec la camera avant et une avec la camera arrière). Ces photos sont ensuite partagées avec nos amis.

L'application ne propose pas d'exporter toutes les photos en simultané, il faut donc les télécharger une par une. J'ai donc décidé de créer un outil qui permet de télécharger toutes les photos en une fois.

A noté que chaque photo est associée à une autre (photo prise au même instant), et que l'affichage d'un BeReal est bien spécifique : une photo en plein écran et l'autre en vignette en haut à droite cernée d'un cadre noir.

Il m'a donc fallu télécharger les photos à partir de leurs URL, les redimensionner et les placer dans une présentation identique à celle de l'application. Pour cela j'ai utilisé la librairie Pillow.

Je souhaitais par la suite les imprimer et les mettre dans un album photo, donc respecter le format (10cm x 15cm). Je souhaitais également qu'un papier photo contienne 2 BeReal, donc 4 photos.

J'ai également récupéré certaines de mes données depuis l'API privée de BeReal.

- [Le projet Github](https://github.com/baptistejouin/bereal-export)

![Rendu d'un export fait avec BeReal Export](../../assets/labs/bereal-export/01.png)
