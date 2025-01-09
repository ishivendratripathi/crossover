import React, { useEffect, useState } from 'react'

const Fronttext = () => {

const [dark,setdark]=useState("black")



useEffect(()=>{
document.body.style.backgroundColor=dark
},[dark])

  return (
    <>
    <div className={`sm:text-6xl text-5xl flex justify-center mt-24 ml-60 font-bold transition-transform duration-200 ease-in-out hover:scale-125 text-white ' ${dark==="black" ? "text-white" : "text-black"}`}>CROSSOVER</div>
    <br />
    <button onClick={()=>{
        setdark(dark==="black"?"white":"black")
    }} className={`sm:border-2 border-black rounded-lg absolute left-56 ml-6 text-white ${dark==="black" ? "text-white":"text-black"}`}>{dark==="black" ? "Toggle to white" : <div className='text-black'>Back to black✨</div> }</button>
    <div className='sm: text-white relative top-8 left-40 mt-6'>We create products that serves both users <br />and businesses and drive real results.</div>
    </>
  )
}

export default Fronttext
