import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { PageRoute } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'About', path: PageRoute.ABOUT },
    { name: 'Menu', path: PageRoute.MENU },
    { name: 'Gallery', path: PageRoute.GALLERY },
    { name: 'Contact', path: PageRoute.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || isOpen 
          ? 'bg-wood-950/90 backdrop-blur-md border-b border-gold-900/50 py-2 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <Link to="/" className="flex flex-col items-start group-hover:opacity-90 transition-opacity">
              <span className="text-2xl font-serif font-bold text-gold-500 tracking-widest uppercase border-b-2 border-gold-600/0 group-hover:border-gold-600 transition-all duration-500">
                The G.T. Road
              </span>
              <span className="text-[10px] text-gold-200/80 tracking-[0.3em] uppercase mt-1 pl-1">
                Connaught Place
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-2 py-2 text-sm font-medium tracking-wider transition-colors duration-300 group ${
                    isActive(link.path)
                      ? 'text-gold-400'
                      : 'text-stone-300 hover:text-gold-200'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-gold-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
             <a href="tel:9717720084" className="flex items-center text-stone-300 hover:text-gold-400 transition-colors">
                <span className="text-sm tracking-wide">97177 20084</span>
             </a>
             <Link 
              to="/contact" 
              className="bg-gold-600 text-wood-950 px-6 py-2 rounded-sm text-sm font-bold tracking-widest hover:bg-gold-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300"
             >
               RESERVE
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-500 hover:text-white focus:outline-none transition-transform duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-wood-950/95 backdrop-blur-xl border-b border-gold-900 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 text-base font-serif tracking-widest ${
                isActive(link.path) ? 'text-gold-500' : 'text-stone-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
           <a href="tel:9717720084" className="block mt-4 text-gold-500 font-bold border border-gold-700 px-6 py-2 rounded-full">
              Call: 97177 20084
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;