import React from 'react'
import photo01 from "../../assets/photo01.jpg"



export default function HomePage() {
  return (
    <div>
        <div className='relative w-full pt-10 pl-20 flex flex-row' >
            {/* <div className='relative'>
                <div  style={{ backgroundImage: `url(${photo01})` }} className=' mt-10 w-2/3 aspect-[5/3] border border-red-200 rounded-lg shadow-sm  bg-contain bg-center s-40'></div>

                <div className="absolute inset-0 bg-black/40"></div> 
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                    <span className='absolute right-10 text-5xl'>Un petit texte descriptif</span>
                </div> 
   
            </div> */}
            <div className='relative flex flex-col text-white w-[50vw]'>
              <h1 className="font-[‘Montserrat’,sans-serif] text-5xl leading-tight mt-20">Bonjour, nous sommes Y O U Z D O U C,  </h1>
              <div className='text-3xl'>
                  <span className="text-red-500">[</span> I N G E G N E U R S &nbsp;&nbsp;E N &nbsp;&nbsp; <span className=' text-white bg-red-500'>S I</span>&nbsp;
                  <span className="text-red-500">]</span>
              </div>
              <div className='mt-2'>
                Deux passionnés de technologie, un même objectif : bâtir l’avenir numérique.
                En tant qu’ingénieurs en Systèmes d’Information, nous explorons les univers du développement, de la cybersécurité, de l’IA et du Big Data pour créer des solutions à la fois intelligentes et sûres.
               </div>
              <div className="absolute left-30 top-100 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  rotate-45 hover:text-red-200">
                    &lt; Dev &gt;
               </div>
               <div className=" absolute top-90 left-80 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  -rotate-40 hover:text-red-200">
                    &lt; IA &gt;
               </div>
              <div className=" absolute top-120 left-80 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  rotate-0 hover:text-red-200">
                   <span className='text-red-500'>&lt;</span>  CYBERSECURITE <span className='text-red-500'>&gt;</span>
               </div>
               <div className=" absolute top-160 left-0 font-[‘Montserrat’,sans-serif] text-5xl leading-tight  -rotate-40 hover:text-red-200" >
                    &lt; BIG DATA &gt;
               </div>

               <div className='absolute top-160 left-100 w-[50vw] h-30' >
                    <button
                      type="submit"
                      className="ml-10 w-[10vw] bg-black border-1 border-yellow-300 hover:bg-red-500 text-white font-medium  px-4 py-2.5 transition-colors cursor-pointer"

                    >
                      Nos Projets
                    </button>
                    <button
                      type="submit"
                      className="ml-10 w-[10vw] bg-black border-1 border-yellow-300 hover:bg-red-500 text-white font-medium  px-4 py-2.5 transition-colors cursor-pointer"
                    >
                      Nos competences
                    </button>

               </div>

               
               


            </div>
              
            <div  style={{ backgroundImage: `url(${photo01})` }} className='absolute right-25 ml-20 mt-10 w-1/3 aspect-[1/1] border border-gray-200 rounded-lg shadow-sm  bg-cover bg-center '></div>
        </div>
        <div className='absolute bottom-5 right-5 text-white text-sm'>Y &nbsp; O &nbsp; U &nbsp; Z &nbsp; D &nbsp; O &nbsp; U &nbsp; C &nbsp;&nbsp;<span className='border-1 border-red-500 rounded-full p-1'>TM</span></div>
    </div>
  )
}
