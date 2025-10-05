// src/components/Auth/FormulaireReceptionniste.jsx
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { signUp, signIn } from '../../Components/Services/userService';
import "./formulaireReceptionniste.css";

const FormulaireReceptionniste = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp({
        ...formData,
        role: "receptionniste",
      });
      alert("Compte Réceptionniste créé avec succès !");
      setIsSignUpMode(false);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'inscription");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await signIn({
        email: formData.email,
        password: formData.password,
      });
      alert(`Bienvenue ${response.user.name} !`);
    } catch (err) {
      console.error(err);
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">

          {/* Connexion */}
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h2 className="title">Connexion Réceptionniste</h2>
            <div className="input-field">
              <MdEmail className="icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
              />
            </div>
            <input type="submit" value="Se connecter" className="btn solid" />
          </form>

          {/* Inscription */}
          <form onSubmit={handleSignUp} className="sign-up-form">
            <h2 className="title">Créer un compte Réceptionniste</h2>

            <div className="input-field">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Nom"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
              />
            </div>

            <input type="submit" value="Créer le compte" className="btn solid" />
          </form>
        </div>
      </div>

      {/* Panneaux */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Nouveau Réceptionniste ?</h3>
            <p>Créez votre compte pour gérer vos tâches.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(true)}>
              S'inscrire
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Déjà inscrit ?</h3>
            <p>Connectez-vous pour accéder à votre espace.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(false)}>
              Se connecter
            </button>
          </div>
        </div>
      </div>

      {error && <div className="error-banner">{error}</div>}
    </div>
  );
};

export default FormulaireReceptionniste;
