import ClickButtonCounter from "./components/ClickButtonCounter";
import HoverCounter from "./components/HoverCounter";
import Dashboard from "./components/Dashboard";

const HOC = () => {
  return (
    <>
      <Dashboard name={"Pratyush"} />
      <ClickButtonCounter />
      <HoverCounter />
    </>
  );
};

export default HOC;
