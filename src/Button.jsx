import React, { useState } from 'react';

const Button = () => {
  const [text, setText] = useState(true);

  return (
    <div className="relative top-20 left-20 sm:static sm:flex sm:justify-center sm:items-center mt-16">
      <button
        onMouseEnter={() => setText(false)}
        onMouseLeave={() => setText(true)}
        className="text-white border rounded-2xl p-4 transition-transform duration-300 ease-in-out hover:bg-sky-500 hover:scale-125"
      >
        {text ? (
          <div className="flex gap-2">
            <img
              className="h-6 rounded-full"
              src="https://i.pinimg.com/736x/c5/bf/65/c5bf65d344bc1ca0d26b2a01e62f5396.jpg"
              alt=""
            />
            <div>Book a 15 min call?</div>
          </div>
        ) : (
          <div className="flex gap-2">
            <img
              className="h-6 rounded-full"
              src="https://i.pinimg.com/736x/c5/bf/65/c5bf65d344bc1ca0d26b2a01e62f5396.jpg"
              alt=""
            />
            <div className="font-thin">+</div>
            <img
              className="h-6 rounded-xl"
              src="https://i.pinimg.com/736x/4d/25/12/4d2512a6542b68eb29f616cd80e500fe.jpg"
              alt=""
            />
            <div>Book a 15 min call?</div>
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
