import React from 'react'
import photo02 from "../../assets/photo02.jpg"

export default function CompetencesPage() {



    const C_object = [
        {
            id: 1,
            libelle: "React JS",
            description: "Développement d’interfaces modernes et performantes avec React et Tailwind CSS.",
            niveau: 95, 
            categorie: "Développement Web",
            image: new URL("../../assets/competences/react.jpg", import.meta.url).href
        },
        {
            id: 2,
            libelle: "Node JS",
            description: "",
            niveau: 87, 
            categorie: "Développement Web",
            image: new URL("../../assets/competences/node.png", import.meta.url).href
        },
        {
            id: 3,
            libelle: "Laravel",
            description: "",
            niveau: 70, 
            categorie: "Développement Web",
            image: new URL("../../assets/competences/laravel.png", import.meta.url).href
        }

    ]

  return (
    <div className='text-white'>
       <div className="relative ml-20 mt-10 w-[90vw] h-[25vw] border border-gray-200 rounded-lg shadow-sm overflow-hidden ml-auto mr-auto">
            <div
                style={{ backgroundImage: `url(${photo02})` }}
                className="absolute inset-0 bg-center bg-cover"
            ></div>
            <div className="absolute inset-0 bg-black/40"></div> {/* overlay semi-sombre */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="font-[‘Montserrat’,sans-serif] text-lg leading-tight text-white bg-black/50 p-2 rounded-lg border-2 border-red-500">N&nbsp; o&nbsp; s &nbsp;&nbsp;&nbsp;&nbsp;c&nbsp; o&nbsp; m &nbsp;p &nbsp;e &nbsp;t &nbsp;e &nbsp;n &nbsp;c &nbsp;e &nbsp;s</h2>
            </div>
        </div>



        <div className='mt-10 pl-20 h-fit w-[90vw] border-1 border-gray-200 rounded-lg  ml-auto mr-auto'>

            {C_object.map(obj => (

                <div className='relative flex flex-row h-30 m-20'>
                    <img src={obj.image} alt={obj.libelle} className="block w-32 h-32 object-cover rounded-full border-1 border-gray-200" />
                    <div className='h-[100%] bg-white w-1 ml-10'></div>
                    <div className='flex flex-col w-[90%] pl-10'>
                        <span className='text-white font-[‘Montserrat’,sans-serif] text-2xl leading-tight italic '>{obj.libelle}</span>
                        <div
                            className="pl-5 mt-5 h-6 bg-red-500 align-center italic rounded-xl"
                            style={{ width: `${obj.niveau}%` }}
                        >{obj.niveau}% </div>

                        <button
                        type="submit"
                        className="mt-3 w-[10vw] bg-black rounded-full border-1 border-red-500 text-white text-sm px-3 py-1.5 transition-colors cursor-pointer"

                        >
                        Voir plus
                        </button>
                        
                    </div>
                </div>

        ))}
            
            

        </div>


    </div>
  )
}
