import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fronttext from './Fronttext'
import Button from './Button'
import Online from './Online'
import Scroll from './Scroll'


function App() {
  

  return (
    <>
    <Fronttext />
    <Button />
    <br />
    <Online/>
    <div className='text-white relative top-40 left-60 ml-4'>Scroll for more</div>
   <div className='text-white animate-bounce relative top-44 left-60 ml-14'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg></div>
<Scroll />
    </>
  )
}

export default App
