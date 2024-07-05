import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { title } from "process";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineGraph = (data: any) => {
  // Ensure data is properly structured to match ChartJS data format
  const chartData = {
    labels: data.data.labels,
    datasets: data.data.datasets,
  };

  const options = {};

  return <Line data={chartData} options={options} />;
};
