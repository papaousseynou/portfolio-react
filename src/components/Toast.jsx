import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";


export default function Toast({sharedState, sharedStateMutator}) {

    //Objet de navigation
  const navigate = useNavigate();

    //State qui defini si le toast est affiche ou pas

  const [display, setDisplay] = useState(false)
  const [username, setUsername] = useState('')

    //Placons un useEffect sur la variation de l'objet partage sharedState
  useEffect(()=>{
    
    //Si Toast contient un message
    if(sharedState.toast){
        //Affichons le Toast
        setDisplay(true)
        
    
    }else{
        //Sinon mettons l'affichage sur false
        setDisplay(false)
    }
  }, [sharedState])

  const closeHandler = ()=>{
    setDisplay(false)
    navigate("/home")
  }
  
  return (
    <>
    { display &&   
        <div className="w-[100vw] h-[100vh] fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        
            <div className="bg-white w-[50vw] h-[50vh]  rounded-xl shadow-xl p-6 flex flex-col items-center justify-between">
                
                <p className="w-full border-b-2 border-red-500 rounded-full text-center p-2  font-[‘Montserrat’,sans-serif] text-xl leading-tight">
                    {sharedState.toast_header}
                </p>

                <p className="font-[‘Montserrat’,sans-serif] text-2xl leading-tight">
                    {sharedState.toast_body}
                </p>


                <button
                onClick={closeHandler}
                className="mb-10 px-4 py-2 w-[30%] rounded-lg bg-red-500 text-white hover:bg-red-700 transition cursor-pointer"
                >
                Fermer
                </button>
            </div>
        </div>}
    </>
  );
}
