
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface NetworkSettingsDialogProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const NetworkSettingsDialog: React.FC<NetworkSettingsDialogProps> = ({
  open,
  onOpenChange
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Network Settings</DialogTitle>
          <DialogDescription>
            Configure network and bandwidth settings for optimal performance.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="bandwidth-limit">Bandwidth Limit (Mbps)</Label>
            <Input id="bandwidth-limit" type="number" min="1" defaultValue="100" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="connection-timeout">Connection Timeout (seconds)</Label>
            <Input id="connection-timeout" type="number" min="1" defaultValue="30" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="retry-attempts">Retry Attempts</Label>
            <Input id="retry-attempts" type="number" min="0" defaultValue="3" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="retry-delay">Retry Delay (seconds)</Label>
            <Input id="retry-delay" type="number" min="1" defaultValue="5" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="proxy-config">Proxy Configuration</Label>
            <Input id="proxy-config" placeholder="http://proxy.example.com:8080" />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch id="use-compression" defaultChecked />
            <Label htmlFor="use-compression">Enable Data Compression</Label>
          </div>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={() => {
            onOpenChange(false);
            toast.success("Network settings saved");
          }}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NetworkSettingsDialog;
