import React, { useEffect, useState } from 'react'

const Fronttext = () => {

const [dark,setdark]=useState("black")



useEffect(()=>{
document.body.style.backgroundColor=dark
},[dark])

  return (
    <>
    <div className={`text-5xl sm: flex justify-center  mt-24 font-bold transition-transform duration-200 ease-in-out hover:scale-125 ${dark === "black" ? "text-white" : "text-black"}`}>
  CROSSOVER 
</div>
<br />
    <button onClick={()=>{
        setdark(dark==="black"?"white":"black")
    }} className={`sm:border-2 border-black rounded-lg absolute left-32 text-white ${dark==="black" ? "text-white":"text-black"}`}></button>
    <div className='ml-10 text-white relative top-8 mt-6 font-thin text-xl sm: text-center'><span className='text-6xl font-semibold text-red-500'>We</span> create products that serves both <br /> <span className='text-6xl font-semibold text-pink-500'>Users so</span><br /><span className='text-6xl font-semibold text-purple-500'>businesses</span> can drive real 
    <span className='text-4xl font-bold text-yellow-500'>results</span></div>
    </>
  )
}
export default Fronttext
