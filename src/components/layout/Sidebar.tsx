
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  Camera, 
  LayoutDashboard, 
  Shield, 
  AlertTriangle, 
  Settings, 
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Video Monitoring", href: "/videos", icon: Camera },
  { name: "Safety Violations", href: "/violations", icon: AlertTriangle },
  { name: "Safety Stats", href: "/stats", icon: Shield },
  { name: "Tenants", href: "/tenants", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

const NavItem = ({ item, mobile = false }: { item: typeof navigation[0]; mobile?: boolean }) => {
  const SheetCloseWrapper = mobile ? SheetClose : React.Fragment;
  
  return (
    <SheetCloseWrapper>
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          )
        }
      >
        <item.icon className="h-5 w-5" />
        <span>{item.name}</span>
      </NavLink>
    </SheetCloseWrapper>
  );
};

const Sidebar: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="absolute top-4 left-4 z-50">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-sidebar pt-10">
          <div className="mb-8 px-3">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-safety-blue mr-2" />
              <h1 className="text-lg font-bold">Safety Vision</h1>
            </div>
          </div>
          <nav className="space-y-1 px-2">
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} mobile={true} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="w-64 border-r bg-sidebar hidden md:flex md:flex-col">
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4 mb-5">
          <Shield className="h-6 w-6 text-safety-blue mr-2" />
          <h1 className="text-lg font-bold">Safety Vision</h1>
        </div>
        <nav className="mt-2 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
