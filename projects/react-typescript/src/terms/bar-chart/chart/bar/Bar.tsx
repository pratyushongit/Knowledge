import { useCallback } from "react";
import CHART_DATA from "../../data/data";
import { IChartData } from "../../types/types";
import "./Bar.scss";

const Bar = ({ data }: { data: IChartData }) => {
  const calculateHeight = useCallback((tickets: number) => {
    const maxHeight: number = Math.max(
      ...CHART_DATA.map((el) => el.ticketCount)
    );
    return (tickets / maxHeight) * 100;
  }, []);

  return (
    <div
      key={data.id}
      className="bar"
      style={{
        backgroundColor: data.colour,
        height: `${calculateHeight(data.ticketCount)}%`,
      }}
    >
      <span className="tooltip">{data.name}</span>
    </div>
  );
};

export default Bar;
