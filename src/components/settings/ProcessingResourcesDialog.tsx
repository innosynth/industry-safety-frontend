
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Processing Resources</DialogTitle>
          <DialogDescription>
            Configure CPU/GPU allocation for video processing and analysis.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="max-cpu">CPU Utilization Limit</Label>
            <div className="flex items-center space-x-2">
              <Slider
                id="max-cpu"
                value={[cpuUtilization]}
                onValueChange={(value) => setCpuUtilization(value[0])}
                max={100}
                step={5}
                className="flex-1"
              />
              <span className="w-12 text-right">{cpuUtilization}%</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="max-memory">Memory Allocation</Label>
            <div className="flex items-center space-x-2">
              <Slider
                id="max-memory"
                value={[memoryAllocation]}
                onValueChange={(value) => setMemoryAllocation(value[0])}
                max={100}
                step={5}
                className="flex-1"
              />
              <span className="w-12 text-right">{memoryAllocation}%</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gpu-enabled">GPU Acceleration</Label>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Enable GPU acceleration for processing</span>
              <Switch id="gpu-enabled" defaultChecked />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gpu-model">GPU Model</Label>
            <Select defaultValue="nvidia-t4">
              <SelectTrigger id="gpu-model">
                <SelectValue placeholder="Select GPU model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nvidia-t4">NVIDIA T4</SelectItem>
                <SelectItem value="nvidia-v100">NVIDIA V100</SelectItem>
                <SelectItem value="nvidia-a100">NVIDIA A100</SelectItem>
                <SelectItem value="amd-mi25">AMD Instinct MI25</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="max-concurrent">Maximum Concurrent Processes</Label>
            <Input id="max-concurrent" type="number" min="1" max="32" defaultValue="8" />
          </div>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={() => {
            onOpenChange(false);
            toast.success("Processing resources configured");
          }}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessingResourcesDialog;
