import React, { useEffect, useState } from 'react'

const Fronttext = () => {

const [dark,setdark]=useState("black")



useEffect(()=>{
document.body.style.backgroundColor=dark
},[dark])

  return (
    <>
    <div className={`text-5xl md:text-6xl flex justify-center left-40 mt-24 font-bold transition-transform duration-200 ease-in-out hover:scale-125 ${dark === "black" ? "text-white" : "text-black"}`}>
  CROSSOVER
</div>
<br />
    <button onClick={()=>{
        setdark(dark==="black"?"white":"black")
    }} className={`sm:border-2 border-black rounded-lg absolute left-32 text-white ${dark==="black" ? "text-white":"text-black"}`}>{dark==="black" ? "Toggle to white" : <div className='text-black'>Back to black✨</div> }</button>
    <div className='sm: text-white relative top-8 left-10 mt-6 font-thin text-xl'>We create products that serves <br /> both users <br />and businesses and drive real 
    <br />results.</div>
    </>
  )
}

export default Fronttext
