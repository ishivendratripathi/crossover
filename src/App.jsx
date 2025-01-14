import React from 'react';
import Fronttext from './Fronttext';
import Button from './Button';
import Online from './Online';
import Scroll from './Scroll';
import Portfolio from './Portfolio';
import Expand from './Expand';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Portfolio />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-12 px-4 sm:px-8">
        <Fronttext />
        <a href="https://calendly.com/" className="mt-4">
          <Button />
        </a>
        <Online />
        <div className="relative top-20 text-center sm:top-0">
          <div className="text-2xl font-bold animate-fade-in">
            Scroll For More
          </div>
          <div className="text-4xl mt-2 animate-bounce">☟</div>
        </div>
        <Scroll />
        <div className="flex justify-center items-center mt-32 animate-fade-in-slow">
          <span className="text-9xl font-extrabold tracking-wide">PROJECTS</span>
        </div>
        <Expand />
      </div>
    </div>
  );
}

export default App;
