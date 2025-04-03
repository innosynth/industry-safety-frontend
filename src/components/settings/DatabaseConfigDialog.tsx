
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

interface DatabaseConfigDialogProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const DatabaseConfigDialog: React.FC<DatabaseConfigDialogProps> = ({
  open,
  onOpenChange
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Database Configuration</DialogTitle>
          <DialogDescription>
            Configure database connection settings and parameters.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="db-host">Database Host</Label>
            <Input id="db-host" placeholder="localhost" defaultValue="db.example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="db-port">Port</Label>
            <Input id="db-port" placeholder="5432" defaultValue="5432" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="db-name">Database Name</Label>
            <Input id="db-name" placeholder="postgres" defaultValue="safety_vision_db" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="db-user">Username</Label>
            <Input id="db-user" placeholder="postgres" defaultValue="safety_admin" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="db-password">Password</Label>
            <Input id="db-password" type="password" placeholder="••••••••" />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch id="db-ssl" defaultChecked />
            <Label htmlFor="db-ssl">Enable SSL Connection</Label>
          </div>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={() => {
            onOpenChange(false);
            toast.success("Database settings saved");
          }}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DatabaseConfigDialog;
