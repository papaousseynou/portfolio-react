import { useState } from "react";

export default function CompetenceItem({ obj }) {
  //Declaration d'un state Hide Show (Bool) => Voir plus
  const [showMore, setShowMore] = useState(false);

  //Handler sur le boutton voir plus
  const showMoreHandler = () => {
    //Negation de la bool actuel de showMore true => false , false => true
    setShowMore((showMore) => !showMore);
  };

  return (
    <div className="relative m-4 sm:m-6 lg:m-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
      <img
        src={new URL(obj.image, import.meta.url).href}
        alt={obj.libelle}
        className="block w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border border-gray-200"
      />
      <div className="hidden md:block h-full bg-white/50 w-px"></div>
      <div className="flex flex-col w-full md:flex-1">
        <div
          onClick={showMoreHandler}
          className={
            showMore
              ? "text-white font-[‘Montserrat’,sans-serif] text-2xl leading-tight italic cursor-pointer"
              : "relative  flex flex-row items-center p-2 w-[25%] bg-black rounded-full border border-red-500 text-white font-[‘Montserrat’,sans-serif] text-2xl leading-tight italic cursor-pointer"
          }
        >
          {showMore ? (
            obj.libelle
          ) : (
            <>
              {obj.libelle}{" "}
              <div className="absolute right-2 flex justify-center items-center text-sm border rounded-full h-7 w-7  block-inline">
                {" "}
                &gt;
              </div>
            </>
          )}
        </div>
        {showMore && (
          <>
            <p className="mt-3 italic text-sm text-gray-300">
              {obj.description}
            </p>

            <div
              className="pl-5 mt-5 h-6 bg-red-500 align-center italic rounded-xl"
              style={{ width: `${obj.niveau}%` }}
            >
              {obj.niveau}%{" "}
            </div>

            <div className="mt-5">
              <span className="border border-red-500 p-1">Categorie :</span>{" "}
              {obj.categorie}
            </div>

            <button
              className={
                showMore
                  ? "mt-5 w-[25%] bg-black rounded-full border border-white text-white text-sm px-4 py-2 transition-colors cursor-pointer"
                  : "mt-5 w-[25%] bg-black rounded-full border border-red-500 text-white text-sm px-4 py-2 transition-colors cursor-pointer"
              }
              onClick={showMoreHandler}
            >
              Voir moins
            </button>
          </>
        )}
      </div>
    </div>
  );
}
