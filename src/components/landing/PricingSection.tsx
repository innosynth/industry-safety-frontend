
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";
import SectionTitle from "./SectionTitle";

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "0",
      description: "For individuals or small operations",
      features: ["1 camera connection", "5 violations per day", "3-day data retention", "Basic email support"],
      buttonText: "Start Free",
      popular: false,
      delay: 100
    },
    {
      title: "Standard",
      price: "49",
      description: "For growing businesses",
      features: ["Up to 15 cameras", "1,000 violations per day", "30-day data retention", "Advanced reporting", "Priority support"],
      buttonText: "Get Started",
      popular: true,
      delay: 200
    },
    {
      title: "Enterprise",
      price: "149",
      description: "For large organizations",
      features: ["Unlimited cameras", "Unlimited violations", "90-day data retention", "Custom integrations", "Dedicated account manager"],
      buttonText: "Contact Sales",
      popular: false,
      delay: 300
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <SectionTitle
        title="Simple, Transparent Pricing"
        description="Choose the plan that works best for your safety needs and budget."
      />
      
      <div className="text-center mb-8">
        <Button asChild size="lg">
          <Link to="/pricing">View All Pricing Plans</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            buttonText={plan.buttonText}
            popular={plan.popular}
            delay={plan.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
