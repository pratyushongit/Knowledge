import "./BarChart.scss";
import Bar from "./bar/Bar";
import { IChartData } from "../types/types";

const BarChart = ({ chartData }: { chartData: IChartData[] }) => {
  return (
    <>
      <div className="chart-container">
        {chartData.map((data) => (
          <Bar data={data} />
        ))}
        <p className="label ticket-label">No. of tickets &rarr;</p>
        <p className="label department-label">Department &rarr;</p>
      </div>
    </>
  );
};

export default BarChart;
