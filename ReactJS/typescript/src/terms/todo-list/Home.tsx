import { useReducer } from "react";
import InputField from "./components/InputField/InputField";
import styles from "./Home.module.css";
import TaskList from "./components/TaskList/TaskList";
import { taskReducer } from "./reducers/reducer";

const Home = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <div className={styles.app}>
      <div className={styles.heading}>Taskify</div>
      <InputField setTasks={dispatch} />
      <div>
        <h3 style={{ textAlign: "center" }}>Tasks</h3>
        <TaskList tasks={tasks} setTasks={dispatch} />
      </div>
    </div>
  );
};

export default Home;
