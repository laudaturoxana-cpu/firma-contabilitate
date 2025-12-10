import React from 'react';
import { motion } from 'framer-motion';

const RoxanaBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 gradient-roxana relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="section-container py-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="text-6xl mb-6"
          >
            🌐
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
          >
            Vrei un Site Profesional Ca Acesta Pentru Afacerea Ta?
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            Creez website-uri moderne și eficiente pentru antreprenori.
            <br />
            Design premium, optimizat pentru conversii, gata în 7 zile.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="https://calendly.com/laudatu-roxana/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-10 py-5 rounded-xl font-sans font-bold text-lg
                     hover:bg-accent hover:text-white transition-all duration-300
                     shadow-premium-hover hover:shadow-premium
                     hover:-translate-y-1 active:translate-y-0"
          >
            📅 Programează o Discuție Gratuită
          </motion.a>

          {/* Author */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/80 mt-6 font-sans"
          >
            Roxana Laudatu • Web Designer & Developer
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default RoxanaBanner;
