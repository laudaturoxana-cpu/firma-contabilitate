import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Cât costă serviciile de contabilitate?',
      answer:
        'Costurile variază în funcție de complexitatea afacerii tale (număr de documente, angajați, tip de activitate). Pachetele încep de la 500 lei/lună pentru firme mici. Solicită o consultație gratuită pentru o ofertă personalizată exactă.',
    },
    {
      question: 'Pot să vă trimit documentele online?',
      answer:
        'Absolut! Peste 80% din clienții noștri lucrează exclusiv online. Poți trimite facturi prin email, WhatsApp sau direct în platforma noastră securizată. Nu trebuie să vii fizic la birou decât dacă preferi.',
    },
    {
      question: 'Ce se întâmplă dacă am avut probleme cu contabilul anterior?',
      answer:
        'Preluăm situația și o analizăm complet. Identificăm eventuale erori sau restanțe și le remediem. Ai liniște că de acum încolo totul va fi în ordine.',
    },
    {
      question:
        'Lucrez cu clienți din alte orașe, nu doar din Cluj. E ok?',
      answer:
        'Perfect! Avem clienți din toată România. Comunicăm online și telefonic, documentele circulă digital. Locația ta nu e un obstacol.',
    },
    {
      question: 'Cât de repede răspundeți la întrebări?',
      answer:
        'Garantăm răspuns în maxim 24 ore lucrătoare pentru orice solicitare. În practică, majoritatea întrebărilor primesc răspuns în câteva ore.',
    },
    {
      question:
        'Puteți să mă ajutați și cu decizii de business, nu doar contabilitate?',
      answer:
        'Da, consultanța fiscală e inclusă în pachetele noastre. Te sfătuim legat de optimizare fiscală, momente bune pentru investiții, angajări și alte decizii financiare.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          Întrebări Frecvente
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-premium overflow-hidden"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 flex items-center justify-between hover:bg-background-secondary/50 transition-colors"
            >
              <span className="font-sans font-semibold text-text-primary pr-8 text-lg">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
