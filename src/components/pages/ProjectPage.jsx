/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import photo02 from "../../assets/photo02.jpg";

const ProjectPage = () => {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/projets");
        setProjets(res.data);
      } catch (e) {
        setError("Erreur lors du chargement des projets");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative mt-6 sm:mt-10 w-full h-48 sm:h-64 lg:h-80 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div
          style={{ backgroundImage: `url(${photo02})` }}
          className="absolute inset-0 bg-center bg-cover"
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="font-[‘Montserrat’,sans-serif] text-lg leading-tight text-white bg-black/50 p-2 rounded-lg border-2 border-red-500">
            N&nbsp; o&nbsp; s &nbsp;&nbsp;&nbsp;&nbsp;p&nbsp; r&nbsp; o &nbsp;j
            &nbsp;e &nbsp;t &nbsp;s
          </h2>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 w-full h-fit border border-gray-200/30 rounded-lg">
        {loading && (
          <div className="p-4 text-sm text-gray-300">Chargement...</div>
        )}
        {error && <div className="p-4 text-sm text-red-400">{error}</div>}
        {!loading &&
          !error &&
          projets.map((obj) => (
            <div
              key={obj.id}
              className="relative m-4 sm:m-6 lg:m-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            >
              <img
                src={obj.image}
                alt={obj.libelle}
                className="block w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border border-gray-200"
              />
              <div className="hidden md:block h-full bg-white/50 w-px"></div>
              <div className="flex flex-col w-full md:flex-1">
                <span className="text-white font-[‘Montserrat’,sans-serif] text-xl sm:text-2xl lg:text-3xl leading-tight italic ">
                  {obj.libelle}
                </span>
                <p className="mt-3 italic text-sm text-gray-300">
                  {obj.description}
                </p>
                <div className="mt-3 flex flex-row flex-wrap gap-2">
                  {obj.technologies?.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-black rounded-full border border-red-500 text-white px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-row flex-wrap gap-3">
                  {obj.lienGithub && (
                    <button
                      type="button"
                      onClick={() => window.open(obj.lienGithub, "_blank")}
                      className="bg-black rounded-full border border-red-500 text-white text-sm px-3 py-1.5 transition-colors cursor-pointer"
                    >
                      GitHub
                    </button>
                  )}
                  {obj.lienDemo && (
                    <button
                      type="button"
                      onClick={() => window.open(obj.lienDemo, "_blank")}
                      className="bg-black rounded-full border border-red-500 text-white text-sm px-3 py-1.5 transition-colors cursor-pointer"
                    >
                      Démo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectPage;
