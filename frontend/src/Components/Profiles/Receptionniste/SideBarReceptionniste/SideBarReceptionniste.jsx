// src/components/Receptionniste/SideBarReceptionniste/SideBarReceptionniste.jsx
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './sideBarReceptionniste.module.css';

const SideBarReceptionniste = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ''}`}>


      {/* Burger menu */}
      <div className={styles.burgerContainer} onClick={toggleSidebar}>
        <div className={styles.burgerMenu}></div>
      </div>

      {/* Profil */}
      <div className={styles.profileContainer}>
        <img src="/src/assets/receptionniste.png" alt="profile" className={styles.profileImage} />
        <div className={styles.profileContents}>
          <p className={styles.name}>Sarra Charfi</p>
          <p className={styles.email}>receptionniste@gmail.com</p>
        </div>
      </div>

      {/* Menu de navigation */}
      <div className={styles.contentsContainer}>
        <ul>
          <li className={location.pathname.includes("/rendezvous") ? styles.active : ""}>
            <NavLink to="rendezvous">📅 Rendez-vous</NavLink>
          </li>
          <li className={location.pathname.includes("/patients") ? styles.active : ""}>
            <NavLink to="patients">🧾 Enregistrement Patients</NavLink>
          </li>
          <li className={location.pathname.includes("/facturation") ? styles.active : ""}>
            <NavLink to="facturation">💳 Facturation</NavLink>
          </li>
          <li className={location.pathname.includes("/parametres") ? styles.active : ""}>
            <NavLink to="parametres">⚙️ Paramètres</NavLink>
          </li>
          <li>
            <NavLink to="/">🚪 Déconnexion</NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default SideBarReceptionniste;
