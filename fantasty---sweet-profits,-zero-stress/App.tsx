
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import AIHelper from './components/AIHelper';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="pricing">
          <Calculator />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Features />
        <section id="products">
          <Products />
        </section>
        <section id="reviews">
          <Testimonials />
        </section>
        <FooterCTA />
      </main>
      <Footer />
      <AIHelper />
    </div>
  );
};

export default App;
