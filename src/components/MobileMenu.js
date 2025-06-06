import React from "react";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={onClose}>
      <div
        className="bg-blue-700 text-white w-64 p-4 h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mb-6 text-white font-bold"
          onClick={onClose}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul>
          <li className="mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded" onClick={onClose}>Dashboard</li>
          <li className="mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded" onClick={onClose}>Developers</li>
          <li className="mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded" onClick={onClose}>Reports</li>
        </ul>
      </div>
    </div>
  );
}
