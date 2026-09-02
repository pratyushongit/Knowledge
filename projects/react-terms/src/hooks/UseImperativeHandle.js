import { useRef, useImperativeHandle, forwardRef } from "react";

const UseImperativeHandleHook = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={() => inputRef.current.clear()}>Clear</button>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
};

const Child = forwardRef((_, ref) => {
  const inputElement = useRef(null);
  useImperativeHandle(ref, () => ({
    clear: () => (inputElement.current.value = ""),
    focus: () => inputElement.current.focus(),
  }));

  return <input ref={inputElement} />;
});

export default UseImperativeHandleHook;
