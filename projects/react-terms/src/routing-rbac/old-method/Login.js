import { Link, Outlet } from "react-router-dom";
import { roles } from "../authData";
import { useAuth } from "./utils/AuthProvider";

const Login = () => {
  const { user, setUser } = useAuth();

  const handleLogin = (data) => {
    if (data === "admin") {
      setUser({
        isAuthenticated: true,
        role: roles.admin,
      });
    } else if (data === "user") {
      setUser({
        isAuthenticated: true,
        role: roles.user,
      });
    } else if (data === "guest") {
      setUser({
        isAuthenticated: true,
        role: roles.guest,
      });
    }
  };

  const handleLogout = () => {
    setUser({
      isAuthenticated: false,
      role: null,
    });
  };

  return (
    <>
      {user?.isAuthenticated ? (
        <div>
          <p>Logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleLogin("admin")}>Login as Admin</button>
          <button onClick={() => handleLogin("user")}>Login as User</button>
          <button onClick={() => handleLogin("guest")}>Login as Guest</button>
        </div>
      )}
      <br />
      <Link to={"/admin"}>Admin Dashboard</Link>
      <Link to={"/user"}>User Dashboard</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Link to={"/profile"}>Profile</Link>
      <Outlet />
    </>
  );
};

export default Login;
