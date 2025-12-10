import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '📊',
      name: 'Contabilitate Lunară Completă',
      description:
        'Preluăm integral evidența contabilă a firmei tale. Înregistrăm documentele, pregătim declarațiile fiscale, depunem la termen și îți oferim rapoarte lunare clare.',
      includes: [
        'Înregistrare facturi și documente',
        'Declarații fiscale (TVA, 112, 100, 101, 300)',
        'Situații financiare anuale',
        'Raport lunar cu explicații',
        'Consultanță fiscală inclusă',
      ],
      price: 'De la 500 lei/lună',
      priceDetails: '(în funcție de documente)',
      cta: 'Solicită Ofertă Personalizată',
    },
    {
      icon: '💡',
      name: 'Consultanță și Optimizare Fiscală',
      description:
        'Analizăm situația ta fiscală și identificăm modalități legale de optimizare. Te ajutăm să plătești taxe corecte, nu mai mult decât trebuie.',
      includes: [
        'Analiză fiscală completă',
        'Recomandări de optimizare',
        'Planificare fiscală anuală',
        'Suport la controale ANAF',
        'Răspunsuri la întrebări oricând',
      ],
      price: 'De la 200 lei/consultație',
      priceDetails: 'sau inclus în pachet',
      cta: 'Programează Consultație',
    },
    {
      icon: '👥',
      name: 'Salarizare și Administrare Personal',
      description:
        'Calculăm salariile, întocmim documentele de HR, depunem declarațiile pentru angajații tăi. Tu te ocupi de echipă, noi de hârtii.',
      includes: [
        'Calcul salarii și contribuții',
        'Contracte de muncă și acte adiționale',
        'Declarații 112, D100',
        'Adeverințe și documente angajați',
        'Consultanță legislație muncii',
      ],
      price: '30 lei/angajat/lună',
      priceDetails: '',
      cta: 'Cere Ofertă HR',
    },
    {
      icon: '🏢',
      name: 'Înființare Firmă și Consultanță Start-up',
      description:
        'Te ghidăm de la idee la firmă funcțională. Alegem împreună forma juridică potrivită, te ajutăm cu actele și îți explicăm tot ce trebuie să știi de la început.',
      includes: [
        'Consiliere formă juridică (SRL, PFA, II)',
        'Pregătire documente înființare',
        'Înregistrare la Registrul Comerțului',
        'Obținere certificat ONRC',
        'Ghid complet primii pași',
      ],
      price: 'De la 800 lei',
      priceDetails: '(tot inclus)',
      cta: 'Vreau Să Înființez o Firmă',
    },
    {
      icon: '📁',
      name: 'ReviSal și Evidență Personal',
      description:
        'Gestionăm integral evidența în ReviSal și toate documentele legate de personal. Fără întârzieri, fără erori, fără amenzi.',
      includes: [
        'Înregistrări ReviSal în 24h',
        'Contracte și acte adiționale',
        'Suspendări, încetări, modificări',
        'Arhivare electronică',
        'Rapoarte pentru ITM',
      ],
      price: 'Inclus în serviciul de salarizare',
      priceDetails: '',
      cta: 'Solicită Informații',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="servicii" className="section-container bg-background-primary">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Servicii Complete de Contabilitate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Tot ce ai nevoie pentru o firmă în perfectă ordine fiscală
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card-premium flex flex-col h-full"
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{service.icon}</div>

            {/* Service Name */}
            <h3 className="text-2xl font-sans font-bold text-text-primary mb-4">
              {service.name}
            </h3>

            {/* Description */}
            <p className="text-text-secondary mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Includes */}
            <div className="mb-6 flex-grow">
              <p className="font-sans font-semibold text-text-primary mb-3">
                Include:
              </p>
              <ul className="space-y-2">
                {service.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-text-secondary text-sm"
                  >
                    <span className="text-success mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="font-mono text-xl font-bold text-primary">
                {service.price}
              </p>
              {service.priceDetails && (
                <p className="text-sm text-text-secondary">
                  {service.priceDetails}
                </p>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-accent w-full"
            >
              {service.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
