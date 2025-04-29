import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <img 
      src="/xbesh_logo_white.png" 
      alt="XBesh Logo" 
      className={className}
    />
  );
};

export default Logo;
