import React from 'react';

const AIToolCard = ({ name, description, category, tags, link, featured }) => {
  return (
    <div className={`bg-secondary/30 rounded-xl p-5 border transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl ${
      featured ? 'border-primary' : 'border-gray-700'
    }`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-light">{name}</h3>
        {featured && (
          <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">
            Featured
          </span>
        )}
      </div>
      
      <p className="text-light/70 text-sm mb-3">{description}</p>
      
      <div className="mb-3">
        <span className="text-xs text-primary">{category}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-dark/50 text-light/60 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        Visit Tool
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
};

export default AIToolCard;