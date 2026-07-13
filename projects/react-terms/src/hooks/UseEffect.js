import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(10);

  useEffect(() => {
    console.log("1");
    return () => console.log("unmount 1");
  });

  useEffect(() => {
    console.log("2");
    return () => console.log("unmount 2");
  }, []);

  useEffect(() => {
    console.log("3");
    return () => console.log("unmount 3");
  }, [count, add]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setAdd(add + 10)}>Add 10</button>
      <p>
        {count} {add}
      </p>
    </>
  );
};

const UseEffect = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <button onClick={() => setState(!state)}>Toggle</button>
      {state ? <Counter /> : null}
    </>
  );
};

export default UseEffect;
