import Card from "../shared/Card";

const CardHandler = ({ render }) => {
  return <Card>{render()}</Card>;
};
export default CardHandler;
