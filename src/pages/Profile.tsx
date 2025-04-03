
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  LogOut, 
  Lock, 
  Shield, 
  Globe, 
  Clock, 
  CreditCard, 
  FileText, 
  ChevronRight,
  Camera
} from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "@/hooks/useLogout";

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  to?: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ 
  icon, 
  title, 
  description, 
  onClick,
  to
}) => {
  const Component = to ? Link : "div";
  const props = to ? { to } : { onClick };
  
  return (
    // @ts-ignore - The component may be either a Link or a div
    <Component
      className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 cursor-pointer"
      {...props}
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </Component>
  );
};

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  // Language and timezone options
  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "zh", label: "Chinese" },
  ];
  
  const timezones = [
    { value: "utc", label: "UTC (GMT+0)" },
    { value: "est", label: "EST (GMT-5)" },
    { value: "cst", label: "CST (GMT-6)" },
    { value: "mst", label: "MST (GMT-7)" },
    { value: "pst", label: "PST (GMT-8)" },
  ];
  
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedTimezone, setSelectedTimezone] = useState("utc");
  
  // Billing/subscription data
  const [subscriptionData] = useState({
    plan: "Standard",
    billingCycle: "Monthly",
    nextPayment: "2023-11-15",
    amount: "$49.00",
    paymentMethod: "Visa ending in 4242",
    invoices: [
      { id: "INV-2023-10", date: "2023-10-15", amount: "$49.00", status: "Paid" },
      { id: "INV-2023-09", date: "2023-09-15", amount: "$49.00", status: "Paid" },
      { id: "INV-2023-08", date: "2023-08-15", amount: "$49.00", status: "Paid" },
    ]
  });

  const handleSaveProfile = () => {
    toast.success("Profile updated successfully");
  };

  const handleChangePhoto = () => {
    setShowPhotoUpload(true);
  };

  const handlePhotoUpload = () => {
    toast.success("Profile photo updated successfully");
    setShowPhotoUpload(false);
  };

  const handleChangePassword = () => {
    setShowPasswordChange(true);
  };

  const handlePasswordUpdate = () => {
    toast.success("Password updated successfully");
    setShowPasswordChange(false);
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    
    if (!twoFactorEnabled) {
      setShowTwoFactor(true);
    } else {
      toast.success("Two-factor authentication disabled");
    }
  };

  const handleTwoFactorSetup = () => {
    toast.success("Two-factor authentication enabled");
    setShowTwoFactor(false);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    toast.success(`Language changed to ${e.target.options[e.target.selectedIndex].text}`);
  };

  const handleTimezoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimezone(e.target.value);
    toast.success(`Timezone changed to ${e.target.options[e.target.selectedIndex].text}`);
  };

  return (
    <div className="container py-6 space-y-8 max-w-5xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt={name} />
                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" onClick={handleChangePhoto}>
                    Change Photo
                  </Button>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <select 
                        id="language" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                      >
                        {languages.map(lang => (
                          <option key={lang.value} value={lang.value}>{lang.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <select 
                        id="timezone" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={selectedTimezone}
                        onChange={handleTimezoneChange}
                      >
                        {timezones.map(tz => (
                          <option key={tz.value} value={tz.value}>{tz.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleSaveProfile}>Save Changes</Button>
            </CardFooter>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Connected Accounts</h2>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-muted">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0"
                        fill="#555"
                      />
                      <path
                        d="M9.813 11.9992C9.813 10.7893 10.7897 9.8126 11.9997 9.8126C13.2097 9.8126 14.1863 10.7893 14.1863 11.9992C14.1863 13.2093 13.2097 14.1859 11.9997 14.1859C10.7897 14.1859 9.813 13.2093 9.813 11.9992Z"
                        fill="white"
                      />
                      <path
                        d="M8.545 16.7229C9.218 17.3523 9.928 17.8716 10.649 18.2808C10.8754 18.4166 11.3391 18.6932 11.9999 18.6932C12.6606 18.6932 13.1243 18.4166 13.3506 18.2808C14.0718 17.8716 14.7817 17.3523 15.4547 16.7229C16.1647 16.0571 16.7682 15.3143 17.2651 14.5144C17.7322 13.7546 18.1126 12.9108 18.3786 12.0202C18.3786 12.0202 16.4304 12.3087 14.6796 11.3491C14.0617 11.0168 13.5396 10.6036 13.165 10.0061C12.8162 9.45348 12.573 8.81265 12.573 7.99972C12.573 7.54175 12.4317 7.11175 12.1889 6.7582C11.9469 6.40571 11.6218 6.13581 11.2629 5.991C11.5074 6.32656 11.636 6.72255 11.636 7.13946C11.636 7.75701 11.4172 8.23498 11.0813 8.52161C10.7471 8.8071 10.3233 8.92932 9.8932 8.92932C9.08026 8.92932 8.27495 8.55469 7.7546 8.26255C7.19287 7.9456 6.48147 7.46648 6.48147 7.46648C6.71217 8.24984 7.04125 8.98763 7.45368 9.66246C7.8891 10.3812 8.40864 11.0432 8.9962 11.6464C9.58376 12.2496 10.2365 12.7843 10.9229 13.2362C11.2661 13.4637 11.633 13.676 11.9999 13.676C12.3667 13.676 12.7336 13.4637 13.0769 13.2362C13.7632 12.7843 14.416 12.2496 15.0036 11.6464C15.0918 11.5559 15.1787 11.4635 15.2654 11.3697C14.9782 11.0266 14.8318 10.5773 14.8318 10.1182C14.8318 9.50063 15.0506 9.02266 15.3865 8.73603C15.7208 8.45055 16.1445 8.32832 16.5746 8.32832C17.3876 8.32832 18.1929 8.70295 18.7132 8.99509C19.275 9.31204 19.9862 9.79117 19.9862 9.79117C19.7556 8.9278 19.3998 8.11998 18.941 7.38219C18.4656 6.61735 17.8919 5.90517 17.2366 5.27191C16.5636 4.6425 15.8537 4.12324 15.1324 3.71398C14.4113 3.30471 13.6567 3.0054 12.9076 2.81632C12.1331 2.62184 11.3423 2.52093 10.5741 2.52093C9.54243 2.52093 8.50847 2.69422 7.5521 3.06995C6.58033 3.45109 5.68762 4.018 4.93216 4.72598C4.17671 5.43397 3.56946 6.27711 3.14164 7.21351C2.73937 8.08845 2.51077 9.03692 2.51077 9.99909C2.51077 10.9624 2.73937 11.9109 3.14164 12.7858C3.56946 13.7221 4.17671 14.5653 4.93216 15.2733C5.68762 15.9813 6.58033 16.5471 7.5521 16.9293C8.50847 17.305 9.54243 17.4782 10.5741 17.4782C11.6058 17.4782 12.6398 17.305 13.5961 16.9293C14.0319 16.7576 14.4563 16.5529 14.8614 16.3184C14.4172 15.9855 13.9642 15.6401 13.5083 15.2711C13.0524 14.9022 12.5954 14.52 12.1581 14.108C11.7744 14.3723 11.383 14.5298 10.9996 14.5298C10.6162 14.5298 10.2248 14.3723 9.84118 14.108C9.20377 13.6961 8.5956 13.2069 8.05618 12.6507C7.51677 12.0945 7.0332 11.4794 6.63635 10.8173C6.25939 10.1865 5.9622 9.5114 5.7593 8.79899C5.58758 8.18802 5.49507 7.56278 5.49507 6.93312C5.49507 5.98543 5.7225 5.04125 6.13018 4.17608C6.51366 3.37097 7.04674 2.64889 7.69065 2.04776C7.00204 2.45816 6.33433 2.94727 5.74472 3.50469C4.34699 4.80161 3.32963 6.41498 2.851 8.18024C2.37453 9.94096 2.42368 11.8052 2.98978 13.5352C3.55588 15.2651 4.6139 16.778 5.99947 17.8945C6.73246 18.5 7.56126 19.0033 8.46374 19.372C8.90593 19.5437 9.36006 19.6834 9.82191 19.7898C10.2823 19.8962 10.7539 19.9693 11.2335 19.9979C11.4856 20.0133 11.7431 20.0202 11.9996 20.0202C13.1175 20.0202 14.2343 19.8054 15.2874 19.372C16.19 19.0033 17.0187 18.5 17.7517 17.8945C19.1373 16.778 20.1953 15.2651 20.7614 13.5352C21.3275 11.8052 21.3756 9.94096 20.8991 8.18024C20.4215 6.40943 19.4052 4.80161 18.0064 3.50469C17.2055 2.77133 16.27 2.18137 15.2432 1.76669C14.2186 1.35313 13.1118 1.13332 12.0038 1.13332C10.8936 1.13332 9.78565 1.35313 8.76104 1.76669C7.73529 2.18022 6.79867 2.77133 5.99947 3.50469C5.19913 4.23804 4.56392 5.10993 4.12957 6.07756C3.70186 7.03485 3.47 8.07996 3.47 9.13096C3.47 10.1831 3.70186 11.2282 4.12957 12.1855C4.56392 13.1531 5.19913 14.025 5.99947 14.7583C6.79867 15.4917 7.73529 16.0828 8.76104 16.4963C9.03173 16.6013 9.30816 16.6922 9.58919 16.7669C9.24074 16.7553 8.90151 16.7414 8.545 16.7229Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      Connected to github.com/johndoe
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Disconnect</Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-muted">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#0A66C2"
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      Not connected
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Legal & Policies</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              <SettingsItem
                icon={<FileText className="h-5 w-5" />}
                title="Terms of Service"
                description="Review our terms and conditions"
                to="/terms"
              />
              
              <SettingsItem
                icon={<Shield className="h-5 w-5" />}
                title="Privacy Policy"
                description="Learn how we handle your data"
                to="/privacy"
              />
              
              <SettingsItem
                icon={<FileText className="h-5 w-5" />}
                title="Data Rights"
                description="Manage your data and rights"
                to="/data-rights"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              variant="destructive" 
              onClick={logout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password & Authentication</CardTitle>
              <CardDescription>
                Manage your password and authentication methods.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 cursor-pointer"
                  onClick={handleChangePassword}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Change Password</h3>
                      <p className="text-sm text-muted-foreground">
                        Update your password for better security
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">
                        {twoFactorEnabled 
                          ? "Two-factor authentication is enabled" 
                          : "Add an extra layer of security to your account"}
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={twoFactorEnabled} 
                    onCheckedChange={handleTwoFactorToggle} 
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Login Sessions</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your active login sessions
                      </p>
                    </div>
                  </div>
                  <Badge>2 Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Session History</CardTitle>
              <CardDescription>
                View and manage your recent login sessions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-accent/50">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-medium">Current Session</h3>
                      <p className="text-sm text-muted-foreground">
                        Chrome on Windows • 192.168.1.1
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Started 2 hours ago
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-medium">Mobile App</h3>
                      <p className="text-sm text-muted-foreground">
                        iPhone 13 • 192.168.1.2
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Started 1 day ago
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Logout</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-medium">Firefox</h3>
                      <p className="text-sm text-muted-foreground">
                        Firefox on MacOS • 192.168.1.3
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">Expired</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Logout From All Devices
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Details</CardTitle>
              <CardDescription>
                Manage your subscription and billing information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="font-medium">Current Plan</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-primary">{subscriptionData.plan}</Badge>
                      <span className="text-sm text-muted-foreground">{subscriptionData.billingCycle}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Up to 15 cameras and 1,000 violations per day.
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="text-xl font-bold">{subscriptionData.amount}</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                    <Button 
                      size="sm" 
                      className="mt-2"
                      onClick={() => navigate("/pricing")}
                    >
                      Change Plan
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 p-4 border rounded-lg">
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">Next Payment</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {subscriptionData.nextPayment}
                    </p>
                  </div>
                  <div className="text-lg font-semibold">{subscriptionData.amount}</div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 p-4 border rounded-lg">
                  <div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">Payment Method</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {subscriptionData.paymentMethod}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>
                View your past invoices and payment history.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subscriptionData.invoices.map((invoice, index) => (
                  <div 
                    key={invoice.id}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">{invoice.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        {invoice.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <Badge variant={invoice.status === "Paid" ? "outline" : "default"}>
                        {invoice.status}
                      </Badge>
                      <div className="font-medium">{invoice.amount}</div>
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Invoices
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Photo upload dialog */}
      {showPhotoUpload && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Profile Photo</h2>
            
            <div className="border-2 border-dashed rounded-lg p-10 text-center mb-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <Camera className="h-10 w-10 text-muted-foreground" />
                <p className="text-lg font-medium">
                  Drag & drop or click to upload
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports JPG, PNG or GIF up to 5MB
                </p>
                <Input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById("photo-upload")?.click()}
                >
                  Select File
                </Button>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowPhotoUpload(false)}>
                Cancel
              </Button>
              <Button onClick={handlePhotoUpload}>
                Upload
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Password change dialog */}
      {showPasswordChange && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Change Password</h2>
            
            <div className="space-y-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input 
                  id="current-password" 
                  type="password" 
                  placeholder="Enter your current password"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input 
                  id="new-password" 
                  type="password" 
                  placeholder="Enter your new password"
                />
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters with a mix of letters, numbers & symbols.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="Confirm your new password"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowPasswordChange(false)}>
                Cancel
              </Button>
              <Button onClick={handlePasswordUpdate}>
                Update Password
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Two-factor authentication dialog */}
      {showTwoFactor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Set Up Two-Factor Authentication</h2>
            
            <div className="space-y-4 mb-4">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="w-48 h-48 bg-muted flex items-center justify-center">
                    <p className="text-center text-muted-foreground">QR Code here</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-center">
                Scan this QR code with your authenticator app, or enter the code manually:
              </p>
              
              <div className="bg-muted p-2 rounded text-center font-mono">
                ABCD-EFGH-IJKL-MNOP
              </div>
              
              <div className="space-y-2 mt-4">
                <Label htmlFor="verification-code">Enter Verification Code</Label>
                <Input 
                  id="verification-code" 
                  placeholder="Enter the 6-digit code from your app"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowTwoFactor(false)}>
                Cancel
              </Button>
              <Button onClick={handleTwoFactorSetup}>
                Verify & Enable
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
