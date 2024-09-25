import { createBrowserRouter } from "react-router-dom";
import Login from "../Login";
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
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "user",
        element: <UserDashboard />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
