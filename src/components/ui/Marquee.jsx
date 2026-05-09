import React from 'react';

const Marquee = ({ items, direction = 'left', speed = 25 }) => {
  const marqueeItems = [...items, ...items]; // Double for seamless loop

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex gap-8 ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center"
          >
            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;