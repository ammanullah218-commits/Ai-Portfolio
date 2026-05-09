import React from 'react';

const BlogCard = ({ title, excerpt, author, date, category, image, link }) => {
  return (
    <div className="bg-secondary/30 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-5xl">📝</div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">
            {category}
          </span>
          <span className="text-light/40 text-xs">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
          <a href={link}>{title}</a>
        </h3>
        
        <p className="text-light/70 mb-4">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-light/50">By {author}</span>
          <a href={link} className="text-primary hover:text-primary/80 transition-colors">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;