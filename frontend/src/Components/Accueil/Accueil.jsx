// src/components/Accueil/Accueil.jsx
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"; 
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUp/SignUpModal";
import LoginModal from "../Login/LoginModal";
import styles from "./accueil.module.css";

const Accueil = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <div className={styles.mainContainer}>
      {/* Navbar Professionnelle */}
      <Navbar
        onLoginClick={() => setIsLoginModalOpen(true)}
        onSignUpClick={() => setIsSignUpModalOpen(true)}
      />

      {/* Modals */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Section Hero avec effet 3D */}
      <section className={styles.heroSection} id="accueil">
        <div className={styles.background3D}>
          <div className={styles.floatingShapes}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine}>Votre Santé</span>
              <span className={styles.titleLine}>Notre Priorité</span>
            </h1>
            <p className={styles.subtitle}>
              Des soins médicaux d'excellence dans un environnement moderne et chaleureux. 
              Notre équipe dévouée vous accompagne vers un mieux-être durable.
            </p>
            <div className={styles.ctaGroup}>
              <button className={styles.primaryCta} onClick={() => setIsSignUpModalOpen(true)}>
                S'inscrire
              </button>
              <button className={styles.secondaryCta} onClick={() => setIsLoginModalOpen(true)}>
                Connexion
              </button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image3D}>
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern medical equipment and team"
                className={styles.mainImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nos Services Médicaux</h2>
          <p className={styles.sectionSubtitle}>Des soins complets pour toute la famille</p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🫀</div>
            <h3>Cardiologie</h3>
            <p>Soins cardiaques spécialisés avec technologies de pointe</p>
            <button className={styles.serviceBtn}>Découvrir</button>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🧠</div>
            <h3>Neurologie</h3>
            <p>Diagnostic et traitement des troubles neurologiques</p>
            <button className={styles.serviceBtn}>Découvrir</button>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🦴</div>
            <h3>Orthopédie</h3>
            <p>Soins musculo-squelettiques et rééducation</p>
            <button className={styles.serviceBtn}>Découvrir</button>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>👁️</div>
            <h3>Ophtalmologie</h3>
            <p>Examens de la vue et chirurgies oculaires</p>
            <button className={styles.serviceBtn}>Découvrir</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Accueil;
