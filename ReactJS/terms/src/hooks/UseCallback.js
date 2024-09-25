import React, { useState, memo, useCallback } from "react";

const Navbar = memo(({ adjective, myFunc }) => {
  console.log("render");
  return <></>;
});

const UseCallback = () => {
  const [adjective, setAdjective] = useState("good");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   const myFunc = () => {
  //     setAdjective("beautiful");
  //   }; // expensive function

  const myFunc = useCallback(() => {
    setAdjective("beautiful" + count1);
  }, [count1]);

  return (
    <>
      <p>count 1 : {count1} </p>
      <p>count 2 : {count2}</p>
      <button onClick={() => setCount1((c) => c + 1)}>Click 1</button>
      <button onClick={() => setCount2((c) => c + 1)}>Click 2</button>
      <Navbar adjective={adjective} myFunc={myFunc} />
    </>
  );
};

export default UseCallback;
