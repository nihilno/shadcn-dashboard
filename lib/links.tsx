import {
  Calendar,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";

const iconsStyles = "h-[1.2rem] w-[1.2rem] mr-2";

export const navbarLinks = [
  { label: "profile", href: "#", icon: <User className={iconsStyles} /> },
  { label: "settings", href: "#", icon: <Settings className={iconsStyles} /> },
  { label: "logout", href: "#", icon: <LogOut className={iconsStyles} /> },
];

export const sidebarLinks = [
  { label: "home", href: "/", icon: <Home /> },
  { label: "users", href: "/users", icon: <Users /> },
  { label: "view user", href: "/users/john-doe", icon: <User /> },
  { label: "inbox", href: "#", icon: <Inbox /> },
  { label: "calendar", href: "#", icon: <Calendar /> },
  { label: "search", href: "#", icon: <Search /> },
  { label: "settings", href: "#", icon: <Settings /> },
];
