import React from 'react';
import Fronttext from './Fronttext';
import Button from './Button';
import Online from './Online';
import Scroll from './Scroll';
import Portfolio from './Portfolio';

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
        <div className='text-2xl font-bold relative left-24 top-40 md:left-96 md:ml-60'>
          Scroll For more
        </div>
        <div className='text-4xl relative top-48 left-40 animate-bounce md:left-96 md:ml-80'>
          ☟
        </div>
        <Scroll />
      </div>
    </div>
  );
}

export default App;
