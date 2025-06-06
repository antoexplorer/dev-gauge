import React from "react";

export default function DeveloperSummary({ summary }) {
  const cards = [
    { title: "Total Developers", value: summary.totalDevelopers, color: "bg-gray-500" },
    { title: "Super Efficient", value: summary.superEfficient, color: "bg-green-600" },
    { title: "Good", value: summary.good, color: "bg-blue-600" },
    { title: "Needs Improvement", value: summary.needsImprovement, color: "bg-yellow-500" },
    { title: "Poor Performer", value: summary.poor, color: "bg-red-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {cards.map(({ title, value, color }) => (
        <div
          key={title}
          className={`${color} text-white rounded-lg p-4 shadow`}
        >
          <h3 className="font-semibold">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}
