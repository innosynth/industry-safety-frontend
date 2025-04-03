
import React from "react";
import FeatureCard from "./FeatureCard";
import { Eye, Bell, BarChart3, Settings, CircleCheck, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance with instant violation detection across all your camera feeds.",
      delay: 100
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: "Smart Alerts",
      description: "Customizable notifications via email, SMS, or in-app alerts when violations occur.",
      delay: 200
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with trends, hotspots, and compliance metrics.",
      delay: 300
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Custom Rules Engine",
      description: "Define and configure safety rules specific to your environment and requirements.",
      delay: 400
    },
    {
      icon: <CircleCheck className="h-6 w-6 text-primary" />,
      title: "Compliance Reporting",
      description: "Automated reports for regulatory compliance and safety audits.",
      delay: 500
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "AI-Powered Predictions",
      description: "Identify potential safety issues before they become problems.",
      delay: 600
    }
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Powerful Features"
          description="Our comprehensive solution offers everything you need to ensure workplace safety."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
