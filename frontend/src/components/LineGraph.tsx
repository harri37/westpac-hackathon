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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = (data: any) => {
  // Ensure data is properly structured to match ChartJS data format
  const chartData = {
    labels: [
      "July 2023",
      "August 2023",
      "September 2023",
      "October 2023",
      "November 2023",
      "December 2023",
    ],
    datasets: [
      {
        label: "Projected Earnings",
        data: [4500, 4600, 4700, 4800, 4900, 5000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {};

  return <Line data={chartData} options={options} />;
};
