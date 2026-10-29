import ContextApiComponentOne from "./context-api-comp-one";
import ContextApiComponentTwo from "./context-api-comp-two";
import { DataContextProvider } from "./DataContext";

const ContextApiComponent = () => {
  return (
    <DataContextProvider>
      <ContextApiComponentOne />
      <ContextApiComponentTwo />
    </DataContextProvider>
  );
};

export default ContextApiComponent;
