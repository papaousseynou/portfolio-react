/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import photo02 from "../../assets/photo02.jpg";
import CompetenceItem from "../others/CompetenceItem";

export default function CompetencesPage({ sharedState }) {
  const navigate = useNavigate();
  const [competences, setCompetences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/competences");
        setCompetences(res.data);
        console.log(competences);
      } catch (e) {
        setError("Erreur lors du chargement des competences");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="text-white">
      <div className="relative mt-6 sm:mt-10 w-full h-48 sm:h-64 lg:h-80 border border-gray-200 rounded-lg shadow-sm overflow-hidden max-w-7xl mx-auto">
        <div
          style={{ backgroundImage: `url(${photo02})` }}
          className="absolute inset-0 bg-center bg-cover"
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* overlay semi-sombre */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="font-[‘Montserrat’,sans-serif] text-lg leading-tight text-white bg-black/50 p-2 rounded-lg border-2 border-red-500">
            N&nbsp; o&nbsp; s &nbsp;&nbsp;&nbsp;&nbsp;c&nbsp; o&nbsp; m &nbsp;p
            &nbsp;e &nbsp;t &nbsp;e &nbsp;n &nbsp;c &nbsp;e &nbsp;s
          </h2>
        </div>
      </div>

      {/* Bouton d'accès à l'administration, visible uniquement pour l'admin connecté */}
      {sharedState?.user?.role === "admin" && (
        <div className="mt-6 w-full max-w-7xl mx-auto flex justify-end px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("/admin/competences")}
            className="inline-flex items-center rounded-full border border-transparent bg-red-600 bg-origin-padding px-4 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-red-700 hover:ring-2 hover:ring-red-500 transition-colors"
          >
            Gérer les compétences
          </button>
        </div>
      )}

      <div className="mt-8 sm:mt-10 w-full max-w-7xl mx-auto h-fit border border-gray-200/30 rounded-lg px-4 sm:px-6 lg:px-8">
        {loading && (
          <div className="p-4 text-sm text-gray-300">Chargement...</div>
        )}
        {error && <div className="p-4 text-sm text-red-400">{error}</div>}
        {!loading &&
          !error &&
          competences.map((obj) => (
            <CompetenceItem key={obj.id} obj={obj}></CompetenceItem>
          ))}
      </div>
      <div className="absolute bottom-5 right-5 text-white text-sm">
        Y &nbsp; O &nbsp; U &nbsp; Z &nbsp; D &nbsp; O &nbsp; U &nbsp; C
        &nbsp;&nbsp;
        <span className="border border-red-500 rounded-full p-1">TM</span>
      </div>
    </div>
  );
}
