import photo02 from "../../assets/photo02.jpg";

export default function CompetencesPage() {
  const C_object = [
    {
      id: 1,
      libelle: "React JS",
      description:
        "Développement d’interfaces modernes et performantes avec React et Tailwind CSS.",
      niveau: 95,
      categorie: "Développement Web",
      image: new URL("../../assets/competences/react.jpg", import.meta.url)
        .href,
    },
    {
      id: 2,
      libelle: "Node JS",
      description: "",
      niveau: 87,
      categorie: "Développement Web",
      image: new URL("../../assets/competences/node.png", import.meta.url).href,
    },
    {
      id: 3,
      libelle: "Laravel",
      description: "",
      niveau: 70,
      categorie: "Développement Web",
      image: new URL("../../assets/competences/laravel.png", import.meta.url)
        .href,
    },
  ];

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

      <div className="mt-8 sm:mt-10 w-full max-w-7xl mx-auto h-fit border border-gray-200/30 rounded-lg px-4 sm:px-6 lg:px-8">
        {C_object.map((obj) => (
          <div className="relative m-4 sm:m-6 lg:m-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <img
              src={obj.image}
              alt={obj.libelle}
              className="block w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border border-gray-200"
            />
            <div className="hidden md:block h-full bg-white/50 w-px"></div>
            <div className="flex flex-col w-full md:flex-1">
              <span className="text-white font-[‘Montserrat’,sans-serif] text-2xl leading-tight italic ">
                {obj.libelle}
              </span>
              <div
                className="pl-5 mt-5 h-6 bg-red-500 align-center italic rounded-xl"
                style={{ width: `${obj.niveau}%` }}
              >
                {obj.niveau}%{" "}
              </div>

              <button
                type="submit"
                className="mt-3 w-full sm:w-auto bg-black rounded-full border border-red-500 text-white text-sm px-4 py-2 transition-colors cursor-pointer"
              >
                Voir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
