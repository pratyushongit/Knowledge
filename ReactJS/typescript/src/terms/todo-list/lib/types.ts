export interface ITask {
  id: number;
  body: string;
  isCompleted: boolean;
}

// Define action types
export type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "EDIT_TASK"; payload: { id: number; body: string } };
