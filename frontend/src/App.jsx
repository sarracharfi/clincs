import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Pages publiques
import Accueil from "./Components/Accueil/Accueil";

// Formulaires
import FormulaireAdmin from "./Formulaires/FormulaireAdmin/FormulaireAdmin";
import FormulaireMedecin from "./Formulaires/FormulaireMedecin/FormulaireMedecin";
import FormulairePatient from "./Formulaires/FormulairePatient/FormulairePatient";
import FormulaireReceptionniste from "./Formulaires/FormulaireReceptionniste/FormulaireReceptionniste";

// Profils
import MedecinProfile from "./Components/Profiles/Medecin/MedecinProfile";
import PatientProfile from "./Components/Profiles/Patient/PatientProfile";
import AdminProfile from "./Components/Profiles/Admin/AdminProfile";
import ReceptionnisteProfile from "./Components/Profiles/Receptionniste/ReceptionnisteProfile";

function App() {
  const [loading, setLoading] = useState(false); // si tu utilises splash

  if (loading) return <div>Chargement...</div>; // Ou ton SplashScreen

  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Accueil />} />

        {/* Routes Signup */}
        <Route path="/signup/admin" element={<FormulaireAdmin />} />
        <Route path="/signup/medecin" element={<FormulaireMedecin />} />
        <Route path="/signup/patient" element={<FormulairePatient />} />
        <Route path="/signup/reception" element={<FormulaireReceptionniste />} />

        {/* Profils */}
        <Route path="/profiles/medecin" element={<MedecinProfile />} />
        <Route path="/profiles/patient" element={<PatientProfile />} />
        <Route path="/profiles/admin" element={<AdminProfile />} />
        <Route path="/profiles/receptionniste" element={<ReceptionnisteProfile />} />

        {/* Si aucune route ne matche, rediriger vers l'accueil */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
