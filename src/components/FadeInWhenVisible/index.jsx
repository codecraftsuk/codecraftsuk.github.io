import { motion } from 'framer-motion';
import React from 'react';

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, type: 'easeIn', delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
