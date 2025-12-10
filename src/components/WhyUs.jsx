import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const differentiators = [
    {
      icon: '⏱️',
      title: 'Răspuns Garantat în 24h',
      description:
        'Nu te lăsăm să aștepți. Orice întrebare primește răspuns în maxim 24 ore lucrătoare.',
    },
    {
      icon: '📱',
      title: 'Acces la Documente Online',
      description:
        'Toate actele tale într-un singur loc, accesibile oricând de pe telefon sau laptop.',
    },
    {
      icon: '🛡️',
      title: 'Zero Amenzi Garantat',
      description:
        'Depunem declarațiile la timp, întotdeauna. În 15 ani, niciun client penalizat din vina noastră.',
    },
    {
      icon: '💬',
      title: 'Comunicare Clară',
      description:
        'Îți explicăm pe înțelesul tău, fără jargon contabil. Întrebările "banale" nu există.',
    },
    {
      icon: '📊',
      title: 'Rapoarte Lunare',
      description:
        'Primești lunar o situație clară: ce s-a plătit, ce urmează, cum stai cu banii.',
    },
    {
      icon: '🤝',
      title: 'Partener, Nu Furnizor',
      description:
        'Ne implicăm în succesul afacerii tale. Suntem alături de tine la fiecare pas.',
    },
  ];

  return (
    <section id="de-ce-noi" className="section-container bg-background-secondary">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          De Ce Aleg Antreprenorii din Cluj
          <br />
          Să Lucreze Cu Noi?
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {differentiators.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-sans font-bold text-text-primary mb-3">
              {item.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
