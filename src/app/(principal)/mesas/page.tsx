"use client";

import { cn } from "@/lib/utils";
import { Calculator, Users } from "lucide-react";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineTableBar } from "react-icons/md";
import Tables from "./components/Tables";

export default function Mesas() {
  // Simulação de Arquivos JSON
  const tables = [
    {
      id: 1,
      number: 1,
      isActive: false,
      currentTotal: 0,
      orders: [],
    },
    {
      id: 2,
      number: 2,
      isActive: true,
      currentTotal: 45.0,
      orders: [4],
    },
    {
      id: 3,
      number: 3,
      isActive: true,
      currentTotal: 97.0,
      orders: [2],
    },
    {
      id: 4,
      number: 4,
      isActive: false,
      currentTotal: 0,
      orders: [],
    },
    {
      id: 5,
      number: 5,
      isActive: true,
      currentTotal: 71.0,
      orders: [1],
    },
    {
      id: 6,
      number: 6,
      isActive: false,
      currentTotal: 0,
      orders: [],
    },
    {
      id: 7,
      number: 7,
      isActive: false,
      currentTotal: 0,
      orders: [],
    },
    {
      id: 8,
      number: 8,
      isActive: true,
      currentTotal: 50.0,
      orders: [3],
    },
    {
      id: 9,
      number: 9,
      isActive: true,
      currentTotal: 50.0,
      orders: [3],
    },
    {
      id: 10,
      number: 10,
      isActive: true,
      currentTotal: 50.0,
      orders: [3],
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--light-text1)]">
            Mesas
          </h1>
          <p className="text-[var(--light-text2)] mb-2">
            Gerenciamento de mesas do restaurante
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className=" rounded-md bg-[var(--light-bg1)] shadow-md p-2">
          <div className="flex items-center gap-3">
            <div className=" p-2 rounded-lg">
              <Users className="h-5 w-5 " />
            </div>
            <div>
              <p className="text-text-muted text-sm">Mesas Ativas</p>
              <p className="text-2xl font-bold ">8</p>
            </div>
          </div>
        </div>

        <div className=" rounded-md bg-[var(--light-bg1)] shadow-md p-2">
          <div className="flex items-center gap-3">
            <div className=" p-2 rounded-lg">
              <Calculator className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-text-muted text-sm">Receita Total</p>
              <p className="text-2xl font-bold ">R$ 1.250,00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tables.map((table) => {
          return <Tables table={table} key={table.id}/>;
        })}
      </div>
    </>
  );
}
