
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Code, 
  HelpCircle, 
  FileText, 
  UserCircle, 
  Settings2, 
  Video, 
  AlertTriangle, 
  CircleCheck 
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLoading } from "@/components/shared/LoadingProvider";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const Documentation: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const [isContentLoading, setIsContentLoading] = useState(false);
  const { isLoading, setLoading } = useLoading();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleViewDocumentation = (docId: string) => {
    setIsContentLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setActiveDoc(docId);
      setIsContentLoading(false);
    }, 500);
  };

  const handleBackToList = () => {
    setActiveDoc(null);
  };

  const userGuides = [
    {
      id: "quick-start",
      title: "Quick Start Guide",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Set up your first safety monitoring system in minutes",
    },
    {
      id: "camera-setup",
      title: "Camera Configuration",
      icon: <Video className="h-5 w-5 text-primary" />,
      description: "Configure your cameras for optimal performance",
    },
    {
      id: "violation-rules",
      title: "Setting Up Violation Rules",
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      description: "Create and manage custom violation detection rules",
    },
    {
      id: "dashboard",
      title: "Using the Dashboard",
      icon: <CircleCheck className="h-5 w-5 text-primary" />,
      description: "Navigate and understand your safety analytics dashboard",
    },
    {
      id: "mobile-app",
      title: "Mobile App Guide",
      icon: <UserCircle className="h-5 w-5 text-primary" />,
      description: "Monitor safety violations on the go",
    },
    {
      id: "alerts",
      title: "Setting Up Alerts",
      icon: <Settings2 className="h-5 w-5 text-primary" />,
      description: "Configure notifications for safety violations",
    },
    {
      id: "api-usage",
      title: "API Integration",
      icon: <Code className="h-5 w-5 text-primary" />,
      description: "Integrate your safety system with other applications",
    },
    {
      id: "reports",
      title: "Generating Reports",
      icon: <FileText className="h-5 w-5 text-primary" />,
      description: "Create and schedule comprehensive safety reports",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting Guide",
      icon: <HelpCircle className="h-5 w-5 text-primary" />,
      description: "Solutions to common issues and questions",
    },
  ];

  const faqs = [
    {
      question: "How accurate is the violation detection?",
      answer: "Our AI-based violation detection system achieves over 98% accuracy in most environments. The system is continuously trained on new data to improve detection capabilities and reduce false positives. Results may vary based on camera quality, lighting conditions, and other environmental factors."
    },
    {
      question: "Can I use my existing cameras?",
      answer: "Yes, InnoSynth is designed to work with most standard IP cameras. Our system supports RTSP, HTTP, and ONVIF protocols. You can integrate your existing camera infrastructure without purchasing new hardware. For optimal performance, we recommend cameras with at least 720p resolution and good low-light capabilities."
    },
    {
      question: "How secure is the data storage?",
      answer: "We employ industry-leading security measures including end-to-end encryption for data in transit and at rest. All footage and violation data is stored in SOC 2 compliant data centers with rigorous access controls and regular security audits. Our platform also offers customizable data retention policies to comply with your organization's requirements."
    },
    {
      question: "Can I customize the violation rules?",
      answer: "Absolutely. InnoSynth offers a flexible rules engine that allows you to define and configure safety rules specific to your environment. You can set up different rules for different areas, time periods, and job types. Our system also supports rule templates for common industry standards like OSHA, ISO, and other regulatory frameworks."
    },
    {
      question: "What kind of reports can I generate?",
      answer: "Our platform offers comprehensive reporting capabilities including daily, weekly, and monthly safety summaries, violation trend analysis, compliance status reports, area-specific safety metrics, and custom reports. All reports can be exported in multiple formats including PDF, CSV, and Excel, and can be scheduled for automatic delivery via email."
    },
    {
      question: "How many cameras can the system support?",
      answer: "The number of supported cameras depends on your subscription plan. Our Free tier supports 1 camera, Standard tier supports up to 15 cameras, and Enterprise tier supports unlimited cameras. All plans include real-time monitoring, though processing capacity and storage duration vary by plan."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, InnoSynth offers mobile applications for both iOS and Android devices. The mobile app provides real-time alerts, allows you to view live camera feeds, check violation reports, and manage basic system settings on the go. Mobile push notifications ensure you never miss critical safety incidents."
    },
    {
      question: "How long is footage stored?",
      answer: "Data retention varies by plan: Free tier stores footage for 3 days, Standard tier for 30 days, and Enterprise tier for 90 days. Custom retention policies are available for Enterprise customers to meet specific regulatory or organizational requirements. All plans include violation event storage with screenshots."
    },
    {
      question: "Can I integrate with other systems?",
      answer: "Yes, InnoSynth provides a comprehensive API that allows integration with various enterprise systems including HRIS, ERP, compliance management platforms, and third-party reporting tools. We also offer pre-built integrations with popular platforms like Slack, Microsoft Teams, and various email services for notifications."
    },
    {
      question: "What kind of support is available?",
      answer: "Support options vary by plan. Free tier includes email support with 48-hour response time. Standard tier includes priority email and chat support with 24-hour response time. Enterprise tier includes 24/7 phone, email, and chat support with dedicated account management and SLA guarantees for critical issues."
    },
    {
      question: "How does billing work?",
      answer: "We offer both monthly and annual billing options, with a 20% discount for annual commitments. You can upgrade or downgrade your plan at any time, with prorated billing adjustments. All plans come with a 14-day trial period during which you can cancel without any charges."
    },
    {
      question: "Can the system detect specific types of violations?",
      answer: "Yes, our AI system can detect a wide range of safety violations including PPE compliance (hard hats, safety vests, gloves, etc.), restricted area access, unsafe behavior (running in facilities, improper lifting), equipment misuse, and environmental hazards. Enterprise customers can request custom detection models for specific use cases."
    }
  ];

  // Document content for quick-start guide
  const quickStartContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
        <p className="mb-4">This guide will help you set up your first safety monitoring system using InnoSynth's AI-powered platform in just a few simple steps.</p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Step 1: Create Your Account</h3>
        <div className="pl-6 space-y-2">
          <p>• Register a new account at <span className="font-medium">app.innosynth.com</span> or through our mobile app.</p>
          <p>• Verify your email address to activate your account.</p>
          <p>• Complete your organization profile with basic information about your facility.</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Step 2: Connect Your First Camera</h3>
        <div className="pl-6 space-y-2">
          <p>• Navigate to the <span className="font-medium">Cameras</span> section in your dashboard.</p>
          <p>• Click on <span className="font-medium">Add Camera</span> and select your connection method (IP, RTSP, ONVIF).</p>
          <p>• Enter the required camera credentials and connection details.</p>
          <p>• Position your camera to cover the area you want to monitor.</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Step 3: Configure Basic Safety Rules</h3>
        <div className="pl-6 space-y-2">
          <p>• Go to the <span className="font-medium">Rules</span> section and select <span className="font-medium">Create Rule</span>.</p>
          <p>• Choose from our pre-configured rule templates or create a custom rule.</p>
          <p>• Specify the cameras this rule applies to and set any thresholds or conditions.</p>
          <p>• Save your rule to activate violation detection.</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Step 4: Set Up Notifications</h3>
        <div className="pl-6 space-y-2">
          <p>• Navigate to <span className="font-medium">Settings > Notifications</span>.</p>
          <p>• Choose your preferred notification channels (email, SMS, mobile push).</p>
          <p>• Configure which violations should trigger notifications.</p>
          <p>• Optionally, set up escalation rules for critical violations.</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Step 5: Monitor Your Dashboard</h3>
        <div className="pl-6 space-y-2">
          <p>• Return to the <span className="font-medium">Dashboard</span> to view your safety monitoring in action.</p>
          <p>• Check the <span className="font-medium">Live View</span> to see real-time camera feeds.</p>
          <p>• Review <span className="font-medium">Recent Violations</span> to see detected safety issues.</p>
          <p>• Explore analytics to understand safety trends as data accumulates.</p>
        </div>
      </div>
      
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Explore advanced rule configurations</li>
          <li>Set up integrations with other systems</li>
          <li>Configure automated reporting</li>
          <li>Add more cameras to expand coverage</li>
          <li>Train additional team members on using the platform</li>
        </ul>
      </div>
      
      <div className="flex justify-start mt-8">
        <Button onClick={handleBackToList} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Documentation
        </Button>
      </div>
    </div>
  );

  // Render documentation content based on active doc
  const renderDocContent = () => {
    if (isContentLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      );
    }

    if (activeDoc === "quick-start") {
      return quickStartContent;
    }

    // For other docs, we'll show a placeholder with the title
    const guide = userGuides.find(g => g.id === activeDoc);
    if (!guide) return null;

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">{guide.title}</h2>
          <p className="mb-4">Detailed documentation for this feature is being prepared. Check back soon for the complete guide.</p>
        </div>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">This guide will cover:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Detailed setup instructions</li>
            <li>Best practices and recommendations</li>
            <li>Troubleshooting common issues</li>
            <li>Advanced configuration options</li>
          </ul>
        </div>
        
        <div className="flex justify-start mt-8">
          <Button onClick={handleBackToList} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Documentation
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as={Button} variant="link" onClick={() => navigate('/')}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Documentation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-muted-foreground">
          Find guides, tutorials, and answers to frequently asked questions about InnoSynth
        </p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {!activeDoc ? (
        <Tabs defaultValue="guides" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides">User Guides</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userGuides.map((guide) => (
                <Card key={guide.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-md bg-primary/10">
                        {guide.icon}
                      </div>
                    </div>
                    <CardTitle className="mt-2">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-between"
                      onClick={() => handleViewDocumentation(guide.id)}
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faqs">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Find answers to common questions about InnoSynth and safety monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  Integration guides and API documentation for developers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Getting Started</h3>
                  <p>
                    InnoSynth provides a RESTful API that allows you to integrate our safety monitoring capabilities
                    into your existing systems. The API supports authentication via API keys or OAuth tokens.
                  </p>
                  <div className="p-4 rounded-md bg-muted text-sm">
                    <pre>Base URL: https://api.innosynth.com/v1</pre>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Available Endpoints</h3>
                  <div className="border rounded-md divide-y">
                    <div className="p-4 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="api-method api-method-get">GET</span>
                          <span className="font-mono text-sm">/cameras</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">List all cameras</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                    <div className="p-4 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="api-method api-method-post">POST</span>
                          <span className="font-mono text-sm">/cameras</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">Add a new camera</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                    <div className="p-4 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="api-method api-method-get">GET</span>
                          <span className="font-mono text-sm">/violations</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">List violations</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                    <div className="p-4 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="api-method api-method-put">PUT</span>
                          <span className="font-mono text-sm">/rules/{"{id}"}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">Update safety rule</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                    <div className="p-4 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="api-method api-method-delete">DELETE</span>
                          <span className="font-mono text-sm">/cameras/{"{id}"}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">Remove camera</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  Download Full API Documentation
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="bg-white rounded-lg border p-6">
          {renderDocContent()}
        </div>
      )}
    </div>
  );
};

export default Documentation;
