const withDarkMode = (WrappedComponent) => {
  const darkMode = {
    backgroundColor: "#000",
    color: "#FFFFFF",
  };
  return (props) => (
    <div style={darkMode}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withDarkMode;
