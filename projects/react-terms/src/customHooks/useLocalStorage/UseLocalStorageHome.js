import { useState } from "react";
import useLocalStorage from "./utils/useLocalStorage";

const UseLocalStorageHome = () => {
  const [text, setText] = useState("");
  const [displayValue, setDisplayValue] = useState(null); // so "Get" is visible

  const singleValue = useLocalStorage("single-value");
  const listValue = useLocalStorage("list-value");

  const handleSetList = () => {
    const list = listValue.getLocalStorage([]);
    list.push(text);
    listValue.setLocalStorage(list);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button onClick={() => singleValue.setLocalStorage(text)}>Set</button>
        <button
          onClick={() => setDisplayValue(singleValue.getLocalStorage(""))}
        >
          Get
        </button>
        <button onClick={() => singleValue.removeLocalStorage()}>Remove</button>
      </div>
      <div>
        <button onClick={handleSetList}>Set List</button>
        <button onClick={() => setDisplayValue(listValue.getLocalStorage([]))}>
          Get List
        </button>
        <button onClick={() => listValue.removeLocalStorage()}>
          Remove List
        </button>
      </div>
      <pre>{JSON.stringify(displayValue)}</pre>
    </>
  );
};

export default UseLocalStorageHome;
