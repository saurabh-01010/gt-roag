import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Utensils, Users, Wine, Clock, ChevronRight } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-wood-950 bg-noise">
      
      {/* HERO SECTION - Parallax Effect */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-wood-950/90 via-wood-950/40 to-wood-950"></div>
          <div className="absolute inset-0 bg-wood-950/20 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="animate-fade-in-up">
            <span className="text-gold-400 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4 block">
              Connaught Place, New Delhi
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400 mb-6 drop-shadow-2xl leading-tight">
              A Royal Culinary<br />Journey
            </h1>
            <div className="w-24 h-1 bg-gold-600 mx-auto mb-8"></div>
            <p className="text-stone-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light font-serif italic">
              "Experience the forgotten recipes of the Grand Trunk Road, where history meets the charcoal grill."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-200">
            <Link to="/contact" className="group relative px-8 py-4 bg-gold-600 text-wood-950 font-bold tracking-widest overflow-hidden rounded-sm">
              <span className="relative z-10 group-hover:text-wood-900 transition-colors">RESERVE TABLE</span>
              <div className="absolute inset-0 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
            </Link>
            <Link to="/menu" className="group px-8 py-4 border border-gold-500/50 text-gold-300 font-bold tracking-widest hover:bg-wood-900/50 transition-all rounded-sm backdrop-blur-sm">
              VIEW MENU
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP - Floating Cards */}
      <section className="relative z-20 -mt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: Utensils, title: "Grand Buffet", sub: "Veg & Non-Veg" },
            { icon: Flame, title: "Live Grill", sub: "On Your Table" },
            { icon: Users, title: "Royal Seating", sub: "For Families" },
            { icon: Wine, title: "Full Bar", sub: "Premium Spirits" },
            { icon: Clock, title: "All Day", sub: "Lunch & Dinner" },
          ].map((item, idx) => (
            <div key={idx} className="bg-wood-900/80 backdrop-blur-md border border-gold-900/30 p-6 text-center shadow-2xl hover:bg-wood-800 transition-colors group rounded-sm">
              <div className="mb-4 inline-block p-3 rounded-full bg-wood-950 border border-gold-800 group-hover:border-gold-500 transition-colors">
                <item.icon className="text-gold-500" size={24} />
              </div>
              <h3 className="text-gold-100 font-serif font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-stone-500 text-xs tracking-wider uppercase">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMMERSIVE DISCOVERY */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold-700/30 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
              alt="Buffet Spread" 
              className="relative w-full h-[600px] object-cover filter brightness-90 contrast-125 shadow-2xl" 
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-gold-500 tracking-[0.2em] uppercase text-xs font-bold">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mt-3 leading-tight">
                A Feast Fit for <span className="text-gold-500 italic">Kings</span>
              </h2>
            </div>
            
            <p className="text-stone-400 leading-relaxed text-lg font-light">
              Immerse yourself in an ambiance that whispers tales of a bygone era. From the rustic charm of our interiors to the aromatic spices wafting from our live kitchen, every detail is curated to transport you to the golden age of Indian culinary history.
            </p>

            <ul className="space-y-4 border-l border-gold-900/50 pl-6">
              {[
                "Unlimited buffet with 50+ regional delicacies",
                "Live BBQ & tandoor counters at every table",
                "Historic theme inspired by the 2500km journey",
                "Curated selection of hand-crafted desserts"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-stone-300">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-4"></span>
                  <span className="tracking-wide font-light">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="inline-flex items-center text-gold-400 hover:text-white transition-colors tracking-widest text-sm font-bold uppercase group mt-4">
              Discover Our Story <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-wood-900 border-t border-gold-900/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
           <span className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Reservations</span>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-100 mb-6">Secure Your Table</h2>
           <p className="text-stone-400 mb-12 max-w-xl mx-auto">
             Due to high demand, we recommend booking your table in advance to ensure the best seating for your royal feast.
           </p>
           <div className="max-w-xl mx-auto bg-wood-950 p-2 rounded-lg shadow-2xl border border-gold-900">
             <ReservationForm />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;