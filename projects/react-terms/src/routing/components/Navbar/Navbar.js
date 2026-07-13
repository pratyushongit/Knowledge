import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <h3>Navbar</h3>
      <div>
        <NavLink
          to={"todos"}
          className={({ isActive }) => (isActive ? styles.tab__active : null)}
        >
          Todos
        </NavLink>
        &nbsp;
        <NavLink
          to={"searchParams"}
          className={({ isActive }) => (isActive ? styles.tab__active : null)}
        >
          Search params
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
