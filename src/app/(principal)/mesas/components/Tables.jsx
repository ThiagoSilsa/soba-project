import { cn } from "@/lib/utils";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineTableBar } from "react-icons/md";

export default function Tables({table}) {
  return (
    <div
      className={cn(
        "rounded-md bg-[var(--light-bg1)]/50 shadow-md p-2",
        table.isActive
          ? "rounded-md bg-[var(--light-bg1)] shadow-md p-2 border-[var(--purple-bg2)] border-2"
          : ""
      )}
    >
      <div className="flex-col items-center gap-3 p-2">
        <div className=" rounded-lg flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <MdOutlineTableBar className="h-5 w-5 " />
            <p className="text-xl font-bold ">Mesa {table.number}</p>
          </div>
          {table.isActive ? (
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
          {table.isActive ? (
            <>
              <div className="flex items-center">
                <BsCurrencyDollar className="h-5 w-5 text-[var(--purple-bg4)]" />
                <p className="text-md">Total</p>
              </div>
              <p className="text-xl font-bold text-[var(--purple-bg4)]">
                R$ {table.currentTotal},00
              </p>
            </>
          ) : (
            <>
              <p className="text-md  text-[var(--light-text2)] w-full text-center">
                Mesa disponível
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
