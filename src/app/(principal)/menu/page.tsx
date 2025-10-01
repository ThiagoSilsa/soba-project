"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  // Simulação de Arquivos JSON
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Mudou!");
  }),
    [contador];
  return (
    <>
      <h1>{contador}</h1>
      <button
        type="button"
        className="cursor-pointer bg-gray-600 rounded-2xl p-3 text-white hover:bg-purple-950"
        onClick={() => setContador(contador + 1)}
      >
        Adicionar mais um
      </button>
      <button
        type="button"
        className="cursor-pointer bg-gray-600 rounded-2xl p-3 text-white hover:bg-purple-950"
        onClick={() => setContador(contador)}
      >
        Manté o mesmo
      </button>
    </>
  );
}
