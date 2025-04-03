
import React from "react";
import CertificationCard from "./CertificationCard";
import { BadgeCheck, Lock, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";

const CertificationSection: React.FC = () => {
  const certifications = [
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "Data Breach Management",
      description: "Certified processes for preventing, detecting, and responding to data breaches.",
      delay: 100
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Sensitive Data Intelligence",
      description: "Advanced systems for identifying, classifying, and protecting sensitive information.",
      delay: 200
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "AI Regulatory Compliance",
      description: "Full adherence to global AI governance frameworks and ethical standards.",
      delay: 300
    }
  ];

  return (
    <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Certified Excellence in Security & Compliance"
          description="We meet the highest standards in data security, privacy protection, and regulatory compliance."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              icon={cert.icon}
              title={cert.title}
              description={cert.description}
              delay={cert.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
