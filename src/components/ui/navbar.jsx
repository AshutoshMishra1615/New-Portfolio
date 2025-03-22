import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBarConstructer } from "@/components/ui/navbar-constructer";

export function NavBar() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/About", icon: User },
    { name: "Projects", url: "/Projects", icon: Briefcase },
    //{ name: "Resume", url: "/Resume", icon: FileText },
  ];

  return (
    <>
      <NavBarConstructer items={navItems} />
    </>
  );
}
