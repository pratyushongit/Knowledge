import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import Fallback from "../Fallback";

const Heavy = lazy(() => import("../Heavy"));

const routes = [
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/heavy",
    element: (
      <Suspense fallback={<Fallback />}>
        <Heavy />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <p>404 not found</p>,
  },
];

const router = createBrowserRouter(routes);

export default router;
