import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M4 4L16 16L4 28" 
        stroke="#7B61FF" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        transform="rotate(45 16 16)"
      />
      <path 
        d="M28 4L16 16L28 28" 
        stroke="#00E5FF" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        transform="rotate(45 16 16)"
      />
    </svg>
  );
};

export default Logo;
