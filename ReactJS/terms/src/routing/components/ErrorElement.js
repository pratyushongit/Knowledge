import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <>
      <p>{error.message}</p>
      <Link to={"/"}>Homepage &rarr;</Link>
    </>
  );
};

export default ErrorElement;
