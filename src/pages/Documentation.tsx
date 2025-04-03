
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BookOpen, 
  FileText, 
  Code, 
  Database, 
  Shield, 
  Camera, 
  AlertTriangle, 
  ChartBar, 
  UserRound, 
  Users,
  Settings
} from "lucide-react";

const Documentation: React.FC = () => {
  return (
    <div className="container py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
        <p className="text-muted-foreground">
          Comprehensive guides and documentation for using the SafetyVision platform.
        </p>
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
                  description="Learn about the core features and capabilities of the SafetyVision platform."
                />
                <DocCard 
                  icon={<Camera className="h-5 w-5" />}
                  title="Camera Setup"
                  description="Instructions for configuring and connecting surveillance cameras."
                />
                <DocCard 
                  icon={<AlertTriangle className="h-5 w-5" />}
                  title="Safety Violation Detection"
                  description="How to configure and customize safety violation detection rules."
                />
                <DocCard 
                  icon={<ChartBar className="h-5 w-5" />}
                  title="Safety Analytics"
                  description="Understand safety statistics and reporting features."
                />
                <DocCard 
                  icon={<Users className="h-5 w-5" />}
                  title="Tenant Management"
                  description="How to add, edit, and manage tenant information."
                />
                <DocCard 
                  icon={<Settings className="h-5 w-5" />}
                  title="System Configuration"
                  description="Detailed instructions for customizing system settings."
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
                />
                <DocCard 
                  icon={<Database className="h-5 w-5" />}
                  title="Data Management"
                  description="Guidelines for managing video data, backups, and storage."
                />
                <DocCard 
                  icon={<UserRound className="h-5 w-5" />}
                  title="User Management"
                  description="How to manage user roles, permissions, and access controls."
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
                Complete reference for the SafetyVision API endpoints and integration options.
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
                Common questions and answers about the SafetyVision platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">What hardware is required for SafetyVision?</h3>
                  <p className="text-muted-foreground">
                    SafetyVision works with standard IP cameras and requires a dedicated server for processing. Recommended specifications depend on the number of cameras and detection needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How accurate is the safety violation detection?</h3>
                  <p className="text-muted-foreground">
                    SafetyVision typically achieves 90-95% accuracy in standard environments. Detection accuracy can be improved through proper camera placement and customizing detection sensitivity.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Is cloud storage supported?</h3>
                  <p className="text-muted-foreground">
                    Yes, SafetyVision supports both local and cloud storage options. Cloud storage integration is available with AWS S3, Google Cloud Storage, and Azure Blob Storage.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How is data privacy maintained?</h3>
                  <p className="text-muted-foreground">
                    SafetyVision implements data encryption, access controls, and retention policies to maintain privacy. The system is designed to be compliant with GDPR and other privacy regulations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Can SafetyVision integrate with other systems?</h3>
                  <p className="text-muted-foreground">
                    Yes, SafetyVision offers API integration with various building management systems, security platforms, and notification systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface DocCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DocCard: React.FC<DocCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col space-y-2 p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors hover:border-accent cursor-pointer">
      <div className="flex items-center space-x-2">
        <div className="text-primary">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center text-sm text-primary mt-auto pt-2">
        <span>Read more</span>
        <FileText className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
};

export default Documentation;
