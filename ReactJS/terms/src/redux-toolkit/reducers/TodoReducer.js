import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      content: "wow",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1,
        content: action.payload,
        completed: false,
      });
    },

    toggle: (state, action) => {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },

    delete: (state, action) => {
      state.todos.splice(action.payload - 1, 1);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;
