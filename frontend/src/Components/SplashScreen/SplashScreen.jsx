// src/Components/SplashScreen/SplashScreen.jsx
import React, { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onFinish(); // Passe à l'app principale
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={styles.splashContainer}>
      <div className={styles.splashContent}>
        <img
          src="https://img.icons8.com/color/512/medical-heart.png" // Logo médical réel
          alt="Logo Clinique "
          className={styles.logo}
        />
        <h1 className={styles.title}>Clinique</h1>
        <p className={styles.subtitle}>Votre santé, notre priorité</p>
        
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progress} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className={styles.progressText}>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;