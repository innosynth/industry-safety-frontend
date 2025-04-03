
import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
