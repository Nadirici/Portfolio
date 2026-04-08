export const siteConfig = {
  name: "Nadir Nehili",
  title: "Étudiant Ingénieur IA & Data",
  description: "Portfolio de Nadir Nehili — IA, Data Engineering & Machine Learning",
  accentColor: "#1d4ed8",
  photo: "/images/profile.jpg",
  social: {
    email: "nadir1401@gmail.com",
    linkedin: "https://www.linkedin.com/in/nadir-n-196628292/",
    github: "https://github.com/Nadirici",
  },
  aboutMe:
    "Étudiant ingénieur en dernière année à CY Tech, spécialisé en IA et Data. Ce qui m'attire dans ce domaine, c'est de prendre un volume de données qui paraît intimidant et d'en faire quelque chose d'utile sur lequel on peut vraiment décider. Je suis rigoureux et j'aime aller au fond des choses. Quand quelque chose ne se passe pas comme prévu, j'apprends à analyser ce qui a coincé, ajuster et repartir. En dehors du travail, je joue aux échecs et aux jeux vidéo, je lis, et je pratique la musculation. Des activités différentes mais qui ont toutes un point commun : la progression se construit dans la régularité.",
  skills: [
    "Python",
    "PySpark",
    "SQL",
    "Apache Spark",
    "Airflow",
    "Docker",
    "TensorFlow",
    "PyTorch",
    "Kedro",
    "Streamlit",
    "MLOps",
    "Hadoop",
  ],
  projects: [
    {
      name: "Prédiction du Sepsis par Modèles de Diffusion",
      description:
        "Classification semi-supervisée de séries temporelles cliniques pour la détection précoce du sepsis. Adaptation de Diffusion-TS (ICLR 2024) pour gérer un fort déséquilibre de classes (~2,3% de positifs) via génération de données synthétiques conditionnelles. AUROC de 0,87 contre 0,83 pour le BiLSTM de référence, avec seulement 10% de données labellisées.",
      link: "https://github.com/BigYellowData/diffusion-ts-sepsis",
      skills: ["Python", "PyTorch", "Modèles de Diffusion", "Transformers", "LSTM"],
    },
    {
      name: "NYC Taxi — Pipeline Data Engineering End-to-End",
      description:
        "Pipeline de data engineering complet sur les données NYC Yellow Taxi : ingestion dans MinIO (S3), schéma en étoile sous PostgreSQL, orchestration Airflow, dashboard Streamlit et service de prédiction du tarif (Random Forest). Tout containerisé avec Docker Compose.",
      link: "https://github.com/BigYellowData/BigYellowData",
      skills: ["PySpark", "Airflow", "MinIO", "PostgreSQL", "Streamlit", "Docker"],
    },
    {
      name: "Prédiction de la Qualité de l'Air — Paris",
      description:
        "Pipeline ELT complet qui récupère en temps réel les données de pollution et météo via l'API OpenAQ, les stocke dans MySQL, et fait tourner un modèle LSTM pour prévoir la qualité de l'air sur 24 heures. Précision des prédictions jusqu'à 88%.",
      link: "https://github.com/Nadirici/AirQualityPrediction---Paris",
      skills: ["Python", "LSTM", "MySQL", "ETL", "Séries Temporelles"],
    },
    {
      name: "Optimisation des Recharges de Véhicules Électriques",
      description:
        "Optimisation multi-objectif des plannings de recharge VE via l'algorithme MODE (Differential Evolution Multi-Objectif). Équilibre trois objectifs en tension : coût de recharge, satisfaction utilisateur (état de charge à la sortie) et pic de demande réseau. Génère des fronts de Pareto complets avec 100 solutions non dominées.",
      link: "https://github.com/BigYellowData/EV_Charging_Optimization",
      skills: ["Python", "Algorithmes Évolutionnaires", "Optimisation", "Docker"],
    },
    {
      name: "Pipeline MLOps — Prédiction d'Achat",
      description:
        "Projet ML orienté production développé avec Kedro. Pipelines de data engineering et de modélisation structurés, workflows reproductibles, pre-commit hooks et intégration pytest. Suit les bonnes pratiques MLOps pour la maintenabilité et la reproductibilité.",
      link: "https://github.com/Nadirici/MLOPS",
      skills: ["Python", "Kedro", "MLOps", "pytest", "CI/CD"],
    },
    {
      name: "Dashboard d'Analyse du Risque Diabétique",
      description:
        "Dashboard Streamlit interactif analysant plus de 800 dossiers patients pour identifier les facteurs de risque du diabète de type 2. Explore les corrélations entre âge, IMC, sexe et habitudes de vie. Génération automatique de rapports PDF.",
      link: "https://github.com/Nadirici/diabetes-analysis-dashboard",
      skills: ["Python", "Streamlit", "Pandas", "Analyse de Données"],
    },
  ],
  experience: [
    {
      company: "Alignerr",
      logo: "/images/alignerr.jpg",
      title: "AI Trainer — Freelance",
      dateRange: "Sep 2025 - Mar 2026",
      bullets: [
        "Évaluation de réponses générées par des LLMs sur des codebases réelles pour le compte d'Anthropic : comparaison et notation de paires de réponses, vérification que le code produit est production-ready (lisibilité, robustesse, bonnes pratiques).",
        "Participation à l'amélioration de modèles d'IA en situation réelle : analyse de scénarios complexes fournis via des fichiers YAML, évaluation des risques identifiés par l'agent et validation de la qualité de ses raisonnements et décisions.",
      ],
    },
    {
      company: "Outlier",
      logo: "/images/outlier.jpg",
      title: "Data Labeler — Freelance",
      dateRange: "Fév 2025 - Août 2025",
      bullets: [
        "Constitution et structuration de jeux de données d'entraînement fiables pour 4 modèles d'IA.",
        "Application de techniques de nettoyage et contrôle qualité sur de grands volumes de données.",
        "Environnement international anglophone, coordination avec les équipes basées à San Francisco.",
      ],
    },
    {
      company: "Woo'déco",
      logo: "/images/woodeco.jpg",
      title: "Développeur Web — Stage",
      dateRange: "Juin 2024 - Sep 2024",
      bullets: [
        "Développement d'une plateforme e-commerce générant 200 visites journalières, intégrant 3 outils d'analyse.",
        "Suivi et reporting des performances trafic, ventes et SEO — visibilité améliorée de 75%.",
      ],
    },
  ],
  education: [
    {
      school: "CY Tech (ex-EISTI)",
      logo: "/images/cytech.png",
      degree: "Titre d'Ingénieur — Génie des Systèmes d'Information, spécialité IA",
      dateRange: "2021 - 2026",
      achievements: [
        "Projet de fin d'études : prédiction du trafic 5G pour l'optimisation de l'allocation de bande passante (URLLC, mMTC, eMBB).",
        "Cours principaux : Machine Learning, Deep Learning, Big Data, Cloud, Génie Logiciel.",
        "Membre actif de CY Junior Engineering.",
      ],
    },
    {
      school: "Bahçeşehir Üniversitesi (BAU) — Istanbul",
      logo: "/images/bau.png",
      degree: "Échange Académique — Computer Engineering",
      dateRange: "Fév 2025 - Juin 2025",
      achievements: [
        "Semestre à l'étranger à Istanbul, entièrement dispensé en anglais.",
        "Cours en algorithmique avancée, systèmes distribués et architecture logicielle.",
      ],
    },
  ],
};
