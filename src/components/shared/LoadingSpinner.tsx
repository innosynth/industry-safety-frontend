
import { Loader2 } from 'lucide-react';
import React from 'react';

export interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  textPosition?: 'top' | 'bottom' | 'left' | 'right';
  fullScreen?: boolean;
  color?: 'primary' | 'secondary' | 'muted' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  text,
  textPosition = 'bottom',
  fullScreen = false,
  color = 'primary'
}) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    muted: 'text-muted-foreground',
    white: 'text-white'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex justify-center items-center' 
    : 'flex justify-center items-center';

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const flexClasses = {
    top: 'flex-col-reverse',
    bottom: 'flex-col',
    left: 'flex-row-reverse',
    right: 'flex-row'
  };

  const gapClasses = {
    top: 'gap-2',
    bottom: 'gap-2',
    left: 'gap-3',
    right: 'gap-3'
  };

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className={`flex ${flexClasses[textPosition]} ${gapClasses[textPosition]} items-center`}>
        <Loader2 className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`} />
        {text && <span className={`${textSizeClasses[size]} ${colorClasses[color]}`}>{text}</span>}
      </div>
    </div>
  );
};

export default LoadingSpinner;
