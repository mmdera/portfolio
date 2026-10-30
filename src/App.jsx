import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import ExploreMore from './components/ExploreMore';
import WhatsAppEnquiry from './components/WhatsAppEnquiry';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="editorial-app-root">
      {/* Signature Velocity-Responsive Cursor */}
      <CustomCursor />

      {/* Sticky Editorial Navigation */}
      <Navbar />

      <main id="main-content">
        {/* Cover / Opening Hero */}
        <Hero />

        {/* 01: Selected Work — Four Featured Projects */}
        <FeaturedProjects />

        {/* 02: About The Builder */}
        <About />

        {/* 03: Architectural Creed / Philosophy */}
        <Philosophy />

        {/* 04: Capabilities & Technology Archive */}
        <Capabilities />

        {/* 05: Working Process Sequence */}
        <Process />

        {/* 06: Secondary Archive (LMS & Fyntrack only) */}
        <ExploreMore />

        {/* 07: Direct WhatsApp Commission Form */}
        <WhatsAppEnquiry />
      </main>

      {/* The Colophon Footer */}
      <Footer />
    </div>
  );
}
