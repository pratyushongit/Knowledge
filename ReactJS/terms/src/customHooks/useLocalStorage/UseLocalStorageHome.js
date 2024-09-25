import { useState } from "react";
import useLocalStorage from "./utils/useLocalStorage";

const UseLocalStorageHome = () => {
  const [text, setText] = useState("");
  const { getLocalStorage, setLocalStorage, removeLocalStorage } =
    useLocalStorage("value");

  const handleSetList = () => {
    const list = getLocalStorage([]);
    list.push(text);
    setLocalStorage(list);
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
        <button onClick={() => setLocalStorage(text)}>Set</button>
        <button onClick={() => getLocalStorage("")}>Get</button>
        <button onClick={() => removeLocalStorage()}>Remove</button>
      </div>
      <div>
        {" "}
        <button onClick={() => handleSetList()}>Set List</button>
        <button onClick={() => getLocalStorage([])}>Get List</button>
        <button onClick={() => removeLocalStorage()}>Remove List</button>
      </div>
    </>
  );
};

export default UseLocalStorageHome;
