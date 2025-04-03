
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
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { User, Mail, Phone, Building, Shield, Save, KeySquare, Check, UploadCloud, Link, Clock } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

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

  // Dialog states
  const [photoDialogOpen, setPhotoDialogOpen] = useState(false);
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [twoFactorDialogOpen, setTwoFactorDialogOpen] = useState(false);
  const [sessionsDialogOpen, setSessionsDialogOpen] = useState(false);
  const [languageSelection, setLanguageSelection] = useState("english");
  const [timezoneSelection, setTimezoneSelection] = useState("utc-5");

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

  const handlePhotoUpload = () => {
    setPhotoDialogOpen(false);
    toast.success("Profile photo updated successfully");
  };

  const handlePasswordChange = () => {
    setPasswordDialogOpen(false);
    toast.success("Password reset email sent to your registered email address");
  };

  const handleTwoFactorSetup = () => {
    setTwoFactorDialogOpen(false);
    toast.success("Two-factor authentication has been setup successfully");
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
              <Button variant="outline" size="sm" onClick={() => setPhotoDialogOpen(true)}>
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
                  <Button variant="outline" onClick={() => setPasswordDialogOpen(true)}>
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
                  <Button 
                    variant="outline"
                    onClick={() => setTwoFactorDialogOpen(true)}
                  >Setup</Button>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Login Sessions</h3>
                    <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => setSessionsDialogOpen(true)}
                  >View</Button>
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
                  <Select
                    value={languageSelection}
                    onValueChange={setLanguageSelection}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Timezone</h3>
                    <p className="text-sm text-muted-foreground">Set your local timezone</p>
                  </div>
                  <Select
                    value={timezoneSelection}
                    onValueChange={setTimezoneSelection}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">UTC-08:00</SelectItem>
                      <SelectItem value="utc-7">UTC-07:00</SelectItem>
                      <SelectItem value="utc-6">UTC-06:00</SelectItem>
                      <SelectItem value="utc-5">UTC-05:00</SelectItem>
                      <SelectItem value="utc-4">UTC-04:00</SelectItem>
                      <SelectItem value="utc+0">UTC+00:00</SelectItem>
                      <SelectItem value="utc+1">UTC+01:00</SelectItem>
                      <SelectItem value="utc+2">UTC+02:00</SelectItem>
                      <SelectItem value="utc+3">UTC+03:00</SelectItem>
                      <SelectItem value="utc+5.5">UTC+05:30</SelectItem>
                      <SelectItem value="utc+8">UTC+08:00</SelectItem>
                      <SelectItem value="utc+9">UTC+09:00</SelectItem>
                      <SelectItem value="utc+10">UTC+10:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t p-4 space-y-2">
              <h3 className="text-sm font-medium">Legal & Policies</h3>
              <div className="flex flex-col w-full space-y-2 text-sm">
                <RouterLink to="/terms" className="text-blue-500 hover:underline flex items-center">
                  <Link className="h-4 w-4 mr-2" />
                  Terms & Conditions
                </RouterLink>
                <RouterLink to="/privacy" className="text-blue-500 hover:underline flex items-center">
                  <Link className="h-4 w-4 mr-2" />
                  Privacy Policy
                </RouterLink>
                <RouterLink to="/data-rights" className="text-blue-500 hover:underline flex items-center">
                  <Link className="h-4 w-4 mr-2" />
                  Data Rights & Information
                </RouterLink>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Profile Photo Dialog */}
      <Dialog open={photoDialogOpen} onOpenChange={setPhotoDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile Photo</DialogTitle>
            <DialogDescription>
              Choose a new profile photo to upload.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300">
                <UploadCloud className="h-12 w-12 text-gray-400" />
              </div>
              <Input type="file" className="max-w-xs" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handlePhotoUpload}>
              Upload Photo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Password Change Dialog */}
      <Dialog open={passwordDialogOpen} onOpenChange={setPasswordDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Update your password to secure your account.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handlePasswordChange}>
              Update Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Two-Factor Authentication Dialog */}
      <Dialog open={twoFactorDialogOpen} onOpenChange={setTwoFactorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Setup Two-Factor Authentication</DialogTitle>
            <DialogDescription>
              Add an extra layer of security to your account.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=otpauth://totp/InnoSynth:john.doe@example.com?secret=HXDMVJECJJWSRB3HWIZR4IFUGFTMXBOZ&issuer=InnoSynth" 
                    alt="QR Code"
                    className="h-40 w-40"
                  />
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Scan this QR code with your authenticator app
              </p>
              <div className="space-y-2">
                <Label htmlFor="verification-code">Verification Code</Label>
                <Input id="verification-code" placeholder="Enter 6-digit code" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleTwoFactorSetup}>
              Verify and Enable
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Login Sessions Dialog */}
      <Dialog open={sessionsDialogOpen} onOpenChange={setSessionsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Active Sessions</DialogTitle>
            <DialogDescription>
              View and manage your active login sessions.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2 max-h-[60vh] overflow-y-auto">
            {[
              { device: "Chrome on Windows", location: "New York, USA", time: "Current session", current: true },
              { device: "Safari on iPhone", location: "Boston, USA", time: "2 hours ago" },
              { device: "Firefox on MacOS", location: "San Francisco, USA", time: "Yesterday, 3:42 PM" },
              { device: "Edge on Windows", location: "Dallas, USA", time: "May 15, 2023, 10:30 AM" }
            ].map((session, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-md">
                <div className="space-y-1">
                  <div className="font-medium flex items-center">
                    {session.device}
                    {session.current && (
                      <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Current</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{session.location}</div>
                  <div className="text-xs flex items-center text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {session.time}
                  </div>
                </div>
                {!session.current && (
                  <Button variant="outline" size="sm" className="text-red-500">
                    Logout
                  </Button>
                )}
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" className="w-full">
              Logout from all other devices
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
