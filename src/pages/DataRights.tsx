
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronLeft, Download, UploadCloud, Trash2 } from 'lucide-react';
import { toast } from "sonner";

const DataRights: React.FC = () => {
  const handleDataRequest = (action: string) => {
    toast.success(`Your ${action} request has been submitted. We'll process it shortly.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link to="/profile" className="flex items-center text-sm text-blue-500 hover:underline">
          <ChevronLeft className="h-4 w-4" />
          Back to Profile
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Data Rights</CardTitle>
          <CardDescription>
            Understand and manage how your data is used within InnoSynth
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose max-w-none mb-6">
            <h2>Your Rights Under Data Protection Laws</h2>
            <p>
              Depending on your location, you may have various rights under data protection laws such as GDPR, CCPA, and others. 
              InnoSynth is committed to respecting these rights and providing you with control over your personal data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Download className="h-5 w-5 mr-2 text-blue-500" />
                  Data Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Download a copy of all your personal data that we have collected.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleDataRequest('data access')}
                >
                  Request Data
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <UploadCloud className="h-5 w-5 mr-2 text-green-500" />
                  Data Portability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Request your data in a machine-readable format to transfer elsewhere.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleDataRequest('data portability')}
                >
                  Export Data
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Trash2 className="h-5 w-5 mr-2 text-red-500" />
                  Data Deletion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Request deletion of your personal data from our systems.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full text-red-500 hover:text-red-500"
                  onClick={() => handleDataRequest('data deletion')}
                >
                  Delete My Data
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Additional Rights</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium">Right to Rectification:</span>
                  <p className="text-sm text-muted-foreground">
                    You can correct inaccurate personal data by updating your profile information.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium">Right to Restriction of Processing:</span>
                  <p className="text-sm text-muted-foreground">
                    You can request we limit how we use your data in certain circumstances.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <div>
                  <span className="font-medium">Right to Object:</span>
                  <p className="text-sm text-muted-foreground">
                    You can object to our processing of your personal data in certain cases.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Contact Our Data Protection Team</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you have any questions about your data rights or wish to submit a request not covered above,
              please contact our data protection team.
            </p>
            <Button variant="default">
              Contact Data Team
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataRights;
