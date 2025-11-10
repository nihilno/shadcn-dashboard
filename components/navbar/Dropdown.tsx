import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navbarLinks } from "@/lib/links";
import Link from "next/link";
import UserAvatar from "../global/UserAvatar";

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10} className="capitalize">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navbarLinks.map((link) => (
          <DropdownMenuItem
            variant={link.label === "logout" ? "destructive" : "default"}
            key={link.label}
            asChild
          >
            <Link href={link.href}>
              {link.icon} <span>{link.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
