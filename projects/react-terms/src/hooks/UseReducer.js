import React, { useReducer, useRef } from "react";

const myReducer = (state, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return [...state, { id: state.length + 1, text: action.payload }];
    case "TODO_DELETE":
      let updatedList = [...state];
      let index = updatedList.findIndex((val) => val.id === action.payload.id);
      updatedList.splice(index, 1);
      return updatedList;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [todoList, dispatch] = useReducer(myReducer, []);
  const ref = useRef();

  //   const handleAdd = () => {
  //     setTodoList([
  //       ...todoList,
  //       { id: todoList.length + 1, text: ref.current.value },
  //     ]);
  //     ref.current.value = "";
  //   };

  //   const handleRemove = (item) => {
  //     let updatedList = [...todoList];
  //     let index = updatedList.findIndex((val) => val.id === item.id);
  //     updatedList.splice(index, 1);
  //     setTodoList(updatedList);
  //   };

  return (
    <>
      <div>
        <input ref={ref} />
        <button
          onClick={() =>
            dispatch({ type: "TODO_ADD", payload: ref.current.value })
          }
        >
          Add
        </button>
        <ul>
          {todoList.map((el) => (
            <div key={el.id}>
              <li>{el.text}</li>
              <button
                onClick={() => dispatch({ type: "TODO_DELETE", payload: el })}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseReducer;
