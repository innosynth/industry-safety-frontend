
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Camera, 
  LayoutDashboard, 
  Shield, 
  AlertTriangle, 
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

// Navigation items without Settings for mobile footer
const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Video Monitoring", href: "/videos", icon: Camera },
  { name: "Safety Violations", href: "/violations", icon: AlertTriangle },
  { name: "Safety Stats", href: "/stats", icon: Shield },
  { name: "Tenants", href: "/tenants", icon: Users },
];

const MobileFooter: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!isMobile) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || 
                          (item.href !== "/" && location.pathname.startsWith(item.href));
          
          return (
            <button
              key={item.name}
              className={cn(
                "flex flex-col items-center justify-center px-2 transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => navigate(item.href)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1 truncate max-w-full">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFooter;
