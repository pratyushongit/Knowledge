import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const context = useOutletContext();

  if (context.user?.isAuthenticated && context.user.role === role) {
    return <Outlet context={context} />;
  } else {
    return <Navigate to={"/"} replace />;
  }
};

export default ProtectedRoute;
