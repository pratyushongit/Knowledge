import React, { useEffect, useRef, useState } from "react";

// Normal stopwatch with start, stop, reset

const Stopwatch = () => {
  const [isRunnning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  let timer = useRef(null);
  let startTime = useRef(0);

  useEffect(() => {
    if (isRunnning) {
      timer.current = setInterval(() => {
        setElapsedTime(new Date() - startTime.current);
      }, 10);
    }
    return () => clearInterval(timer.current);
  }, [isRunnning]);

  const handleStart = () => {
    setIsRunning(true);
    startTime.current = new Date() - elapsedTime;
  };

  const handleStop = () => {
    setIsRunning(false);
    setElapsedTime(0);
    startTime.current = 0;
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const formatDate = (time) => {
    const milliseconds = String(Math.floor(time % 1000)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const hours = String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(
      2,
      "0"
    );

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <>
      <p>{formatDate(elapsedTime)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
};

export default Stopwatch;

//Stopwatch to count in reverse starting from 10. When it reaches 0 it should again start from 10

// const Stopwatch = () => {
//   const [elapsedTime, setElapsedTime] = useState(10);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(
//       () => setElapsedTime((time) => (time === 0 ? 10 : time - 1)),
//       1000
//     );
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <>
//       <div>
//         <h3>Stopwatch</h3>
//         <br />
//         &nbsp;
//         <p>{elapsedTime}</p>
//       </div>
//     </>
//   );
// };

// export default Stopwatch;
