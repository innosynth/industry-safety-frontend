
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, ClipboardCheck, FileText, HelpCircle, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataRights: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Profile
        </Button>
        <h1 className="text-2xl font-bold">Your Data Rights</h1>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Privacy and Data Rights Policy</CardTitle>
            <CardDescription>
              Our commitment to protecting your personal information and respecting your privacy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At InnoSynth, we take your privacy seriously. This page outlines the rights you have regarding your personal data
              and how you can exercise these rights.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Your Rights</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Access</h4>
                  <p className="text-sm text-muted-foreground">
                    You have the right to request a copy of the personal information we hold about you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Rectification</h4>
                  <p className="text-sm text-muted-foreground">
                    You can request the correction of any inaccurate personal data we hold about you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ClipboardCheck className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Erasure (Right to be Forgotten)</h4>
                  <p className="text-sm text-muted-foreground">
                    In certain circumstances, you have the right to request that we delete your personal data.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Restrict Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    You can request that we restrict the processing of your personal data in certain circumstances.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Right to Data Portability</h4>
                  <p className="text-sm text-muted-foreground">
                    You have the right to receive your personal data in a structured, commonly used and machine-readable format.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Exercise Your Rights</CardTitle>
            <CardDescription>
              How to submit a request regarding your data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              To exercise any of your rights regarding your personal data, please submit a request through one of the following methods:
            </p>
            
            <div className="space-y-2">
              <p className="font-medium">Email:</p>
              <p className="text-sm text-muted-foreground">privacy@innosynth.com</p>
              
              <p className="font-medium mt-2">Mail:</p>
              <p className="text-sm text-muted-foreground">
                InnoSynth Privacy Office<br />
                123 Tech Street<br />
                San Francisco, CA 94105<br />
                United States
              </p>
              
              <p className="font-medium mt-2">Online Form:</p>
              <p className="text-sm text-muted-foreground">
                You can also submit a request using our <a href="#" className="text-primary hover:underline">online form</a>.
              </p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="text-sm">
                <strong>Response Time:</strong> We will respond to your request within 30 days. If we require more time, we will inform you of the reason and extension period in writing.
              </p>
            </div>
            
            <Button className="mt-4">Submit Data Request</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataRights;
