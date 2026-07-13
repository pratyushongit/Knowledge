import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions, todoSelector } from "../reducers/TodoReducer";

const TodoList = () => {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    dispatch(todoActions.delete(i));
  };

  const handleToggle = (i) => {
    dispatch(todoActions.toggle(i));
  };

  return (
    <ul>
      {todos.map((el) => (
        <li key={el.id}>
          <p>{el.content}</p>
          <p>{el.completed ? "Toggle" : "Un-Toggle"}</p>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
          <button onClick={() => handleToggle(el.id)}>Toggle</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
