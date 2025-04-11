'use client';

// app/components/Navigation.tsx
import Link from 'next/link';
import { Calendar, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Empêcher le défilement du body quand la sidebar est ouverte
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  // Détecter le scroll pour adapter le style du burger menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      {/* Navigation desktop */}
      <nav className="hidden md:block border-b border-border/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <img 
                src="/img/JPL2.png" 
                alt="Logo Justine Leonardi" 
                className="h-12 w-auto"
              />
              <span className="text-lg tracking-wider uppercase font-light">Justine Leonardi</span>
            </Link>
            
            <div className="flex items-center space-x-12">
              <Link href="/" className="nav-link">
                Accueil
              </Link>
              <Link href="/prestations" className="nav-link">
                Prestations
              </Link>
              <Link 
                href="https://rosa.be/fr/hp/justine-leonardi/" 
                target="_blank"
                className="btn-primary"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile burger menu */}
      <div 
        className={`md:hidden fixed top-4 right-4 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#403737] shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        } rounded-full p-2`}
      >
        <button 
          className="w-10 h-10 flex items-center justify-center"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isSidebarOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-[#403737]'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-[#403737]'}`} />
          )}
        </button>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isSidebarOpen ? 'opacity-100 z-30' : 'opacity-0 -z-10'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar mobile */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[90%] max-w-[400px] bg-background shadow-xl z-40 transition-transform duration-500 ease-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-screen flex flex-col">
          <div className="p-6 border-b border-border/30 flex items-center space-x-4">
            <img 
              src="/img/JPL2.png" 
              alt="Logo Justine Leonardi" 
              className="h-10 w-auto"
            />
            <span className="text-base tracking-wider uppercase font-light">Justine Leonardi</span>
          </div>
          
          <div className="p-6 flex flex-col space-y-8 flex-grow">
            <Link href="/" className="nav-link text-lg" onClick={toggleSidebar}>
              Accueil
            </Link>
            <Link href="/prestations" className="nav-link text-lg" onClick={toggleSidebar}>
              Prestations
            </Link>
            <div className="pt-8 mt-auto border-t border-border/30">
              <Link 
                href="https://rosa.be/fr/hp/justine-leonardi/" 
                target="_blank"
                className="btn-primary w-full flex justify-center text-lg"
                onClick={toggleSidebar}
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}