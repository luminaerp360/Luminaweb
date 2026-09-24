import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LuminaLogoMark: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${className}`}
      aria-label="Lumina 360 Logo Mark"
    >
      <defs>
        {/* Bulb radiant yellow gradient */}
        <radialGradient
          id="bulbGlow"
          cx="45%"
          cy="38%"
          r="58%"
          fx="40%"
          fy="32%"
        >
          <stop offset="0%" stopColor="#FFFCE5" />
          <stop offset="35%" stopColor="#FFE84D" />
          <stop offset="70%" stopColor="#FFD21C" />
          <stop offset="100%" stopColor="#F5A623" />
        </radialGradient>

        {/* Ray yellow */}
        <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE74C" />
          <stop offset="100%" stopColor="#FFC700" />
        </linearGradient>

        {/* Orbit ring gradient */}
        <linearGradient id="orbitFront" x1="0%" y1="30%" x2="100%" y2="70%">
          <stop offset="0%" stopColor="#389BFF" />
          <stop offset="45%" stopColor="#0067D9" />
          <stop offset="100%" stopColor="#073B8F" />
        </linearGradient>

        {/* Orbit highlight line */}
        <linearGradient id="orbitHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#99CEFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#389BFF" stopOpacity="0.4" />
        </linearGradient>

        {/* Blue bulb screw base gradient */}
        <linearGradient id="baseBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0067D9" />
          <stop offset="50%" stopColor="#073B8F" />
          <stop offset="100%" stopColor="#05265E" />
        </linearGradient>

        {/* Soft shadow */}
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#FFD21C" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Orbit Back Arc (passes behind bulb) */}
      <path
        d="M32 94 C26 78 40 54 86 44 C112 38 128 46 130 52"
        stroke="#0067D9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeOpacity="0.25"
      />

      {/* Radiant Light Rays around top left */}
      <line x1="28" y1="26" x2="38" y2="34" stroke="url(#rayGrad)" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="49" y1="12" x2="52" y2="23" stroke="url(#rayGrad)" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="77" y1="11" x2="72" y2="22" stroke="url(#rayGrad)" strokeWidth="4.5" strokeLinecap="round" />

      {/* Bulb Glass Body */}
      <g filter="url(#softGlow)">
        {/* Main spherical & conical bulb shape */}
        <path
          d="M44 68 C34 58 32 42 42 28 C52 14 74 14 84 28 C94 42 92 58 82 68 C78 73 76 80 75 87 L51 87 C50 80 48 73 44 68 Z"
          fill="url(#bulbGlow)"
        />
      </g>

      {/* Bulb internal glowing filament marks */}
      <ellipse cx="56" cy="46" rx="2.5" ry="5" transform="rotate(-15 56 46)" fill="#FFFFFF" fillOpacity="0.75" />
      <ellipse cx="64" cy="42" rx="2.5" ry="5" fill="#FFFFFF" fillOpacity="0.9" />
      <ellipse cx="71" cy="46" rx="2.5" ry="5" transform="rotate(15 71 46)" fill="#FFFFFF" fillOpacity="0.75" />
      {/* Specular shine on bulb upper left */}
      <path
        d="M46 32 C48 24 57 19 66 19 C64 22 55 24 50 34 C47 40 47 46 47 46 C45 42 44 37 46 32 Z"
        fill="#FFFFFF"
        fillOpacity="0.65"
      />

      {/* Orbit Front Swoosh Loop (wraps in front of bulb base) */}
      <path
        d="M20 90 C15 74 38 68 76 68 C115 68 142 82 135 96 C129 108 98 114 56 112 C32 110 21 100 20 90 Z"
        fill="none"
        stroke="url(#orbitFront)"
        strokeWidth="11"
        strokeLinecap="round"
      />
      {/* Sleek outer rim arc */}
      <path
        d="M24 88 C34 78 74 74 108 78 C130 81 138 90 134 98 C126 109 95 116 54 113"
        fill="none"
        stroke="url(#orbitHighlight)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Bulb Ribbed Screw Base (Layered Blue Base) */}
      <g>
        {/* Tier 1 - Top ring */}
        <rect x="52" y="88" width="22" height="6.5" rx="3" fill="url(#baseBlue)" />
        {/* Tier 2 - Middle ring */}
        <rect x="53.5" y="96" width="19" height="6.5" rx="3" fill="url(#baseBlue)" />
        {/* Tier 3 - Lower ring */}
        <rect x="56" y="104" width="14" height="6" rx="3" fill="url(#baseBlue)" />
        {/* Bottom contact tip */}
        <ellipse cx="63" cy="112.5" rx="4.5" ry="2.5" fill="#073B8F" />
      </g>
    </svg>
  );
};

export const LuminaLogo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  variant = 'dark',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 32,
    md: 42,
    lg: 52,
    xl: 64,
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const currentIconSize = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <LuminaLogoMark size={currentIconSize} />
      {!iconOnly && (
        <div
          className={`font-extrabold tracking-tight font-heading flex items-baseline ${textSizes[size]}`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {variant === 'light' ? (
            <>
              <span className="text-white">Lumin</span>
              <span className="text-[#F43D78] mx-[0.5px]">a</span>
              <span className="text-blue-300 ml-1.5 font-black">360</span>
            </>
          ) : (
            <>
              <span className="text-[#0067D9]">Lumin</span>
              <span className="text-[#F43D78] mx-[0.5px]">a</span>
              <span className="text-[#073B8F] ml-1.5 font-black">360</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default LuminaLogo;
