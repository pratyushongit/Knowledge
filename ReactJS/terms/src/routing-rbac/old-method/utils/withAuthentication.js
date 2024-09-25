import { rolePermissions } from "../../authData";
import { useAuth } from "./AuthProvider";

const withAuthentication = (WrappedComponent, permission) => (props) => {
  const { user } = useAuth();
  if (
    !user?.isAuthenticated ||
    !rolePermissions[user?.role].includes(permission)
  )
    return <p>Not authorized</p>;
  return <WrappedComponent {...props} />;
};

export default withAuthentication;
