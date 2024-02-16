---
title: Notion ICS
description: Script Python pour synchroniser un calendrier Notion avec Google Agenda
category: web
tags: [Python, API]
date: 2023-06-24
thumbnail:
  image: ./images/cron-notion-ics/02.png
  alt: Image issue du calendrier Notion synchronisé avec Google Agenda
---

![Image issue du calendrier Notion synchronisé avec Google Agenda](./images/cron-notion-ics/02.png)

Ce projet est issu d'un besoin personnel. Je souhaitais pouvoir synchroniser mon calendrier Notion avec mon calendrier Google. Des solutions similaires existent déjà, mais sont payantes ou limitées par rapport à mon besoin. J'ai donc décidé de développer ma propre solution.

[Voici le lien vers le projet](https://github.com/baptistejouin/cron-notion-ics)

Le principe est simple : j'ai développé un script Python qui récupère les données de mon calendrier Notion via l'API, puis qui génère un fichier ICS. Ce fichier est ensuite envoyé sur un serveur web et est accessible publiquement. Il ne reste plus qu'à ajouter le lien du fichier ICS dans Google Agenda.

![Partie du code en Python du script](./images/cron-notion-ics/01.png)

J'ai utilisé Python pour ce projet, car c'est un langage que j'avais déjà utilisé et que je souhaitais approfondir.

Une grande partie du travail a consisté à comprendre le fonctionnement de l'API Notion. Il a également fallu comprendre le format ICS, comment le générer, et avec quelles données.

![Fichier ICS généré](./images/cron-notion-ics/03.png)

Ensuite, j'ai rédigé une documentation pour expliquer comment utiliser le script et comment l'installer sur un serveur web.

J'ai personnellement installé ce script sur un Raspberry Pi, mais il peut être installé sur n'importe quel serveur web. Le script s'exécute toutes les 5 minutes grâce à une tâche cron.

<div class="text-center">
  
![Un Raspberry Pi](./images/cron-notion-ics/04.webp)

</div>
