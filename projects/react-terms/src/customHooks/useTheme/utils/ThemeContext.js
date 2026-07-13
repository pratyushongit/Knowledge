import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => setDarkMode((theme) => !theme);

  return (
    <ThemeContext.Provider value={{ darkMode, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
