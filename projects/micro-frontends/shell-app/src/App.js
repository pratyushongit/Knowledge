import React, { lazy } from "react";
const Button = lazy(() => import("MicroFrontendOne/Button"));
const Home = lazy(() => import("MicroFrontendTwo/Home"));

const App = () => {
  return (
    <>
      <Button button={"Micro-Button"} />
      <Home value={"Micro-Span"} />
    </>
  );
};

export default App;
