import React from 'react';

interface ShieldIconProps {
  className?: string;
  size?: number;
  variant?: 'solid' | 'outline' | 'gradient';
}

const ShieldIcon: React.FC<ShieldIconProps> = ({ 
  className = "w-5 h-5", 
  size = 20,
  variant = 'gradient'
}) => {
  const renderShield = () => {
    switch (variant) {
      case 'solid':
        return (
          <path
            d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
            fill="currentColor"
            className="drop-shadow-sm"
          />
        );
      
      case 'outline':
        return (
          <path
            d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
        );
      
      case 'gradient':
      default:
        return (
          <>
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.9)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(79, 70, 229, 0.9)" />
              </linearGradient>
              <linearGradient id="shieldHighlight" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
              <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0, 0, 0, 0.2)" />
              </filter>
            </defs>
            
            {/* Main Shield Body */}
            <path
              d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
              fill="url(#shieldGradient)"
              filter="url(#shieldShadow)"
            />
            
            {/* Inner Highlight */}
            <path
              d="M12 3.5L4.5 7.8v4.7c0 4.8 3.2 9.2 7.5 10.3 4.3-1.1 7.5-5.5 7.5-10.3V7.8L12 3.5z"
              fill="url(#shieldHighlight)"
            />
            
            {/* Security Check Mark */}
            <path
              d="M9 12l2 2 4-4"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label="Security Shield"
    >
      {renderShield()}
    </svg>
  );
};

export default ShieldIcon;