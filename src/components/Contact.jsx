import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    gdpr: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    alert(
      'Mulțumim pentru mesaj! Îți vom răspunde în maxim 24 de ore la adresa de email furnizată.'
    );
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      gdpr: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section id="contact" className="section-container gradient-premium">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
        >
          Hai Să Discutăm Despre Afacerea Ta
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          Programează o consultație gratuită de 30 minute. Analizăm situația
          ta, răspundem la întrebări și îți oferim o propunere clară, fără
          obligații.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-premium-hover"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-sans font-semibold text-text-primary mb-2"
              >
                Nume complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Ion Popescu"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-sans font-semibold text-text-primary mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="ion@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-sans font-semibold text-text-primary mb-2"
              >
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="0740 XXX XXX"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-sans font-semibold text-text-primary mb-2"
              >
                Numele firmei (sau "Vreau să înființez")
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Exemplu SRL"
              />
            </div>

            {/* Service Type */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-sans font-semibold text-text-primary mb-2"
              >
                Tip serviciu dorit
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-white"
              >
                <option value="">Selectează un serviciu</option>
                <option value="contabilitate">Contabilitate lunară</option>
                <option value="salarizare">Salarizare</option>
                <option value="consultanta">Consultanță</option>
                <option value="infiintare">Înființare firmă</option>
                <option value="altele">Altele</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-sans font-semibold text-text-primary mb-2"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Spune-ne pe scurt despre nevoile tale..."
              ></textarea>
            </div>

            {/* GDPR Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="gdpr"
                name="gdpr"
                required
                checked={formData.gdpr}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary"
              />
              <label
                htmlFor="gdpr"
                className="text-sm text-text-secondary leading-relaxed"
              >
                Sunt de acord cu prelucrarea datelor personale conform
                politicii GDPR *
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-accent w-full text-lg">
              Trimite Solicitarea
            </button>

            {/* Bottom Text */}
            <p className="text-center text-sm text-text-secondary mt-4">
              Îți răspundem în maxim 24 ore.{' '}
              <br className="md:hidden" />
              Poți suna direct dacă e urgent.
            </p>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Details */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="space-y-6 text-white">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-sans font-bold text-lg mb-1">Adresă</h3>
                  <p className="text-white/80">
                    Str. Exemplu nr. 10, Cluj-Napoca
                    <br />
                    <span className="text-sm">(Lucrăm predominant online)</span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-sans font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-white/80">
                    <a
                      href="tel:0740XXXXXX"
                      className="hover:text-accent transition-colors"
                    >
                      0740 XXX XXX
                    </a>
                    <br />
                    <span className="text-sm">
                      (Luni-Vineri, 9:00-18:00)
                    </span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-sans font-bold text-lg mb-1">Email</h3>
                  <p className="text-white/80">
                    <a
                      href="mailto:contact@contaexpert.ro"
                      className="hover:text-accent transition-colors"
                    >
                      contact@contaexpert.ro
                    </a>
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">🕐</div>
                <div>
                  <h3 className="font-sans font-bold text-lg mb-1">Program</h3>
                  <p className="text-white/80">
                    Luni - Vineri: 9:00 - 18:00
                    <br />
                    <span className="text-sm">
                      Răspundem la mesaje și în weekend pentru urgențe
                    </span>
                  </p>
                </div>
              </div>

              {/* Calendly */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-lg mb-3">
                    Programare online
                  </h3>
                  <a
                    href="https://calendly.com/contaexpert/consultatie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-sans font-semibold hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Alege o oră convenabilă
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-accent rounded-2xl p-8 shadow-premium-hover text-center"
          >
            <div className="text-5xl mb-4">🆘</div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">
              Urgență fiscală?
            </h3>
            <p className="text-lg text-primary/90 mb-4">
              Sună direct:{' '}
              <a
                href="tel:0740XXXXXX"
                className="font-mono font-bold hover:underline"
              >
                0740 XXX XXX
              </a>
            </p>
            <p className="text-primary/80 text-sm">Suntem aici când ai nevoie.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
