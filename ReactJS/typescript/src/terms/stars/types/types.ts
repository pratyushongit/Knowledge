export interface IStarProps {
  clickedIndex: number | null;
  setClickedIndex: (index: number | null) => void;
  index: number;
  hoverIndex: number | null;
  setHoverIndex: (index: number | null) => void;
}
