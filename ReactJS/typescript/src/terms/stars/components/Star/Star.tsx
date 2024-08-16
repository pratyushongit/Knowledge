import { IStarProps } from "../../types/types";
import "./Star.scss";

const Star = ({
  clickedIndex,
  setClickedIndex,
  index,
  hoverIndex,
  setHoverIndex,
}: IStarProps) => {
  const shouldColourGold = () => {
    if (hoverIndex === null && clickedIndex && index <= clickedIndex) {
      return true;
    } else if (hoverIndex !== null && index <= hoverIndex) {
      return true;
    }
    return false;
  };

  return (
    <span
      className={`star ${shouldColourGold() ? "gold" : ""}`}
      onClick={() => setClickedIndex(index)}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      &#9733;
    </span>
  );
};

export default Star;
