"use client";

import DarkVeil from "@/components/reactbits/DarkVeil";
import styles from "./Inicial.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <DarkVeil />
      </div>

      <main className={`${styles.main} animate-fadeInUp`}>
        <div>
          <div className="container p-7 px-15 bg-[var(--purple-bg5)]/30 border-3 rounded-4xl border-[var(--purple-bg1)] backdrop-blur-xs">
            <div>
              <h2 className="text-shadow-md text-[var(--dark-text1)] font-black text-center text-5xl mb-5">
                SoBa
              </h2>
              <p className="text-[var(--dark-text1)] text-center mb-8 px-8">
                Entre com seu e-mail e senha
              </p>
            </div>
            <form action="">
              <div className="flex-col flex mb-2">
                <input
                  className="text-shadow-xs mb-4 bg-[var(--light-bg1)]/30 w-full rounded-md p-2 text-[var(--dark-text1)]"
                  placeholder="Usuário"
                  type="text"
                />
                <input
                  className="text-shadow-xs mb-1 bg-[var(--light-bg1)]/30 w-full rounded-md p-2 text-[var(--dark-text1)]"
                  placeholder="Senha"
                  type="text"
                />
              </div>
              <div className="flex justify-end">
                <p className="text-[var(--dark-text1)] text-right mb-8 cursor-pointer">
                  Esqueci a senha
                </p>
              </div>
              <Link href={"/tables"}>
                <button
                  className="text-shadow-xs text-[var(--light-bg1)] bg-[var(--purple-bg3)]/80 w-full p-2 rounded-md cursor-pointer
                    font-medium
                    hover:bg-[var(--purple-bg3)]
                 hover:text-[var(--light-bg1)]
                    "
                  type="button"
                >
                  Entrar
                </button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
