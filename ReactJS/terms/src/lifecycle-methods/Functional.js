import React, { useState, useEffect } from "react";

const Functional = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform side effects like fetching data
    console.log("Component did mount");

    return () => {
      // Clean up tasks
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    // Perform side effects after state or props change
    console.log("Component did update");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};

export default Functional;
