import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://picsum.photos/600/400?random=1", caption: "Live Tandoor & Grill" },
    { src: "https://picsum.photos/600/400?random=2", caption: "Royal Ambience" },
    { src: "https://picsum.photos/600/400?random=3", caption: "Unlimited Buffet Spread" },
    { src: "https://picsum.photos/600/400?random=4", caption: "Dessert Counter" },
    { src: "https://picsum.photos/600/400?random=5", caption: "Family Dining Area" },
    { src: "https://picsum.photos/600/400?random=6", caption: "Signature Cocktails" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-wood-950">
       <div className="bg-wood-900 py-12 text-center border-b border-gold-900/50">
        <h1 className="text-4xl font-serif font-bold text-gold-500 mb-2">Gallery</h1>
        <p className="text-stone-400">A Glimpse of the Royal Experience</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-sm border border-wood-800 shadow-lg">
              <img 
                src={img.src} 
                alt={img.caption} 
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-gold-100 font-serif text-lg p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;