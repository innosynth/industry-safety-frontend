
import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { 
  Camera, 
  LayoutDashboard, 
  Shield, 
  AlertTriangle,
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

// Updated navigation items without Settings
const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Video Monitoring", href: "/videos", icon: Camera },
  { name: "Safety Violations", href: "/violations", icon: AlertTriangle },
  { name: "Safety Stats", href: "/stats", icon: Shield },
  { name: "Tenants", href: "/tenants", icon: Users },
];

const NavItem = ({ item, mobile = false, onNavigate }: { 
  item: typeof navigation[0]; 
  mobile?: boolean;
  onNavigate?: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === item.href || 
                   (item.href !== "/" && location.pathname.startsWith(item.href));
  
  const handleClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate();
      navigate(item.href);
    }
  };
  
  if (mobile) {
    return (
      <SheetClose asChild>
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
      </SheetClose>
    );
  }

  return (
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
      onClick={handleClick}
    >
      <item.icon className="h-5 w-5" />
      <span>{item.name}</span>
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="absolute top-4 left-4 z-50">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-sidebar pt-10 dark:bg-sidebar border-r border-border">
          <div className="mb-8 px-3">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-lg font-bold text-sidebar-foreground">Safety Vision</h1>
            </div>
          </div>
          <nav className="space-y-1 px-2">
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} mobile={true} onNavigate={handleClose} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="w-64 border-r border-border bg-sidebar dark:bg-sidebar hidden md:flex md:flex-col">
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4 mb-5">
          <Shield className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-lg font-bold text-sidebar-foreground">Safety Vision</h1>
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
