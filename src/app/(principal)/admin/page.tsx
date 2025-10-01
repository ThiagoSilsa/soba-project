"use client";

import { Users } from "lucide-react";
import { useState } from "react";

import { BiNotification, BiSolidBarChartSquare } from "react-icons/bi";
import Notifications from "./components/notifications/Notifications.jsx";
import Employees from "./components/employees/Employees.jsx";
import Saloon from "./components/saloon/Saloon.jsx";

export default function Config() {
  // Simulação de Arquivos JSON
  const navigation = [
    { name: "Funcionários", icon: Users },
    { name: "Salão", icon: BiSolidBarChartSquare },
    { name: "Notificações", icon: BiNotification },
  ];
  const [actualNav, setActualNav] = useState("Funcionários");

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3.5">
        <div>
          <h1 className="text-2xl font-bold text-[var(--light-text1)]">
            Administrativo
          </h1>
          <p className="text-[var(--light-text2)] mb-2">
            Administração geral do restaurante{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-6 mb-6">
        {navigation.map((nav) => (
          <button
            type="button"
            key={nav.name}
            className={`rounded-md bg-[var(--light-bg1)] shadow-md p-2 pr-4
            cursor-pointer
            hover:scale-105 hover:shadow-lg
            ${
              actualNav === nav.name &&
              "text-[var(--light-bg1)] bg-[var(--purple-bg3)]"
            }
            
            `}
            onClick={() => setActualNav(nav.name)}
          >
            <div className="flex items-center gap-3">
              <div className=" p-2 rounded-lg">
                <nav.icon className="h-5 w-5 " />
              </div>
              <p className="text-text-muted text-sm">{nav.name}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Main content */}
      <div>
        {actualNav === "Funcionários" && <Employees />}
        {actualNav === "Salão" && <Saloon />}
        {actualNav === "Notificações" && <Notifications />}
      </div>
    </>
  );
}
