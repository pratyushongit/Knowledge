import {
  FC,
  useMemo,
  useCallback,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

interface ITheme {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ITheme | undefined>(undefined);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value: ITheme = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext should be used inside ThemeContextProvider");
  return context;
};
