import { motion } from 'framer-motion';

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="container mx-auto px-6 max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}