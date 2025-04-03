
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
import { Save } from "lucide-react";
import { toast } from "sonner";

interface GeneralSettingsProps {
  detectionSensitivity: number[];
  setDetectionSensitivity: React.Dispatch<React.SetStateAction<number[]>>;
  modelVersion: string;
  setModelVersion: React.Dispatch<React.SetStateAction<string>>;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({
  detectionSensitivity,
  setDetectionSensitivity,
  modelVersion,
  setModelVersion
}) => {
  const handleSaveGeneralSettings = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default GeneralSettings;
