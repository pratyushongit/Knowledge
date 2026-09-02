// If the throttle value is a primitive

// import { useRef, useState, useEffect } from "react";

// const useThrottle = (value, time = 500) => {
//     const [throttledValue, setThrottledValue] = useState(value);
//     const lastExecuted = useRef(0);
//     const timerRef = useRef(null);

//     useEffect(() => {
//         const now = Date.now();
//         const elapsed = now - lastExecuted.current;
//         if(elapsed >= time){
//             setThrottledValue(value);
//             lastExecuted.current = now;
//         }
//         else {
//             timerRef.current = setTimeout(() => {
//                 setThrottledValue(value);
//                 lastExecuted.current = Date.now();
//             }, time - elapsed);
//         }
//         return () => clearTimeout(timerRef.current);
//     }, [value, time])

//     return throttledValue;
// }

// export default useThrottle;

// If throttle value is function

import { useRef, useCallback, useEffect } from "react";

const useThrottle = (callback, time = 500) => {
  const callbackRef = useRef(callback);
  const lastExecuted = useRef(0);
  const timerId = useRef(null);

  // keep the latest callback available without needing it in deps
  // (avoids stale closures without re-creating the throttled fn)
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => clearTimeout(timerId.current);
  }, []);

  return useCallback(
    (...args) => {
      const now = Date.now();
      const elapsed = now - lastExecuted.current;

      if (elapsed >= time) {
        lastExecuted.current = now;
        callbackRef.current(...args);
      } else {
        clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          lastExecuted.current = Date.now();
          callbackRef.current(...args);
        }, time - elapsed);
      }
    },
    [time],
  );
};

export default useThrottle;
