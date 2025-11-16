import "./App.css";

import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AdminCompetencesPage from "./components/pages/AdminCompetencesPage";
import AdminProjetsPage from "./components/pages/AdminProjectsPage";
import CompetencesPage from "./components/pages/CompetencesPage";
import ConnexionPage from "./components/pages/ConnexionPage";
import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  const [sharedState, sharedStateMutator] = useState({
    connected: false,
    user: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        sharedStateMutator((prev) => ({
          ...prev,
          connected: true,
          user: parsed,
        }));
      } catch (e) {
        console.error("Impossible de parser l'utilisateur stocké", e);
      }
    }
  }, []);

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <Navbar
        sharedState={sharedState}
        sharedStateMutator={sharedStateMutator}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/competences"
          element={
            <CompetencesPage
              sharedState={sharedState}
              sharedStateMutator={sharedStateMutator}
            />
          }
        />
        <Route
          path="/connexion"
          element={
            <ConnexionPage
              sharedState={sharedState}
              sharedStateMutator={sharedStateMutator}
            />
          }
        />
        <Route
          path="/projets"
          element={
            <ProjectPage
              sharedState={sharedState}
              sharedStateMutator={sharedStateMutator}
            />
          }
        />
        <Route
          path="/admin/competences"
          element={
            sharedState.connected && sharedState.user?.role === "admin" ? (
              <AdminCompetencesPage />
            ) : (
              <Navigate to="/connexion" replace />
            )
          }
        />
        <Route
          path="/admin/projets"
          element={
            sharedState.connected && sharedState.user?.role === "admin" ? (
              <AdminProjetsPage />
            ) : (
              <Navigate to="/connexion" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
