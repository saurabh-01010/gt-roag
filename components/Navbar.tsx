import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { PageRoute } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'About Us', path: PageRoute.ABOUT },
    { name: 'Menu', path: PageRoute.MENU },
    { name: 'Gallery', path: PageRoute.GALLERY },
    { name: 'Contact & Reserve', path: PageRoute.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-wood-950/95 border-b border-gold-700/30 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-2xl font-serif font-bold text-gold-500 tracking-wider">THE G.T. ROAD</span>
              <span className="text-xs text-stone-400 tracking-widest uppercase">Connaught Place</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-gold-400 border-b-2 border-gold-500'
                      : 'text-stone-300 hover:text-gold-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
             <a href="tel:9717720084" className="flex items-center text-gold-500 hover:text-gold-400 border border-gold-600/50 px-4 py-2 rounded-full transition-all">
                <Phone size={16} className="mr-2" />
                <span className="text-sm font-bold">97177 20084</span>
             </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-500 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-wood-900 border-b border-gold-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'text-gold-400 bg-wood-800' : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <a href="tel:9717720084" className="block px-3 py-2 text-gold-500 font-bold">
                Call: 97177 20084
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;