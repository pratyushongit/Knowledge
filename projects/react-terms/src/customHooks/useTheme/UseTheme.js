import Container from "./components/container/Container";
import ThemeProvider from "./utils/ThemeContext";

const UseTheme = () => {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
};

export default UseTheme;
