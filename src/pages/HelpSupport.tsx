
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  LifeBuoy, 
  MessageSquare, 
  Phone, 
  Mail, 
  FileQuestion, 
  HelpCircle, 
  Clock, 
  ChevronRight, 
  Search,
  CheckCircle,
  Video
} from 'lucide-react';

const HelpSupport: React.FC = () => {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support ticket submitted successfully!");
    setTicketSubject('');
    setTicketDescription('');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Help & Support</h1>
      </div>
      
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">How can we help you today?</h2>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search for help articles, videos, or FAQs..." 
              className="h-12 pl-10 pr-4 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <HelpCircle className="absolute right-10 top-1/2 transform -translate-y-1/2 h-24 w-24 opacity-10" />
      </div>
      
      <Tabs defaultValue="help-center">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="help-center">Help Center</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="ticket">Submit Ticket</TabsTrigger>
        </TabsList>
        
        <TabsContent value="help-center" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <FileQuestion className="h-5 w-5 mr-2 text-blue-500" />
                  Quick Start Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Getting started with InnoSynth
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Setting up your first camera
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Configuring safety zones
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Understanding detection alerts
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-blue-500">
                  View All Guides
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Video className="h-5 w-5 mr-2 text-blue-500" />
                  Video Tutorials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Dashboard overview walkthrough
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Advanced camera configuration
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Creating custom reports
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    API integration guide
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-blue-500">
                  View All Videos
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-500" />
                  Troubleshooting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Camera connection issues
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Detection not working properly
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Missing notifications
                  </li>
                  <li className="flex items-center hover:text-blue-500 cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    System performance optimization
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-blue-500">
                  View All Solutions
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">What types of cameras are supported?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    InnoSynth supports IP cameras with RTSP streams, ONVIF-compliant cameras, and various streaming formats including HLS, DASH, and RTMP. For optimal performance, we recommend cameras with at least 720p resolution.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">How do I add a new tenant?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Navigate to the Tenants section, click "Add New Tenant", and fill in the required information. You can then assign cameras, users, and permissions to the new tenant through their tenant profile.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Can I customize detection alerts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can customize alerts based on severity, zone, time of day, and more. Go to Settings &gt; Notifications to configure your alert preferences and notification channels.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">How is my data secured?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    InnoSynth uses end-to-end encryption for data in transit and AES-256 encryption for data at rest. We implement role-based access control and comply with global data protection regulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contact" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Our support team is available to help you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">
                      +1 (800) 555-0123
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Available Monday-Friday, 9 AM - 6 PM Eastern Time
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-sm text-muted-foreground">
                      support@innosynth.example.com
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Expect a response within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Available on our website
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Instant support during business hours
                    </p>
                    <Button size="sm" className="mt-2">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Support Hours</CardTitle>
                <CardDescription>
                  When you can reach our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-blue-500" />
                    <div className="flex-1">
                      <h3 className="font-medium">Standard Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday-Friday, 9 AM - 6 PM Eastern Time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-blue-500" />
                    <div className="flex-1">
                      <h3 className="font-medium">Emergency Support</h3>
                      <p className="text-sm text-muted-foreground">
                        24/7 for critical issues (Premium plans only)
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-md mt-4">
                    <h3 className="font-medium text-blue-700 dark:text-blue-400 mb-2">
                      Priority Support
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Upgrade to a premium plan for faster response times and dedicated support specialists.
                    </p>
                    <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      View Premium Plans
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="ticket" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit a Support Ticket</CardTitle>
              <CardDescription>
                Fill out the form below to get help with your issue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ticket-subject">Subject</Label>
                  <Input 
                    id="ticket-subject" 
                    placeholder="Briefly describe your issue"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ticket-type">Issue Type</Label>
                  <select 
                    id="ticket-type"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="technical">Technical Support</option>
                    <option value="account">Account Issues</option>
                    <option value="billing">Billing Questions</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ticket-priority">Priority</Label>
                  <select 
                    id="ticket-priority"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="low">Low - General question</option>
                    <option value="medium">Medium - System functioning but with issues</option>
                    <option value="high">High - Critical functionality affected</option>
                    <option value="urgent">Urgent - System completely down</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ticket-description">Description</Label>
                  <Textarea 
                    id="ticket-description" 
                    placeholder="Please provide detailed information about your issue..."
                    rows={5}
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ticket-attachment">Attachments (optional)</Label>
                  <Input id="ticket-attachment" type="file" multiple />
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload screenshots or related files (max 10MB each)
                  </p>
                </div>
                
                <Button type="submit" className="w-full">
                  <LifeBuoy className="h-4 w-4 mr-2" />
                  Submit Ticket
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <p className="text-sm text-muted-foreground">
                Expected response time: <span className="font-medium">24 hours</span>
              </p>
              <Button variant="ghost" size="sm">
                Check Ticket Status
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpSupport;
