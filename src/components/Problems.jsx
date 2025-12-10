import React from 'react';
import { motion } from 'framer-motion';

const Problems = () => {
  const problems = [
    {
      icon: '💸',
      title: 'Amenzi și penalități ANAF',
      text: 'Te trezești cu amenzi pentru că declarațiile nu au fost depuse la timp sau corect.',
    },
    {
      icon: '😰',
      title: 'Stres constant cu documentele',
      text: 'Facturile se adună, nu știi ce trebuie plătit și când, totul pare haotic.',
    },
    {
      icon: '❓',
      title: 'Nu înțelegi situația financiară',
      text: 'Vrei să iei decizii pentru firmă dar nu ai o imagine clară a numerelor.',
    },
    {
      icon: '🕐',
      title: 'Contabil indisponibil',
      text: 'Ai nevoie de un răspuns urgent și contabilul tău nu răspunde zile întregi.',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-container bg-background-secondary">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Recunoști Aceste Situații?
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card-premium"
          >
            <div className="text-5xl mb-4">{problem.icon}</div>
            <h3 className="text-xl font-sans font-bold text-text-primary mb-3">
              {problem.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {problem.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
          Dacă te regăsești în oricare din aceste situații, nu ești singur.
          <br />
          Și mai important - există o soluție simplă.
        </p>
        <button
          onClick={() => scrollToSection('servicii')}
          className="btn-primary"
        >
          Descoperă Cum Te Ajutăm
        </button>
      </motion.div>
    </section>
  );
};

export default Problems;
