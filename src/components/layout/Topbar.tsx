
import React from "react";
import { 
  BellIcon, 
  User,
  MoonIcon,
  SunIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

const Topbar: React.FC = () => {
  const { toast } = useToast();
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="border-b bg-card h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex-1"></div>
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
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Topbar;
