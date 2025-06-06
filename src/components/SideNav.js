import React from "react";

export default function SideNav() {
  return (
    <nav className="hidden md:flex md:flex-col md:w-64 bg-blue-700 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Developer Gauge</h2>
      <ul>
        <li className="mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded">Dashboard</li>
        <li className="mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded">Developers</li>
        <li className="mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded">Reports</li>
      </ul>
    </nav>
  );
}
