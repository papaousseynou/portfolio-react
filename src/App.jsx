import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CompetencesPage from "./components/pages/CompetencesPage";
import ConnexionPage from "./components/pages/ConnexionPage";
import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/competences" element={<CompetencesPage />} />
        <Route path="/connexion" element={<ConnexionPage />} />
        <Route path="/blank" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
