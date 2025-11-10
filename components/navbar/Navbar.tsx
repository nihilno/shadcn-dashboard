import Dropdown from "@/components/navbar/Dropdown";
import { ModeToggle } from "@/components/navbar/ModeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-10 flex max-h-16 items-center justify-between p-4">
      <SidebarTrigger />
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <ModeToggle />
        <Dropdown />
      </div>
    </nav>
  );
}

export default Navbar;
