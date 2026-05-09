import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = '1234567890'; // Replace with actual number
  const message = encodeURIComponent('Hello! I\'m interested in your AI programs.');

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.527 1.06 3.531l-1.113 3.656 3.821-1.09c.983.51 2.086.78 3.201.78 3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.767-5.766-5.767l-.003-.001zm0 9.554c-.88 0-1.732-.232-2.464-.663l-2.036.581.583-1.978c-.46-.74-.705-1.583-.704-2.442.001-2.699 2.197-4.894 4.896-4.894 2.698 0 4.893 2.195 4.894 4.893.001 2.699-2.196 4.894-4.894 4.894l-.275.009z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;