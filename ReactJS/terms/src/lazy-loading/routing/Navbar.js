import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/heavy">
        <h4>HEAVY</h4>
      </NavLink>
    </div>
  );
};

export default Navbar;
