
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Search, 
  HelpCircle, 
  FileQuestion, 
  MessageCircle, 
  Phone, 
  Mail, 
  PlayCircle,
  ArrowRight,
  ArrowLeft,
  Camera,
  Settings,
  AlertTriangle,
  Shield
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HelpItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const HelpItem: React.FC<HelpItemProps> = ({ icon, title, description, onClick }) => {
  return (
    <div 
      className="flex flex-col space-y-2 p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors hover:border-accent cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <div className="text-primary">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center text-sm text-primary mt-auto pt-2">
        <span>View guide</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
};

interface VideoTutorialProps {
  title: string;
  duration: string;
  thumbnail: string;
  onClick: () => void;
}

const VideoTutorial: React.FC<VideoTutorialProps> = ({ title, duration, thumbnail, onClick }) => {
  return (
    <div 
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center">
            <PlayCircle className="h-8 w-8" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-background/80 text-xs px-2 py-1 rounded">
          {duration}
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-muted-foreground text-sm">{thumbnail}</span>
        </div>
      </div>
      <h3 className="font-medium group-hover:text-primary transition-colors">{title}</h3>
    </div>
  );
};

const HelpSupport: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showContentDialog, setShowContentDialog] = useState(false);
  const [selectedContent, setSelectedContent] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  const handleContentClick = (title: string, content: React.ReactNode) => {
    setSelectedContent({ title, content });
    setShowContentDialog(true);
  };

  const gettingStartedContent = (
    <div className="space-y-4">
      <p>
        Welcome to InnoSynth! This quick start guide will help you set up the platform
        and start monitoring safety compliance in your workplace.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Step 1: Set Up Your Account</h3>
      <p className="text-sm text-muted-foreground">
        After signing up, log in to your account and complete your profile information.
        This includes your organization details, contact information, and user preferences.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Step 2: Create Your First Tenant</h3>
      <p className="text-sm text-muted-foreground">
        Tenants represent separate facilities or departments in your organization. To create
        your first tenant:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Navigate to Tenant Management in the sidebar</li>
        <li>Click "Add Tenant" button</li>
        <li>Enter the tenant name and click "Create Tenant"</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Step 3: Configure Camera Settings</h3>
      <p className="text-sm text-muted-foreground">
        Connect and configure your first camera:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>In Tenant Settings, go to Camera Management</li>
        <li>Click "Add Camera" button</li>
        <li>Enter the camera name and RTSP URL</li>
        <li>Configure monitoring zones if needed</li>
        <li>Click "Save" to add the camera</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Step 4: Upload Your First Video</h3>
      <p className="text-sm text-muted-foreground">
        To test the system with a video file:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Go to Video Monitoring in the sidebar</li>
        <li>Select the "Upload Video" tab</li>
        <li>Click to select a video file or drag and drop</li>
        <li>Click "Upload & Process" to begin analysis</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Step 5: Review Violations</h3>
      <p className="text-sm text-muted-foreground">
        After processing is complete:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Go to the Violations page to see detected safety issues</li>
        <li>Review the Dashboard for an overview of compliance statistics</li>
        <li>Set up notification preferences in Settings</li>
      </ol>
      
      <div className="bg-muted p-4 rounded-lg mt-6">
        <p className="text-sm font-medium">
          Need more help? Contact our support team at support@innosynth.com or call +1 (800) 555-0123.
        </p>
      </div>
    </div>
  );

  const cameraSetupContent = (
    <div className="space-y-4">
      <p>
        This guide covers the complete process of adding and configuring cameras in the InnoSynth platform.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Camera Requirements</h3>
      <p className="text-sm text-muted-foreground">
        InnoSynth supports the following camera types:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm pl-4 mt-2">
        <li>IP cameras with RTSP stream support</li>
        <li>ONVIF-compatible security cameras</li>
        <li>USB webcams (with streaming server setup)</li>
        <li>NVR/DVR systems that provide RTSP streams</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-6">Adding a New Camera</h3>
      <p className="text-sm text-muted-foreground">
        Follow these steps to add a new camera to your tenant:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Navigate to Tenant Management in the sidebar</li>
        <li>Select the tenant you want to add the camera to</li>
        <li>Click the "Settings" button for the tenant</li>
        <li>Select "Camera Management" in the settings panel</li>
        <li>Click "Add Camera" button</li>
        <li>Fill in the required information:
          <ul className="list-disc list-inside pl-6 mt-1">
            <li>Camera Name: A descriptive name for the camera</li>
            <li>Camera Type: Select the type of camera</li>
            <li>RTSP URL: The streaming URL for the camera</li>
            <li>Credentials: Username and password if required</li>
          </ul>
        </li>
        <li>Click "Save" to add the camera</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Configuring Detection Zones</h3>
      <p className="text-sm text-muted-foreground">
        Detection zones allow you to specify areas within the camera view where safety rules should
        be enforced:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Navigate to the camera settings</li>
        <li>Click "Configure Detection Zones"</li>
        <li>Draw polygons on the camera preview to define zones</li>
        <li>For each zone, specify the safety rules to enforce</li>
        <li>Click "Save" to apply the zone configuration</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Troubleshooting Camera Connections</h3>
      <p className="text-sm text-muted-foreground">
        If you're having trouble connecting to a camera:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Verify the camera is powered on and connected to the network</li>
        <li>Double-check the RTSP URL format</li>
        <li>Ensure the username and password are correct</li>
        <li>Confirm there are no firewall rules blocking the connection</li>
        <li>Try testing the RTSP URL in VLC or another media player</li>
      </ul>
    </div>
  );

  const detectionSettingsContent = (
    <div className="space-y-4">
      <p>
        This guide explains how to configure detection settings for optimal performance.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Detection Types</h3>
      <p className="text-sm text-muted-foreground">
        InnoSynth can detect the following safety violations:
      </p>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="p-2 border rounded-md">Missing Helmet</div>
        <div className="p-2 border rounded-md">No Safety Vest</div>
        <div className="p-2 border rounded-md">Missing Face Mask</div>
        <div className="p-2 border rounded-md">No Safety Glasses</div>
        <div className="p-2 border rounded-md">No Gloves</div>
        <div className="p-2 border rounded-md">Unauthorized Access</div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Configuring Sensitivity</h3>
      <p className="text-sm text-muted-foreground">
        For each detection type, you can adjust the sensitivity to balance between catching all
        violations and avoiding false positives:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Navigate to Settings in the sidebar</li>
        <li>Select "Detection Settings"</li>
        <li>For each violation type, adjust the sensitivity slider:
          <ul className="list-disc list-inside pl-6 mt-1">
            <li>Higher sensitivity: Catches more potential violations but may increase false positives</li>
            <li>Lower sensitivity: Fewer false positives but might miss some violations</li>
          </ul>
        </li>
        <li>Click "Save" to apply the settings</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Custom Rules Configuration</h3>
      <p className="text-sm text-muted-foreground">
        Create custom rules for specific zones or times:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Navigate to Settings in the sidebar</li>
        <li>Select "Detection Rules"</li>
        <li>Click "Add Rule" button</li>
        <li>Configure rule conditions:
          <ul className="list-disc list-inside pl-6 mt-1">
            <li>Zone: Select the zone(s) where the rule applies</li>
            <li>Time: Set specific time ranges for the rule</li>
            <li>Violations: Select which violations to detect</li>
            <li>Actions: Configure alerts or notifications for violations</li>
          </ul>
        </li>
        <li>Save the rule</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Optimizing Detection Performance</h3>
      <p className="text-sm text-muted-foreground">
        Tips for improving detection accuracy:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Ensure adequate lighting in monitored areas</li>
        <li>Position cameras to clearly view workers and equipment</li>
        <li>Start with default sensitivity and adjust based on results</li>
        <li>Use smaller, focused zones rather than one large zone</li>
        <li>Regularly review and fine-tune based on false positives/negatives</li>
      </ul>
    </div>
  );

  const alertConfigContent = (
    <div className="space-y-4">
      <p>
        Learn how to configure alerts and notifications to stay informed about safety violations.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Available Notification Methods</h3>
      <p className="text-sm text-muted-foreground">
        InnoSynth supports multiple notification channels:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm pl-4 mt-2">
        <li>In-app notifications</li>
        <li>Email alerts</li>
        <li>SMS notifications (with configured SMS provider)</li>
        <li>Webhook integrations</li>
        <li>Mobile app push notifications</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-6">Setting Up Email Notifications</h3>
      <p className="text-sm text-muted-foreground">
        Configure email notifications for safety violations:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Navigate to Settings in the sidebar</li>
        <li>Select "Notification Settings"</li>
        <li>Enable Email Notifications</li>
        <li>Enter recipient email addresses</li>
        <li>Select which events should trigger emails:
          <ul className="list-disc list-inside pl-6 mt-1">
            <li>All violations</li>
            <li>Critical violations only</li>
            <li>Daily summary reports</li>
            <li>System alerts</li>
          </ul>
        </li>
        <li>Click "Save" to apply settings</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Webhook Integration</h3>
      <p className="text-sm text-muted-foreground">
        Integrate with external systems using webhooks:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Navigate to Settings in the sidebar</li>
        <li>Select "Integration Settings"</li>
        <li>Enable Webhook Integration</li>
        <li>Enter the webhook URL from your external system</li>
        <li>Configure the payload format if needed</li>
        <li>Select events that should trigger the webhook</li>
        <li>Test the webhook connection</li>
        <li>Save the configuration</li>
      </ol>
      
      <h3 className="text-lg font-semibold mt-6">Notification Schedule</h3>
      <p className="text-sm text-muted-foreground">
        Configure when notifications should be sent:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Real-time: Send notifications immediately when violations occur</li>
        <li>Batched: Group notifications and send at specified intervals</li>
        <li>Scheduled: Send summary reports at scheduled times</li>
        <li>Working hours only: Only send notifications during specified working hours</li>
      </ul>
    </div>
  );

  const troubleshootCameraContent = (
    <div className="space-y-4">
      <p>
        This guide helps troubleshoot common camera connection and streaming issues.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Camera Connection Issues</h3>
      <p className="text-sm text-muted-foreground">
        If you can't connect to a camera:
      </p>
      
      <div className="space-y-4 mt-4">
        <div className="p-4 border rounded-md">
          <h4 className="font-medium">Issue: RTSP Connection Failed</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm">Possible causes:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Incorrect RTSP URL format</li>
              <li>Camera not powered on or connected to network</li>
              <li>Network firewall blocking RTSP traffic</li>
              <li>Wrong credentials (username/password)</li>
            </ul>
            <p className="text-sm mt-2">Solutions:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Verify the camera is online using its web interface</li>
              <li>Double-check the RTSP URL format (typically rtsp://ip:port/path)</li>
              <li>Test the RTSP URL in VLC or another media player</li>
              <li>Ensure port 554 (standard RTSP port) is open on the network</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h4 className="font-medium">Issue: Video Feed Freezing or Lagging</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm">Possible causes:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Insufficient network bandwidth</li>
              <li>High camera resolution or frame rate</li>
              <li>Server resource constraints</li>
            </ul>
            <p className="text-sm mt-2">Solutions:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Reduce camera resolution or frame rate in camera settings</li>
              <li>Check network bandwidth between camera and server</li>
              <li>Increase server resources (CPU, RAM) in Settings</li>
              <li>Use H.264 or H.265 compression if available</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h4 className="font-medium">Issue: Poor Detection Accuracy</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm">Possible causes:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Poor lighting conditions</li>
              <li>Camera positioned too far from subjects</li>
              <li>Detection sensitivity too low or high</li>
              <li>Camera angle not optimal</li>
            </ul>
            <p className="text-sm mt-2">Solutions:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Improve lighting in the monitored area</li>
              <li>Adjust camera position and angle</li>
              <li>Tune detection sensitivity in Settings</li>
              <li>Define smaller, more focused detection zones</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Diagnostic Tools</h3>
      <p className="text-sm text-muted-foreground">
        InnoSynth provides diagnostic tools to help troubleshoot camera issues:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Camera Connection Test: Tests basic connectivity to the camera</li>
        <li>Stream Diagnostic: Analyzes stream health and performance</li>
        <li>Network Bandwidth Test: Measures available bandwidth</li>
        <li>System Resource Monitor: Tracks CPU and memory usage</li>
      </ul>
      <p className="text-sm text-muted-foreground mt-2">
        Access these tools in Settings → Diagnostics.
      </p>
    </div>
  );

  const troubleshootDetectionContent = (
    <div className="space-y-4">
      <p>
        This guide helps troubleshoot common detection and analysis issues.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">False Positive Detections</h3>
      <p className="text-sm text-muted-foreground">
        If the system is detecting violations that don't exist:
      </p>
      
      <div className="space-y-4 mt-4">
        <div className="p-4 border rounded-md">
          <h4 className="font-medium">Issue: False Helmet Violations</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm">Possible causes:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Hair or hats similar in shape to helmets</li>
              <li>Detection sensitivity too high</li>
              <li>Poor lighting creating shadows</li>
            </ul>
            <p className="text-sm mt-2">Solutions:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Reduce detection sensitivity for helmet violations</li>
              <li>Improve lighting conditions</li>
              <li>Define more specific detection zones</li>
              <li>Update detection models (admin only)</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h4 className="font-medium">Issue: False Vest Violations</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm">Possible causes:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Clothing with similar colors to safety vests</li>
              <li>Color distortion from camera settings</li>
              <li>Lighting conditions affecting color detection</li>
            </ul>
            <p className="text-sm mt-2">Solutions:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Adjust vest detection sensitivity</li>
              <li>Configure color ranges for vest detection</li>
              <li>Improve lighting for more consistent colors</li>
              <li>Use high-visibility vests with reflective strips</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Missed Detections</h3>
      <p className="text-sm text-muted-foreground">
        If the system is missing actual violations:
      </p>
      
      <div className="space-y-4 mt-4">
        <div className="p-4 border rounded-md">
          <h4 className="font-medium">Issue: Not Detecting All People</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm">Possible causes:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>People too far from camera</li>
              <li>Poor lighting or backlighting</li>
              <li>People partially obscured by objects</li>
              <li>Detection sensitivity too low</li>
            </ul>
            <p className="text-sm mt-2">Solutions:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Reposition camera to have clearer view of work area</li>
              <li>Improve lighting conditions</li>
              <li>Increase person detection sensitivity</li>
              <li>Add additional cameras for better coverage</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h4 className="font-medium">Issue: Not Detecting Safety Equipment</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm">Possible causes:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Non-standard safety equipment</li>
              <li>Equipment partially visible or at unusual angles</li>
              <li>Similar colored equipment and clothing</li>
              <li>Detection sensitivity too low</li>
            </ul>
            <p className="text-sm mt-2">Solutions:</p>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>Increase detection sensitivity for specific equipment</li>
              <li>Use standardized, high-visibility safety equipment</li>
              <li>Adjust camera angles for better equipment visibility</li>
              <li>Train the system with custom equipment (Enterprise plan)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Advanced Troubleshooting</h3>
      <p className="text-sm text-muted-foreground">
        For persistent detection issues:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm pl-4 mt-2">
        <li>Use the Detection Test Tool to analyze detection performance</li>
        <li>Export and review detection logs for patterns</li>
        <li>Contact support for custom model training (Enterprise plan)</li>
        <li>Consider upgrading cameras for higher resolution images</li>
      </ul>
    </div>
  );

  return (
    <div className="container py-6 space-y-8">
      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">
            Get help and support for the InnoSynth platform.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-md mx-auto mb-8">
        <Input
          placeholder="Search for help topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <Tabs defaultValue="guides" className="space-y-6">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="guides">Quick Start Guides</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <HelpItem
              icon={<FileQuestion className="h-5 w-5" />}
              title="Getting Started"
              description="Learn the basics of setting up and using the InnoSynth platform."
              onClick={() => handleContentClick("Getting Started", gettingStartedContent)}
            />
            <HelpItem
              icon={<Camera className="h-5 w-5" />}
              title="Camera Setup Guide"
              description="Detailed instructions for connecting and configuring cameras."
              onClick={() => handleContentClick("Camera Setup Guide", cameraSetupContent)}
            />
            <HelpItem
              icon={<Settings className="h-5 w-5" />}
              title="Detection Settings"
              description="Configure and optimize safety violation detection."
              onClick={() => handleContentClick("Detection Settings", detectionSettingsContent)}
            />
            <HelpItem
              icon={<MessageCircle className="h-5 w-5" />}
              title="Alert Configuration"
              description="Set up notifications for safety violations and alerts."
              onClick={() => handleContentClick("Alert Configuration", alertConfigContent)}
            />
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VideoTutorial
              title="Introduction to InnoSynth"
              duration="3:45"
              thumbnail="Introduction Video Thumbnail"
              onClick={() => handleContentClick("Introduction to InnoSynth", (
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video player would appear here</p>
                  </div>
                  <h3 className="text-lg font-semibold">Introduction to InnoSynth</h3>
                  <p>
                    This video provides an overview of the InnoSynth platform and its key features.
                    Learn how InnoSynth helps improve workplace safety through AI-powered monitoring
                    and analytics.
                  </p>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-medium">Video Chapters:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-4">
                      <li>0:00 - Introduction</li>
                      <li>0:45 - Platform Overview</li>
                      <li>1:30 - Key Features</li>
                      <li>2:15 - Dashboard Tour</li>
                      <li>3:00 - Getting Started</li>
                    </ul>
                  </div>
                </div>
              ))}
            />
            <VideoTutorial
              title="Setting Up Your First Camera"
              duration="5:12"
              thumbnail="Camera Setup Video Thumbnail"
              onClick={() => handleContentClick("Setting Up Your First Camera", (
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video player would appear here</p>
                  </div>
                  <h3 className="text-lg font-semibold">Setting Up Your First Camera</h3>
                  <p>
                    This tutorial walks through the complete process of adding and configuring a camera
                    in the InnoSynth platform. Follow along to set up your first monitoring camera.
                  </p>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-medium">Video Chapters:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-4">
                      <li>0:00 - Introduction</li>
                      <li>0:30 - Camera Requirements</li>
                      <li>1:15 - Adding a New Camera</li>
                      <li>2:45 - Configuring Camera Settings</li>
                      <li>3:30 - Setting Up Detection Zones</li>
                      <li>4:00 - Testing the Connection</li>
                    </ul>
                  </div>
                </div>
              ))}
            />
            <VideoTutorial
              title="Advanced Analytics Tutorial"
              duration="6:38"
              thumbnail="Analytics Video Thumbnail"
              onClick={() => handleContentClick("Advanced Analytics Tutorial", (
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video player would appear here</p>
                  </div>
                  <h3 className="text-lg font-semibold">Advanced Analytics Tutorial</h3>
                  <p>
                    Learn how to use the advanced analytics features in InnoSynth to gain insights
                    into safety compliance and identify areas for improvement.
                  </p>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-medium">Video Chapters:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-4">
                      <li>0:00 - Introduction</li>
                      <li>0:45 - Dashboard Overview</li>
                      <li>1:30 - Compliance Trends</li>
                      <li>2:45 - Violation Analysis</li>
                      <li>3:30 - Custom Reports</li>
                      <li>4:45 - Exporting Data</li>
                      <li>5:30 - Data-Driven Decisions</li>
                    </ul>
                  </div>
                </div>
              ))}
            />
            <VideoTutorial
              title="Customizing Detection Rules"
              duration="4:56"
              thumbnail="Rules Video Thumbnail"
              onClick={() => handleContentClick("Customizing Detection Rules", (
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video player would appear here</p>
                  </div>
                  <h3 className="text-lg font-semibold">Customizing Detection Rules</h3>
                  <p>
                    This tutorial explains how to create and customize safety detection rules for
                    different zones, times, and violation types.
                  </p>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-medium">Video Chapters:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-4">
                      <li>0:00 - Introduction</li>
                      <li>0:30 - Understanding Detection Rules</li>
                      <li>1:15 - Creating a New Rule</li>
                      <li>2:00 - Zone-Specific Rules</li>
                      <li>2:45 - Time-Based Rules</li>
                      <li>3:30 - Advanced Rule Conditions</li>
                      <li>4:15 - Testing and Refining Rules</li>
                    </ul>
                  </div>
                </div>
              ))}
            />
          </div>
        </TabsContent>

        <TabsContent value="troubleshooting" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <HelpItem
              icon={<Camera className="h-5 w-5" />}
              title="Camera Connection Issues"
              description="Troubleshoot common camera connection and streaming problems."
              onClick={() => handleContentClick("Camera Connection Issues", troubleshootCameraContent)}
            />
            <HelpItem
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Detection Problems"
              description="Resolve issues with violation detection accuracy and performance."
              onClick={() => handleContentClick("Detection Problems", troubleshootDetectionContent)}
            />
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            Get help from our support team for issues not covered in the documentation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Methods</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Support</h4>
                    <p className="text-sm text-muted-foreground">
                      support@innosynth.com
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Support</h4>
                    <p className="text-sm text-muted-foreground">
                      +1 (800) 555-0123
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Available Mon-Fri, 9AM-5PM EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">
                      Available in the bottom right corner
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Business hours only
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Submit a Support Request</h3>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                toast.success("Support request submitted. We'll get back to you soon.");
              }}>
                <div className="space-y-2">
                  <Label htmlFor="support-subject">Subject</Label>
                  <Input id="support-subject" placeholder="Brief description of your issue" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="support-message">Message</Label>
                  <Textarea 
                    id="support-message" 
                    placeholder="Please provide details about your issue..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content dialog */}
      <Dialog open={showContentDialog} onOpenChange={setShowContentDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedContent?.title}</DialogTitle>
          </DialogHeader>
          {selectedContent?.content}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HelpSupport;
