import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './login.module.css';
import { Button, TextField } from "@mui/material";
import { FaTimes } from "react-icons/fa"; 
import { signIn } from "../Services/userService";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const response = await signIn({ email, password });
      console.log("Réponse connexion:", response);
      
      // Stocker le token et les infos utilisateur
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("isAuthenticated", "true");
      
      // Redirection vers le profil selon le rôle
      redirectToDashboard(response.user.role);
      handleClose();
      
    } catch (err) {
      console.error("Erreur connexion:", err);
      let msg = "Erreur, Réessayez.";
      if (err.response?.data?.message) {
        msg = err.response.data.message;
      } else if (err.message) {
        msg = err.message;
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const redirectToDashboard = (role) => {
    const routes = {
      admin: "/profiles/admin",
      receptionniste: "/profiles/receptionniste",
      medecin: "/profiles/medecin",
      patient: "/profiles/patient"
    };
    
    const route = routes[role];
    if (route) {
      navigate(route, { replace: true });
    } else {
      console.warn(`Route non définie pour le rôle: ${role}`);
      navigate("/", { replace: true });
    }
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setError("");
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button 
          className={styles.closeButton} 
          onClick={handleClose}
          aria-label="close"
          disabled={loading}
        >
          <FaTimes />
        </button>
        
        <div className={styles.modalHeader}>
          <h2>Connexion</h2>
        </div>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <TextField
              className={styles.textfield}
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              required
              fullWidth
              disabled={loading}
            />
          </div>
          
          <div className={styles.formGroup}>
            <TextField
              className={styles.textfield}
              type="password"
              label="Mot de passe"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              disabled={loading}
            />
          </div>
          
          <div className={styles.btns}>
            <Button 
              className={styles.btnStyle}
              variant="contained"
              type="submit" 
              color="primary"
              disabled={loading}
              fullWidth
            >
              {loading ? "Connexion..." : "Se connecter"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;