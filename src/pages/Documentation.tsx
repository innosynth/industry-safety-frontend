
import React, { useState } from 'react';
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, FileText, Video, LayoutDashboard, AlertTriangle, Shield, Users, Clock, Settings } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Documentation: React.FC = () => {
  const [tab, setTab] = useState("guides");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Documentation</h1>
      </div>

      <Tabs defaultValue={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="guides">User Guides</TabsTrigger>
          <TabsTrigger value="api">API Reference</TabsTrigger>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
        </TabsList>

        <div className="mt-6 grid md:grid-cols-4 gap-6">
          <Card className="md:col-span-1 h-fit">
            <CardContent className="p-4">
              <ScrollArea className="h-[calc(100vh-220px)]">
                {tab === "guides" && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Introduction to InnoSynth
                      </li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        System Requirements
                      </li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold my-4">Features</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard Overview
                      </li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <Video className="h-4 w-4 mr-2" />
                        Video Monitoring Guide
                      </li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Safety Violations Detection
                      </li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Safety Stats & Reporting
                      </li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Managing Tenants
                      </li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold my-4">Administration</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        System Configuration
                      </li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        User Management
                      </li>
                    </ul>
                  </div>
                )}
                
                {tab === "api" && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-2">API Overview</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Authentication</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Rate Limits</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Error Handling</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold my-4">Endpoints</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Cameras</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Detections</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Violations</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Statistics</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Users</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Tenants</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold my-4">SDKs & Libraries</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">JavaScript SDK</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Python SDK</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Java SDK</li>
                    </ul>
                  </div>
                )}
                
                {tab === "faq" && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">General Questions</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Account & Billing</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Technical Support</li>
                      <li className="text-sm text-blue-500 hover:underline cursor-pointer">Integration & APIs</li>
                    </ul>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-3">
            <CardContent className="p-6">
              <ScrollArea className="h-[calc(100vh-220px)]">
                {tab === "guides" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Introduction to InnoSynth</h2>
                      <p className="mb-4">
                        InnoSynth is a comprehensive safety monitoring platform designed to enhance workplace safety through AI-powered video analysis. 
                        This guide will help you understand the core features and how to get the most out of the platform.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Real-time safety monitoring through connected cameras</li>
                        <li>AI-powered detection of PPE compliance and safety violations</li>
                        <li>Comprehensive analytics and reporting</li>
                        <li>Multi-tenant architecture for managing different sites or clients</li>
                        <li>Customizable alerts and notifications</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">System Architecture</h3>
                      <img 
                        src="https://via.placeholder.com/800x400?text=InnoSynth+System+Architecture" 
                        alt="InnoSynth System Architecture" 
                        className="rounded-lg my-4 border"
                      />
                      <p className="text-sm text-muted-foreground">
                        Diagram showing the high-level architecture of the InnoSynth Safety Vision platform
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Getting Started</h3>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="step1">
                          <AccordionTrigger>
                            <div className="flex items-center">
                              <div className="bg-blue-100 rounded-full p-1 mr-2 text-blue-700">1</div>
                              <span>Setting Up Your Account</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-9">
                              <p className="mb-2">To set up your account, follow these steps:</p>
                              <ol className="list-decimal pl-5 space-y-1">
                                <li>Contact your system administrator to create your user profile</li>
                                <li>Check your email for the account activation link</li>
                                <li>Set your password and complete your profile information</li>
                                <li>Configure your preferences and notification settings</li>
                              </ol>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="step2">
                          <AccordionTrigger>
                            <div className="flex items-center">
                              <div className="bg-blue-100 rounded-full p-1 mr-2 text-blue-700">2</div>
                              <span>Connecting Your First Camera</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-9">
                              <p className="mb-2">To connect a camera to the system:</p>
                              <ol className="list-decimal pl-5 space-y-1">
                                <li>Navigate to the Video Monitoring section</li>
                                <li>Click "Add Camera" and enter the camera's RTSP URL or other stream information</li>
                                <li>Configure the camera zones and detection parameters</li>
                                <li>Test the connection to ensure the feed is working properly</li>
                              </ol>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="step3">
                          <AccordionTrigger>
                            <div className="flex items-center">
                              <div className="bg-blue-100 rounded-full p-1 mr-2 text-blue-700">3</div>
                              <span>Setting Up Safety Rules</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-9">
                              <p className="mb-2">Configure safety rules for your workplace:</p>
                              <ol className="list-decimal pl-5 space-y-1">
                                <li>Navigate to the Settings section</li>
                                <li>Define required PPE for different zones (hard hats, safety vests, etc.)</li>
                                <li>Configure violation thresholds and notification settings</li>
                                <li>Set working hours and monitoring schedules</li>
                              </ol>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                )}
                
                {tab === "api" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                      <p className="mb-4">
                        The InnoSynth API allows you to programmatically access and control your safety monitoring system. 
                        This documentation provides details on how to authenticate, make requests, and handle responses.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Authentication</h3>
                      <p className="mb-2">
                        All API requests require authentication using API keys. You can generate and manage API keys in the Settings section.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                        <p className="text-muted-foreground">Example Request:</p>
                        <pre className="overflow-x-auto">
{`curl -X GET \\
  https://api.innosynth.example.com/v1/cameras \\
  -H 'Authorization: Bearer YOUR_API_KEY'`}
                        </pre>
                      </div>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Cameras Endpoint</h3>
                      <p className="mb-2">
                        The cameras endpoint allows you to list, create, update, and delete camera configurations.
                      </p>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="get-cameras">
                          <AccordionTrigger>
                            <div className="flex items-center font-mono">
                              <div className="bg-green-100 text-green-700 text-xs py-1 px-2 rounded mr-2">GET</div>
                              <span>/cameras</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p>Returns a list of all cameras for the authenticated user.</p>
                              
                              <div className="space-y-2">
                                <h4 className="font-semibold">Request Parameters</h4>
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                  <thead>
                                    <tr>
                                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                      <td className="px-3 py-2 text-sm">tenant_id</td>
                                      <td className="px-3 py-2 text-sm">string</td>
                                      <td className="px-3 py-2 text-sm">Filter cameras by tenant ID (optional)</td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 text-sm">status</td>
                                      <td className="px-3 py-2 text-sm">string</td>
                                      <td className="px-3 py-2 text-sm">Filter by status: active, inactive, error (optional)</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                                <p className="text-muted-foreground">Example Response:</p>
                                <pre className="overflow-x-auto">
{`{
  "data": [
    {
      "id": "cam_12345",
      "name": "Loading Dock Camera",
      "url": "rtsp://example.com/stream1",
      "tenant_id": "tenant_789",
      "status": "active",
      "created_at": "2023-05-15T10:30:00Z"
    },
    {
      "id": "cam_67890",
      "name": "Assembly Line Camera",
      "url": "rtsp://example.com/stream2",
      "tenant_id": "tenant_789",
      "status": "active",
      "created_at": "2023-05-16T14:20:00Z"
    }
  ],
  "total": 2,
  "page": 1,
  "per_page": 10
}`}
                                </pre>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="post-cameras">
                          <AccordionTrigger>
                            <div className="flex items-center font-mono">
                              <div className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded mr-2">POST</div>
                              <span>/cameras</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p>Creates a new camera configuration.</p>
                              
                              <div className="space-y-2">
                                <h4 className="font-semibold">Request Body</h4>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                                  <pre className="overflow-x-auto">
{`{
  "name": "Warehouse Camera",
  "url": "rtsp://example.com/stream3",
  "tenant_id": "tenant_789",
  "description": "Camera monitoring south warehouse entrance",
  "detection_zones": [
    {
      "name": "Entry Zone",
      "coordinates": [[0,0], [0,100], [100,100], [100,0]],
      "required_ppe": ["helmet", "vest"]
    }
  ]
}`}
                                  </pre>
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                                <p className="text-muted-foreground">Example Response:</p>
                                <pre className="overflow-x-auto">
{`{
  "id": "cam_54321",
  "name": "Warehouse Camera",
  "url": "rtsp://example.com/stream3",
  "tenant_id": "tenant_789",
  "status": "active",
  "created_at": "2023-05-20T09:45:00Z",
  "description": "Camera monitoring south warehouse entrance",
  "detection_zones": [
    {
      "id": "zone_123",
      "name": "Entry Zone",
      "coordinates": [[0,0], [0,100], [100,100], [100,0]],
      "required_ppe": ["helmet", "vest"]
    }
  ]
}`}
                                </pre>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                )}
                
                {tab === "faq" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="q1">
                          <AccordionTrigger>What types of cameras are supported by InnoSynth?</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              InnoSynth supports a wide range of camera types and protocols, including:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>IP cameras that support RTSP streams</li>
                              <li>ONVIF-compliant cameras</li>
                              <li>USB webcams (with appropriate streaming setup)</li>
                              <li>YouTube live streams</li>
                              <li>HLS and DASH streaming formats</li>
                            </ul>
                            <p className="mt-2">
                              For best performance, we recommend using IP cameras with at least 720p resolution.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="q2">
                          <AccordionTrigger>How accurate is the PPE detection?</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              Our AI detection models are trained on large datasets of safety equipment in various lighting conditions and environments. The current detection accuracy is approximately 95% for standard PPE items such as hard hats, safety vests, and glasses in good lighting conditions. 
                            </p>
                            <p className="mt-2">
                              Factors that can affect accuracy include:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                              <li>Poor lighting conditions</li>
                              <li>Obstructed views</li>
                              <li>Distance from camera</li>
                              <li>Camera resolution and quality</li>
                            </ul>
                            <p className="mt-2">
                              You can improve accuracy by properly positioning cameras and ensuring adequate lighting in monitored areas.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="q3">
                          <AccordionTrigger>Can InnoSynth integrate with our existing security systems?</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              Yes, InnoSynth is designed to integrate with many existing systems through our API. Common integration points include:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                              <li>VMS (Video Management Systems)</li>
                              <li>Access control systems</li>
                              <li>Notification and alerting platforms</li>
                              <li>Data warehousing and BI tools</li>
                              <li>ERP and workforce management systems</li>
                            </ul>
                            <p className="mt-2">
                              Our professional services team can assist with custom integrations for enterprise clients. Please contact support for more information.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="q4">
                          <AccordionTrigger>What happens if the internet connection is lost?</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              InnoSynth has several resilience features to handle connectivity issues:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                              <li>Edge processing capabilities for critical safety monitoring</li>
                              <li>Local caching of detection events when connection is lost</li>
                              <li>Automatic synchronization when connection is restored</li>
                              <li>Alerts for extended connectivity issues</li>
                            </ul>
                            <p className="mt-2">
                              For optimal performance, we recommend a reliable internet connection with at least 5 Mbps upload speed per camera stream.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="q5">
                          <AccordionTrigger>How is data stored and secured?</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              InnoSynth takes data security seriously. Our approach includes:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                              <li>End-to-end encryption for all data in transit</li>
                              <li>AES-256 encryption for data at rest</li>
                              <li>Regular security audits and penetration testing</li>
                              <li>Role-based access control for all users</li>
                              <li>Compliance with GDPR, CCPA, and other regional data protection regulations</li>
                              <li>Automated data retention policies based on your requirements</li>
                            </ul>
                            <p className="mt-2">
                              Video footage is processed in real-time but can be optionally stored according to your retention policies. Detection events and statistics are stored in our secure database.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
};

export default Documentation;
