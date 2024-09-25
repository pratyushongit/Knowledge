import { useState } from "react";
import { UseCounterProps } from "./useCounter.types";

const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const incrementCount = () => setCount((count) => count + 1);
  const decrementCount = () => setCount((count) => count - 1);
  return { count, incrementCount, decrementCount };
};

export default useCounter;
