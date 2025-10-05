import React, { useState } from 'react';
import styles from './PatientProfile.module.css'; // CSS spécifique au portail patient
import { Outlet } from 'react-router-dom'; // Pour afficher les pages enfants
import SideBarPatient from "./SideBarPatient/SideBarPatient"; // Sidebar du patient

// ===== Composant PatientProfile =====
const PatientProfile = () => {
  // État pour gérer la réduction de la sidebar
  const [collapsed, setCollapsed] = useState(false);

  return (
    // Conteneur principal du portail patient
    <div className={styles.container}>
      <div className={styles.subContainer}>

        {/* ===== Sidebar du patient ===== */}
        <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ''}`}>
          <div className={styles.sideMenu}>
            {/* Passage des props collapsed et setCollapsed à la sidebar */}
            <SideBarPatient 
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          </div>
        </div>

        {/* ===== Contenu principal ===== */}
        <div className={`${styles.body} ${collapsed ? styles.collapsedBody : ''}`}>
          {/* Outlet affichera les pages enfants : Réservation, Paiement, Ordonnances */}
          <Outlet />
        </div>

      </div>
    </div>
  );
};

// Export du composant
export default PatientProfile;
