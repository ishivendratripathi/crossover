import React from 'react';

const Scroll = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div 
          className="border-2 border-blue-500 h-1/4 w-2 absolute animate-spin shadow-xl">
        </div>
        <div 
          className="border-2 border-red-500 h-1/4 w-2 absolute rotate-180 animate-spin shadow-lg">
        </div>
      </div>
      <div className="text-white relative z-20 text-5xl text-center font-extrabold p-4 ">
        We create something that you would love
      </div>
    </div>
  );
}

export default Scroll;
