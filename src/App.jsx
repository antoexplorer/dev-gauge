import React, { useState } from "react";
import Banner from "./components/Banner";
import SideNav from "./components/SideNav";
import MobileMenu from "./components/MobileMenu";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <SideNav />
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div className="flex flex-col flex-1">
        <Banner onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="p-4 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
