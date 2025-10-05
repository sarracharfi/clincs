import React, { useState } from 'react';
import styles from './MedecinProfile.module.css'; // Import du CSS spécifique pour ce composant
import { Outlet } from 'react-router-dom'; // Outlet permet d'afficher les routes enfants dans ce composant
import SideBarMedecin from "./SideBarMedecin/SideBarMedecin"; // Import de la sidebar du médecin

// ===== Composant MedecinProfile =====
const MedecinProfile = () => {
  // État pour savoir si la sidebar est réduite ou non
  const [collapsed, setCollapsed] = useState(false);

  return ( 
    // Conteneur principal de la page médecin
    <div className={styles.container}>
      <div className={styles.subContainer}>

        {/* ===== Sidebar du médecin ===== */}
        <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ''}`}>
          <div className={styles.sideMenu}>
            {/* Passage des props collapsed et setCollapsed à SideBarMedecin */}
            <SideBarMedecin 
              collapsed={collapsed} // Indique si la sidebar est réduite
              setCollapsed={setCollapsed} // Fonction pour changer l'état
            /> 
          </div>
        </div>

        {/* ===== Contenu principal (Body) ===== */}
        {/* Ajout de la classe collapsedBody si la sidebar est réduite pour ajuster le layout */}
        <div className={`${styles.body} ${collapsed ? styles.collapsedBody : ''}`}>
          {/* Outlet affiche les composants enfants selon la route (ex : Agenda, Dossiers, Ordonnances) */}
          <Outlet />
        </div>

      </div>
    </div>
  );
};

// Export du composant pour l'utiliser dans le routeur
export default MedecinProfile;
