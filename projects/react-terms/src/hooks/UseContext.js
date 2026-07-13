import { useState, createContext, useContext } from "react";

// const ColorContext = createContext("#ae1919");
const ColorContext = createContext();

const Parent = () => {
  const [color, setColor] = useState("#000000");
  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <ColorContext.Provider value={color}>
        <Child />
      </ColorContext.Provider>
    </>
  );
};

const Child = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
      <Grandchild />
    </div>
  );
};

const Grandchild = () => {
  return (
    <>
      <h4>The color:</h4>
      <Greatgrandchild />
    </>
  );
};

const Greatgrandchild = () => {
  const color = useContext(ColorContext);
  return <span style={{ color }}>{color}</span>;
};

const UseContext = () => {
  return <Parent />;
};

export default UseContext;
