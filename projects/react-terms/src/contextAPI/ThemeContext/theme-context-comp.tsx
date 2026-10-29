import { useTheme, ThemeContextProvider } from "./ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const dark = "dark" === theme;

  return (
    <div
      style={{
        border: "1px solid red",
        height: "10vh",
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      Header
    </div>
  );
};

const ThemeContextContent = () => {
  const { theme, toggleTheme } = useTheme();
  const dark = "dark" === theme;

  const getAlternateTheme = () => (theme === "light" ? "dark" : "light");

  return (
    <div
      style={{
        border: "1px solid red",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <p>Theme Context Content</p>
      <p>Theme is: {theme}</p>
      <button onClick={toggleTheme}>Change to {getAlternateTheme()}</button>
    </div>
  );
};
const Footer = () => {
  const { theme } = useTheme();
  const dark = "dark" === theme;

  return (
    <div
      style={{
        border: "1px solid green",
        height: "10vh",
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      Footer
    </div>
  );
};
const ThemeContextComp = () => {
  return (
    <ThemeContextProvider>
      <div>
        <Header />
        <ThemeContextContent />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
};

export default ThemeContextComp;
