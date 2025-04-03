
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Database, Cpu, Network, Save } from "lucide-react";
import { toast } from "sonner";

interface ApiAdvancedSettingsProps {
  apiKey: string;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
  apiEndpoint: string;
  setApiEndpoint: React.Dispatch<React.SetStateAction<string>>;
  handleResetApiKey: () => void;
  setDbConfigOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProcessingResourcesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNetworkSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApiAdvancedSettings: React.FC<ApiAdvancedSettingsProps> = ({
  apiKey,
  setApiKey,
  apiEndpoint,
  setApiEndpoint,
  handleResetApiKey,
  setDbConfigOpen,
  setProcessingResourcesOpen,
  setNetworkSettingsOpen
}) => {
  const handleSaveApiSettings = () => {
    toast.success("API settings saved successfully");
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>API Settings</CardTitle>
          <CardDescription>
            Configure API access for integration with other systems
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <div className="flex gap-2">
                <Input 
                  id="api-key" 
                  value={apiKey} 
                  readOnly 
                  className="font-mono text-sm"
                />
                <Button variant="outline" onClick={handleResetApiKey}>
                  Reset
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Keep this key secure and do not share it publicly
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="api-endpoint">API Endpoint</Label>
              <Input 
                id="api-endpoint" 
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="api-access">Enable API Access</Label>
                <p className="text-sm text-muted-foreground">
                  Allow external systems to access the API
                </p>
              </div>
              <Switch id="api-access" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="webhook-notifications">Webhook Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Send violation events to external webhooks
                </p>
              </div>
              <Switch id="webhook-notifications" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
          <CardDescription>
            System-level configuration for administrators
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <div className="space-y-0.5">
                  <Label>Database Configuration</Label>
                  <p className="text-sm text-muted-foreground">
                    Configure database connection settings
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setDbConfigOpen(true)}>
                Configure
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Cpu className="h-5 w-5" />
                <div className="space-y-0.5">
                  <Label>Processing Resources</Label>
                  <p className="text-sm text-muted-foreground">
                    Configure CPU/GPU allocation for video processing
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setProcessingResourcesOpen(true)}>
                Configure
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Network className="h-5 w-5" />
                <div className="space-y-0.5">
                  <Label>Network Settings</Label>
                  <p className="text-sm text-muted-foreground">
                    Configure network and bandwidth settings
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setNetworkSettingsOpen(true)}>
                Configure
              </Button>
            </div>
            
            <div className="pt-2">
              <Button onClick={handleSaveApiSettings} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Save Advanced Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiAdvancedSettings;
