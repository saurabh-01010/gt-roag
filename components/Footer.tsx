import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-950 border-t border-gold-900/30 text-stone-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif text-gold-500 font-bold mb-4">THE G.T. ROAD</h3>
          <p className="text-sm leading-relaxed mb-4 text-stone-400">
            A culinary journey inspired by the legendary Grand Trunk Road. Experience the royal tastes of Kabul to Kolkata right here in Delhi.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gold-600 hover:text-gold-400 transition"><Facebook size={20} /></a>
            <a href="#" className="text-gold-600 hover:text-gold-400 transition"><Instagram size={20} /></a>
            <a href="#" className="text-gold-600 hover:text-gold-400 transition"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-serif text-gold-400 font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MapPin className="flex-shrink-0 mr-2 text-gold-600" size={18} />
              <span>M-39, Shankar Market, Outer Circle,<br/>Connaught Place, New Delhi – 110001</span>
            </li>
            <li className="flex items-center">
              <Phone className="flex-shrink-0 mr-2 text-gold-600" size={18} />
              <span>97177 20084 / 93102 88808</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
           <h4 className="text-lg font-serif text-gold-400 font-bold mb-4">Opening Hours</h4>
           <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <Clock className="flex-shrink-0 mr-2 text-gold-600" size={18} />
              <div>
                <span className="block font-bold text-stone-200">Lunch Buffet</span>
                <span>12:00 PM – 4:00 PM</span>
              </div>
            </li>
            <li className="flex items-start">
              <Clock className="flex-shrink-0 mr-2 text-gold-600" size={18} />
              <div>
                <span className="block font-bold text-stone-200">Dinner Buffet</span>
                <span>7:00 PM – 11:30 PM</span>
              </div>
            </li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-wood-900 text-center text-xs text-stone-600">
        &copy; {new Date().getFullYear()} The G.T. Road. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;