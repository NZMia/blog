import { useEffect } from 'react';

export const useInterval = (callback, interval) => {
  useEffect(() => {
    const start = new Date().getTime();
    const newIterval = setInterval(() => {
      callback(new Date().getTime() - start);
    }, interval);

    return () => clearInterval(newIterval);
  }, []);
};
