import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 backface-hidden"
          >
            {front}
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 backface-hidden"
          >
            {back}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlipCard;