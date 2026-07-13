export interface TimerProps {
  time: string;
  handleStart: () => void;
  handleStop: () => void;
  handlePause: () => void;
}
