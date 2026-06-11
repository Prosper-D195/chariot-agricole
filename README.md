# 🦅 L'Aigle Royal — Chariot Agricole (Boutique E-Commerce)

Bienvenue sur le dépôt officiel du **Chariot Agricole**, la plateforme e-commerce vitrine de l'exploitation **L'Aigle Royal**. Ce projet intègre les technologies web modernes pour optimiser la distribution directe, du verger à la table, des produits d'élite de l'exploitation (arboriculture tropicale, cultures maraîchères, élevage et produits transformés).

---

## 🚀 Fonctionnalités Clés

* **Architecture Client-Side Spécifique (SPA) :** Navigation fluide et instantanée sans rechargement de page grâce à `react-router-dom`.
* **Catalogue Structuré par Catégories :** Affichage dynamique et scannable de 20 produits agricoles stratégiques (dont la Papaye Calina IPB9 Premium, mangues, avocats, productions avicoles et maraîchères).
* **Gestion du Panier en Temps Réel :** Système de panier intelligent développé avec l'API `Context` de React, permettant le cumul automatique des quantités d'un même produit.
* **Contrôles de Saisie Précis :** Chaque fiche produit intègre un ajustement manuel des quantités via champ numérique et boutons d'incrémentation/décrémentation (`+` / `-`).
* **Zéro Avertissement de Validation :** Utilisation stricte de `prop-types` sur l'ensemble des composants pour éliminer les erreurs ESLint de validation de propriétés.
* **Design Tropical Professionnel :** Interface soignée structurée avec **CSS Grid**, arborant une charte graphique épurée basée sur des tons oranges et sombres, reflétant le dynamisme de l'agribusiness moderne.

---

## 📁 Architecture du Projet

Le code source suit une structure modulaire stricte pour garantir sa maintenabilité :

```text
chariot-agricole/
├── public/
│   ├── images/             # Photos des productions de la ferme
│   ├── _redirects          # Configuration du routage SPA pour le déploiement Netlify
│   └── products.json       # Base de données locale (20 produits agricoles figés)
├── src/
│   ├── components/         # Composants d'interface réutilisables
│   │   ├── CartItem.jsx    # Ligne unitaire d'un produit dans le panier
│   │   ├── Navbar.jsx      # Barre de navigation avec badge dynamique
│   │   └── ProductCard.jsx # Fiche produit avec sélecteur de quantité manuel
│   ├── context/
│   │   └── CartContext.jsx # Moteur global du panier (Context API & Hook useCart)
│   ├── pages/              # Vues principales de l'application
│   │   ├── Cart.jsx        # Page récapitulative et calculs financiers (FCFA)
│   │   ├── Home.jsx        # Vitrine de marque de l'exploitation L'Aigle Royal
│   │   └── Shop.jsx        # Le marché en ligne classé par catégories
│   ├── services/
│   │   └── api.js          # Consommation asynchrone des données JSON locales
│   ├── App.jsx             # Configuration des routes de l'application
│   ├── main.jsx            # Point d'entrée React enveloppé par le CartProvider
│   └── index.css           # Charte graphique globale et mise en page responsive
├── package.json            # Manifeste des dépendances et scripts
└── README.md               # Documentation du projet