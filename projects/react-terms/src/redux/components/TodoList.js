import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/TodoActions";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    dispatch(deleteTodo(i));
  };

  const handleToggle = (i) => {
    dispatch(toggleTodo(i));
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
