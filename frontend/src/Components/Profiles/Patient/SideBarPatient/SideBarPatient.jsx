import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./sideBaePatient.module.css"; // CSS du sidebar patient

// ===== Composant SideBarPatient =====
const SideBarPatient = () => {
  const location = useLocation(); // Route actuelle
  const [collapsed, setCollapsed] = useState(false); // État pour réduire/agrandir la sidebar

  // Fonction toggle
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    // Conteneur principal
    <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ""}`}>

      {/* ===== Logo ===== */}
      <div className={styles.logoContainer}>
        <img 
          src="/src/assets/pa.png" 
          alt="logo" 
          className={styles.logo} 
        />
        <h2 className={styles.title}></h2>
      </div>

      {/* ===== Bouton burger ===== */}
      <div className={styles.burgerContainer} onClick={toggleSidebar}>
        <div className={styles.burgerMenu}></div>
      </div>

      {/* ===== Profil du patient ===== */}
      <div className={styles.profileContainer}>
        <img 
          src="/src/assets/staf.jpg" 
          alt="profile" 
          className={styles.profileImage}
        />
        <div className={styles.profileContents}>
          <p className={styles.name}>Sarra Charfi</p> {/* Nom du patient */}
          <p className={styles.email}>patient@gmail.com</p> {/* Email du patient */}
        </div>
      </div>

      {/* ===== Menu de navigation ===== */}
      <div className={styles.contentsContainer}>
        <ul>
          {/* Réservation / Modification */}
          <li className={location.pathname.includes("/reservation") ? styles.active : ""}>
            <NavLink to="reservation">📅 Réservation</NavLink>
          </li>

          {/* Paiement */}
          <li className={location.pathname.includes("/paiement") ? styles.active : ""}>
            <NavLink to="paiement">💳 Paiement</NavLink>
          </li>

          {/* Téléchargement Ordonnances PDF */}
          <li className={location.pathname.includes("/ordonnances") ? styles.active : ""}>
            <NavLink to="ordonnances">💊 Ordonnances (PDF)</NavLink>
          </li>

          {/* Paramètres */}
          <li className={location.pathname.includes("/parametres") ? styles.active : ""}>
            <NavLink to="parametres">⚙️ Paramètres</NavLink>
          </li>

          {/* Déconnexion */}
          <li>
            <NavLink to="/">🚪 Déconnexion</NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default SideBarPatient;
