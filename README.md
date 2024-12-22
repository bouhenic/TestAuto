# TestAuto - Démonstration des Tests Unitaires en Node.js

Ce projet est une démonstration simple de tests unitaires en Node.js utilisant Jest comme framework de test.

## Prérequis

- Node.js (version 16.x ou supérieure)
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

## Structure du Projet

```
├── src/
│   └── calculator.js     # Code source de la calculatrice
├── tests/
│   └── calculator.test.js # Tests unitaires
└── package.json          # Configuration du projet
```

## Exécution des Tests

Pour lancer les tests :
```bash
npm test
```

Pour lancer les tests avec la couverture de code :
```bash
npm run test:coverage
```

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

## Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité
3. Commitez vos changements
4. Poussez vers la branche
5. Créez une Pull Request

## Extensions Possibles

- Ajout de nouvelles opérations mathématiques
- Amélioration de la couverture des tests
- Ajout d'un pipeline CI/CD
- Intégration d'un linter (ESLint)
- Documentation API (JSDoc)
