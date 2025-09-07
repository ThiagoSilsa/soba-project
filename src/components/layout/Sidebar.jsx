"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  ClipboardList,
  Plus,
  Utensils,
  CreditCard,
  Settings,
  Shield,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/home", icon: LayoutDashboard },
  { name: "Mesas", href: "/mesas", icon: Utensils },
  { name: "Admin Cardápio", href: "/admin/cardapio", icon: Shield },
  { name: "Configurações", href: "/config", icon: Settings },
];

export default function Sidebar({
  isSidebarOpen,
  setSidebarOpen,
  actualPage,
  setActualPage,
}) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-14 left-0 z-50 h-full border-r border-border text-[var(--light-text1)]",
          "bg-[var(--light-bg1)]",
          isSidebarOpen
            ? "w-64"
            : "w-16 transition-discrete duration-300 ease-out"
        )}
      >
        <nav className="space-y-2 mt-4">
          {navigation.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setSidebarOpen(false);
                  setActualPage(item.href);
                }}
                className={cn(
                  "flex items-center gap-3  py-2 rounded-lg text-sm font-medium",
                  "transition-colors duration-200 mx-2",
                  "hover:bg-[var(--purple-bg4)] hover:text-white ",
                  actualPage == item.href
                    ? "bg-[var(--purple-bg4)] text-[var(--dark-text1)] "
                    : "",
                  isSidebarOpen
                  ? "px-4 transition-discrete duration-300 ease-out"
                  : "px-4 transition-discrete duration-300 ease-out"
                )}
              >
                <item.icon className="h-5 w-5 hover:scale-110" />
                {isSidebarOpen ? item.name : ""}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
