import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo className="h-8 w-auto" />
            {/* Removed the text logo */}
          </div>
          
          <p className="text-light/60 text-sm text-center">
            © {currentYear} XBesh Labs. Contest managed under JVZoo affiliate TOS. Void where prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
