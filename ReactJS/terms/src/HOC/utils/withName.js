const withName = (WrappedComponent) => (props) =>
  <WrappedComponent {...props} name="Pratyush" />; // name prop collision

export default withName;
