import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: '1',
      icon: '📞',
      title: 'Consultație Gratuită',
      description:
        'Discutăm despre afacerea ta, înțelegem nevoile și îți oferim o propunere clară, fără obligații. Durată: 30 minute.',
    },
    {
      number: '2',
      icon: '📋',
      title: 'Ofertă Personalizată',
      description:
        'Primești o ofertă detaliată cu tot ce include, fără costuri ascunse. Decizi în ritmul tău, fără presiune.',
    },
    {
      number: '3',
      icon: '📁',
      title: 'Predare Documente',
      description:
        'Ne transmiți documentele (fizic sau online). Preluăm tot ce ține de contabilitate și îți explicăm exact ce trebuie să faci lunar.',
    },
    {
      number: '4',
      icon: '✅',
      title: 'Liniște Totală',
      description:
        'De acum încolo, primești rapoarte lunare clare, răspunsuri în 24h și zero griji legate de ANAF sau declarații.',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="proces" className="section-container bg-background-secondary">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          4 Pași Simpli Către Contabilitate Fără Griji
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-border z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative w-full"
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-premium flex items-center justify-center shadow-premium">
                    <span className="text-3xl font-mono font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 h-full min-h-[320px] flex flex-col">
                  <div className="text-4xl mb-4 text-center">{step.icon}</div>
                  <h3 className="text-base md:text-lg font-sans font-bold text-text-primary mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed text-center flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Procesul complet durează sub o săptămână. Și de atunci, singura ta
            grijă legată de contabilitate va fi să ne trimiți facturile.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Începe Cu Consultația Gratuită
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
