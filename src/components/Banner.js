import React from "react";

export default function Banner({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 md:hidden">
      <button
        onClick={onMenuClick}
        className="text-white focus:outline-none"
        aria-label="Open menu"
      >
        &#9776;
      </button>
      <h1 className="text-xl font-bold">Developer Gauge</h1>
      <div className="w-6" /> {/* Placeholder for spacing */}
    </header>
  );
}
