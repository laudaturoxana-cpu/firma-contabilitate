import React from 'react';
import { motion } from 'framer-motion';

const RoxanaBannerFinal = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 gradient-roxana relative overflow-hidden border-y-4 border-accent"
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="section-container py-0 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Decorative Top Border */}
          <div className="border-t-2 border-b-2 border-white/30 py-12">
            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-center"
            >
              VREI UN WEBSITE PROFESIONAL CA ACESTA?
            </motion.h3>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mb-10"
            >
              <p className="text-xl text-white/95 mb-2 leading-relaxed">
                Creez site-uri moderne, rapide și optimizate pentru conversii.
              </p>
              <p className="text-lg text-white/85 leading-relaxed">
                Perfect pentru antreprenori, consultanți și firme de servicii.
              </p>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 max-w-2xl mx-auto mb-8"
            >
              <p className="text-2xl font-sans font-bold text-white mb-4 text-center">
                📅 PROGRAMEAZĂ O DISCUȚIE GRATUITĂ
              </p>
              <a
                href="https://calendly.com/laudatu-roxana/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xl text-accent hover:text-white transition-colors font-mono bg-white/20 hover:bg-white/30 py-4 px-6 rounded-lg"
              >
                calendly.com/laudatu-roxana/30min
              </a>
            </motion.div>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <p className="text-white/90 font-sans text-lg font-semibold">
                Roxana Laudatu
              </p>
              <p className="text-white/70 font-sans">
                Web Designer & Developer
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RoxanaBannerFinal;
