import { motion } from 'framer-motion';
import React from 'react';

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, type: 'easeIn', delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
