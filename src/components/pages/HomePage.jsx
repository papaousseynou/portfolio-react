import React from 'react'
import photo01 from "../../assets/photo01.jpg"
import photo02 from "../../assets/photo02.jpg"


export default function HomePage() {
  return (
    <div>
        <div className='w-full ' >
            <div className='relative'>
                <div  style={{ backgroundImage: `url(${photo02})` }} className=' mt-10 w-full aspect-[7/3] border border-gray-200 rounded-lg shadow-sm  bg-cover bg-center s-40'></div>

                <div className="absolute inset-0 bg-black/40"></div> 
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                    <span className='absolute right-10 text-5xl'>Un petit texte descriptif</span>
                </div>
   
            </div>
            <div  style={{ backgroundImage: `url(${photo01})` }} className='ml-20 mt-10 w-1/3 aspect-[1/1] border border-gray-200 rounded-lg shadow-sm  bg-cover bg-center s-40'></div>
        </div>
    </div>
  )
}
