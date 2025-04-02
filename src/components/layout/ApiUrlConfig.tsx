
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { toast } from "sonner";

const ApiUrlConfig: React.FC = () => {
  const [apiUrl, setApiUrl] = useState(() => {
    return localStorage.getItem("apiBaseUrl") || "http://localhost:8000";
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    try {
      // Basic validation
      const url = new URL(apiUrl);
      localStorage.setItem("apiBaseUrl", apiUrl);
      window.location.reload(); // Reload to apply new API URL
      setIsOpen(false);
      toast.success("API URL updated successfully");
    } catch (error) {
      toast.error("Please enter a valid URL");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="h-4 w-4" />
          <span className="hidden md:inline">API Config</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>API Configuration</DialogTitle>
          <DialogDescription>
            Set the base URL for API requests
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Input
            id="apiUrl"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="e.g., http://localhost:8000"
            className="w-full"
          />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiUrlConfig;
