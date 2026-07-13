import React from "react";
import { useCountValue } from "./CountProvider";

const Counter = () => {
  const { count, dispatch } = useCountValue();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "ADD_COUNT" })}>Add</button>
      <button onClick={() => dispatch({ type: "REDUCE_COUNT" })}>Delete</button>
    </div>
  );
};

export default Counter;
