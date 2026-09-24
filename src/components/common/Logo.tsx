import React from 'react';

export interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'dark' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const LuminaLogoMark: React.FC<{
  size?: number | string;
  className?: string;
  glow?: boolean;
  animated?: boolean;
}> = ({
  size = 42,
  className = '',
  glow = true,
  animated = false,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none group/logo ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
    >
      {/* Ambient Radial Glow using official brand yellow & blue */}
      {glow && (
        <div
          className={`absolute -inset-1.5 bg-gradient-to-tr from-[#0067D9]/25 via-[#FFD21C]/35 to-[#FF2D78]/20 rounded-full blur-md opacity-60 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none ${
            animated ? 'animate-pulse' : ''
          }`}
          aria-hidden="true"
        />
      )}

      {/* 3D Code Bulb Logo Image */}
      <img
        src="/lumina-icon.png"
        alt="Lumina 360 Logo Mark"
        className={`relative w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,103,217,0.18)] transition-transform duration-300 ease-out group-hover/logo:scale-110 ${
          animated ? 'animate-float-slow' : ''
        }`}
        loading="eager"
      />
    </div>
  );
};

export const LuminaLogo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  variant = 'dark',
  size = 'md',
  animated = false,
}) => {
  const iconPixelSizes = {
    xs: 26,
    sm: 36,
    md: 44,
    lg: 54,
    xl: 68,
  };

  const fullHeights = {
    xs: 'h-6',
    sm: 'h-9',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-18',
  };

  const textSizes = {
    xs: 'text-lg',
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const currentIconSize = iconPixelSizes[size];

  if (iconOnly) {
    return <LuminaLogoMark size={currentIconSize} animated={animated} className={className} />;
  }

  // On light navbar and light backgrounds: use authentic full logo graphic with vibrant colors
  if (variant === 'dark') {
    return (
      <div className={`relative inline-flex items-center group/logo select-none ${className}`}>
        {/* Subtle hover backdrop glow */}
        <div
          className="absolute -inset-1 bg-gradient-to-r from-[#FFD21C]/20 via-[#0067D9]/15 to-[#FF2D78]/15 rounded-xl blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />
        <img
          src="/lumina-full-logo.png"
          alt="Lumina 360"
          className={`${fullHeights[size]} w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,103,217,0.12)] transition-all duration-300 group-hover/logo:scale-[1.03] group-hover/logo:brightness-105`}
          loading="eager"
        />
      </div>
    );
  }

  // On dark backgrounds (like the footer): glowing 3D bulb mark + high-contrast illuminated brand typography
  return (
    <div className={`inline-flex items-center gap-3 select-none group/logo ${className}`}>
      <LuminaLogoMark size={currentIconSize} animated={animated} glow={true} />
      <div
        className={`font-black tracking-tight font-heading flex items-baseline leading-none transition-transform duration-300 group-hover/logo:translate-x-0.5 ${textSizes[size]}`}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Lumin</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D78] to-[#FF6B9D] mx-[0.5px]">
          a
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] ml-1.5 font-black drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)]">
          360
        </span>
      </div>
    </div>
  );
};

export default LuminaLogo;
