import React, { useState } from 'react'

export default function Navbar() {

    //Definition d'un state contenant l'id du button avec le focus
    //ID 0 : Logo Portefolio -> Page d'acceuil
    //ID 1 : Bouton Projets -> Page projet
    //ID 2 : Bouton Competencs -> Page competences 
    //ID 3 : Bouton Connexion -> Page d'authentification 


    const [focusBtnId, setFocusBtnId] = useState(0)

    //Definition d'une constante definissant les classename tailwind approprie selon si le boutton est focus ou pas
    const focusedBtnStyle = "mr-5 p-3 border border-black-500 cursor-pointer bg-red-500 text-white "
    const noFocusedBtnStyle = "mr-5 p-3 border border-black-500 cursor-pointer "


    //Handler de capture des click sur les buttons du navbar
    const btnClickHandler = (id)=>{
        //MAJ de l'id du bouton ayant le focus
        setFocusBtnId(id)


        




    }

  return (

        // barre de navigation : definis par deux elements 
            
        <nav  className='flex flex-col items-center pt-10'>
                
            {/* Le contenue du navbar */}


            <div className='flex flex-row' >
    
                {/* Le logo */}

                <div className='flex flex-col items-center cursor-pointer' onClick={()=>{btnClickHandler(0)}}>
                    <span className='text-4xl'>P O R T F O L I O</span>
                    <div className='mt-1'><span className=' text-2xl text-red-500'>[</span> Y O U Z D O U C <span className=' text-2xl text-red-500'>]</span></div>
                </div>


                {/* Container des bouttons Projets Competences et Connexion en absolute et de 4px a partir de la droite */}

                <div className='absolute right-4'>
                    <button className={focusBtnId == 1 ? focusedBtnStyle : noFocusedBtnStyle} onClick={()=>{btnClickHandler(1)}}>Projets</button>
                    <button className={focusBtnId == 2 ? focusedBtnStyle : noFocusedBtnStyle} onClick={()=>{btnClickHandler(2)}}>Competences</button>
                    <button className={focusBtnId == 3 ? focusedBtnStyle : noFocusedBtnStyle} onClick={()=>{btnClickHandler(3)}}>Connexion</button>

                </div>
                
            </div>

            {/* La bordure du navbar : creer de maniere a pouvoir centrer a la place du bordure bottom et definis a une taille de 2/3 du viewport width*/}
            <div className='w-2/3 border-b-4 border-red-500 mt-2' ></div>
        </nav>


    
    
  )
}
