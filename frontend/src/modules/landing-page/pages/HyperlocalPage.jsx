import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialsForm from '../components/Testimonials';
const ecommerceImg = '/truck.webp';
import fleetImg from '../../../assets/angle_blog_fleet.webp';
import mapsImg from '../../../assets/angle_edge_maps.webp';
const truckImg = '/truck.webp';
import foodImg from '../../../assets/food_quick_commerce.webp';
import clockCartImg from '../../../assets/clock_cart_quick_commerce.webp';
import pharmacyImg from '../../../assets/pharmacy_dark_store_quick_commerce.webp';
import step1Img from '../../../assets/step_01_requirements.webp';
import step2Img from '../../../assets/step_02_onboarding.webp';
import step3Img from '../../../assets/step_03_management.webp';

const HyperlocalPage = () => {
  const [activeTab, setActiveTab] = useState('quick-commerce');
  const [activeStep, setActiveStep] = useState('step-01');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Ensure page scrolls to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      quote: "Swiggy's partnership with Angle Courier, spanning over eight years, has been one of our success stories. They have been incredibly quick and innovative in both ideas and execution, helping us run and test numerous projects across our food and grocery business. Out of all our partners, they are best in class for customer experience.",
      author: "Adhwaith A",
      logo: (
        <div className="w-10 h-10 rounded-full bg-[#FC8019] flex items-center justify-center text-white font-bold text-xl shadow-sm select-none italic">
          S
        </div>
      )
    }
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const tabs = {
    'quick-commerce': {
      title: 'Quick Commerce',
      image: fleetImg,
      description: 'Ensure your dark store or retail outlet is ready for delivery/courier services with our dedicated manpower and fleet management, utilizing our network of huge delivery partners.'
    },
    'hyperlocal': {
      title: 'Hyperlocal',
      image: mapsImg,
      description: 'Experience point-to-point deliveries for meals, groceries, medicines, and documents. Our dedicated fleet ensures reliable fulfillment within 10 minutes to 2 hours, supported by live map-based tracking.'
    },
    'ev-fleet': {
      title: 'Electric Vehicle Fleet',
      image: truckImg,
      description: 'Transition to green logistics with our fully integrated Electric Vehicle solutions. Reduce carbon emissions while maintaining absolute delivery reliability and lowering last-mile dispatch costs.'
    }
  };

  const steps = {
    'step-01': {
      title: 'Requirement Sharing',
      image: '/angleteam.webp',
      description: 'Client shares manpower requirement at a store level; short gig of <6 hours shared over API.'
    },
    'step-02': {
      title: 'Fleet Onboarding',
      image: '/angke.webp',
      description: 'Angle Courier gauges interest from its 10 lakh+ delivery partners, identifies & trains highest potential candidates.'
    },
    'step-03': {
      title: 'Fleet Management',
      image: '/angleman.webp',
      description: 'Local store leader from Angle Courier manages fleet and order delivery performance on behalf of the client; backfilling attrition in case of a deficit.'
    }
  };

  return (
    <div className="landing-page-wrapper min-h-screen flex flex-col bg-white">
      {/* Consistent Site Header */}
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Hero Section matching the user's uploaded screenshot */}
        <section 
          className="relative min-h-[calc(100vh-72px)] flex items-center bg-cover bg-no-repeat overflow-hidden py-20"
          style={{ 
            backgroundImage: `url('/sco.webp')`,
            backgroundPosition: 'center 20%',
            backgroundSize: 'cover'
          }}
        >
          {/* Lighter obsidian carbon gradient overlay for a much brighter image view while keeping subtle readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#101518]/40 via-[#101518]/15 to-transparent md:bg-gradient-to-r md:from-[#101518]/45 md:via-[#101518]/15 md:to-transparent z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-20 text-left py-16">
            <div className="max-w-2xl">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 font-display leading-tight" style={{ color: '#ffffff' }}>
                <b style={{ color: '#ffffff' }}>Hyperlocal &</b> <br />
                <span className="text-[#D2E805]"><b>Quick Commerce</b></span>
              </h1>

              {/* Bulleted Points */}
              <ul className="space-y-4 text-base sm:text-lg mb-8 font-sans font-medium" style={{ color: '#ffffff' }}>
                <li className="flex items-start gap-3" style={{ color: '#ffffff' }}>
                  <span className="text-[#D2E805] text-xl font-bold leading-none select-none">•</span>
                  <span style={{ color: '#ffffff' }}>Market Leader in 3PL Quick Commerce Solutions</span>
                </li>
                <li className="flex items-start gap-3" style={{ color: '#ffffff' }}>
                  <span className="text-[#D2E805] text-xl font-bold leading-none select-none">•</span>
                  <span style={{ color: '#ffffff' }}>10-minute Grocery Delivery to 60-minute Food and Pharma Services</span>
                </li>
                <li className="flex items-start gap-3" style={{ color: '#ffffff' }}>
                  <span className="text-[#D2E805] text-xl font-bold leading-none select-none">•</span>
                  <span style={{ color: '#ffffff' }}>Electrify Your Fleet with Our EV Solutions</span>
                </li>
              </ul>

              {/* Action Button */}
              <button 
                onClick={() => {
                  const el = document.getElementById('testimonials-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#D2E805] hover:bg-[#b9cc04] text-[#101518] font-bold text-sm py-3 px-6 rounded-lg transition-all duration-300 font-display shadow-lg shadow-[#D2E805]/20 flex items-center gap-2 cursor-pointer scale-100 hover:scale-103 active:scale-97 group w-fit"
              >
                Sign Up Now →
              </button>
            </div>
          </div>
        </section>

        {/* What is it? ? Section */}
        <section className="relative py-24 bg-white z-10 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Heading and Paragraph */}
              <div className="lg:col-span-6 flex flex-col text-left">
                <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-5 mb-8">
                  <b>What is it? ?</b>
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light font-sans max-w-xl">
                  Our cost-effective and convenient courier services deliver in 10 minutes to 2 hours, depending on distance, helping you think ahead with rapid same-day and next-day delivery for food, pharma, and grocery orders.
                </p>
              </div>

              {/* Right Column: Hero Image representing courier delivery */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 aspect-[4/3] w-full">
                  <img loading="lazy" src="/cour.webp"
                    alt="Courier delivery handing package to customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tabs Switcher Bar */}
        <div className="w-full bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-around md:justify-start md:gap-16 items-center">
              {Object.keys(tabs).map((key) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-5 text-sm md:text-base font-bold tracking-tight border-b-4 transition-all duration-300 relative cursor-pointer font-display ${
                      isActive
                        ? 'border-[#00796B] text-[#00796B]'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tabs[key].title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sequence of Informational Sections (Joined with Active Tab Panel) */}
        <div className="bg-[#E8F5F2] w-full pb-24 pt-16">
          
          {/* Active Tab Panel Content */}
          <section className="relative z-10 overflow-hidden mb-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#00796B]/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Image with left accent indicator */}
                  <div className="lg:col-span-6 flex flex-col text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-4 mb-6">
                      <b>{tabs[activeTab].title}</b>
                    </h3>
                    <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 aspect-[4/3] w-full">
                      <motion.img
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        src={tabs[activeTab].image}
                        alt={tabs[activeTab].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Column: Description Text */}
                  <div className="lg:col-span-6 text-left">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-700 text-base md:text-lg leading-relaxed font-normal font-sans max-w-lg"
                    >
                      {tabs[activeTab].description}
                    </motion.p>
                  </div>

                </div>
              </div>
            </div>
          </section>
          
          {/* 1. Highlights & Benefits Section */}
          <section className="max-w-6xl mx-auto px-6 mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-4 mb-8">
              <b>Highlights</b>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Highlight Card 1 */}
              <div className="bg-white rounded-xl p-8 flex items-center justify-center text-center shadow-sm border border-[#00796B]/10 min-h-[140px]">
                <p className="text-[#101518] font-sans font-medium text-lg">Flexible Shifts: 2 to<br/>12 Hours</p>
              </div>
              {/* Highlight Card 2 */}
              <div className="bg-[#D2E805] rounded-xl p-8 flex items-center justify-center text-center shadow-sm min-h-[140px]">
                <p className="text-[#101518] font-sans font-medium text-lg">Automatic<br/>Manpower Refill</p>
              </div>
              {/* Highlight Card 3 */}
              <div className="bg-white rounded-xl p-8 flex items-center justify-center text-center shadow-sm border border-[#00796B]/10 min-h-[140px]">
                <p className="text-[#101518] font-sans font-medium text-lg">Dedicated Fleet<br/>Manager</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-4">
                  <b>What are the<br/>benefits?</b>
                </h2>
              </div>
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="flex items-start gap-4 border-l-2 border-[#00796B] pl-4">
                  <div className="text-[#00796B] shrink-0">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-sans text-base">Over 90% adherence to<br/>the manpower plan</p>
                </div>
                {/* Benefit 2 */}
                <div className="flex items-start gap-4 border-l-2 border-[#00796B] pl-4">
                  <div className="text-[#00796B] shrink-0">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M16 14h.01" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-sans text-base">20% fleet on short shifts<br/>(&lt;6 hours), saving costs</p>
                </div>
                {/* Benefit 3 */}
                <div className="flex items-start gap-4 border-l-2 border-[#00796B] pl-4">
                  <div className="text-[#00796B] shrink-0">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      <path d="M15 9h5" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-sans text-base">100% KYC verified and<br/>skilled fleet</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Who is it for? Section */}
          <section className="max-w-6xl mx-auto px-6 mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-4 mb-6">
              <b>Who is it for?</b>
            </h2>
            <p className="text-slate-700 text-lg font-sans mb-10 max-w-4xl">
              Whatever the size of your business, our Quick Commerce solution is designed to scale your business needs. Angle Courier's Quick Commerce is available for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
                <img loading="lazy" src={foodImg} alt="Food Delivery" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
                <img loading="lazy" src={clockCartImg} alt="Quick Commerce" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
                <img loading="lazy" src={pharmacyImg} alt="Dark Store Pharmacy" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* 3. How does it work? Section */}
          <section className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-4 mb-8">
              <b>How does it work?</b>
            </h2>
            
            {/* Steps Tab Switcher */}
            <div className="border-b border-[#00796B]/20 mb-8">
              <div className="flex gap-8 md:gap-16">
                {['step-01', 'step-02', 'step-03'].map((stepKey, index) => {
                  const isActive = activeStep === stepKey;
                  const label = `Step 0${index + 1}:`;
                  return (
                    <button
                      key={stepKey}
                      onClick={() => setActiveStep(stepKey)}
                      className={`pb-4 text-xl md:text-2xl font-bold tracking-tight border-b-4 transition-colors relative cursor-pointer font-display ${
                        isActive
                          ? 'border-[#00796B] text-[#00796B]'
                          : 'border-transparent text-slate-800 hover:text-[#00796B]/70'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Panel Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl shadow-sm border border-[#00796B]/10 aspect-[4/3] w-full bg-white">
                  <motion.img
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Title and Description */}
              <div className="lg:col-span-5 text-left">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-[#00796B] mb-4 font-display tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-700 text-lg leading-relaxed font-sans max-w-md">
                    {steps[activeStep].description}
                  </p>
                </motion.div>
              </div>
            </div>

          </section>
        </div>

        {/* Testimonials Slider Section */}
        <section className="relative bg-white py-24 px-6 z-10 border-t border-slate-100">
          <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-5 mb-16">
              <b>What Our Clients Say</b>
            </h2>

            <div className="flex items-center justify-between gap-6 md:gap-12 w-full max-w-5xl mx-auto">
              
              {/* Left Prev Arrow Button */}
              <button
                onClick={handlePrevTestimonial}
                className="w-12 h-12 rounded-full bg-[#D2E805] hover:bg-[#b9cc04] flex items-center justify-center text-[#00796B] shadow-md transition-all duration-300 cursor-pointer shrink-0 scale-100 hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-6 h-6 text-[#00796B]" strokeWidth={2.5} />
              </button>

              {/* Central Text Block */}
              <div className="flex-1 flex flex-col items-center text-center px-2 md:px-8">
                <p className="text-slate-600 font-normal text-lg md:text-xl leading-relaxed max-w-4xl mb-8 font-sans">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <span className="font-bold text-[#00796B] text-lg md:text-xl mb-4 font-display">
                  {testimonials[currentTestimonial].author}
                </span>
                <div className="flex items-center justify-center">
                  {testimonials[currentTestimonial].logo}
                </div>
              </div>

              {/* Right Next Arrow Button */}
              <button
                onClick={handleNextTestimonial}
                className="w-12 h-12 rounded-full bg-[#D2E805] hover:bg-[#b9cc04] flex items-center justify-center text-[#00796B] shadow-md transition-all duration-300 cursor-pointer shrink-0 scale-100 hover:scale-105 active:scale-95"
              >
                <ArrowRight className="w-6 h-6 text-[#00796B]" strokeWidth={2.5} />
              </button>

            </div>
          </div>
        </section>

        {/* Lead Intake Form Section */}
        <div id="testimonials-form">
          <TestimonialsForm />
        </div>

        {/* Other Services Section (routing back to Ecommerce & D2C and SME & Personal Courier) */}
        <section className="relative py-24 bg-white z-10 overflow-hidden border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Heading */}
            <div className="text-left mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-5">
                <b>Other Services</b>
              </h2>
            </div>

            {/* 2 Column Grid for Services Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              
              {/* Card 1: Ecommerce */}
              <Link to="/ecommerce" className="flex flex-col text-left group">
                <div className="overflow-hidden rounded-2xl shadow-md bg-slate-50 border border-slate-100 mb-6 aspect-[4/3] w-full">
                  <img loading="lazy" src={ecommerceImg}
                    alt="Ecommerce & D2C"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <h3 className="font-display font-black text-xl text-[#101518] mb-4 group-hover:text-[#218A95] transition-colors duration-200 cursor-pointer">
                  <b>Ecommerce & D2C</b>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  We provide end-to-end delivery services, from standard shipping to same-day and next-day delivery, designed for D2C and E-commerce brands. Our smart logistics and tech ensure speed, efficiency, and great customer experiences.
                </p>
              </Link>

              {/* Card 2: SME */}
              <div className="flex flex-col text-left group cursor-pointer">
                <div className="overflow-hidden rounded-2xl shadow-md bg-slate-50 border border-slate-100 mb-6 aspect-[4/3] w-full">
                  <img loading="lazy" src="/phone1.webp"
                    alt="SME & Personal Courier"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <h3 className="font-display font-black text-xl text-[#101518] mb-4 group-hover:text-[#218A95] transition-colors duration-200 cursor-pointer">
                  <b>SME & Personal Courier</b>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  Angle Courier App powers on-demand pickup and drop services within the city for individuals and small businesses. Affordable, reliable, and backed by India's fastest-growing last-mile fleet.
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* Consistent Site Footer */}
      <Footer />
    </div>
  );
};

export default HyperlocalPage;
