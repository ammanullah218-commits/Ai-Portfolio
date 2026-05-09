import React from 'react';
import { motion } from 'framer-motion';

const ProgramCard = ({ title, description, status, badge, icon, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-gradient-to-br from-secondary/40 via-primary/5 to-accent/10 
                 backdrop-blur-xl rounded-2xl p-8 border border-primary/30 
                 hover:border-primary/60 shadow-xl hover:shadow-2xl hover:shadow-primary/20 
                 transition-all duration-300 cursor-pointer h-full"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side - Icon */}
        <div className="flex-shrink-0">
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className="flex-1">
          {/* Badge */}
          {badge && (
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-dark text-sm font-semibold rounded-full mb-4">
              {badge}
            </span>
          )}
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3 group-hover:text-white transition-colors duration-300">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-light/70 text-base mb-5 leading-relaxed">
            {description}
          </p>
          
          {/* Features List - 2 columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-light/60 group-hover:text-light/80 transition-colors duration-300">
                <span className="text-primary text-base">✓</span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
              status === 'active' 
                ? 'bg-gradient-to-r from-primary to-accent text-dark hover:shadow-lg hover:shadow-primary/40' 
                : 'bg-white/10 text-light/40 cursor-not-allowed'
            }`}
            disabled={status !== 'active'}
          >
            {status === 'active' ? 'Enroll Now →' : 'Coming Soon'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;