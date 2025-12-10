import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'După 3 ani cu alt contabil în care aveam constant întârzieri și nelămuriri, am trecut la ContaExpert. E ca și cum respir altfel. Primesc rapoarte clare, răspunsuri rapide și am avut zero probleme cu ANAF-ul.',
      author: 'Andrei M.',
      role: 'Director SRL IT, Cluj-Napoca',
      rating: 5,
    },
    {
      text: 'Am înființat firma cu ei și am rămas pentru contabilitate. M-au ghidat pas cu pas, mi-au explicat tot ce nu înțelegeam și simt că am un partener real, nu doar un furnizor.',
      author: 'Maria P.',
      role: 'Proprietar Magazin Online',
      rating: 5,
    },
    {
      text: 'Cel mai bun lucru? Că pot să-i sun oricând și primesc răspuns. Cu contabilul anterior așteptam și 3 zile pentru o simplă întrebare. Aici, în aceeași zi am claritate.',
      author: 'Cristian D.',
      role: 'Antreprenor în Construcții',
      rating: 5,
    },
    {
      text: 'Recomand cu încredere. Profesionalism, seriozitate și prețuri corecte. Am lucrat cu 2 contabili înainte și diferența e enormă.',
      author: 'Elena S.',
      role: 'PFA - Consultanță',
      rating: 5,
    },
  ];

  return (
    <section className="section-container bg-background-primary">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Ce Spun Clienții Noștri
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-6xl text-accent/20 font-serif">
              "
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-accent text-xl">
                  ⭐
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-text-secondary leading-relaxed mb-6 relative z-10 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="border-t border-border pt-4">
              <p className="font-sans font-bold text-text-primary">
                {testimonial.author}
              </p>
              <p className="text-sm text-text-secondary">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
