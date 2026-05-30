import React from 'react';
import '../styles/landing.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Workflow from '../components/Workflow';
import DashboardPreview from '../components/DashboardPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="landing-page-wrapper relative min-h-screen bg-[#030014] text-slate-100 flex flex-col antialiased">
      
      {/* Decorative floating grid in the top background scoped to the landing page */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Sticky layout navigation */}
      <Navbar />

      {/* Structured visual sections stack */}
      <main className="flex-1 w-full relative z-10">
        
        {/* Hero Area */}
        <Hero />

        {/* Stats Row */}
        <Stats />

        {/* Core Feature Grids */}
        <Features />

        {/* Horizontal & Vertical workflows timeline */}
        <Workflow />

        {/* Interactive mock dashboards switcher */}
        <DashboardPreview />

        {/* Value validation list */}
        <WhyChooseUs />

        {/* Autoplay Testimonials carousels */}
        <Testimonials />

        {/* Scale-friendly plans matrix */}



      </main>

      {/* Consolidated information footer */}
      <Footer />

    </div>
  );
}

export default LandingPage;
