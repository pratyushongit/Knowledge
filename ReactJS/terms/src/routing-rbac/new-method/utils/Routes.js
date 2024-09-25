import { createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../components/AdminDashboard";
import Dashboard from "../components/Dashboard";
import UserDashboard from "../components/UserDashboard";
import Profile from "../components/Profile";

const routes = [
  {
    path: "/",
    element: <Login />,
    errorElement: <h1>404! Something went wrong!!!!</h1>,
    children: [
      {
        element: <ProtectedRoute role={"guest"} />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        element: <ProtectedRoute role={"user"} />,
        children: [
          {
            path: "user",
            element: <UserDashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        element: <ProtectedRoute role={"admin"} />,
        children: [
          {
            path: "admin",
            element: <AdminDashboard />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
