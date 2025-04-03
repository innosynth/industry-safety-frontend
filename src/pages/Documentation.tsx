
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  Code, 
  Database, 
  Shield, 
  Camera, 
  AlertTriangle, 
  ChartBar,
  Users,
  Settings,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface DocCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const DocCard: React.FC<DocCardProps> = ({ icon, title, description, onClick }) => {
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
        <span>Read more</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
};

const Documentation: React.FC = () => {
  const navigate = useNavigate();
  const [showDocDialog, setShowDocDialog] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  const handleDocCardClick = (title: string, content: React.ReactNode) => {
    setSelectedDoc({ title, content });
    setShowDocDialog(true);
  };

  const platformOverviewContent = (
    <div className="space-y-4">
      <p>
        The InnoSynth platform is a comprehensive safety monitoring solution designed for industrial environments. 
        It combines advanced AI technology with intuitive management tools to help you ensure workplace safety 
        compliance.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Key Components</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Dashboard</h4>
          <p className="text-sm text-muted-foreground">
            The central hub for monitoring safety metrics, viewing recent violations, and accessing 
            all platform features.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Video Monitoring</h4>
          <p className="text-sm text-muted-foreground">
            Upload, process, and review video footage with AI-powered safety violation detection.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Safety Analytics</h4>
          <p className="text-sm text-muted-foreground">
            Comprehensive reporting and analysis tools to track safety metrics, identify patterns, 
            and improve workplace safety over time.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Tenant Management</h4>
          <p className="text-sm text-muted-foreground">
            Configure and manage different locations, facilities, or departments as separate tenants 
            within the platform.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Getting Started</h3>
      
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>Set up at least one tenant in Tenant Management</li>
        <li>Configure cameras for monitoring</li>
        <li>Upload your first video for processing</li>
        <li>Review safety violations and analytics</li>
        <li>Set up alerting for real-time notifications</li>
      </ol>
    </div>
  );

  const cameraSetupContent = (
    <div className="space-y-4">
      <p>
        Proper camera setup is essential for effective safety monitoring. This guide will help you 
        configure and connect surveillance cameras to the InnoSynth platform.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Supported Camera Types</h3>
      
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>IP cameras (RTSP, ONVIF compatible)</li>
        <li>Network Video Recorders (NVRs)</li>
        <li>USB webcams (with streaming server)</li>
        <li>CCTV cameras (with IP converter)</li>
        <li>Cloud-based camera systems</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-6">Camera Placement Guidelines</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Coverage Area</h4>
          <p className="text-sm text-muted-foreground">
            Position cameras to cover all critical work areas where safety compliance is required.
            Avoid blind spots and ensure adequate coverage of entry/exit points.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Lighting Conditions</h4>
          <p className="text-sm text-muted-foreground">
            Ensure consistent, adequate lighting in monitored areas. Avoid direct sunlight on cameras
            and consider infrared cameras for low-light environments.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Camera Height and Angle</h4>
          <p className="text-sm text-muted-foreground">
            Mount cameras at a height of 8-10 feet (2.4-3m) where possible. Angle cameras to clearly
            capture workers and their safety equipment.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Connection Process</h3>
      
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>Add a new camera in the tenant settings</li>
        <li>Enter the camera's RTSP URL or connection details</li>
        <li>Set detection zones and monitoring parameters</li>
        <li>Test the connection and verify the video feed</li>
        <li>Configure detection sensitivity and alerts</li>
      </ol>
    </div>
  );

  const violationDetectionContent = (
    <div className="space-y-4">
      <p>
        The InnoSynth platform uses advanced AI algorithms to detect safety violations in real-time.
        This guide explains how to configure and customize safety violation detection rules.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Supported Violation Types</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 border rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="font-medium">Missing Helmet</span>
          </div>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="font-medium">No Safety Vest</span>
          </div>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="font-medium">Missing Mask</span>
          </div>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="font-medium">No Safety Glasses</span>
          </div>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="font-medium">No Gloves</span>
          </div>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="font-medium">Unauthorized Access</span>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Configuring Detection Rules</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Setting Detection Zones</h4>
          <p className="text-sm text-muted-foreground">
            Define specific areas within the camera view where safety rules should be enforced.
            Different zones can have different safety requirements.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Detection Sensitivity</h4>
          <p className="text-sm text-muted-foreground">
            Adjust the sensitivity level for each violation type to reduce false positives or
            ensure all potential violations are captured.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Time-Based Rules</h4>
          <p className="text-sm text-muted-foreground">
            Set different safety requirements based on time of day, shift schedules, or days of the week.
          </p>
        </div>
      </div>
    </div>
  );

  const safetyAnalyticsContent = (
    <div className="space-y-4">
      <p>
        InnoSynth provides comprehensive safety analytics to help you understand safety compliance
        trends, identify problem areas, and make data-driven decisions to improve workplace safety.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Available Analytics</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Compliance Rate</h4>
          <p className="text-sm text-muted-foreground">
            Overall safety compliance percentage across all monitored areas, with historical trends
            and comparisons.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Violation Breakdown</h4>
          <p className="text-sm text-muted-foreground">
            Detailed analysis of violations by type, time, location, and severity.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Zone Analysis</h4>
          <p className="text-sm text-muted-foreground">
            Compare safety compliance across different zones or work areas to identify problem spots.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Time-Based Patterns</h4>
          <p className="text-sm text-muted-foreground">
            Identify patterns in safety violations by time of day, day of week, or shift.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Using Analytics Reports</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Dashboard Overview</h4>
          <p className="text-sm text-muted-foreground">
            The main dashboard provides key metrics and recent violations for quick monitoring.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Detailed Reports</h4>
          <p className="text-sm text-muted-foreground">
            Generate detailed reports for specific time periods, zones, or violation types.
            Export reports in PDF, CSV, or Excel formats.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Setting Alerts</h4>
          <p className="text-sm text-muted-foreground">
            Configure thresholds for key metrics to receive alerts when safety compliance falls
            below acceptable levels.
          </p>
        </div>
      </div>
    </div>
  );

  const tenantManagementContent = (
    <div className="space-y-4">
      <p>
        The tenant management system allows you to organize and manage multiple facilities, 
        departments, or clients within a single InnoSynth platform instance.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Tenant Structure</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Tenant Organization</h4>
          <p className="text-sm text-muted-foreground">
            Each tenant represents a separate entity with its own cameras, users, and safety rules.
            Tenants can be physically separate locations or different departments within the same location.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Tenant Hierarchy</h4>
          <p className="text-sm text-muted-foreground">
            Tenants can be organized in a hierarchical structure with parent-child relationships
            for complex organizational structures.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Managing Tenants</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Creating Tenants</h4>
          <p className="text-sm text-muted-foreground">
            Add new tenants through the Tenant Management page. Provide a name and configure
            basic settings for the tenant.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Tenant Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure tenant-specific settings including cameras, user access, notification
            preferences, and detection rules.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">User Management</h4>
          <p className="text-sm text-muted-foreground">
            Assign users to specific tenants with appropriate permission levels. Users can have
            access to multiple tenants with different permissions for each.
          </p>
        </div>
      </div>
    </div>
  );

  const systemConfigContent = (
    <div className="space-y-4">
      <p>
        InnoSynth offers extensive configuration options to customize the platform to your specific
        needs and requirements.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">System Settings</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">API Configuration</h4>
          <p className="text-sm text-muted-foreground">
            Configure API endpoints and authentication for integration with external systems.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Processing Resources</h4>
          <p className="text-sm text-muted-foreground">
            Allocate CPU and memory resources for video processing to optimize performance.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Storage Management</h4>
          <p className="text-sm text-muted-foreground">
            Configure storage settings for video files, including retention periods and storage locations.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Notification Settings</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Email Notifications</h4>
          <p className="text-sm text-muted-foreground">
            Configure email notification settings for safety violations and system alerts.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Webhook Integration</h4>
          <p className="text-sm text-muted-foreground">
            Set up webhooks to trigger external systems or applications when safety violations occur.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Alert Rules</h4>
          <p className="text-sm text-muted-foreground">
            Create custom alert rules with specific conditions and notification methods.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">User Management</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">User Roles</h4>
          <p className="text-sm text-muted-foreground">
            Define custom user roles with specific permissions and access levels.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Authentication Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure authentication methods, including single sign-on (SSO) and multi-factor authentication.
          </p>
        </div>
      </div>
    </div>
  );
  
  const securityContent = (
    <div className="space-y-4">
      <p>
        InnoSynth prioritizes security to protect sensitive safety monitoring data and ensure
        secure access to the platform.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Security Features</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Data Encryption</h4>
          <p className="text-sm text-muted-foreground">
            All data is encrypted both in transit and at rest using industry-standard encryption protocols.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Access Controls</h4>
          <p className="text-sm text-muted-foreground">
            Fine-grained access controls with role-based permissions ensure users only have access to
            the data and features they need.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Multi-Factor Authentication</h4>
          <p className="text-sm text-muted-foreground">
            Enable MFA for additional security when accessing the platform.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Security Best Practices</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Regular Audits</h4>
          <p className="text-sm text-muted-foreground">
            Conduct regular security audits to identify and address potential vulnerabilities.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Password Policies</h4>
          <p className="text-sm text-muted-foreground">
            Implement strong password policies and regular password rotation for all users.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Activity Monitoring</h4>
          <p className="text-sm text-muted-foreground">
            Monitor and log all user activity for security and compliance purposes.
          </p>
        </div>
      </div>
    </div>
  );
  
  const dataManagementContent = (
    <div className="space-y-4">
      <p>
        Effective data management is crucial for maintaining the performance and reliability of the
        InnoSynth platform.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Video Data Management</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Storage Options</h4>
          <p className="text-sm text-muted-foreground">
            Configure local storage, network storage, or cloud storage options for video data.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Retention Policies</h4>
          <p className="text-sm text-muted-foreground">
            Set up data retention policies to automatically archive or delete older video data.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Data Compression</h4>
          <p className="text-sm text-muted-foreground">
            Configure video compression settings to optimize storage usage without compromising
            detection accuracy.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Database Management</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Database Maintenance</h4>
          <p className="text-sm text-muted-foreground">
            Regular database maintenance tasks to ensure optimal performance.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Backup Procedures</h4>
          <p className="text-sm text-muted-foreground">
            Configure automated backups for all system data to prevent data loss.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Data Export</h4>
          <p className="text-sm text-muted-foreground">
            Export safety data and reports in various formats for further analysis or integration
            with other systems.
          </p>
        </div>
      </div>
    </div>
  );
  
  const userManagementContent = (
    <div className="space-y-4">
      <p>
        InnoSynth provides comprehensive user management tools to control access and permissions
        within the platform.
      </p>
      
      <h3 className="text-lg font-semibold mt-6">User Roles</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Administrator</h4>
          <p className="text-sm text-muted-foreground">
            Full access to all platform features and settings.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Manager</h4>
          <p className="text-sm text-muted-foreground">
            Access to manage tenants, view reports, and configure basic settings.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Operator</h4>
          <p className="text-sm text-muted-foreground">
            Access to monitor violations, review videos, and generate reports.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Viewer</h4>
          <p className="text-sm text-muted-foreground">
            Read-only access to view safety data and reports.
          </p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">User Administration</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Creating Users</h4>
          <p className="text-sm text-muted-foreground">
            Add new users with specific roles and tenant access.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Permission Management</h4>
          <p className="text-sm text-muted-foreground">
            Configure detailed permissions for each user or role.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">User Groups</h4>
          <p className="text-sm text-muted-foreground">
            Create user groups for easier permission management.
          </p>
        </div>
      </div>
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
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="text-muted-foreground">
            Comprehensive guides and documentation for using the InnoSynth platform.
          </p>
        </div>
      </div>

      <Tabs defaultValue="guides" className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="guides">User Guides</TabsTrigger>
          <TabsTrigger value="api">API Reference</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Essential guides to help you start using the platform efficiently.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <DocCard 
                  icon={<BookOpen className="h-5 w-5" />}
                  title="Platform Overview"
                  description="Learn about the core features and capabilities of the InnoSynth platform."
                  onClick={() => handleDocCardClick("Platform Overview", platformOverviewContent)}
                />
                <DocCard 
                  icon={<Camera className="h-5 w-5" />}
                  title="Camera Setup"
                  description="Instructions for configuring and connecting surveillance cameras."
                  onClick={() => handleDocCardClick("Camera Setup", cameraSetupContent)}
                />
                <DocCard 
                  icon={<AlertTriangle className="h-5 w-5" />}
                  title="Safety Violation Detection"
                  description="How to configure and customize safety violation detection rules."
                  onClick={() => handleDocCardClick("Safety Violation Detection", violationDetectionContent)}
                />
                <DocCard 
                  icon={<ChartBar className="h-5 w-5" />}
                  title="Safety Analytics"
                  description="Understand safety statistics and reporting features."
                  onClick={() => handleDocCardClick("Safety Analytics", safetyAnalyticsContent)}
                />
                <DocCard 
                  icon={<Users className="h-5 w-5" />}
                  title="Tenant Management"
                  description="How to add, edit, and manage tenant information."
                  onClick={() => handleDocCardClick("Tenant Management", tenantManagementContent)}
                />
                <DocCard 
                  icon={<Settings className="h-5 w-5" />}
                  title="System Configuration"
                  description="Detailed instructions for customizing system settings."
                  onClick={() => handleDocCardClick("System Configuration", systemConfigContent)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Advanced Topics</CardTitle>
              <CardDescription>
                In-depth guides for advanced users and administrators.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <DocCard 
                  icon={<Shield className="h-5 w-5" />}
                  title="Security Best Practices"
                  description="Recommended security configurations and best practices."
                  onClick={() => handleDocCardClick("Security Best Practices", securityContent)}
                />
                <DocCard 
                  icon={<Database className="h-5 w-5" />}
                  title="Data Management"
                  description="Guidelines for managing video data, backups, and storage."
                  onClick={() => handleDocCardClick("Data Management", dataManagementContent)}
                />
                <DocCard 
                  icon={<Users className="h-5 w-5" />}
                  title="User Management"
                  description="How to manage user roles, permissions, and access controls."
                  onClick={() => handleDocCardClick("User Management", userManagementContent)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>
                Complete reference for the InnoSynth API endpoints and integration options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Code className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Authentication</h3>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm"><code>{`// API Authentication Example
POST /api/auth/token
{
  "apiKey": "your-api-key",
  "secret": "your-api-secret"
}

// Response
{
  "token": "jwt-token",
  "expiresIn": 3600
}`}</code></pre>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      All API requests must include a valid JWT token in the Authorization header.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Camera className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Camera Endpoints</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono">GET /api/cameras</code>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">GET</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Retrieve a list of all configured cameras.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono">GET /api/cameras/{"{id}"}</code>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">GET</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Get details for a specific camera.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono">POST /api/cameras</code>
                        <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">POST</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Register a new camera.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono">PUT /api/cameras/{"{id}"}</code>
                        <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded">PUT</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Update camera configuration.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Violation Endpoints</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono">GET /api/violations</code>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">GET</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Retrieve a list of detected safety violations.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono">GET /api/violations/stats</code>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">GET</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Get statistical data about safety violations.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Common questions and answers about the InnoSynth platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">What hardware is required for InnoSynth?</h3>
                  <p className="text-muted-foreground">
                    InnoSynth works with standard IP cameras and requires a dedicated server for processing. Recommended specifications depend on the number of cameras and detection needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How accurate is the safety violation detection?</h3>
                  <p className="text-muted-foreground">
                    InnoSynth typically achieves 90-95% accuracy in standard environments. Detection accuracy can be improved through proper camera placement and customizing detection sensitivity.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Is cloud storage supported?</h3>
                  <p className="text-muted-foreground">
                    Yes, InnoSynth supports both local and cloud storage options. Cloud storage integration is available with AWS S3, Google Cloud Storage, and Azure Blob Storage.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How is data privacy maintained?</h3>
                  <p className="text-muted-foreground">
                    InnoSynth implements data encryption, access controls, and retention policies to maintain privacy. The system is designed to be compliant with GDPR and other privacy regulations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Can InnoSynth integrate with other systems?</h3>
                  <p className="text-muted-foreground">
                    Yes, InnoSynth offers API integration with various building management systems, security platforms, and notification systems.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">What types of safety violations can be detected?</h3>
                  <p className="text-muted-foreground">
                    InnoSynth can detect various safety violations including missing protective equipment (helmets, vests, masks, gloves, safety glasses), unauthorized access to restricted areas, and other custom safety rules.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How many cameras can the system support?</h3>
                  <p className="text-muted-foreground">
                    The number of cameras supported depends on your subscription plan and available processing resources. The Standard plan supports up to 15 cameras, while the Enterprise plan supports unlimited cameras.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Can I set up automated alerts for violations?</h3>
                  <p className="text-muted-foreground">
                    Yes, InnoSynth provides a comprehensive alerting system. You can configure email notifications, webhook integrations, and in-app alerts for different types of violations and system events.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How long is video data stored?</h3>
                  <p className="text-muted-foreground">
                    Data retention depends on your subscription plan: 3 days for Free tier, 30 days for Standard, and 90 days for Enterprise. Custom retention policies can be configured based on your specific requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Is there a mobile app available?</h3>
                  <p className="text-muted-foreground">
                    Yes, InnoSynth offers mobile apps for iOS and Android devices. The mobile app provides access to real-time alerts, violation reviews, and basic analytics dashboards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Documentation dialog */}
      <Dialog open={showDocDialog} onOpenChange={setShowDocDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedDoc?.title}</DialogTitle>
          </DialogHeader>
          {selectedDoc?.content}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Documentation;
