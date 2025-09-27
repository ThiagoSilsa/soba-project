"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCurrencyDollar, BsWallet2 } from "react-icons/bs";
import { MdOutlineTableBar } from "react-icons/md";

export default function TableCard({ table, setMenuModal }) {
  // Menu condicional
  const [menuContexto, setMenuContexto] = useState(false);

  // Posição do mouse
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });

  // Lógica do menu de contexto
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menuContexto) return;

    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuContexto(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuContexto]);

  return (
    <>
      {/* Condição de estilização dependendo do status da mesa */}
      <div
        className={cn(
          "rounded-md bg-[var(--light-bg1)]/50 shadow-md p-2 cursor-pointer hover:scale-105 transition-all",
          table?.active
            ? "bg-[var(--light-bg1)] shadow-md p-2 border-[var(--purple-bg2)] border-2"
            : ""
        )}
        onClick={(e) => {
          setPosicao({ x: e.clientX, y: e.clientY });
          setMenuContexto(true);
        }}
      >
        <div className="flex-col items-center gap-3 p-2">
          <div className=" rounded-lg flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <MdOutlineTableBar className="h-5 w-5 " />
              <p className="text-xl font-bold ">Mesa {table.id}</p>
            </div>

            {table?.active ? (
              <p className="bg-[var(--button-success)] text-[var(--dark-text1)] font-medium p-1 rounded-md text-sm">
                Ativa
              </p>
            ) : (
              <p className="bg-[var(--button-primary-disabled)] text-[var(--dark-text1)] font-medium p-1 rounded-md text-sm">
                Livre
              </p>
            )}
          </div>
          <div className="flex items-center justify-between border-t border-[var(--light-border)] pt-2.5">
            {table?.active ? (
              <>
                <div className="flex items-center">
                  <BsCurrencyDollar className="h-5 w-5 text-[var(--purple-bg4)]" />
                  <p className="text-md">Total</p>
                </div>
                <p className="text-xl font-bold text-[var(--purple-bg4)]">
                  R$ {table.currentTotal || 0}
                </p>
              </>
            ) : (
              <>
                <p className="text-md text-[var(--light-text2)] w-full text-center">
                  Mesa disponível
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      {/* menu de opções */}
      {menuContexto && (
        <div
          onClick={(e) => {
            setPosicao({ x: e.clientX, y: e.clientY });
            setMenuContexto(!menuContexto);
            e.stopPropagation();
          }}
          ref={menuRef}
          style={{ position: "fixed", top: posicao.y, left: posicao.x }}
          className="bg-white shadow-md rounded z-50"
        >
          <button
            className="w-full text-left p-2 cursor-pointer hover:bg-[var(--light-bg2)] flex gap-2 items-center"
            onClick={() => {
              setMenuModal(true);
              console.log("Adicionar pedido");
            }}
          >
            <AiOutlinePlus size={18} />
            <p>Adicionar pedido</p>
          </button>
          {table.active && (
            <button
              className="w-full text-left p-2 cursor-pointer hover:bg-[var(--light-bg2)] flex gap-2 items-center hover"
              onClick={() => {
                console.log("Fechar conta");
              }}
            >
              <BsWallet2 size={18} />
              <p>Fechar conta</p>
            </button>
          )}
        </div>
      )}
    </>
  );
}
