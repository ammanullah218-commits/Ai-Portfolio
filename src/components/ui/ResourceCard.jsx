import React from 'react';

const ResourceCard = ({ title, description, type, downloads, duration, link }) => {
  const getIcon = () => {
    switch(type) {
      case 'PDF': return '📄';
      case 'Video': return '🎥';
      default: return '📚';
    }
  };

  return (
    <div className="bg-secondary/30 rounded-xl p-5 hover:bg-secondary/40 transition-all duration-300">
      <div className="text-3xl mb-3">{getIcon()}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-light/70 text-sm mb-3">{description}</p>
      
      <div className="flex items-center gap-3 text-xs text-light/50 mb-4">
        {downloads && <span>⬇️ {downloads.toLocaleString()} downloads</span>}
        {duration && <span>⏱️ {duration}</span>}
      </div>
      
      <a
        href={link}
        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        Get Resource →
      </a>
    </div>
  );
};

export default ResourceCard;