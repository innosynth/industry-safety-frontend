
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  Shield, 
  Check, 
  ArrowRight, 
  Play, 
  Settings, 
  BarChart3, 
  CircleCheck, 
  CircleHelp,
  Mail,
  Lock,
  Eye,
  BadgeCheck,
  Code,
  Bell,
  Zap
} from "lucide-react";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    toast.success("Sign in successful");
    navigate("/");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Account created successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-6 w-6 text-primary mr-2" />
          <span className="text-xl font-bold">InnoSynth</span>
        </div>
        <div className="space-x-4 hidden sm:flex">
          <Button variant="outline" asChild>
            <Link to="/pricing">Pricing</Link>
          </Button>
          <Button onClick={() => navigate("/landing")}>Log In</Button>
        </div>
        <Button className="sm:hidden" variant="outline" size="icon" asChild>
          <Link to="/pricing">
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              AI-Powered Safety Monitoring for Industrial Sites
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mt-4">
              InnoSynth helps you ensure workplace safety compliance with real-time violation detection, reporting, and analytics.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button size="lg" className="gap-2 relative overflow-hidden group">
              <span className="absolute -inset-full top-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 rounded-full blur-md"></span>
              <span className="relative">Get Started</span>
              <ArrowRight className="h-4 w-4 relative transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Watch Demo <Play className="h-4 w-4" />
            </Button>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Real-time monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Customizable alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Advanced analytics</span>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-md w-full animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Card className="border shadow-lg transition-transform duration-300 hover:translate-y-[-4px]">
            <Tabs defaultValue="sign-in">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sign-in">
                <form onSubmit={handleSignIn}>
                  <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                      Sign in to your account to continue
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">Sign In</Button>
                  </CardFooter>
                </form>
              </TabsContent>
              
              <TabsContent value="sign-up">
                <form onSubmit={handleSignUp}>
                  <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                      Enter your information to get started
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-email">Email</Label>
                      <Input 
                        id="new-email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Password</Label>
                      <Input 
                        id="new-password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full">Create Account</Button>
                    <p className="text-xs text-center text-muted-foreground">
                      By signing up, you agree to our{" "}
                      <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      {/* Certification Badges Section */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certified Excellence in Security & Compliance</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We meet the highest standards in data security, privacy protection, and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <BadgeCheck className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Breach Management</h3>
              <p className="text-muted-foreground mb-4">Certified processes for preventing, detecting, and responding to data breaches.</p>
              <div className="mt-auto">
                <Badge className="bg-primary" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sensitive Data Intelligence</h3>
              <p className="text-muted-foreground mb-4">Advanced systems for identifying, classifying, and protecting sensitive information.</p>
              <div className="mt-auto">
                <Badge className="bg-primary" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Regulatory Compliance</h3>
              <p className="text-muted-foreground mb-4">Full adherence to global AI governance frameworks and ethical standards.</p>
              <div className="mt-auto">
                <Badge className="bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes safety monitoring simple, efficient, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="relative z-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full border-l-4 border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Connect Your Cameras</h3>
              <p className="text-muted-foreground">
                Easily integrate our system with your existing camera infrastructure, no additional hardware required.
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/3 left-1/4 w-1/2 border-t-2 border-dashed border-primary/30 z-0"></div>

          {/* Step 2 */}
          <div className="relative z-10 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full border-l-4 border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Monitors & Analyzes</h3>
              <p className="text-muted-foreground">
                Our AI technology continuously monitors footage, detecting safety violations in real-time with high accuracy.
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/3 right-1/4 w-1/2 border-t-2 border-dashed border-primary/30 z-0"></div>

          {/* Step 3 */}
          <div className="relative z-10 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full border-l-4 border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Alerts & Insights</h3>
              <p className="text-muted-foreground">
                Receive immediate notifications for violations and access comprehensive analytics to improve safety.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gap-2">
            See It In Action <Play className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive solution offers everything you need to ensure workplace safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Eye className="h-6 w-6 text-primary" />}
              title="Real-time Monitoring"
              description="24/7 surveillance with instant violation detection across all your camera feeds."
              delay={100}
            />
            
            <FeatureCard 
              icon={<Bell className="h-6 w-6 text-primary" />}
              title="Smart Alerts"
              description="Customizable notifications via email, SMS, or in-app alerts when violations occur."
              delay={200}
            />
            
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6 text-primary" />}
              title="Advanced Analytics"
              description="Comprehensive dashboards with trends, hotspots, and compliance metrics."
              delay={300}
            />
            
            <FeatureCard 
              icon={<Settings className="h-6 w-6 text-primary" />}
              title="Custom Rules Engine"
              description="Define and configure safety rules specific to your environment and requirements."
              delay={400}
            />
            
            <FeatureCard 
              icon={<CircleCheck className="h-6 w-6 text-primary" />}
              title="Compliance Reporting"
              description="Automated reports for regulatory compliance and safety audits."
              delay={500}
            />
            
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="AI-Powered Predictions"
              description="Identify potential safety issues before they become problems."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your safety needs and budget.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link to="/pricing">View All Pricing Plans</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Free"
            price="0"
            description="For individuals or small operations"
            features={["1 camera connection", "5 violations per day", "3-day data retention", "Basic email support"]}
            buttonText="Start Free"
            delay={100}
          />
          
          <PricingCard
            title="Standard"
            price="49"
            description="For growing businesses"
            features={["Up to 15 cameras", "1,000 violations per day", "30-day data retention", "Advanced reporting", "Priority support"]}
            buttonText="Get Started"
            popular
            delay={200}
          />
          
          <PricingCard
            title="Enterprise"
            price="149"
            description="For large organizations"
            features={["Unlimited cameras", "Unlimited violations", "90-day data retention", "Custom integrations", "Dedicated account manager"]}
            buttonText="Contact Sales"
            delay={300}
          />
        </div>
      </section>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <span className="text-xl font-bold">InnoSynth</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered safety monitoring platform for industrial environments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">How It Works</Link></li>
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">Examples</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">API</Link></li>
                <li><Link to="/help-support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
                <li><Link to="/help-support" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} InnoSynth. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/data-rights" className="text-sm text-muted-foreground hover:text-foreground">
                Data Rights
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <div 
    className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

// Badge Component
const Badge = ({ className }) => (
  <div className={`py-1 px-3 rounded-full text-white text-xs font-medium ${className}`}>
    Certified
  </div>
);

// Pricing Card Component
const PricingCard = ({ title, price, description, features, buttonText, popular = false, delay = 0 }) => (
  <div 
    className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in ${popular ? 'border-2 border-primary transform scale-105' : 'border'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`px-6 py-8 bg-white ${popular ? 'bg-primary/5' : ''}`}>
      {popular && (
        <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full inline-block mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-4xl font-extrabold">${price}</span>
        <span className="ml-1 text-gray-500">/month</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
    <div className="px-6 py-6 bg-white border-t">
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full mt-6 ${popular ? '' : 'bg-white text-primary border border-primary hover:bg-primary/10'}`}
        variant={popular ? 'default' : 'outline'}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

export default Landing;
