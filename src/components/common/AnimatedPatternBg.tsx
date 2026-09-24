import React from 'react';

interface AnimatedPatternBgProps {
  variant?: 'hero-blue' | 'hero-purple' | 'light' | 'card' | 'minimal';
  showGrid?: boolean;
  showDots?: boolean;
  showOrbs?: boolean;
  showCircuit?: boolean;
  className?: string;
}

export const AnimatedPatternBg: React.FC<AnimatedPatternBgProps> = ({
  variant = 'hero-blue',
  showGrid = true,
  showDots = false,
  showOrbs = true,
  showCircuit = true,
  className = '',
}) => {
  const isDark = variant === 'hero-blue' || variant === 'hero-purple';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Animated Drifting Grid */}
      {showGrid && (
        <div 
          className={`absolute inset-0 animate-grid-drift opacity-60 ${
            isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'
          }`} 
        />
      )}

      {/* 2. Optional Dot Matrix */}
      {showDots && (
        <div 
          className={`absolute inset-0 animate-grid-drift opacity-40 ${
            isDark ? 'bg-dots-pattern-white' : 'bg-dots-pattern'
          }`} 
        />
      )}

      {/* 3. Floating Ambient Glow Orbs with Independent Drift Physics */}
      {showOrbs && (
        <>
          {/* Top-Right Warm Gold Glow */}
          <div 
            className="absolute -top-20 -right-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl opacity-30 animate-float-slow"
            style={{
              background: 'radial-gradient(circle, rgba(255, 210, 28, 0.45) 0%, rgba(255, 210, 28, 0) 70%)',
            }}
          />

          {/* Bottom-Left Electric Pink Glow */}
          <div 
            className="absolute -bottom-24 -left-24 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full blur-3xl opacity-25 animate-float-reverse"
            style={{
              background: 'radial-gradient(circle, rgba(244, 61, 120, 0.45) 0%, rgba(244, 61, 120, 0) 70%)',
            }}
          />

          {/* Center-Right Royal Violet Accent */}
          <div 
            className="absolute top-1/3 right-1/4 w-72 sm:w-80 h-72 sm:h-80 rounded-full blur-3xl opacity-25 animate-float-drift"
            style={{
              background: 'radial-gradient(circle, rgba(125, 63, 178, 0.4) 0%, rgba(0, 103, 217, 0) 70%)',
            }}
          />

          {/* Center-Left Lumina Blue Depth */}
          <div 
            className="absolute top-1/2 -left-10 w-64 h-64 rounded-full blur-3xl opacity-30 animate-float-slow"
            style={{
              background: 'radial-gradient(circle, rgba(0, 103, 217, 0.4) 0%, rgba(7, 59, 143, 0) 70%)',
            }}
          />
        </>
      )}

      {/* 4. High-Tech SVG Circuit Lines & Pulsing Nodes */}
      {showCircuit && (
        <svg 
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD21C" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0067D9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F43D78" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
          </defs>

          {/* Diagonal Data Transmission Lines */}
          <line 
            x1="5%" y1="10%" x2="35%" y2="40%" 
            stroke="url(#lineGrad)" 
            strokeWidth="1" 
            strokeDasharray="4 6" 
          />
          <line 
            x1="35%" y1="40%" x2="75%" y2="40%" 
            stroke="url(#lineGrad)" 
            strokeWidth="1" 
            strokeDasharray="6 4" 
          />
          <line 
            x1="75%" y1="40%" x2="95%" y2="70%" 
            stroke="url(#lineGrad)" 
            strokeWidth="1" 
            strokeDasharray="4 6" 
          />

          <line 
            x1="10%" y1="85%" x2="45%" y2="85%" 
            stroke="url(#lineGrad)" 
            strokeWidth="1" 
            strokeDasharray="5 5" 
          />
          <line 
            x1="45%" y1="85%" x2="65%" y2="60%" 
            stroke="url(#lineGrad)" 
            strokeWidth="1" 
            strokeDasharray="3 7" 
          />

          {/* Animated Pulsing Data Nodes */}
          <circle cx="35%" cy="40%" r="3.5" fill="#FFD21C" filter="url(#glow)">
            <animate attributeName="r" values="2.5;4.5;2.5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>

          <circle cx="75%" cy="40%" r="3" fill="#0067D9" filter="url(#glow)">
            <animate attributeName="r" values="2;4;2" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.5s" repeatCount="indefinite" />
          </circle>

          <circle cx="65%" cy="60%" r="3.5" fill="#F43D78" filter="url(#glow)">
            <animate attributeName="r" values="2.5;4.5;2.5" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* 5. Subtle Vignette Depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark 
            ? 'radial-gradient(ellipse at center, transparent 40%, rgba(7, 59, 143, 0.4) 100%)' 
            : 'radial-gradient(ellipse at center, transparent 60%, rgba(245, 248, 252, 0.7) 100%)',
        }}
      />
    </div>
  );
};
