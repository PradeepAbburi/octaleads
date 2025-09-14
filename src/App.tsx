import Portfolio from './pages/Portfolio';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';


import Features from './components/Features';
import BusinessStats from './components/BusinessStats';
// import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Industries from './pages/Industries';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import AnimatedTechShapes from './components/AnimatedTechShapes';
import FooterAnimatedBg from './components/FooterAnimatedBg';

import Success from './pages/businessstats/Success';
import Growth from './pages/businessstats/Growth';
import Excellence from './pages/businessstats/Excellence';
import Security from './pages/businessstats/Security';
import Privacy from './pages/businessstats/Privacy';
import Reliability from './pages/businessstats/Reliability';



const HomePage = () => {
  return (
    <div className="relative">
      <AnimatedTechShapes />
      <FooterAnimatedBg />
      <div className="relative z-10">
        <Hero />
        <div className="main-home-section"></div>
        <Features />
        <BusinessStats />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industries/*" element={<Industries />} />
          <Route path="/solutions/*" element={<Solutions />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/businessstats/Success" element={<Success />} />
          <Route path="/businessstats/Growth" element={<Growth />} />
          <Route path="/businessstats/Excellence" element={<Excellence />} />
          <Route path="/businessstats/Security" element={<Security />} />
          <Route path="/businessstats/Privacy" element={<Privacy />} />
          <Route path="/businessstats/Reliability" element={<Reliability />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/casestudy" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;