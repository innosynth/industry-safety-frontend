
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular = false, 
  delay = 0 
}) => (
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

export default PricingCard;
