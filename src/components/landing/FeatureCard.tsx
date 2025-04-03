
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}) => (
  <div 
    className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default FeatureCard;
