import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { signUp, signIn } from "../../Components/Services/userService";
import "./formulaireAdmin.css";

const FormulaireAdmin = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    prenom: "", 
    email: "", 
    password: "" 
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const response = await signUp({ ...formData, role: "admin" });
      alert("Compte Admin créé avec succès !");
      
      // 🔥 CONNEXION AUTOMATIQUE APRÈS INSCRIPTION
      try {
        const loginResponse = await signIn({ 
          email: formData.email, 
          password: formData.password 
        });
        
        if (loginResponse.user && loginResponse.user.role === "admin") {
          // Stocker les infos utilisateur de manière SÉCURISÉE
          const userData = loginResponse.user || {};
          const token = loginResponse.token || "";
          
          localStorage.setItem("adminUser", JSON.stringify(userData));
          localStorage.setItem("adminToken", token);
          
          // Redirection immédiate vers le profil admin
          navigate("/profiles/admin");
        } else {
          setError("Accès réservé aux administrateurs");
        }
      } catch (loginErr) {
        setError("Compte créé mais échec de la connexion automatique");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Échec de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const response = await signIn({ 
        email: formData.email, 
        password: formData.password 
      });
      
      console.log("Réponse connexion:", response);
      
      // Vérifier le rôle de l'utilisateur
      if (response.user && response.user.role === "admin") {
        alert(`Bienvenue Admin, ${response.user.name} !`);
        
        // 🔥 STOCKAGE SÉCURISÉ des données
        const userData = response.user || {};
        const token = response.token || "";
        
        localStorage.setItem("adminUser", JSON.stringify(userData));
        localStorage.setItem("adminToken", token);
        
        // Navigation vers /profiles/admin
        navigate("/profiles/admin");
      } else {
        setError("Accès réservé aux administrateurs");
      }
    } catch (err) {
      console.error("Erreur connexion:", err);
      setError(err.response?.data?.message || "Email ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Formulaire de Connexion */}
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h2 className="title">Connexion Admin</h2>
            <div className="input-field">
              <MdEmail className="icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <input 
              type="submit" 
              value={loading ? "Connexion..." : "Se connecter"} 
              className="btn solid" 
              disabled={loading}
            />
          </form>

          {/* Formulaire d'Inscription */}
          <form onSubmit={handleSignUp} className="sign-up-form">
            <h2 className="title">Créer un compte Admin</h2>
            <div className="input-field">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Nom"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Prénom"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <MdEmail className="icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <input 
              type="submit" 
              value={loading ? "Création..." : "Créer le compte"} 
              className="btn solid" 
              disabled={loading}
            />
          </form>
        </div>
      </div>

      {/* Panneaux latéraux */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Nouveau Admin ?</h3>
            <p>Créez votre compte pour gérer la clinique et le personnel.</p>
            <button 
              className="btn transparent" 
              onClick={() => setIsSignUpMode(true)}
              disabled={loading}
            >
              S'inscrire
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Déjà inscrit ?</h3>
            <p>Connectez-vous pour accéder à votre espace Admin.</p>
            <button 
              className="btn transparent" 
              onClick={() => setIsSignUpMode(false)}
              disabled={loading}
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>

      {error && <div className="error-banner">{error}</div>}
    </div>
  );
};

export default FormulaireAdmin;