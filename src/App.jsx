import React from 'react';
import Fronttext from './Fronttext';
import Button from './Button';
import Online from './Online';
import Scroll from './Scroll';
import Portfolio from './Portfolio';
import Expand from './Expand';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Portfolio />
      </div>
      <div className="relative z-10 items-center justify-center min-h-screen">
        <Fronttext />
        <a href="https://calendly.com/"><Button /></a>
        <Online />
        <div className="relative top-20 left-24 sm:static sm:flex sm:justify-center sm:items-center">
  <div className="text-2xl font-bold">
    Scroll For more
  </div>
</div>

<div className="relative top-24 left-40 animate-bounce sm:static sm:flex sm:justify-center sm:items-center mt-4">
  <div className="text-4xl">
    ☟
  </div>
</div>
        <Scroll />
        <div className='flex justify-center items-center'>
          <span className='text-9xl mt-20 font-extrabold text-white'>PROJECTS</span>
        </div>
        <Expand />
      </div>
    </div>
  );
}

export default App;
