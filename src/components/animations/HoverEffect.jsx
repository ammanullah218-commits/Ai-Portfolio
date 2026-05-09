import React from 'react';
import { motion } from 'framer-motion';

const HoverEffect = ({ children, scale = 1.05, rotate = 0, className = '' }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: scale,
        rotate: rotate,
        transition: { duration: 0.3, type: 'spring', stiffness: 300 }
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const GlowOnHover = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{
        boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ShakeOnHover = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{
        x: [0, -5, 5, -3, 3, 0],
        transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const PulseOnHover = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, repeat: Infinity, repeatType: 'reverse' }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverEffect;