
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { toast } from "sonner";
import { User, Mail, Phone, Building, Shield, Save, KeySquare } from "lucide-react";

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 (555) 123-4567",
    company: "Safety Vision Corp.",
    role: "Administrator",
    department: "Safety & Compliance"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    toast.success("Profile information updated successfully");
  };

  const handleChangePassword = () => {
    toast.success("Password reset email sent to your registered email address");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Profile</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Manage your personal information and contact details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-3 mb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback>{profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-medium">{profileData.firstName} {profileData.lastName}</h2>
                <p className="text-sm text-muted-foreground">{profileData.role}</p>
              </div>
              <Button variant="outline" size="sm">
                Change Photo
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="flex">
                    <User className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="flex">
                    <User className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="flex">
                  <Mail className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <div className="flex">
                  <Phone className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                  <Input 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <div className="flex">
                  <Building className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                  <Input 
                    id="company" 
                    name="company"
                    value={profileData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <div className="flex">
                  <Shield className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                  <Input 
                    id="department" 
                    name="department"
                    value={profileData.department}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <Button onClick={handleSaveProfile} className="w-full mt-4">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your password and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-muted-foreground">Last changed 2 months ago</p>
                  </div>
                  <Button variant="outline" onClick={handleChangePassword}>
                    <KeySquare className="h-4 w-4 mr-2" />
                    Change
                  </Button>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline">Setup</Button>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Login Sessions</h3>
                    <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                  </div>
                  <Button variant="outline">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Manage your notifications and app preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                  <Button variant="outline">English</Button>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Timezone</h3>
                    <p className="text-sm text-muted-foreground">Set your local timezone</p>
                  </div>
                  <Button variant="outline">UTC-05:00</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
