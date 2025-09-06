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
  { name: "Pedidos", href: "/pedidos", icon: ClipboardList },
  { name: "Novo Pedido", href: "/novo-pedido", icon: Plus },
  { name: "Mesas", href: "/mesas", icon: Utensils },
  { name: "Fechar Conta", href: "/fechar-conta", icon: CreditCard },
  { name: "Admin Cardápio", href: "/admin/cardapio", icon: Shield },
  { name: "Configurações", href: "/config", icon: Settings },
];

export default function Sidebar({ isSidebarOpen, actualPage, setActualPage }) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-14 left-0 z-50 h-full border-r border-border",
          "lg:translate-x-0",
          "bg-[var(--light-bg1)]",
          !isSidebarOpen
            ? "w-64"
            : "w-22 transition-discrete duration-300 ease-out"
        )}
      >
        <nav className="space-y-2 mt-16 lg:mt-4">
          {navigation.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActualPage(item.href)}
                className={cn(
                  "flex items-center gap-3  py-2 rounded-lg text-sm font-medium",
                  "transition-colors duration-200 mx-2",
                  "hover:bg-[var(--roxo-fundo4)] hover:text-white ",
                  actualPage == item.href
                    ? "bg-[var(--roxo-fundo4)] text-white "
                    : "",
                  isSidebarOpen
                    ? "justify-center px-0 transition-discrete duration-300 ease-out"
                    : "px-8 transition-discrete duration-300 ease-out"
                )}
              >
                <item.icon className="h-5 w-5 hover:scale-110" />
                {!isSidebarOpen ? item.name : ""}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
