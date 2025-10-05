import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./sideBarAdmin.module.css";

// ===== Composant SideBarAdmin =====
const SideBarAdmin = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ""}`}>

      {/* ===== Logo ===== */}
      <div className={styles.logoContainer}>
        <img
          src="/src/assets/admin-logo.jpg"
          alt="icon"
          className={styles.logo}
        />
        <h2 className={styles.title}></h2>
      </div>

      {/* ===== Burger ===== */}
      <div className={styles.burgerContainer} onClick={toggleSidebar}>
        <div className={styles.burgerMenu}></div>
      </div>

      {/* ===== Profil Admin ===== */}
      <div className={styles.profileContainer}>
        <img
          src="/src/assets/admin.jpg"
          alt="profile"
          className={styles.profileImage}
        />
        <div className={styles.profileContents}>
          <p className={styles.name}>Admin Sarra</p>
          <p className={styles.email}>admin@clinique.com</p>
        </div>
      </div>

      {/* ===== Menu ===== */}
      <div className={styles.contentsContainer}>
        <ul>
         
          <li className={location.pathname.includes("/creation-clinique") ? styles.active : ""}>
            <NavLink to="creation-clinique">🏥 Création Clinique</NavLink>
          </li>

          <li className={location.pathname.includes("/configuration-services") ? styles.active : ""}>
            <NavLink to="configuration-services">⚙️ Configuration des Services</NavLink>
          </li>

          <li className={location.pathname.includes("/gestion-staff") ? styles.active : ""}>
            <NavLink to="gestion-staff">👩‍⚕️ Gestion du Staff</NavLink>
          </li>

          <li className={location.pathname.includes("/parametres") ? styles.active : ""}>
            <NavLink to="parametres">🔧 Paramètres</NavLink>
          </li>

          <li>
            <NavLink to="/">🚪 Déconnexion</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarAdmin;
