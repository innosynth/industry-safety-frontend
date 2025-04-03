
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Cpu, Memory } from "lucide-react";

interface ProcessingResourcesDialogProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  cpuUtilization: number;
  setCpuUtilization: React.Dispatch<React.SetStateAction<number>>;
  memoryAllocation: number;
  setMemoryAllocation: React.Dispatch<React.SetStateAction<number>>;
}

const ProcessingResourcesDialog: React.FC<ProcessingResourcesDialogProps> = ({
  open,
  onOpenChange,
  cpuUtilization,
  setCpuUtilization,
  memoryAllocation,
  setMemoryAllocation
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Processing Resources</DialogTitle>
          <DialogDescription>
            Configure resource allocation for detection processing.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="cpu" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cpu">CPU</TabsTrigger>
            <TabsTrigger value="memory">Memory</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cpu" className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Cpu className="h-4 w-4 mr-2" />
                <Label htmlFor="cpu-utilization">CPU Utilization Limit</Label>
              </div>
              <span className="text-sm font-medium">{cpuUtilization}%</span>
            </div>
            
            <Slider
              id="cpu-utilization"
              min={10}
              max={100}
              step={5}
              value={[cpuUtilization]}
              onValueChange={(values) => setCpuUtilization(values[0])}
            />
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Current Utilization</span>
                <span>{Math.round(cpuUtilization * 0.7)}%</span>
              </div>
              <Progress value={Math.round(cpuUtilization * 0.7)} />
            </div>
            
            <div className="text-sm text-muted-foreground">
              Setting a higher CPU utilization limit allows for faster processing 
              but may affect system responsiveness.
            </div>
          </TabsContent>
          
          <TabsContent value="memory" className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Memory className="h-4 w-4 mr-2" />
                <Label htmlFor="memory-allocation">Memory Allocation</Label>
              </div>
              <span className="text-sm font-medium">{memoryAllocation}%</span>
            </div>
            
            <Slider
              id="memory-allocation"
              min={20}
              max={90}
              step={5}
              value={[memoryAllocation]}
              onValueChange={(values) => setMemoryAllocation(values[0])}
            />
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Current Usage</span>
                <span>{Math.round(memoryAllocation * 0.8)}%</span>
              </div>
              <Progress value={Math.round(memoryAllocation * 0.8)} />
            </div>
            
            <div className="text-sm text-muted-foreground">
              Higher memory allocation allows for processing more camera streams 
              simultaneously but requires more system resources.
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={() => {
            onOpenChange(false);
            toast.success("Processing resources configured successfully");
          }}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessingResourcesDialog;
