import { useEffect, useState } from "react";
import Timer from "./Timer";

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: number | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, startTime]);

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(Date.now() - elapsedTime);
  };

  const handleStop = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const formatTime = (elapsedTime: number): string => {
    const milliseconds: number = Math.floor(elapsedTime % 1000);
    const seconds: number = Math.floor((elapsedTime / 1000) % 60);
    const minutes: number = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours: number = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
      2,
      "0"
    )} : ${String(seconds).padStart(2, "0")} : ${String(milliseconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <Timer
        time={formatTime(elapsedTime)}
        handleStart={handleStart}
        handleStop={handleStop}
        handlePause={handlePause}
      />
    </>
  );
}

export default Stopwatch;
