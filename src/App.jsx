import "./App.css";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ConnexionPage from "./components/pages/ConnexionPage";
import BlankPage from "./components/pages/BlankPage";
import HomePage from "./components/pages/HomePage";
import CompetencesPage from "./components/pages/CompetencesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/competences" element={<CompetencesPage />} />
        <Route path="/connexion" element={<ConnexionPage />} />
        <Route path="/blank" element={<BlankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
