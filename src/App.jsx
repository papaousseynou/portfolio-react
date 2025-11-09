import "./App.css";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ConnexionPage from "./components/pages/ConnexionPage";
import BlankPage from "./components/pages/BlankPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/connexion" element={<ConnexionPage />} />
        <Route path="/blank" element={<blankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
