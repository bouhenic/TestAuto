# TestAuto - Démonstration des Tests Unitaires en Node.js

[![Tests Status](https://github.com/bouhenic/testauto/actions/workflows/tests.yml/badge.svg)](https://github.com/bouhenic/testauto/actions)
[![codecov](https://codecov.io/gh/bouhenic/testauto/branch/main/graph/badge.svg)](https://codecov.io/gh/bouhenic/testauto)

Ce projet est une démonstration simple de tests unitaires en Node.js utilisant Jest comme framework de test.

## Prérequis

- Node.js (version 18.x ou supérieure)
- npm (installé avec Node.js)

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/bouhenic/testauto.git
cd testauto
```

2. Installer les dépendances :
```bash
npm install
```

## Scripts disponibles

### Tests
Pour lancer les tests :
```bash
npm test
```

Pour lancer les tests avec la couverture de code :
```bash
npm run test:coverage
```

### Linting
Pour vérifier le style du code :
```bash
npm run lint
```

Pour corriger automatiquement les erreurs de style :
```bash
npm run lint:fix
```

## Configuration ESLint

Le projet utilise ESLint avec les règles suivantes :
- Indentation de 4 espaces
- Guillemets simples
- Points-virgules obligatoires
- Style de ligne Unix
- Avertissements pour les variables non utilisées
- Avertissements pour console.log
- Égalité stricte obligatoire (===)
- Accolades obligatoires

## Structure du Projet

```
├── src/
│   └── calculator.js     # Code source de la calculatrice
├── tests/
│   └── calculator.test.js # Tests unitaires
├── .eslintrc.json        # Configuration ESLint
├── package.json          # Configuration du projet
└── .github/
    └── workflows/         # Workflows CI/CD
```

## Pipeline CI/CD

Le workflow GitHub Actions est configuré pour :
- Exécuter le linting du code
- Lancer les tests sur différentes versions de Node.js (18.x, 20.x)
- Générer un rapport de couverture de code
- Sauvegarder les rapports comme artifacts

## Description des Fichiers

### calculator.js
Classe Calculator avec les opérations mathématiques de base :
- addition (add)
- soustraction (subtract)
- multiplication (multiply)
- division (divide)

### calculator.test.js
Tests unitaires vérifiant :
- Addition de nombres positifs et négatifs
- Soustraction de nombres
- Multiplication avec gestion du zéro
- Division avec gestion de la division par zéro

## Extensions Possibles

- Ajout de nouvelles opérations mathématiques
- Amélioration de la couverture des tests
- Intégration de tests d'intégration
- Documentation API (JSDoc)
