// Importation des dépendances
import React, { useState } from "react"; // useState pour gérer l'état du menu mobile
import { Link } from "react-router-dom"; // Link pour naviguer entre les pages avec React Router
import styles from "./navbar.module.css"; // Import du fichier CSS module (scopé uniquement à ce composant)

// ===== Composant Navbar =====
const Navbar = () => {
  // État qui contrôle l'ouverture/fermeture du menu mobile (burger menu)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}> {/* Élément principal de la barre de navigation */}
      <div className={styles.navContainer}> {/* Conteneur interne pour aligner les éléments */}

        {/* ==== Logo de la clinique ==== */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🏥</span> {/* Icône/logo */}
          <span className={styles.logoText}>Clinique Santé</span> {/* Texte du logo */}
        </div>

        {/* ==== Liens de navigation ==== */}
        {/* Ajout de la classe "active" si le menu mobile est ouvert */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ""}`}>
          <Link to="/" className={styles.navLink}>Accueil</Link>
          <Link to="/services" className={styles.navLink}>Services</Link>
          <Link to="/about" className={styles.navLink}>À propos</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          {/* Bouton spécial pour espace médecin */}
          <Link to="/medecin" className={styles.navButton}>Espace Médecin</Link>
        </div>

        {/* ==== Bouton Burger (menu mobile) ==== */}
        <button 
          className={styles.menuToggle} // Bouton stylisé pour mobile
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Inverse l'état (ouvrir/fermer menu)
        >
          {/* Trois barres horizontales pour l’icône burger */}
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

// Exportation du composant pour pouvoir l’utiliser ailleurs (Accueil, etc.)
export default Navbar;
