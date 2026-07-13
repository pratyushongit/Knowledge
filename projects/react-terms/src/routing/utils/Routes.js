import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import TodoList from "../components/TodoList";
import Todo from "../components/Todo";
import Page404 from "../components/Page404";
import ErrorElement from "../components/ErrorElement";
import { todosListLoader } from "./TodosListLoader";
import { todoLoader } from "./TodoLoader";
import SearchParams from "../components/SearchParams";

const routes = [
  {
    path: "",
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "todos",
        children: [
          {
            index: true,
            element: <TodoList />,
            loader: todosListLoader,
          },
          {
            path: ":id",
            element: <Todo />,
            loader: todoLoader,
          },
        ],
      },
      {
        path: "searchParams",
        element: <SearchParams />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export const router = createBrowserRouter(routes);
