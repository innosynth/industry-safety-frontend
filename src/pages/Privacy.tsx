
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Privacy: React.FC = () => {
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
          <CardTitle>Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>At InnoSynth, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Safety Vision platform ("Service").</p>
            
            <h2>2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Service, including:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, telephone number, company information, and any other information you provide to us.</li>
              <li><strong>Usage Data:</strong> Information about how you use our Service, including log files, device information, and analytics data.</li>
              <li><strong>Video and Image Data:</strong> Our Service processes video feeds for safety monitoring purposes. This may include footage of workplace environments and personnel.</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process and complete transactions</li>
              <li>Send administrative information</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Provide safety monitoring and violation detection services</li>
            </ul>
            
            <h2>4. Data Retention</h2>
            <p>We retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
            
            <h2>6. Third-Party Services</h2>
            <p>Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of such third parties.</p>
            
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            
            <h2>8. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
            
            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@innosynth.example.com.</p>
            
            <p>Last updated: May 25, 2023</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;
