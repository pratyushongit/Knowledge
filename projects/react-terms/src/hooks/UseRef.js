import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  let a = 0; // local variable approach
  const ref = useRef(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    // a = a + 1; // a is always 0 because on every rerender the value is reset to 0 on every rerender;
    ref.current = ref.current + 1;
    console.log("rendering", ref.current);
    // above code gets called on every rerender.
    // if we dont want this code to get called everytime during rerender we can use:
    // - local variable - value does not get updated as it is reset to 0 on every re render
    // - useRef - it persists value between rerenders
    buttonRef.current.style.backgroundColor = "green";
    buttonRef.current.style.fontSize = "20px";
  });

  return (
    <>
      <p>{count}</p>
      <p>{a}</p>
      {/* <p>{ref}</p> // throws error as ref values dont trigger a rerender hence value will not be updated*/}
      <button ref={buttonRef} onClick={() => setCount((c) => c + 1)}>
        Click
      </button>
    </>
  );
};

export default UseRef;
