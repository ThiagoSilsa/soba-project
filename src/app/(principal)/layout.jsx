"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function MainLayout({ children }) {
  // Side Bar
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // Página atual
  const [actualPage, setActualPage] = useState("/home");

  return (
    <div className="min-h-screen bg-[var(--light-bg2)] relative">
      <Header 
      
      isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
      <div className="pl-16 relative">
      <main className="p-6">{children}</main>

      </div>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 top-14 bg-black opacity-70 backdrop-blur-md z-5"
        />
      )}
    </div>
  );
}
