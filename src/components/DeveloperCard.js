import React from "react";
import { getPerformance } from "../data/mockData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function DeveloperCard({ developer }) {
  const performance = getPerformance(developer);

  const data = {
    labels: [
      "Commits",
      "Churn",
      "MR Raised",
      "MR Approved",
      "Coverage",
      "Vulnerabilities",
    ],
    datasets: [
      {
        label: "Metrics",
        data: [
          developer.commits,
          developer.churn,
          developer.mergeRequestsRaised,
          developer.mergeRequestsApproved,
          developer.codeCoverage,
          developer.newVulnerabilities,
        ],
        backgroundColor: [
          "#3b82f6",
          "#ef4444",
          "#f59e0b",
          "#10b981",
          "#6366f1",
          "#ef4444",
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        max: Math.max(
          developer.commits,
          developer.churn,
          developer.mergeRequestsRaised,
          developer.mergeRequestsApproved,
          developer.codeCoverage,
          developer.newVulnerabilities
        ) + 10,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const performanceColors = {
    "Super Efficient": "bg-green-600",
    Good: "bg-blue-600",
    "Needs Improvement": "bg-yellow-500",
    "Poor Performer": "bg-red-600",
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{developer.name}</h3>
      <div
        className={`inline-block px-3 py-1 mb-2 text-white rounded-full text-sm ${performanceColors[performance]}`}
      >
        {performance}
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
