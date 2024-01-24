---
title: Notion ICS
description: Script Python pour synchroniser un calendrier Notion avec Google Agenda
category: dev
keywords: [Python, API]
thumbnail:
  src: /img/labs/cron-notion-ics/featured.png
  alt: Image issue du calendrier Notion synchronisé avec Google Agenda
layout: ../../layouts/Article.astro
---

![Image issue du calendrier Notion synchronisé avec Google Agenda](../../assets/labs/cron-notion-ics/02.png)

Ce projet est issue d'un besoin personnel. Je souhaitais pouvoir synchroniser mon calendrier Notion avec mon calendrier Google. Des solutions similaires existent déjà, mais sont payantes ou limitées face à mon besoin. J'ai donc décidé de développer ma propre solution.

Le principe est simple, j'ai développé un script Python qui récupère les données de mon calendrier Notion via API, puis qui génère un fichier ICS. Ce fichier est ensuite envoyé sur un serveur web, et est accessible publiquement. Il ne reste plus qu'à ajouter le lien du fichier ICS dans Google Agenda.

![Partie du code en python du script](../../assets/labs/cron-notion-ics/01.png)

J'ai utilisé Python pour ce projet, car c'est un langage que j'avais deja utilisé, et que je souhaitais approfondir.

Une grande partie du travail a été de comprendre le fonctionnement de l'API Notion. Il a fallu également comprendre le format ICS, et comment le générer, et avec quelles données.

![Fichier ICS généré](../../assets/labs/cron-notion-ics/03.png)

J'ai ensuite écrit une documentation pour expliquer comment utiliser le script, et comment l'installer sur un serveur web.

J'ai personnellement installé ce script sur un Raspberry Pi, mais il peut être installé sur n'importe quel serveur web. Le script est exécuté toutes les 5 minutes grâce à une tâche cron.

<div class="text-center">
  
![Un Raspberry Pi](../../assets/labs/cron-notion-ics/04.webp)

</div>
