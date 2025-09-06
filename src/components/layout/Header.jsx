// Icons
import { Menu } from "lucide-react";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";


const Header = ({ isSidebarOpen, setSidebarOpen }) => {
  function handleSideBar() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="px-7.5 bg-[var(--roxo-fundo5)] h-14 flex items-center gap-2 text-white font-bold text-2xl border-b border-border border-black">
      <button
        onClick={handleSideBar}
        className={cn(
          "cursor-pointer hover:scale-110 transition-transform",
          !isSidebarOpen
            ? "rotate-90  duration-300"
            : "rotate-0  duration-300"
        )}
      >
        {isSidebarOpen ? <Menu size={28}/> : <LiaTimesSolid size={28} />}
      </button>
      <h2>Soba</h2>
    </div>
  );
};

export default Header;
