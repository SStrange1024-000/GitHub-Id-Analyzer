import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, Title);

const DemoChart = () => {
  // Example dataset — you can replace this with your GitHub API data
  const languages = ["JavaScript", "Python", "Java", "C++", "TypeScript"];
  const repoCount = [12, 7, 5, 3, 8];

  // Bar chart data
  const barData = {
    labels: languages,
    datasets: [
      {
        label: "Number of Repositories",
        data: repoCount,
        backgroundColor: [
          "#facc15", // yellow
          "#60a5fa", // blue
          "#34d399", // green
          "#f87171", // red
          "#a78bfa", // purple
        ],
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: languages,
    datasets: [
      {
        data: repoCount,
        backgroundColor: [
          "#facc15",
          "#60a5fa",
          "#34d399",
          "#f87171",
          "#a78bfa",
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        📊 GitHub Data Visualization
      </h1>

      <div className="w-full md:w-2/3 bg-white p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Bar Chart</h2>
        <Bar data={barData} options={{ responsive: true }} />
      </div>

      <div className="w-full md:w-2/3 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Pie Chart</h2>
        <Pie data={pieData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default DemoChart;
