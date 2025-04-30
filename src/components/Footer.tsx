import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-4 text-center">
        <Link to="/" className="inline-block mb-4">
          <Logo />
        </Link>
        
        <p className="text-sm text-gray-500">
          © {currentYear} XBesh Labs. Contest managed under JVZoo affiliate TOS. Void where prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
