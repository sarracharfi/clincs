import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // NavLink pour navigation avec style actif, useLocation pour savoir la page courante
import styles from "./sideBarMedecin.module.css"; // Import des styles CSS du sidebar

// ===== Composant SideBarMedecin =====
const SideBarMedecin = () => {
  const location = useLocation(); // Permet de récupérer la route actuelle
  const [collapsed, setCollapsed] = useState(false); // État pour savoir si la sidebar est réduite ou non

  // Fonction pour ouvrir/fermer la sidebar (toggle)
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    // Conteneur principal de la sidebar, ajout de la classe "collapsed" si réduit
    <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ""}`}>

      {/* ===== Logo de la sidebar ===== */}
      <div className={styles.logoContainer}>
        <img src="/src/assets/logo-medecin.png" alt="icon" className={styles.logo} /> {/* Logo de la clinique/médecin */}
        <h2 className={styles.title}></h2> {/* Titre vide pour futur texte ou nom */}
      </div>

      {/* ===== Bouton burger pour réduire/agrandir ===== */}
      <div className={styles.burgerContainer} onClick={toggleSidebar}>
        <div className={styles.burgerMenu}></div> {/* Icône du burger */}
      </div>

      {/* ===== Profil du médecin ===== */}
      <div className={styles.profileContainer}>
        <img src="/src/assets/m.png" alt="profile" className={styles.profileImage}/> {/* Photo du médecin */}
        <div className={styles.profileContents}>
          <p className={styles.name}>Dr.sarra</p> {/* Nom */}
          <p className={styles.email}>medecin@gmail.com</p> {/* Email */}
        </div>
      </div>

      {/* ===== Menu de navigation ===== */}
      <div className={styles.contentsContainer}>
        <ul>
          {/* Chaque <li> vérifie si le chemin correspond à la route actuelle pour ajouter la classe "active" */}
          <li className={location.pathname.includes("/agenda") ? styles.active : ""}>
            <NavLink to="agenda">📅 Agenda</NavLink>
          </li>
          <li className={location.pathname.includes("/dossiers") ? styles.active : ""}>
            <NavLink to="dossiers">📂 Dossiers Médicaux</NavLink>
          </li>
          <li className={location.pathname.includes("/ordonnances") ? styles.active : ""}>
            <NavLink to="ordonnances">💊 Ordonnances</NavLink>
          </li>
          <li className={location.pathname.includes("/parametres") ? styles.active : ""}>
            <NavLink to="parametres">⚙️ Paramètres</NavLink>
          </li>
          {/* Lien pour déconnexion, redirige vers la page d'accueil */}
          <li>
            <NavLink to="/">🚪 Déconnexion</NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
};

// Export du composant pour pouvoir l’utiliser dans la page médecin
export default SideBarMedecin;
