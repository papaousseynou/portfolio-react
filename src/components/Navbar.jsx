import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleConnexionClick = () => {
    console.log("Connexion");
    navigate("/connexion");
  };
  return (
    // barre de navigation : definis par deux elements

    <nav className="flex flex-col items-center pt-10">
      {/* Le contenue du navbar */}

      <div className="flex flex-row">
        {/* Le logo */}

        <div className="flex flex-col items-center">
          <span className="text-4xl">P O R T F O L I O</span>
          <div className="mt-1">
            <span className=" text-2xl text-red-500">[</span> Y O U Z D O U C{" "}
            <span className=" text-2xl text-red-500">]</span>
          </div>
        </div>

        {/* Container des bouttons Projets Competences et Connexion en absolute et de 4px a partir de la droite */}

        <div className="absolute right-4 flex gap-4 flex-row">
          <button className="">Projets</button>
          <button className="">Competences</button>

          <button
            onClick={handleConnexionClick}
            className="border border-gray-200 px-3 py-1 rounded hover:bg-gray-100"
          >
            Connexion
          </button>
        </div>
      </div>

      {/* La bordure du navbar : creer de maniere a pouvoir centrer a la place du bordure bottom et definis a une taille de 2/3 du viewport width*/}
      <div className="w-2/3 border-b-4 border-red-500 mt-2"></div>
    </nav>
  );
}
