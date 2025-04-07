'use client';

// app/components/Navigation.tsx
import Link from 'next/link';
import { Calendar, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
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
              <Link href="/contact" className="nav-link">
                Contact
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
      <button 
        className="md:hidden fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isSidebarOpen ? 'opacity-100 z-30' : 'opacity-0 -z-10'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar mobile */}
      <div 
        className={`fixed top-0 right-0 h-screen w-80 bg-background shadow-xl z-40 transition-transform duration-500 ease-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-screen flex flex-col">
          <div className="p-8 border-b border-border/30 flex items-center space-x-4">
            <img 
              src="/img/JPL2.png" 
              alt="Logo Justine Leonardi" 
              className="h-10 w-auto"
            />
            <span className="text-lg tracking-wider uppercase font-light">Justine Leonardi</span>
          </div>
          
          <div className="p-8 flex flex-col space-y-8 flex-grow">
            <Link href="/" className="nav-link" onClick={toggleSidebar}>
              Accueil
            </Link>
            <Link href="/prestations" className="nav-link" onClick={toggleSidebar}>
              Prestations
            </Link>
            <Link href="/contact" className="nav-link" onClick={toggleSidebar}>
              Contact
            </Link>
            <div className="pt-8 mt-auto border-t border-border/30">
              <Link 
                href="https://rosa.be/fr/hp/justine-leonardi/" 
                target="_blank"
                className="btn-primary w-full flex justify-center"
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