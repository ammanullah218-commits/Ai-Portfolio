import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, quote, image, rating, socialLink }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-bold text-xl">{name?.charAt(0) || 'U'}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-light">{name || 'User'}</h4>
          <p className="text-sm text-light/60">{role || 'Student'}</p>
        </div>
      </div>
      
      <div className="mb-4">
        {[...Array(rating || 5)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">★</span>
        ))}
      </div>
      
      <p className="text-light/80 mb-4 italic">"{quote || 'Amazing experience!'}"</p>
      
      {socialLink && (
        <a
          href={socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          Watch their story <span>→</span>
        </a>
      )}
    </motion.div>
  );
};

export default TestimonialCard;