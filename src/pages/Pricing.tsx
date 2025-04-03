
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface PricingTierProps {
  title: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: string[];
  limitations: string[];
  buttonText: string;
  popular?: boolean;
  onSelectPlan: () => void;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  limitations,
  buttonText,
  popular,
  onSelectPlan,
}) => {
  return (
    <Card className={`flex flex-col ${popular ? "border-primary shadow-lg" : "border"}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-1.5">{description}</CardDescription>
          </div>
          {popular && <Badge className="bg-primary">Popular</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6">
          <div className="text-3xl font-bold">${price.monthly}</div>
          <div className="text-sm text-muted-foreground">per month</div>
          <div className="text-sm text-muted-foreground mt-1">
            ${price.annually} billed annually
          </div>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {limitations.map((limitation, i) => (
            <li key={i} className="flex items-start text-muted-foreground">
              <AlertCircle className="h-4 w-4 text-muted-foreground mr-2 mt-1 shrink-0" />
              <span>{limitation}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 mt-auto">
        <Button 
          onClick={onSelectPlan} 
          className="w-full" 
          variant={popular ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annually">("monthly");
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    toast.success(`Selected ${planName} plan with ${billingCycle} billing cycle`);
    // In a real application, this would redirect to a checkout page or show a payment modal
    navigate("/profile");
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Choose Your Plan</h1>
        <p className="text-lg text-muted-foreground">
          Select the perfect plan for your safety monitoring needs
        </p>
        
        <div className="mt-6 inline-flex items-center rounded-full border p-1 bg-muted">
          <Button
            variant={billingCycle === "monthly" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={billingCycle === "annually" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBillingCycle("annually")}
          >
            Annually
            <Badge variant="outline" className="ml-2 bg-primary/20 text-primary">
              Save 20%
            </Badge>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PricingTier
          title="Free"
          price={{
            monthly: 0,
            annually: 0,
          }}
          description="Basic monitoring for small installations"
          features={[
            "1 camera connection",
            "5 violations per day",
            "3-day data retention",
            "Basic reports",
            "Email support"
          ]}
          limitations={[
            "No API access",
            "Limited analytics",
          ]}
          buttonText="Start Free"
          onSelectPlan={() => handleSelectPlan("Free")}
        />
        
        <PricingTier
          title="Standard"
          price={{
            monthly: 49,
            annually: 39,
          }}
          description="Complete solution for medium installations"
          features={[
            "Up to 15 cameras",
            "1,000 violations per day",
            "30-day data retention",
            "Advanced reporting",
            "API access",
            "Custom violation rules",
            "Priority email & chat support"
          ]}
          limitations={[
            "Limited custom integrations"
          ]}
          buttonText="Get Started"
          popular={true}
          onSelectPlan={() => handleSelectPlan("Standard")}
        />
        
        <PricingTier
          title="Enterprise"
          price={{
            monthly: 149,
            annually: 119,
          }}
          description="Complete solution for large installations"
          features={[
            "Unlimited cameras",
            "Unlimited violations per day",
            "90-day data retention",
            "Advanced analytics dashboard",
            "Custom integrations",
            "Dedicated account manager",
            "24/7 phone, email & chat support",
            "SLA guarantees"
          ]}
          limitations={[]}
          buttonText="Contact Sales"
          onSelectPlan={() => handleSelectPlan("Enterprise")}
        />
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">All plans include:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium">Real-time monitoring</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium">Automated alerts</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium">Mobile app access</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium">Regular updates</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">Need a custom solution?</h2>
        <p className="mb-4">Contact our sales team for a tailored package that fits your specific requirements.</p>
        <Button variant="outline">Contact Sales</Button>
      </div>
    </div>
  );
};

export default Pricing;
