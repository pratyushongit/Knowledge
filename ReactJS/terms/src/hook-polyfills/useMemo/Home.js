import { useState } from "react";
import useMyMemo from "./useMemoPolyfill";

const arr = Array.from({ length: 100_000_00 }, (_, i) => ({
  name: "prat",
  id: i + 1,
}));

function Home() {
  const [data, setData] = useState(arr);
  const [count, setCount] = useState(0);

  const filteredData = useMyMemo(
    () => data.find((el) => el.id === 99_999_99),
    [data]
  );

  return (
    <div>
      <p>{filteredData.id}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Home;
