import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBarConstructer } from "@/components/ui/navbar-constructer";

export function NavBar() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "#", icon: User },
    { name: "Projects", url: "#", icon: Briefcase },
    { name: "Resume", url: "#", icon: FileText },
  ];

  return (
    <>
      <NavBarConstructer items={navItems} />
    </>
  );
}
