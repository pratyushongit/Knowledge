import { useCallback, useState } from "react";
import Star from "../Star/Star";

const Stars = ({ starCount }: { starCount: number }) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleClick = useCallback((index: number | null) => {
    setClickedIndex(index);
  }, []);

  const handleHover = useCallback((index: number | null) => {
    setHoverIndex(index);
  }, []);

  return (
    <>
      {Array(starCount)
        .fill(0)
        .map((_, index) => (
          <Star
            key={index}
            clickedIndex={clickedIndex}
            setClickedIndex={handleClick}
            index={index}
            hoverIndex={hoverIndex}
            setHoverIndex={handleHover}
          />
        ))}
    </>
  );
};

export default Stars;
