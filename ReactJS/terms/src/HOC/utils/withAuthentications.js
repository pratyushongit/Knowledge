const withAuthentication = (WrappedComponent) => {
  const isAuthenticated = true;
  return (props) => {
    return isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please login to access</p>
    );
  };
};

export default withAuthentication;
