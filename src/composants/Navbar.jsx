import React from 'react'

export default function Navbar() {
  return (

        // barre de navigation : definis par deux elements 
            
        <nav  className='flex flex-col items-center pt-10'>
                
            {/* Le contenue du navbar */}


            <div className='flex flex-row' >
    
                {/* Le logo */}

                <div className='flex flex-col items-center'>
                    <span className='text-4xl'>P O R T F O L I O</span>
                    <div className='mt-1'><span className=' text-2xl text-red-500'>[</span> Y O U Z D O U C <span className=' text-2xl text-red-500'>]</span></div>
                </div>


                {/* Container des bouttons Projets Competences et Connexion en absolute et de 4px a partir de la droite */}

                <div className='absolute right-4'>
                    <span className='mr-5'>Projets</span>
                    <span className='mr-5'>Competences</span>
                    <span className='mr-5'>Connexion</span>

                </div>
                
            </div>

            {/* La bordure du navbar : creer de maniere a pouvoir centrer a la place du bordure bottom et definis a une taille de 2/3 du viewport width*/}
            <div className='w-2/3 border-b-4 border-red-500 mt-2' ></div>
        </nav>


    
    
  )
}
