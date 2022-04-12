import { useState } from 'react';
import { useInterval } from './useInterval';

export const useSlider = (quantity, speed = 3000) => {
  const [slider, setSlider] = useState(0);

  useInterval((diff) => {
    setSlider((_) => Math.floor(diff / speed) % quantity);
  }, 200);

  return slider;
};
