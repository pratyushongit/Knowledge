import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/TodoReducer";

export const store = configureStore({
  reducer: {
    todoReducer,
  },
});
