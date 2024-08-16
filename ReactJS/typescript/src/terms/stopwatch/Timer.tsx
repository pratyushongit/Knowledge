import { TimerProps } from "../../lib/Types";

const Timer = ({ time, handleStart, handleStop, handlePause }: TimerProps) => {
  return (
    <>
      <p>{time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
};

export default Timer;
