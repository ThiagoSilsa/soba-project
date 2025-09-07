// Icons
import { Menu } from "lucide-react";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";


const Header = ({ isSidebarOpen, setSidebarOpen }) => {
  function handleSideBar() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="px-5 bg-[var(--purple-bg5)] h-14 flex items-center gap-2 text-white font-bold text-2xl border-b border-border border-black">
      <button
        onClick={handleSideBar}
        className={cn(
          "cursor-pointer hover:scale-110 transition-transform font-bold",
          isSidebarOpen
            ? "rotate-90  duration-300"
            : "rotate-0  duration-300"
        )}
      >
        {isSidebarOpen ? <LiaTimesSolid size={28}/> : <Menu size={28}/>  }
      </button>
      <h2>Soba</h2>
    </div>
  );
};

export default Header;
