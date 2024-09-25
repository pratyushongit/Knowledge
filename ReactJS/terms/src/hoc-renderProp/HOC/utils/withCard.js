import Card from "../shared/Card";

export const withCard = (WrappedComponent) => (props) =>
  (
    <Card>
      <WrappedComponent {...props} />
    </Card>
  );
