
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import { Mail, Smartphone, Bell, Save } from "lucide-react";
import { toast } from "sonner";

interface NotificationSettingsProps {
  emailNotifications: boolean;
  setEmailNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  smsNotifications: boolean;
  setSmsNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  appNotifications: boolean;
  setAppNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  criticalAlerts: boolean;
  setCriticalAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  confidenceThreshold: number[];
  setConfidenceThreshold: React.Dispatch<React.SetStateAction<number[]>>;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  emailNotifications,
  setEmailNotifications,
  smsNotifications,
  setSmsNotifications,
  appNotifications,
  setAppNotifications,
  criticalAlerts,
  setCriticalAlerts,
  confidenceThreshold,
  setConfidenceThreshold
}) => {
  const handleSaveNotificationSettings = () => {
    toast.success("Notification settings saved successfully");
  };

  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default NotificationSettings;
