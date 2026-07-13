import { useMemo, useState } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => ({
  index: i,
  isMagical: i === 29_000_000,
}));

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  // const number = numbers.find((el) => el.isMagical); // expensive calculation
  const number = useMemo(() => numbers.find((el) => el.isMagical), [numbers]);

  return (
    <>
      <p>{count}</p>
      <div>{number.index}</div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          if (count === 10) {
            setNumbers(
              new Array(10_000_000).fill(0).map((_, i) => ({
                index: i,
                isMagical: i === 9_000_000,
              }))
            );
          }
        }}
      >
        Click
      </button>
    </>
  );
};

export default UseMemo;
