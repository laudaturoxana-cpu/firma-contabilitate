import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import RoxanaBanner from './components/RoxanaBanner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import RoxanaBannerFinal from './components/RoxanaBannerFinal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <WhyUs />
        <About />
        <Process />
        <Testimonials />
        <RoxanaBanner />
        <FAQ />
        <Contact />
        <RoxanaBannerFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
