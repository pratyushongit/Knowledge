import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/TodoReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(todoReducer);

const reducers = combineReducers({
  todoReducer,
});

export const store = createStore(reducers, composeWithDevTools());
