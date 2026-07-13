import { useState } from "react";

const UseState = () => {
  //   const initialState = () => {
  //     console.log("inside function");
  //     return 0;
  //   };

  // 3 ways to set initial state.
  // const [count, setCount] = useState(initialState()); -> gets called on every rerender.
  // const [count, setCount] = useState(() => initialState()); -> gets called only on initialization
  // const [count, setCount] = useState(initialState); -> gets called only on initialization
  // const [count, setCount] = useState(4); -> gets called on every rerender. Doesnt have a problem as it is a hardcoded value

  const [count, setCount] = useState(4);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Click</button>
    </>
  );
};

export default UseState;
