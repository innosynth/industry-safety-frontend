
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Terms: React.FC = () => {
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
          <CardTitle>Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the InnoSynth Safety Vision platform ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
            
            <h2>2. Description of Service</h2>
            <p>InnoSynth provides a safety monitoring and compliance platform designed to enhance workplace safety through video monitoring, AI-powered detection of safety violations, and detailed analytics.</p>
            
            <h2>3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
            
            <h2>4. Use of Service</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Collect or harvest any information from the Service not intended for public access</li>
            </ul>
            
            <h2>5. Privacy</h2>
            <p>Our Privacy Policy explains how we collect, use, and protect your information. By using our Service, you agree to our Privacy Policy.</p>
            
            <h2>6. Content Ownership</h2>
            <p>InnoSynth does not claim ownership of your content. However, you grant us a license to use, store, and share your content as necessary to provide the Service.</p>
            
            <h2>7. Service Modifications</h2>
            <p>We reserve the right to modify or discontinue, temporarily or permanently, the Service with or without notice.</p>
            
            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, InnoSynth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.</p>
            
            <h2>9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the state of Delaware, without regard to its conflict of law provisions.</p>
            
            <h2>10. Changes to Terms</h2>
            <p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service following any changes constitutes your acceptance of the new Terms.</p>
            
            <p>Last updated: May 25, 2023</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;
