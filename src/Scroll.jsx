import React from 'react';

const Scroll = () => {
  return (
    <div className="relative flex justify-center items-center mt-20 text-5xl font-bold">
      <div className="w-2 h-24 bg-red-500 absolute rotate-10 animate-spin z-0"></div>
      <div className="w-2 h-24 bg-blue-500 absolute rotate-180 animate-spin z-0"></div>
      <div className="relative z-10 text-white ">
        We create something that you would love
      </div>
    </div>
  );
}

export default Scroll;
