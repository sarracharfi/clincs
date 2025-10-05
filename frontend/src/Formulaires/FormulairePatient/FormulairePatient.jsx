import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaBirthdayCake, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./formulairePatient.css";
import { getUsers, signUp, signIn } from "../../Components/Services/userService";

const FormulairePatient = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    email: "",
    password: "",
    dateNaissance: "",
    telephone: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Impossible de charger les utilisateurs (vérifiez votre connexion).");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ===== Inscription Patient =====
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp({
        name: formData.name,
        prenom: formData.prenom,
        email: formData.email,
        password: formData.password,
        dateNaissance: formData.dateNaissance,
        telephone: formData.telephone,
        role: "patient",
      });
      alert("Compte Patient créé avec succès !");
      setIsSignUpMode(false);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Échec de l'inscription");
    }
  };

  // ===== Connexion Patient =====
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await signIn({
        email: formData.email,
        password: formData.password,
      });
      alert(`Bienvenue ${response.user.name} !`);
      fetchUsers();
    } catch (error) {
      console.error("Login error:", error);
      setError("Email ou mot de passe incorrect.");
    }
  };

  if (error) return <div className="error-banner">{error}</div>;

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Connexion Patient */}
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h2 className="title">Connexion Patient</h2>
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

          {/* Inscription Patient */}
          <form onSubmit={handleSignUp} className="sign-up-form">
            <h2 className="title">Créer un compte Patient</h2>
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
              <FaBirthdayCake className="icon" />
              <input
                type="date"
                placeholder="Date de naissance"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <FaPhone className="icon" />
              <input
                type="tel"
                placeholder="Téléphone"
                name="telephone"
                value={formData.telephone}
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
            <h3>Nouveau Patient ?</h3>
            <p>Créez votre compte pour accéder à votre dossier médical et rendez-vous.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(true)}>
              S'inscrire
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Déjà inscrit ?</h3>
            <p>Connectez-vous pour consulter votre dossier et vos rendez-vous.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(false)}>
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulairePatient;
