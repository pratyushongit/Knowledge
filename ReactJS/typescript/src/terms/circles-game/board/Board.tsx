import { MouseEvent, useState } from "react";
import "./Board.scss";
import { ICircle } from "../types/types";
import { COLORS } from "../circles";

const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

const Board = () => {
  const [circleList, setCircleList] = useState<ICircle[]>([]);
  const [history, setHistory] = useState<ICircle[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setCircleList((p) => [
      ...p,
      {
        x: e.clientX,
        y: e.clientY,
        id: p.length,
        bgColor: getRandomColor(),
      },
    ]);
  };

  const handleButtonClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if ((e.target as Element).matches(".undo")) {
      setCircleList(circleList.slice(1));
      setHistory((p) => [...p, circleList[0]]);
    } else if ((e.target as Element).matches(".redo")) {
      setCircleList((p) => [...history.slice(-1), ...p]);
      setHistory((history) => history.slice(0, history.length - 1));
    } else if ((e.target as Element).matches(".reset")) {
      setCircleList([]);
      setCircleList([]);
    }
  };

  return (
    <div className="board-container" onClick={handleClick}>
      {circleList.map((circle) => (
        <div
          key={circle.id}
          style={{
            position: "absolute",
            backgroundColor: circle.bgColor,
            left: `${circle.x - 12}px`,
            top: `${circle.y - 12}px`,
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      ))}
      <div className="button-container" onClick={handleButtonClick}>
        <button
          className={`btn undo ${circleList.length === 0 ? "disabled" : ""}`}
        >
          Undo
        </button>
        <button
          className={`btn redo ${history.length === 0 ? "disabled" : ""}`}
        >
          Redo
        </button>
        <button className="btn reset">Reset</button>
      </div>
    </div>
  );
};

export default Board;
