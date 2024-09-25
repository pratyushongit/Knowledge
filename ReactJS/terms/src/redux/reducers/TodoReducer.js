import { TODO_ADD, TODO_DELETE, TODO_TOGGLE } from "../actions/TodoActions";

const INITIAL_STATE = { todos: [] };

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            content: action.payload,
            completed: false,
          },
        ],
      };
    case TODO_TOGGLE:
      let updatedTodos = [...state.todos];
      updatedTodos[action.payload].completed =
        !updatedTodos[action.payload].completed;
      return { ...state, updatedTodos };
    case TODO_DELETE:
      let todos = [...state.todos];
      todos.splice(action.payload - 1, 1);
      return { ...state, todos };
    default:
      return state;
  }
};

export default todoReducer;
