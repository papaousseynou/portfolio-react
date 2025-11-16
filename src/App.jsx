import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CompetencesPage from "./components/pages/CompetencesPage";
import ConnexionPage from "./components/pages/ConnexionPage";
import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";
import { useState } from "react";
import Toast from "./components/Toast";

function App() {

  const [sharedState, sharedStateMutator] = useState({connected : false, toast: ''})

  return (
    <Router>
      <Toast sharedState = {sharedState} sharedStateMutator = {sharedStateMutator}></Toast>
      <Navbar sharedState = {sharedState} sharedStateMutator = {sharedStateMutator} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/competences" element={<CompetencesPage />} />
        <Route path="/connexion" element={<ConnexionPage sharedState = {sharedState} sharedStateMutator = {sharedStateMutator}/>} />
        <Route path="/projets" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
