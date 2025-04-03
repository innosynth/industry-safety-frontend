
import React from "react";

interface BadgeProps {
  className?: string;
}

const CertificationBadge: React.FC<BadgeProps> = ({ className }) => (
  <div className={`py-1 px-3 rounded-full text-white text-xs font-medium ${className}`}>
    Certified
  </div>
);

export default CertificationBadge;
