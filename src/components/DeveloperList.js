import React from "react";
import DeveloperCard from "./DeveloperCard";

export default function DeveloperList({ developers }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {developers.map((dev) => (
        <DeveloperCard key={dev.id} developer={dev} />
      ))}
    </div>
  );
}
