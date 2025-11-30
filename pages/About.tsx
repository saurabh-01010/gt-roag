import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-wood-950">
      
      {/* Header */}
      <div className="bg-wood-900 py-16 px-4 text-center border-b border-gold-900">
        <h1 className="text-4xl font-serif font-bold text-gold-500 mb-4">Our Story</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">A Culinary Journey Along India’s Historic G.T. Road</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        
        {/* Main Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
           <div className="space-y-6 text-stone-300 leading-relaxed">
             <p>
               The Grand Trunk Road has connected India for centuries — carrying kings, travellers, merchants and food traditions from Kabul to Kolkata. It is not just a road; it is a river of history and culture.
             </p>
             <p>
               At <strong className="text-gold-400">The G.T. Road</strong>, we bring these ancient flavours to your table, curated diligently from the kitchens of Punjab, Delhi, Uttar Pradesh, Rajasthan, Bihar, and Bengal. We believe food is the best way to travel through time.
             </p>
             <p>
               Our chefs use traditional cooking styles — <em className="text-stone-400">tandoor, charcoal grill, slow-roasting, dum-style, and clay-pot techniques</em> — to serve you a buffet that is rich in history, taste, and authenticity.
             </p>
           </div>
           <div className="relative">
             <img src="https://picsum.photos/600/400" alt="Historic Map Concept" className="rounded-sm shadow-xl border border-gold-900/50" />
           </div>
        </div>

        {/* Mission & Unique Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-wood-900 p-8 rounded border border-gold-800/30">
            <h3 className="text-2xl font-serif text-gold-500 mb-4">Our Mission</h3>
            <p className="text-stone-300 italic">
              "To offer a memorable dining experience that celebrates India’s culinary heritage with quality, hospitality, and unmatched flavour."
            </p>
          </div>
          
          <div className="bg-wood-900 p-8 rounded border border-gold-800/30">
             <h3 className="text-2xl font-serif text-gold-500 mb-4">What Makes Us Unique</h3>
             <ul className="space-y-2 text-stone-300">
               <li className="flex items-center"><span className="text-gold-600 mr-2">✓</span> Live tandoor & grill counters</li>
               <li className="flex items-center"><span className="text-gold-600 mr-2">✓</span> Rich Mughlai flavours</li>
               <li className="flex items-center"><span className="text-gold-600 mr-2">✓</span> Unlimited fine-dining buffet</li>
               <li className="flex items-center"><span className="text-gold-600 mr-2">✓</span> Hand-crafted desserts</li>
               <li className="flex items-center"><span className="text-gold-600 mr-2">✓</span> Royal ambience</li>
             </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;