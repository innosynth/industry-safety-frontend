
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, delay }) => {
  return (
    <div className="relative z-10 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="bg-white rounded-lg shadow-md p-6 h-full border-l-4 border-primary">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <span className="text-xl font-bold text-primary">{number}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Cameras",
      description: "Easily integrate our system with your existing camera infrastructure, no additional hardware required.",
      delay: 100
    },
    {
      number: 2,
      title: "AI Monitors & Analyzes",
      description: "Our AI technology continuously monitors footage, detecting safety violations in real-time with high accuracy.",
      delay: 300
    },
    {
      number: 3,
      title: "Get Alerts & Insights",
      description: "Receive immediate notifications for violations and access comprehensive analytics to improve safety.",
      delay: 500
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <SectionTitle 
        title="How It Works"
        description="Our platform makes safety monitoring simple, efficient, and effective."
      />

      <div className="grid md:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => (
          <Step
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            delay={step.delay}
          />
        ))}

        {/* Connector Lines */}
        <div className="hidden md:block absolute top-1/3 left-1/4 w-1/2 border-t-2 border-dashed border-primary/30 z-0"></div>
        <div className="hidden md:block absolute top-1/3 right-1/4 w-1/2 border-t-2 border-dashed border-primary/30 z-0"></div>
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="gap-2">
          See It In Action <Play className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
