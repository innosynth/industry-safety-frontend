
import React, { useEffect } from "react";
import { 
  BellIcon, 
  User,
  MoonIcon,
  SunIcon,
  Settings,
  FileText,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Topbar: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const [theme, setTheme] = React.useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark" || "light"
  );

  useEffect(() => {
    // Apply the theme on first load
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="border-b bg-card h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex-1 md:text-center font-bold text-lg">InnoSynth</div>
      <div className="flex items-center gap-2">
        <Button 
          onClick={toggleTheme} 
          variant="outline" 
          size="icon" 
          className="rounded-full"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
          onClick={() => {
            toast({
              title: "Notifications",
              description: "You have no new notifications",
            });
          }}
        >
          <BellIcon className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="h-4 w-4 mr-2" />
              Profile
            </DropdownMenuItem>
            
            {isMobile && (
              <DropdownMenuItem onClick={() => navigate("/settings")}>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
            )}
            
            <DropdownMenuItem onClick={() => navigate("/documentation")}>
              <FileText className="h-4 w-4 mr-2" />
              Documentation
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigate("/help-support")}>
              <HelpCircle className="h-4 w-4 mr-2" />
              Help & Support
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Topbar;
