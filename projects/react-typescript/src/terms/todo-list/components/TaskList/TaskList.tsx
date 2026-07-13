import { Action, ITask } from "../../lib/types";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

type TTaskListProps = {
  tasks: ITask[];
  setTasks: React.Dispatch<Action>;
};

const TaskList = ({ tasks, setTasks }: TTaskListProps) => {
  return (
    <div className={styles.task_container}>
      {tasks.map((task: ITask) => (
        <TaskItem task={task} setTasks={setTasks} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
