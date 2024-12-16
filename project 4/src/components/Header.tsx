import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors } from 'lucide-react';
import ClientToggle from './ClientToggle';
import { scrollToTop } from '../utils/scroll';

type HeaderProps = {
  isBusinessClient: boolean;
  setIsBusinessClient: (value: boolean) => void;
};

export default function Header({ isBusinessClient, setIsBusinessClient }: HeaderProps) {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:text-secondary transition-colors"
        >
          <Scissors className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">L'atelier de Celyo</span>
        </Link>
        <ClientToggle
          isBusinessClient={isBusinessClient}
          setIsBusinessClient={setIsBusinessClient}
        />
      </div>
    </header>
  );
}