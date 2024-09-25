import withActionCounter from "../utils/withActionCounter";
import withName from "../utils/withName";

const ClickButtonCounter = ({ count, increment, name, theme }) => {
  return (
    <>
      <button onClick={increment}>Clicked {count} times</button>
      <p>Name: {name}</p>
    </>
  );
};

export default withActionCounter(withName(ClickButtonCounter, 10));
