import { useState } from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  //Objet de navigation
  const navigate = useNavigate();

  //Definition d'un state contenant l'id du button avec le focus
  //ID 0 : Logo Portefolio -> Page d'acceuil
  //ID 1 : Bouton Projets -> Page projet
  //ID 2 : Bouton Competencs -> Page competences
  //ID 3 : Bouton Connexion -> Page d'authentification

  const [focusBtnId, setFocusBtnId] = useState(0);

  //Definition d'une constante definissant les classename tailwind approprie selon si le boutton est focus ou pas
  const focusedBtnStyle =
  //  "mr-5 p-3 border border-gray-500 cursor-pointer rounded-lg bg-red-500 text-white ";
    "mr-5 p-3 text-red-600 cursor-pointer font-medium  border-b-2 border-yellow-300 text-white ";
  
    const noFocusedBtnStyle =
//    "mr-5 p-3 border rounded-lg border-gray-500 cursor-pointer hover:bg-red-500 hover:text-white";
    "mr-5 p-3 cursor-pointer border-b-2 border-gray-500 hover:border-yellow-300";

  //Handler de capture des click sur les buttons du navbar
  const btnClickHandler = (id) => {
    //MAJ de l'id du bouton ayant le focus
    setFocusBtnId(id);

    //Navigation
    if (id == 0) {
      navigate("/home");
    } else if (id == 1) {
      navigate("/blank");
    } else if (id == 2) {
      navigate("/blank");
    } else if (id == 3) {
      navigate("/connexion");
    }
  };

  return (
    // barre de navigation : definis par deux elements

    <nav className=" relative flex flex-col items-center justify-center text-white h-20">
      {/* Le contenue du navbar */}
      

      <div className="flex flex-row">


       
        {/* Le logo */}

        <div
          className="flex flex-col items-center cursor-pointer "
          onClick={() => {
            btnClickHandler(0);
          }}
        >
          <span className="text-lg">P&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;F&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;O</span>
          <div className="mt-1 text-[10px]">
            <span className=" text-sm/2 text-red-500">[</span> Y O U Z D O U C{" "}
            <span className=" text-sm/2 text-red-500">]</span>
          </div>
        </div>

        {/* Container des bouttons Projets Competences et Connexion en absolute et de 4px a partir de la droite */}

        <div className="absolute right-4 text-sm/2">
         <button
            className={focusBtnId == 0 ? focusedBtnStyle : noFocusedBtnStyle}
            onClick={() => {
              btnClickHandler(0);
            }}
          >
            Accueil
          </button>
          <button
            className={focusBtnId == 1 ? focusedBtnStyle : noFocusedBtnStyle}
            onClick={() => {
              btnClickHandler(1);
            }}
          >
            Projets
          </button>
          <button
            className={focusBtnId == 2 ? focusedBtnStyle : noFocusedBtnStyle}
            onClick={() => {
              btnClickHandler(2);
            }}
          >
            Competences
          </button>
          <button
            className={focusBtnId == 3 ? focusedBtnStyle : noFocusedBtnStyle}
            onClick={() => {
              btnClickHandler(3);
            }}
          >
            Connexion
          </button>
        </div>
      </div>

      {/* La bordure du navbar : creer de maniere a pouvoir centrer a la place du bordure bottom et definis a une taille de 2/3 du viewport width*/}
      <div className="w-2/3 border-b-4 border-white absolute bottom-0"></div>
    </nav>
  );
}
