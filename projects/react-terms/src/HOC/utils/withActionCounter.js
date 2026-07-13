import { useState } from "react";

const withActionCounter = (WrappedComponent, incrementBy = 1) => {
  return (props) => {
    const [count, setCount] = useState(0);

    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={() => setCount((c) => c + incrementBy)}
        name="Biswas" // name prop collision
      />
    );
  };
};
export default withActionCounter;
