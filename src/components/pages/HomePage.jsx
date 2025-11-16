import { useNavigate } from "react-router";
import photo01 from "../../assets/photo01.jpg";

export default function HomePage() {
  //Objet de navigation
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative w-full pt-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        {/* <div className='relative'>
                <div  style={{ backgroundImage: `url(${photo01})` }} className=' mt-10 w-2/3 aspect-[5/3] border border-red-200 rounded-lg shadow-sm  bg-contain bg-center s-40'></div>

                <div className="absolute inset-0 bg-black/40"></div> 
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                    <span className='absolute right-10 text-5xl'>Un petit texte descriptif</span>
                </div> 
   
            </div> */}
        <div className="relative flex flex-col text-white w-full md:w-1/2">
          <h1 className="font-[‘Montserrat’,sans-serif] text-5xl leading-tight mt-20">
            Bonjour, nous sommes Y O U Z D O U C,{" "}
          </h1>
          <div className="text-3xl">
            <span className="text-red-500">[</span> I N G E G N E U R S
            &nbsp;&nbsp;E N &nbsp;&nbsp;{" "}
            <span className=" text-white bg-red-500">S I</span>&nbsp;
            <span className="text-red-500">]</span>
          </div>
          <div className="mt-2">
            Deux passionnés de technologie, un même objectif : bâtir l’avenir
            numérique. En tant qu’ingénieurs en Systèmes d’Information, nous
            explorons les univers du développement, de la cybersécurité, de l’IA
            et du Big Data pour créer des solutions à la fois intelligentes et
            sûres.
          </div>
          <div className="hidden md:block absolute left-30 top-100 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  rotate-45 ">
            &lt; Dev &gt;
          </div>
          <div className="hidden md:block absolute top-90 left-80 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  -rotate-40 ">
            &lt; IA &gt;
          </div>
          <div className="hidden md:block absolute top-120 left-80 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  rotate-0 ">
            <span className="text-red-500">&lt;</span> CYBERSECURITE{" "}
            <span className="text-red-500">&gt;</span>
          </div>
          <div className="hidden md:block absolute top-160 left-0 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  -rotate-40 ">
            &lt; BIG DATA &gt;
          </div>

          <div className="mt-6 flex flex-wrap gap-4 md:absolute md:top-160 md:left-100 md:w-[50vw] md:h-30">
            <button
              onClick={() => {
                navigate("/projets");
              }}
              type="submit"
              className="ml-0 md:ml-10 inline-flex items-center justify-center w-[55%] sm:w-[40%] md:w-[30%] h-12 sm:h-14 rounded-full border border-red-400 bg-gradient-to-r from-red-600 via-rose-500 to-orange-400 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-red-500/40 hover:from-red-700 hover:via-rose-600 hover:to-orange-500 hover:border-yellow-300 hover:shadow-lg hover:shadow-red-500/60 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Nos Projets
            </button>
            <button
              onClick={() => {
                navigate("/competences");
              }}
              type="submit"
              className="ml-0 md:ml-4 inline-flex items-center justify-center w-[55%] sm:w-[40%] md:w-[30%] h-12 sm:h-14 rounded-full border border-sky-400 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-sky-500/40 hover:from-sky-600 hover:via-sky-500 hover:to-cyan-500 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/60 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Nos compétences
            </button>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${photo01})` }}
          className="relative md:absolute md:right-25 md:ml-20 mt-10 w-full md:w-1/3 aspect-square border border-gray-200 rounded-lg shadow-sm  bg-cover bg-center "
        ></div>
      </div>
      <div className="absolute bottom-5 right-5 text-white text-sm">
        Y &nbsp; O &nbsp; U &nbsp; Z &nbsp; D &nbsp; O &nbsp; U &nbsp; C
        &nbsp;&nbsp;
        <span className="border border-red-500 rounded-full p-1">TM</span>
      </div>
    </div>
  );
}
