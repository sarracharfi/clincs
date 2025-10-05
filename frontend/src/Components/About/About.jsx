import React from 'react';
import styles from "./About.module.css"; 
// Import de React et des styles CSS spécifiques au composant About

// Composant fonctionnel "About" qui représente la page À propos
const About = () => {
  return (
    <div className={styles.container}>
      {/* ====== En-tête de la page ====== */}
      <div className={styles.header}>
        {/* Titre principal */}
        <h1 className={styles.title}>À propos</h1>
        {/* Ligne de séparation sous le titre */}
        <div className={styles.divider}></div>
      </div>

      {/* ====== Contenu principal ====== */}
      <div className={styles.content}>

        {/* ----- Section 1 : Présentation de la clinique ----- */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            {/* Icône pour illustrer la section */}
            <div className={styles.sectionIcon}>🏥</div>
            {/* Titre de la section */}
            <h2 className={styles.sectionTitle}>Notre Clinique</h2>
          </div>
          {/* Description de la clinique */}
          <p className={styles.description}>
            Une solution moderne et centralisée dédiée à la gestion des services cliniques, 
            permettant d’améliorer la prise en charge des patients, la coordination des équipes 
            médicales et l’optimisation des ressources.
          </p>
        </section>

        {/* ----- Section 2 : Objectifs clés ----- */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>🎯</div> {/* Icône objectif */}
            <h2 className={styles.sectionTitle}>Objectifs Clés</h2>
          </div>

          {/* Liste des objectifs principaux */}
          <ul className={styles.featuresList}>
            {/* Objectif 1 : Qualité des soins */}
            <li className={styles.featureItem}>
              <span className={styles.featureIcon}>→</span> {/* Flèche pour illustrer */}
              <div>
                <h3>Qualité des soins</h3>
                <p>Suivi optimal des patients et amélioration continue du service médical.</p>
              </div>
            </li>

            {/* Objectif 2 : Organisation */}
            <li className={styles.featureItem}>
              <span className={styles.featureIcon}>→</span>
              <div>
                <h3>Organisation</h3>
                <p>Planification simplifiée des rendez-vous et gestion des ressources médicales.</p>
              </div>
            </li>

            {/* Objectif 3 : Communication */}
            <li className={styles.featureItem}>
              <span className={styles.featureIcon}>→</span>
              <div>
                <h3>Communication</h3>
                <p>Meilleure interaction entre médecins, réceptionnistes et patients.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* ----- Section 3 : Fonctionnalités principales ----- */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>✨</div> {/* Icône pour la section fonctionnalités */}
            <h2 className={styles.sectionTitle}>Fonctionnalités</h2>
          </div>

          {/* Conteneur des cartes de fonctionnalités */}
          <div className={styles.cardContainer}>
            {/* Carte 1 : Sécurité des données */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔒</div>
              <h3 className={styles.cardTitle}>Sécurité des données</h3>
              <p className={styles.cardText}>
                Protection des dossiers médicaux avec des protocoles sécurisés.
              </p>
            </div>

            {/* Carte 2 : Gestion des rendez-vous */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>📅</div>
              <h3 className={styles.cardTitle}>Gestion des rendez-vous</h3>
              <p className={styles.cardText}>
                Réservation et suivi simplifiés pour les patients et médecins.
              </p>
            </div>

            {/* Carte 3 : Tableau de bord médical */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>📊</div>
              <h3 className={styles.cardTitle}>Tableau de bord médical</h3>
              <p className={styles.cardText}>
                Indicateurs clairs pour le suivi de l’activité et l’amélioration des soins.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Export du composant pour pouvoir l’utiliser dans d’autres fichiers
export default About;
