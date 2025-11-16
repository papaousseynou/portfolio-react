import { useState } from "react";

export default function ProjectItem({ obj }) {
  //Declaration d'un state Hide Show (Bool) => Voir plus
  const [showMore, setShowMore] = useState(false);

  //Handler sur le boutton voir plus
  const showMoreHandler = () => {
    //Negation de la bool actuel de showMore true => false , false => true
    setShowMore((showMore) => !showMore);
  };
  return (
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
        <span
          onClick={showMoreHandler}
          className="text-white font-[‘Montserrat’,sans-serif] text-xl sm:text-2xl lg:text-3xl leading-tight italic cursor-pointer"
        >
          {obj.libelle}
        </span>
        <p className="mt-3 italic text-sm text-gray-300">{obj.description}</p>
        {showMore && (
          <div className="mt-3 flex flex-row flex-wrap gap-2">
            {obj.technologies?.map((t, idx) => (
              <span
                key={idx}
                className="text-xs bg-black rounded-full border border-white text-white px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {showMore && (
          <div className="mt-3 flex flex-row flex-wrap gap-3">
            {obj.lienGithub && (
              <button
                type="button"
                onClick={() => window.open(obj.lienGithub, "_blank")}
                className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 border border-sky-300 text-white text-xs sm:text-sm px-4 py-1.5 shadow-md shadow-sky-500/30 hover:from-sky-600 hover:via-sky-500 hover:to-cyan-500 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/40 transition-all cursor-pointer"
              >
                GitHub &gt;
              </button>
            )}
            {obj.lienDemo && (
              <button
                type="button"
                onClick={() => window.open(obj.lienDemo, "_blank")}
                className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 border border-emerald-300 text-white text-xs sm:text-sm px-4 py-1.5 shadow-md shadow-emerald-500/30 hover:from-emerald-600 hover:via-emerald-500 hover:to-lime-500 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/40 transition-all cursor-pointer"
              >
                Démo &gt;
              </button>
            )}
          </div>
        )}

        {showMore && (
          <div className="text-sm mt-3 ml-1">
            <div className="mt-2">
              <span className="border border-red-500 p-1">Date de debut :</span>{" "}
              {obj.dateDebut}
            </div>
            <div className="mt-2">
              <span className="border border-red-500 p-1">Date de fin :</span>{" "}
              {obj.dateFin}
            </div>
            <div className="mt-2 mb-5">
              <span className="border border-red-500 p-1">Statut :</span>{" "}
              <span className="text-bold">{obj.statut}</span>
            </div>
          </div>
        )}
        <button
          className={
            showMore
              ? "mt-4 inline-flex items-center justify-center w-[55%] sm:w-[35%] md:w-[25%] rounded-full border border-gray-300 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white text-xs sm:text-sm font-medium px-4 py-2 shadow-md shadow-gray-800/40 hover:from-black hover:via-black hover:to-slate-900 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30 transition-all cursor-pointer"
              : "mt-4 inline-flex items-center justify-center w-[55%] sm:w-[35%] md:w-[25%] rounded-full border border-red-400 bg-gradient-to-r from-red-600 via-rose-500 to-orange-400 text-white text-xs sm:text-sm font-medium px-4 py-2 shadow-md shadow-red-500/40 hover:from-red-700 hover:via-rose-600 hover:to-orange-500 hover:border-yellow-300 hover:shadow-lg hover:shadow-red-500/60 transition-all cursor-pointer"
          }
          onClick={showMoreHandler}
        >
          {showMore ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </div>
  );
}
