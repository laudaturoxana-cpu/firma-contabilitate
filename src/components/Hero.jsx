import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { icon: '🏢', text: '250+ Firme în Portofoliu' },
    { icon: '📊', text: '15+ Ani Experiență' },
    { icon: '⭐', text: '99% Clienți Mulțumiți' },
    { icon: '🕐', text: 'Răspuns în 24h' },
  ];

  const badges = [
    '✓ Membru CECCAR',
    '✓ Asigurare profesională',
    '✓ Consultanță inclusă în pachet',
    '✓ Software cloud securizat',
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text-primary mb-6 leading-tight"
          >
            Contabilitate Impecabilă.
            <br />
            <span className="text-primary">
              Tu Te Ocupi de Afacere, Noi de Cifre.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Suntem firma de contabilitate din Cluj care îți oferă liniștea că
            totul este în ordine. Expertiză financiară de peste 15 ani,
            tehnologie modernă și răspunsuri în 24 de ore.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Programează Consultație Gratuită
            </button>
            <button
              onClick={() => scrollToSection('servicii')}
              className="btn-secondary"
            >
              Vezi Serviciile Noastre
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-sm font-sans font-semibold text-text-primary text-center">
                  {stat.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-success font-sans font-medium text-sm"
              >
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
