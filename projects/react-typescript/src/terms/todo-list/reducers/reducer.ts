import { Action, ITask } from "../lib/types";

// Define reducer function
export const taskReducer = (state: ITask[], action: Action): ITask[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length,
          body: action.payload,
          isCompleted: false,
        },
      ];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, body: action.payload.body }
          : task
      );
    default:
      return state;
  }
};
