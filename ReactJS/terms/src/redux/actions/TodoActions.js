// Action constants

export const TODO_ADD = "Add Todo";
export const TODO_DELETE = "Delete Todo";
export const TODO_TOGGLE = "Toggle Todo";

//Action Creators

export const addTodo = (text) => ({ type: TODO_ADD, payload: text });
export const toggleTodo = (index) => ({ type: TODO_TOGGLE, payload: index });
export const deleteTodo = (index) => ({ type: TODO_DELETE, payload: index });
