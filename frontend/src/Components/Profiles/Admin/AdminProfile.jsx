import React, { useState } from "react";
import styles from "./AdminProfile.module.css";
import { Outlet } from "react-router-dom";
import SideBarAdmin from "./SideBarAdmin/SideBarAdmin";

// ===== Composant AdminProfile =====
const AdminProfile = () => {
  const [collapsed, setCollapsed] = useState(false); // état sidebar

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>

        {/* ===== Sidebar de l'admin ===== */}
        <div className={`${styles.sideBar} ${collapsed ? styles.collapsed : ""}`}>
          <div className={styles.sideMenu}>
            <SideBarAdmin
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          </div>
        </div>

        {/* ===== Contenu principal ===== */}
        <div className={`${styles.body} ${collapsed ? styles.collapsedBody : ""}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
