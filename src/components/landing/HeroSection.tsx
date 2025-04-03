
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRight, Check, Play } from "lucide-react";

const HeroSection: React.FC = () => {
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
  );
};

export default HeroSection;
