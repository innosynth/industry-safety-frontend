
import React from "react";
import CertificationBadge from "./CertificationBadge";

interface CertificationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay 
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-3 rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="mt-auto">
        <CertificationBadge className="bg-primary" />
      </div>
    </div>
  );
};

export default CertificationCard;
