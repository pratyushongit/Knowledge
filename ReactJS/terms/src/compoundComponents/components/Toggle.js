import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

const useToggleValue = () => {
  const context = useContext(ToggleContext);
  if (!context)
    throw new Error("useToggleValue cannot be used outside Toggle component");
  return context;
};

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((p) => !p);
  };

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div>{children}</div>
    </ToggleContext.Provider>
  );
};

Toggle.Button = function ToggleButton() {
  const { on, toggle } = useToggleValue();
  return <button onClick={toggle}>Turn it {on ? "Off" : "On"}</button>;
};

Toggle.On = function ToggleOn({ children }) {
  const { on } = useToggleValue();
  return on ? <p>{children}</p> : null;
};

Toggle.Off = function ToggleOff({ children }) {
  const { on } = useToggleValue();
  return !on ? <p>{children}</p> : null;
};

export default Toggle;
