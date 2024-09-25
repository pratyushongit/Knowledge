import { useTheme } from "../../utils/ThemeContext";
import styles from "./ThemedButton.module.css";

const ThemedButton = () => {
  const { darkMode, handleThemeChange } = useTheme();

  return (
    <div
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
    >
      <label htmlFor="themeCheckbox">Change theme</label>
      <input
        onChange={handleThemeChange}
        id="themeCheckbox"
        type="checkbox"
        checked={darkMode}
      />
      <h3>Button</h3>
      <button className={`${darkMode ? styles.dark : styles.light}`}>
        Click me
      </button>
    </div>
  );
};

export default ThemedButton;
