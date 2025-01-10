import React, { useEffect, useState } from 'react'

const Expand = (names) => {

  const [scale,setscale]=useState(0)

  const handler =()=>{
    const handlingscroll=window.scrollY

const lastscroll= 2+handlingscroll/1000;    
    setscale(lastscroll)
    console.log(setscale)
  }

  useEffect(()=>{
    window.addEventListener("scroll",handler)

    return()=>{
        window.removeEventListener("scroll",handler)
    }
  })

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen gap-20 mt-20">
          <img 
            className="w-1/4 rounded-xl transform:duration-300 ease-in-out shadow-2xl " 
            src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Image 1" 
            style={{ transform: `scale(${scale})`,maxWidth:"100vw",maxHeight:"100vh", }} 
          />
        </div>
        
        </>      
      
     )
}

export default Expand

