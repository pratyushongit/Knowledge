import withActionCounter from "../utils/withActionCounter";

const HoverCounter = ({ count, increment }) => {
  return <h3 onMouseOver={increment}>HoverCounter hovered {count} times</h3>;
};

export default withActionCounter(HoverCounter, 5);
