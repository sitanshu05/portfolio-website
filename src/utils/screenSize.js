import { useState, useEffect } from 'react';

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, []);

  return screenSize;
}
