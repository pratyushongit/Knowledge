import React from "react";
import Toggle from "./utils/Toggle";

const renderToggle = ({ checked, handleChange }) => (
  <>
    {checked ? <p>On</p> : <p>Off</p>}
    <input
      type="checkbox"
      checked={checked}
      name="toggle"
      onChange={handleChange}
    />
  </>
);

const Home = () => {
  return <Toggle render={renderToggle} />;
};

export default Home;
