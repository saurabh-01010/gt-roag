import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Utensils, Users, Wine, Clock, Phone } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-950/80 via-wood-950/60 to-wood-950"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold-500 mb-4 drop-shadow-lg tracking-wide animate-fade-in-up">
            Experience The Flavours of <br/> India’s Historic Grand Trunk Road
          </h1>
          <h2 className="text-xl md:text-2xl text-stone-200 font-light mb-8 font-sans tracking-widest uppercase border-y border-gold-500/30 py-2 inline-block">
            Authentic North Indian, Mughlai & Grill Buffet • Connaught Place, New Delhi
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Welcome to The G.T. Road, a premium dine-in buffet and grill restaurant inspired by the rich culinary heritage of India’s legendary Grand Trunk Road. Located in the heart of Connaught Place, we offer a royal dining experience filled with smoky grills, slow-cooked kebabs, aromatic curries, fresh breads, and irresistible desserts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="px-8 py-3 bg-gold-600 text-wood-950 font-bold rounded-sm hover:bg-gold-500 transition-colors shadow-lg shadow-gold-900/20 w-full sm:w-auto">
              Reserve a Table
            </Link>
            <Link to="/menu" className="px-8 py-3 border border-gold-500 text-gold-400 font-bold rounded-sm hover:bg-gold-900/30 transition-colors w-full sm:w-auto">
              View Our Menu
            </Link>
            <a href="tel:9717720084" className="px-8 py-3 flex items-center justify-center text-stone-300 font-bold hover:text-gold-400 transition-colors w-full sm:w-auto">
               <Phone size={18} className="mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <section className="bg-wood-900 border-y border-gold-800/30 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center group">
            <div className="p-3 bg-wood-800 rounded-full mb-3 group-hover:bg-gold-600/20 transition-colors border border-gold-800">
              <Utensils className="text-gold-500" size={28} />
            </div>
            <h3 className="text-gold-100 font-bold mb-1">Unlimited Buffet</h3>
            <p className="text-stone-500 text-xs">Veg & Non-Veg</p>
          </div>
          <div className="flex flex-col items-center group">
             <div className="p-3 bg-wood-800 rounded-full mb-3 group-hover:bg-gold-600/20 transition-colors border border-gold-800">
              <Flame className="text-gold-500" size={28} />
            </div>
            <h3 className="text-gold-100 font-bold mb-1">Live Grill</h3>
            <p className="text-stone-500 text-xs">On The Table</p>
          </div>
          <div className="flex flex-col items-center group">
             <div className="p-3 bg-wood-800 rounded-full mb-3 group-hover:bg-gold-600/20 transition-colors border border-gold-800">
              <Users className="text-gold-500" size={28} />
            </div>
            <h3 className="text-gold-100 font-bold mb-1">Royal Seating</h3>
            <p className="text-stone-500 text-xs">Family & Groups</p>
          </div>
          <div className="flex flex-col items-center group">
             <div className="p-3 bg-wood-800 rounded-full mb-3 group-hover:bg-gold-600/20 transition-colors border border-gold-800">
              <Wine className="text-gold-500" size={28} />
            </div>
            <h3 className="text-gold-100 font-bold mb-1">Bar Available</h3>
            <p className="text-stone-500 text-xs">Premium Drinks</p>
          </div>
          <div className="flex flex-col items-center group">
             <div className="p-3 bg-wood-800 rounded-full mb-3 group-hover:bg-gold-600/20 transition-colors border border-gold-800">
              <Clock className="text-gold-500" size={28} />
            </div>
            <h3 className="text-gold-100 font-bold mb-1">Lunch & Dinner</h3>
            <p className="text-stone-500 text-xs">Buffet Service</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-wood-950 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 border-2 border-gold-700/30 transform -translate-x-4 translate-y-4 hidden md:block"></div>
            <img src="https://picsum.photos/600/700" alt="Buffet Spread" className="relative shadow-2xl rounded-sm w-full object-cover h-[500px]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-6">Why Choose Us</h2>
            <ul className="space-y-4">
              {[
                "Unlimited buffet with 50+ dishes",
                "Live BBQ & tandoor counters",
                "Historic theme inspired by Grand Trunk Road",
                "Perfect for family dining & celebrations",
                "Affordable luxury in Connaught Place"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-stone-300">
                  <span className="text-gold-500 mr-3 text-xl">✦</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
               <Link to="/about" className="text-gold-400 border-b border-gold-500 hover:text-gold-200 transition-colors">Read Our Story &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="py-20 bg-wood-900 border-t border-gold-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-serif font-bold text-stone-100 mb-2">Ready for a Feast?</h2>
           <p className="text-stone-400 mb-8">Book your table now for an unforgettable culinary journey.</p>
           <div className="max-w-lg mx-auto">
             <ReservationForm />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;