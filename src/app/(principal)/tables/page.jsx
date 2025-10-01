"use client";

import { Calculator, Users } from "lucide-react";

import MenuModalPedido from "./components/MenuModalPedido";
import TableCard from "./components/TableCard";

import { useState, useMemo } from "react";

import { useQuery } from "@tanstack/react-query";

import TableController from "../../../Controllers/TableController.js";
import { toast } from "react-toastify";

export default function Tables() {
  const [menuModal, setMenuModal] = useState(false);
  const [isFiltered, setIsFiltered] = useState("");

  //Requisição
  const { data: tables, isLoading } = useQuery({
    queryKey: ["tables"],
    queryFn: () => TableController.getMesas(),
    onError: (error) => {
      toast.error("Erro ao carregar pedidos: " + (error?.message || ""));
    },
  });

  const tablesFiltered = useMemo(() => {
    if (!isFiltered) return tables?.data;
    if (isFiltered === "Ativas")
      return tables?.data.filter((table) => table.active === true);
    if (isFiltered === "Disponíveis")
      return tables?.data.filter((table) => table.active === false);
  }, [isFiltered, tables]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3.5">
        <div>
          <h1 className="text-2xl font-bold text-[var(--light-text1)]">
            Mesas
          </h1>
          <p className="text-[var(--light-text2)] mb-2">
            Gerenciamento de mesas do restaurante
          </p>
        </div>
        <div className=" flex items-center gap-3 ">
          <label htmlFor="form-acoes" className="form-label">
            Situação:
          </label>
          <div className="rounded-md bg-[var(--light-bg1)] shadow-xs">
            <select
              className="    block w-full    rounded-md     p-2     text-[var(--light-text1)]     transition    duration-150    ease-in-out    cursor-pointer  "
              value={isFiltered}
              onChange={(e) => setIsFiltered(e.target.value)}
              required
            >
              <option value="">Todas</option>
              <option value="Ativas">Ativas</option>
              <option value="Disponíveis">Disponíveis</option>
            </select>
          </div>
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
              <p className="text-2xl font-bold ">{tablesFiltered?.length}</p>
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
        {tablesFiltered?.map((table) => {
          return (
            <TableCard
              table={table}
              key={table.id}
              setMenuModal={setMenuModal}
            />
          );
        })}
      </div>

      {/* Menu modal de criação do pedido */}
      {menuModal && (
        <MenuModalPedido menuModal={menuModal} setMenuModal={setMenuModal} />
      )}
    </>
  );
}
