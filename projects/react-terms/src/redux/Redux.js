import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import { addTodo } from "./actions/TodoActions";
import { useState } from "react";

const Redux = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    dispatch(addTodo(todoText));
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

export default Redux;
