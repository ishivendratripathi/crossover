import React, { useEffect, useState } from 'react';

const Expand = () => {
  const [scale, setScale] = useState(1); 

  useEffect(() => {
    let debounceTimeout;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.min(2, 1 + scrollY / 1000); 
      setScale(newScale);
    };

    const debouncedHandler = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(handleScroll, 50); 
    };

    window.addEventListener('scroll', debouncedHandler);

    return () => {
      clearTimeout(debounceTimeout);
      window.removeEventListener('scroll', debouncedHandler);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-20 mt-20">
      <img
        className="w-1/4 rounded-xl transform duration-300 ease-in-out shadow-2xl max-w-full max-h-[80vh]"
        src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Image 1"
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
};

export default Expand;
