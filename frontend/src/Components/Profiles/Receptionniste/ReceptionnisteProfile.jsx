// src/components/Receptionniste/ReceptionnisteProfile.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBarReceptionniste from './SideBarReceptionniste/SideBarReceptionniste';
import styles from './ReceptionnisteProfile.module.css';

const ReceptionnisteProfile = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>

        {/* Sidebar Réceptionniste */}
        <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ''}`}>
          <SideBarReceptionniste 
            collapsed={collapsed} 
            setCollapsed={setCollapsed} 
          />
        </div>

        {/* Contenu principal */}
        <div className={`${styles.body} ${collapsed ? styles.collapsedBody : ''}`}>
          <Outlet /> {/* Affiche les pages enfants: Rendez-vous, Enregistrement, Facturation */}
        </div>

      </div>
    </div>
  );
};

export default ReceptionnisteProfile;
