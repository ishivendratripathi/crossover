import React from 'react';

const FallingAnimation = () => {
  const elements = Array.from({ length: 700 });

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {elements.map((_, index) => (
        <div
          key={index}
          className="w-2 h-2 rounded-full absolute animate-fall"
          style={{
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
            left: `${Math.random() * 100}vw`,
            top: `${-Math.random() * 100}vh`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FallingAnimation;
