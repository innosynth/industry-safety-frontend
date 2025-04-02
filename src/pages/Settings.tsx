
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  Shield, 
  Bell, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  Camera, 
  UserCog, 
  Save,
  Cpu,
  Database,
  Network
} from "lucide-react";
import { toast } from "sonner";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";

const Settings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [appNotifications, setAppNotifications] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [detectionSensitivity, setDetectionSensitivity] = useState([75]);
  const [apiKey, setApiKey] = useState("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
  const [apiEndpoint, setApiEndpoint] = useState("https://api.safetyvision.example.com");
  const [modelVersion, setModelVersion] = useState("v2");
  const [confidenceThreshold, setConfidenceThreshold] = useState([80]);
  
  // Dialog states
  const [dbConfigOpen, setDbConfigOpen] = useState(false);
  const [processingResourcesOpen, setProcessingResourcesOpen] = useState(false);
  const [networkSettingsOpen, setNetworkSettingsOpen] = useState(false);

  const handleSaveGeneralSettings = () => {
    toast.success("Settings saved successfully");
  };

  const handleSaveNotificationSettings = () => {
    toast.success("Notification settings saved successfully");
  };

  const handleSaveApiSettings = () => {
    toast.success("API settings saved successfully");
  };

  const handleResetApiKey = () => {
    setApiKey("sk_" + Math.random().toString(36).substring(2, 15));
    toast.success("API key reset successfully");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API & Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Detection Settings</CardTitle>
              <CardDescription>
                Configure how the system detects PPE violations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="detection-sensitivity">Detection Sensitivity</Label>
                    <span className="text-sm">{detectionSensitivity[0]}%</span>
                  </div>
                  <Slider
                    id="detection-sensitivity"
                    min={0}
                    max={100}
                    step={1}
                    value={detectionSensitivity}
                    onValueChange={setDetectionSensitivity}
                  />
                  <p className="text-sm text-muted-foreground">
                    Higher sensitivity may increase false positives, lower may miss violations
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="model-version">Detection Model Version</Label>
                    <p className="text-sm text-muted-foreground">
                      Select which model version to use for PPE detection
                    </p>
                  </div>
                  <Select value={modelVersion} onValueChange={setModelVersion}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select version" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="v1">Version 1.0</SelectItem>
                      <SelectItem value="v1.5">Version 1.5</SelectItem>
                      <SelectItem value="v2">Version 2.0 (Latest)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">PPE Detection Types</h3>
                  <p className="text-sm text-muted-foreground">
                    Select which types of PPE to monitor
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="detect-helmet">Helmet Detection</Label>
                      <Switch id="detect-helmet" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="detect-vest">Safety Vest Detection</Label>
                      <Switch id="detect-vest" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="detect-mask">Mask Detection</Label>
                      <Switch id="detect-mask" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="detect-gloves">Gloves Detection</Label>
                      <Switch id="detect-gloves" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="detect-harness">Harness Detection</Label>
                      <Switch id="detect-harness" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Configure general system behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Video Processing</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically process videos when uploaded
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Real-time Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Show alerts in real-time as violations are detected
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Use dark theme for the interface
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <Button onClick={handleSaveGeneralSettings} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Channels</CardTitle>
              <CardDescription>
                Configure how you want to receive alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive violation alerts via email
                      </p>
                    </div>
                  </div>
                  <Switch 
                    id="email-notifications" 
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                
                {emailNotifications && (
                  <div className="ml-7 space-y-2">
                    <Label htmlFor="email-address">Email Address</Label>
                    <Input 
                      id="email-address" 
                      placeholder="Enter email address" 
                      type="email"
                      defaultValue="safety@example.com"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5" />
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive violation alerts via SMS
                      </p>
                    </div>
                  </div>
                  <Switch 
                    id="sms-notifications" 
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                </div>
                
                {smsNotifications && (
                  <div className="ml-7 space-y-2">
                    <Label htmlFor="phone-number">Phone Number</Label>
                    <Input 
                      id="phone-number" 
                      placeholder="Enter phone number" 
                      type="tel"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <div className="space-y-0.5">
                      <Label htmlFor="app-notifications">In-App Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive violation alerts within the app
                      </p>
                    </div>
                  </div>
                  <Switch 
                    id="app-notifications" 
                    checked={appNotifications}
                    onCheckedChange={setAppNotifications}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alert Preferences</CardTitle>
              <CardDescription>
                Configure when and how you receive alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="critical-alerts">Critical Alerts Only</Label>
                    <p className="text-sm text-muted-foreground">
                      Only notify for critical safety violations
                    </p>
                  </div>
                  <Switch 
                    id="critical-alerts" 
                    checked={criticalAlerts}
                    onCheckedChange={setCriticalAlerts}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="alert-frequency">Alert Frequency</Label>
                  <Select defaultValue="real-time">
                    <SelectTrigger id="alert-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-time">Real-time</SelectItem>
                      <SelectItem value="hourly">Hourly Digest</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="min-confidence">Minimum Confidence Threshold</Label>
                    <span className="text-sm">{confidenceThreshold[0]}%</span>
                  </div>
                  <Slider
                    id="min-confidence"
                    value={confidenceThreshold}
                    onValueChange={setConfidenceThreshold}
                    max={100}
                    step={5}
                  />
                  <p className="text-sm text-muted-foreground">
                    Only send alerts for detections above this confidence level
                  </p>
                </div>
              </div>
              
              <Button onClick={handleSaveNotificationSettings} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api" className="space-y-4 mt-4">
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
        </TabsContent>
      </Tabs>

      {/* Database Configuration Dialog */}
      <Dialog open={dbConfigOpen} onOpenChange={setDbConfigOpen}>
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
              setDbConfigOpen(false);
              toast.success("Database settings saved");
            }}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Processing Resources Dialog */}
      <Dialog open={processingResourcesOpen} onOpenChange={setProcessingResourcesOpen}>
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
                  defaultValue={[75]}
                  max={100}
                  step={5}
                  className="flex-1"
                />
                <span className="w-12 text-right">75%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="max-memory">Memory Allocation</Label>
              <div className="flex items-center space-x-2">
                <Slider
                  id="max-memory"
                  defaultValue={[60]}
                  max={100}
                  step={5}
                  className="flex-1"
                />
                <span className="w-12 text-right">60%</span>
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
              setProcessingResourcesOpen(false);
              toast.success("Processing resources configured");
            }}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Network Settings Dialog */}
      <Dialog open={networkSettingsOpen} onOpenChange={setNetworkSettingsOpen}>
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
              setNetworkSettingsOpen(false);
              toast.success("Network settings saved");
            }}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;
