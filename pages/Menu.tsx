import React from 'react';

interface MenuSectionProps {
  title: string;
  items: string[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => (
  <div className="mb-8 bg-wood-900/40 border border-gold-900/20 p-8 break-inside-avoid hover:bg-wood-900/60 transition-colors duration-500">
    <h3 className="text-xl font-serif font-bold text-gold-400 mb-6 border-b border-gold-800 pb-3 flex items-center justify-between">
      <span>{title}</span>
      <span className="text-xs font-sans font-light text-stone-500 tracking-widest uppercase">Selection</span>
    </h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="group">
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-stone-300 group-hover:text-gold-200 transition-colors font-medium">{item}</span>
            <span className="flex-grow mx-4 border-b border-dotted border-wood-700 group-hover:border-gold-800 transition-colors"></span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Menu: React.FC = () => {
  const menuData = [
    { title: "Live Grill & Tandoor", items: ["Chicken Tikka", "Seekh Kebab", "Fish Tandoori", "Paneer Tikka", "Vegetable Seekh", "Tandoori Soya Chaap"] },
    { title: "Main Course – Non-Veg", items: ["Butter Chicken", "Rogan Josh", "Mutton Stew", "Chicken Curry", "Fish Masala"] },
    { title: "Main Course – Veg", items: ["Shahi Paneer", "Dal Makhani", "Veg Handi", "Mix Veg", "Dum Aloo", "Chole / Rajma"] },
    { title: "Breads & Rice", items: ["Butter Naan", "Garlic Naan", "Laccha Paratha", "Veg Biryani", "Chicken Biryani", "Jeera Rice"] },
    { title: "Salads & Starters", items: ["Hummus & Pita", "Corn Salad", "Chatpata Aloo", "Sprouts Mix", "Green Salad"] },
    { title: "Desserts", items: ["Gulab Jamun", "Jalebi", "Rabri", "Phirni", "Ice Cream", "Brownie"] },
  ];

  return (
    <div className="pt-24 min-h-screen bg-wood-950 bg-noise">
      
      {/* Menu Header */}
      <div className="relative py-20 text-center px-4 overflow-hidden border-b border-gold-900">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[12rem] font-serif text-wood-900 opacity-20 pointer-events-none select-none">
          MENU
        </div>
        <div className="relative z-10">
          <span className="text-gold-500 tracking-[0.4em] uppercase text-xs font-bold mb-4 block animate-fade-in">Connaught Place</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-600 mb-6 animate-fade-in-up">
            The Grand Buffet
          </h1>
          <p className="text-stone-400 font-light italic text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            "A curated selection of royal delicacies, prepared fresh on the live grill and tandoor."
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-fade-in-up delay-200">
          {menuData.map((section, idx) => (
            <MenuSection key={idx} title={section.title} items={section.items} />
          ))}
        </div>
        
        <div className="mt-20 text-center border-t border-gold-900 pt-12">
            <p className="text-gold-600/60 text-xs tracking-widest uppercase mb-2">Dining Information</p>
            <p className="text-stone-500 text-sm italic max-w-lg mx-auto">
              * Our menu rotates daily to ensure the freshest ingredients. Please inform our service staff of any dietary restrictions or allergies.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;