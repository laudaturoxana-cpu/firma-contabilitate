import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const certifications = [
    'Membru CECCAR',
    'Asigurare Profesională Allianz',
    'Software Certificat ANAF',
    'ISO 27001 Securitate Date',
  ];

  return (
    <section className="section-container bg-background-primary">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-left mb-8">
            Povestea ContaExpert Cluj
          </h2>

          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              De peste 15 ani, ajutăm antreprenori din Cluj și din toată țara
              să aibă afaceri în perfectă ordine fiscală. Am început ca un
              cabinet mic, cu viziunea că antreprenorii merită contabilitate
              care le oferă liniște, nu stres.
            </p>

            <p>
              Astăzi, echipa noastră de 8 specialiști gestionează portofolii
              pentru peste 250 de firme - de la freelanceri și PFA-uri până la
              companii cu zeci de angajați. Fiecare client are un contabil
              dedicat care îi cunoaște afacerea și îi răspunde prompt.
            </p>

            <p>
              Credem că o contabilitate bună nu înseamnă doar cifre corecte.
              Înseamnă să dormi liniștit știind că totul e în ordine, să ai
              timp pentru ce contează și să iei decizii financiare informate.
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-10">
            <p className="font-sans font-semibold text-text-primary mb-4">
              Certificări și afilieri:
            </p>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-background-secondary px-4 py-2 rounded-full text-sm font-sans font-medium text-primary"
                >
                  <span className="text-success">✓</span>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-premium rounded-2xl p-12 shadow-premium-hover">
            {/* Decorative Chart/Graph Illustration */}
            <div className="space-y-6">
              <div className="flex items-end justify-between h-64 gap-4">
                <div className="w-full bg-accent/30 rounded-t-lg backdrop-blur-sm flex items-end justify-center pb-4 hover:bg-accent/40 transition-all duration-300"
                     style={{ height: '60%' }}>
                  <span className="text-white font-mono text-sm">2010</span>
                </div>
                <div className="w-full bg-accent/40 rounded-t-lg backdrop-blur-sm flex items-end justify-center pb-4 hover:bg-accent/50 transition-all duration-300"
                     style={{ height: '75%' }}>
                  <span className="text-white font-mono text-sm">2015</span>
                </div>
                <div className="w-full bg-accent/50 rounded-t-lg backdrop-blur-sm flex items-end justify-center pb-4 hover:bg-accent/60 transition-all duration-300"
                     style={{ height: '90%' }}>
                  <span className="text-white font-mono text-sm">2020</span>
                </div>
                <div className="w-full bg-accent rounded-t-lg backdrop-blur-sm flex items-end justify-center pb-4 hover:bg-accent/90 transition-all duration-300"
                     style={{ height: '100%' }}>
                  <span className="text-white font-mono text-sm">2025</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white/90 font-sans font-semibold text-xl">
                  Creștere constantă, încredere crescândă
                </p>
                <p className="text-white/70 text-sm mt-2">
                  250+ clienți mulțumiți • 15+ ani experiență
                </p>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-premium">
            <div className="text-center">
              <p className="text-4xl font-mono font-bold text-primary">15+</p>
              <p className="text-sm text-text-secondary font-sans">Ani Experiență</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-premium">
            <div className="text-center">
              <p className="text-4xl font-mono font-bold text-primary">250+</p>
              <p className="text-sm text-text-secondary font-sans">Firme Active</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
