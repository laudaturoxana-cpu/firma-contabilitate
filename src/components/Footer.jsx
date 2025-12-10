import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-2xl font-serif font-bold">ContaExpert</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Contabilitate de încredere pentru antreprenori din Cluj și din
              toată România. Peste 15 ani de experiență, 250+ firme în
              portofoliu.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Servicii */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4 text-accent">
              Servicii
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('servicii')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  Contabilitate Lunară
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicii')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  Consultanță Fiscală
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicii')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  Salarizare și HR
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicii')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  Înființare Firmă
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicii')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  ReviSal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Linkuri Utile */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4 text-accent">
              Linkuri Utile
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('de-ce-noi')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  Despre Noi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('proces')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  Cum Lucrăm
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4 text-accent">
              Contact
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Cluj-Napoca</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a
                  href="tel:0740XXXXXX"
                  className="hover:text-accent transition-colors"
                >
                  0740 XXX XXX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a
                  href="mailto:contact@contaexpert.ro"
                  className="hover:text-accent transition-colors break-all"
                >
                  contact@contaexpert.ro
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>L-V: 9-18</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-white/60 text-sm text-center md:text-left">
              ©️ {currentYear} ContaExpert Cluj. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors"
              >
                Politica de Confidențialitate
              </a>
              <span className="text-white/30">•</span>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors"
              >
                Termeni și Condiții
              </a>
              <span className="text-white/30">•</span>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-colors"
              >
                GDPR
              </a>
            </div>
          </div>

          {/* Legal Info */}
          <div className="text-center text-white/50 text-xs">
            <p>
              Membru CECCAR | CUI: XXXXXXXX | Nr. Reg. Com.: J12/XXX/XXXX
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-primary rounded-full shadow-premium-hover hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 z-40 flex items-center justify-center"
        aria-label="Înapoi sus"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
