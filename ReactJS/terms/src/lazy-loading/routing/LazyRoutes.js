import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const LazyRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default LazyRoutes;
