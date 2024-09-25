import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay = 500) => {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExecuted.current;

      if (timeElapsed >= delay) {
        setThrottleValue(value);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current)); // the remaining time until the next throttle

    return () => clearTimeout(timer);
  }, [delay, value]);
  return throttleValue;
};

export default useThrottle;
