import React from 'react';

interface MenuSectionProps {
  title: string;
  items: string[];
  icon?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => (
  <div className="mb-12 break-inside-avoid">
    <h3 className="text-xl font-serif font-bold text-gold-500 mb-4 border-b border-gold-800 pb-2 inline-block">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex justify-between items-center group">
          <span className="text-stone-300 group-hover:text-gold-200 transition-colors">{item}</span>
          <span className="h-px bg-wood-800 flex-grow mx-4 opacity-50"></span>
          <span className="text-gold-700 text-xs">●</span>
        </li>
      ))}
    </ul>
  </div>
);

const Menu: React.FC = () => {
  const menuData = [
    { title: "Live Grill & Tandoor", items: ["Chicken Tikka", "Seekh Kebab", "Fish Tandoori", "Paneer Tikka", "Vegetable Seekh", "Tandoori Soya Chaap"] },
    { title: "Main Course – Non-Veg", items: ["Butter Chicken", "Rogan Josh", "Mutton Stew", "Chicken Curry", "Fish Masala"] },
    { title: "Main Course – Veg", items: ["Shahi Paneer", "Dal Makhani", "Veg Handi", "Mix Veg", "Dum Aloo", "Chole / Rajma (Day Special)"] },
    { title: "Breads", items: ["Butter Naan", "Garlic Naan", "Laccha Paratha", "Tandoori Roti"] },
    { title: "Salads & Starters", items: ["Hummus & Pita", "Corn Salad", "Chatpata Aloo", "Sprouts Mix"] },
    { title: "Rice & Biryani", items: ["Veg Biryani", "Chicken Biryani", "Jeera Rice", "Steam Rice"] },
    { title: "Desserts", items: ["Gulab Jamun", "Jalebi", "Rabri", "Phirni", "Ice Cream", "Brownie"] },
  ];

  return (
    <div className="pt-20 min-h-screen bg-wood-950">
      <div className="bg-wood-900 py-12 text-center border-b border-gold-900/50">
        <h1 className="text-4xl font-serif font-bold text-gold-500 mb-2">Our Grand Buffet Menu</h1>
        <p className="text-stone-400">Unlimited servings of royal delicacies</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
          {menuData.map((section, idx) => (
            <MenuSection key={idx} title={section.title} items={section.items} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-stone-500 text-sm italic">* Menu items subject to seasonal availability. Please ask server for allergen information.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;