import { useState } from "react";
import { Action, ITask } from "../../lib/types";
import styles from "./TaskItem.module.css";

type TTaskItemProps = {
  task: ITask;
  setTasks: React.Dispatch<Action>;
};

const TaskItem = ({ task, setTasks }: TTaskItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>("");

  const toggleTask = (id: number) => {
    setTasks({ type: "TOGGLE_TASK", payload: id });
  };

  const deleteTask = (id: number) => {
    setTasks({ type: "DELETE_TASK", payload: id });
  };

  const editTask = (id: number) => {
    setEditMode((p: boolean) => !p);
    setEditedTask(task.body);
    setTasks({ type: "EDIT_TASK", payload: { id, body: editedTask } });
  };

  return (
    <div className={styles.task__item}>
      {editMode ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <p style={{ margin: "0px" }}>{task.body}</p>
      )}
      <button onClick={() => toggleTask(task.id)}>
        {task.isCompleted ? "Incomplete" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => editTask(task.id)}>
        {editMode ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default TaskItem;
