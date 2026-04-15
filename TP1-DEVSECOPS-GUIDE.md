# TP1 DevSecOps - Guide de cours

## Partie theorique

DevSecOps signifie Development, Security et Operations. L'idee principale est d'integrer la securite des le debut du cycle de developpement au lieu de la traiter a la fin.

Le principe Shift Left Security veut dire que les controles de securite sont executes pendant le developpement et dans la CI. Le principe Automation veut dire que les scans et les tests de securite sont automatises. Le principe Collaboration veut dire que les equipes Dev, Sec et Ops travaillent avec un objectif commun sur le meme pipeline.

Les trois piliers sont la securite du code avec le SAST et la revue de code, la securite de l'infrastructure avec les scans et la gestion des secrets, puis la securite en production avec le monitoring, les alertes et la reponse aux incidents.

## Partie pratique du TP1

Le workflow GitHub Actions `devsecops-ci.yml` contient quatre jobs.

Le job `quality-and-tests` valide la qualite minimale avec les tests. Le job `sca-dependency-scan` execute `npm audit` pour detecter les vulnerabilites dans les dependances. Le job `trivy-scan` execute Trivy pour scanner le code et les bibliotheques. Le job `secret-scan` execute Gitleaks pour detecter des secrets commits par erreur.

## Comment lancer le TP

1. Initialiser le projet en local avec `npm ci`
2. Verifier localement avec `npm test` puis `npm run audit`
3. Committer les fichiers puis pousser sur GitHub
4. Ouvrir l'onglet Actions pour observer chaque job
5. Corriger les problemes detectes puis reexecuter le pipeline

## Objectif pedagogique

L'objectif est de montrer que la securite devient un garde fou automatique du pipeline CI/CD. A la fin du TP, vous devez etre capable d'expliquer a quel moment chaque controle se declenche, ce qu'il detecte et comment corriger les problemes remontes.
