import React from "react";
import { developers, getPerformance } from "../data/mockData";
import DeveloperSummary from "./DeveloperSummary";
import DeveloperList from "./DeveloperList";

export default function Dashboard() {
  const summary = {
    totalDevelopers: developers.length,
    superEfficient: developers.filter((d) => getPerformance(d) === "Super Efficient").length,
    good: developers.filter((d) => getPerformance(d) === "Good").length,
    needsImprovement: developers.filter((d) => getPerformance(d) === "Needs Improvement").length,
    poor: developers.filter((d) => getPerformance(d) === "Poor Performer").length,
  };

  return (
    <div>
      <DeveloperSummary summary={summary} />
      <DeveloperList developers={developers} />
    </div>
  );
}
