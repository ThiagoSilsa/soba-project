"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function MainLayout({ children }) {
  // Side Bar
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // Qual página atual?
  const [actualPage, setActualPage] = useState("/home");

  return (
    <div className="min-h-screen bg-[var(--light-bg2)]">
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <Sidebar isSidebarOpen={isSidebarOpen} actualPage={actualPage} setActualPage={setActualPage}/>
      <main className="">
        <div className="">{children}</div>
      </main>
    </div>
  );
}
