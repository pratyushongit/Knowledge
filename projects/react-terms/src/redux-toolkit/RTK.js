import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import { todoActions } from "./reducers/TodoReducer";

const RTK = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(todoActions.add(todoText));
    setTodoText("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={handleAdd}>Add</button>
      <TodoList />
    </>
  );
};

export default RTK;
