import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ConnexionPage from "./components/pages/ConnexionPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/connexion" element={<ConnexionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
