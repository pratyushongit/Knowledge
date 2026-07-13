import { FormEvent, useState } from "react";
import styles from "./InputField.module.css";
import { Action } from "../../lib/types";

const InputField = ({ setTasks }: { setTasks: React.Dispatch<Action> }) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTasks({ type: "ADD_TASK", payload: task });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Go</button>
        </div>
      </form>
    </div>
  );
};

export default InputField;
