
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
import { Camera } from "lucide-react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { tenantApi, cameraApi, videosApi } from "@/services/api";

const LiveCameraDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cameraUrl, setCameraUrl] = useState("");
  const [selectedTenant, setSelectedTenant] = useState("");
  const [selectedCamera, setSelectedCamera] = useState("");
  const [tenants, setTenants] = useState<{id: string, name: string}[]>([]);
  const [cameras, setCameras] = useState<{id: string, name: string}[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch tenants when dialog opens
    if (isOpen) {
      fetchTenants();
    }
  }, [isOpen]);

  useEffect(() => {
    // Fetch cameras when a tenant is selected
    if (selectedTenant) {
      fetchCameras(selectedTenant);
    }
  }, [selectedTenant]);

  const fetchTenants = async () => {
    setLoading(true);
    try {
      const response = await tenantApi.listTenants();
      if (response.success && response.data) {
        // Assuming the API returns an array of tenant objects with id and name
        setTenants(response.data);
      } else {
        toast.error("Failed to load tenants");
      }
    } catch (error) {
      console.error("Error fetching tenants:", error);
      toast.error("Failed to load tenants");
    } finally {
      setLoading(false);
    }
  };

  const fetchCameras = async (tenantId: string) => {
    setLoading(true);
    try {
      const response = await videosApi.listVideos(tenantId);
      if (response.success && response.data) {
        // Assuming the API returns camera data
        const cameraData = response.data.map((item: any) => ({
          id: item.camera_id,
          name: `Camera ${item.camera_id}`
        }));
        setCameras(cameraData);
      } else {
        toast.error("Failed to load cameras");
      }
    } catch (error) {
      console.error("Error fetching cameras:", error);
      toast.error("Failed to load cameras");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedTenant || !selectedCamera || !cameraUrl) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await cameraApi.updateLiveUrl(
        selectedTenant,
        selectedCamera,
        cameraUrl
      );
      
      if (response.success) {
        toast.success("Camera URL updated successfully");
        // Store the URL in localStorage for the dashboard to use
        localStorage.setItem('liveCameraUrl', cameraUrl);
        localStorage.setItem('liveCameraTenant', selectedTenant);
        localStorage.setItem('liveCameraId', selectedCamera);
        setIsOpen(false);
      } else {
        toast.error("Failed to update camera URL");
      }
    } catch (error) {
      console.error("Error updating camera URL:", error);
      toast.error("Failed to update camera URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Camera className="h-4 w-4" />
          <span className="hidden md:inline">Live Camera</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Configure Live Camera Feed</DialogTitle>
          <DialogDescription>
            Set up a live camera feed to display on the dashboard
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="tenant">Select Tenant</Label>
            <Select
              value={selectedTenant}
              onValueChange={setSelectedTenant}
              disabled={loading}
            >
              <SelectTrigger id="tenant">
                <SelectValue placeholder="Select a tenant" />
              </SelectTrigger>
              <SelectContent>
                {tenants.map(tenant => (
                  <SelectItem key={tenant.id} value={tenant.id}>
                    {tenant.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="camera">Select Camera</Label>
            <Select
              value={selectedCamera}
              onValueChange={setSelectedCamera}
              disabled={loading || !selectedTenant}
            >
              <SelectTrigger id="camera">
                <SelectValue placeholder="Select a camera" />
              </SelectTrigger>
              <SelectContent>
                {cameras.map(camera => (
                  <SelectItem key={camera.id} value={camera.id}>
                    {camera.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cameraUrl">Camera Stream URL</Label>
            <Input
              id="cameraUrl"
              value={cameraUrl}
              onChange={(e) => setCameraUrl(e.target.value)}
              placeholder="e.g., http://example.com/stream"
              className="w-full"
              disabled={loading}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save & Display"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LiveCameraDialog;
