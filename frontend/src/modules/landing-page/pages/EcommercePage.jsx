import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialsForm from '../components/Testimonials';
import ecomHeroBgImg from '../../../assets/ecom_hero_bg.png';
const whatIsTruckImg = '/truck.jpg';
import reverseParcelImg from '../../../assets/angle_blog_reverse.png';
import expressParcelImg from '../../../assets/angle_service_ecommerce.png';
import primeImg from '../../../assets/angle_delivery_hero_premium.png';
import criticalLogisticsImg from '../../../assets/angle_blog_fleet.png';

const EcommercePage = () => {
  const [activeTab, setActiveTab] = useState('Reverse Parcel');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Angle Courier Service's reverse pickup performance is the fastest we've ever seen. The quality check at the doorstep allows us to conduct instant refunds to customers without worry. Additionally, their Same Day Delivery service has revolutionized our operations, reducing our average delivery time by nearly a full day.",
      author: "Sumit Maji",
      logo: (
        <div className="w-10 h-10 rounded-full bg-[#FF1493] flex items-center justify-center text-white font-black text-[9px] italic tracking-tighter shadow-sm select-none">
          NYKAA
        </div>
      )
    },
    {
      quote: "Angle Courier Service is our single largest partner for omnichannel fulfillment. Their reliable services and extensive network have significantly supported the growth of the Pincode platform.",
      author: "Lalit Singh",
      logo: (
        <div className="w-10 h-10 rounded-full bg-[#5f259f] flex items-center justify-center text-white font-extrabold text-lg shadow-sm select-none">
          पे
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

  // Automatically scroll to the top of the page when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    {
      id: 'Reverse Parcel',
      title: 'Reverse Parcel',
      image: reverseParcelImg,
      description: 'As industry leaders in reverse logistics and return logistics, we provide thorough doorstep quality checks, quick refunds, seamless returns, and hassle-free exchanges.'
    },
    {
      id: 'Express Parcel',
      title: 'Express Parcel',
      image: '/truck.jpg',
      description: 'With our wide distribution network and automated sorting terminals, we guarantee rapid transit times and on-time delivery for standard and urgent shipments across the nation.'
    },
    {
      id: 'Prime',
      title: 'Prime',
      image: primeImg,
      description: 'Experience next-level logistics priority with same-day and next-morning deliveries, premium safe-box handling, and dedicated round-the-clock client support.'
    },
    {
      id: 'Critical Logistics',
      title: 'Critical Logistics',
      image: criticalLogisticsImg,
      description: 'Specially designed for temperature-sensitive biologicals, high-value assets, and heavy cargo machinery with live telemetry tracking and real-time custom dispatch parameters.'
    }
  ];

  return (
    <div className="ecommerce-page-scoped-wrapper relative min-h-screen bg-[#030014] text-slate-100 flex flex-col antialiased">
      {/* Dynamic style block to isolate page typography from global stylesheet overrides */}
      <style>{`
        .ecommerce-page-scoped-wrapper h1 {
          color: #D2E805 !important;
        }
        .ecommerce-page-scoped-wrapper .bullet-text {
          color: #ffffff !important;
        }
        .ecommerce-page-scoped-wrapper .bullet-dot {
          color: #D2E805 !important;
        }
      `}</style>

      {/* Consistent Site Header */}
      <Navbar />

      {/* Hero Section with Winding Highway and Truck Background */}
      <main className="flex-grow pt-[72px]">
        <section className="relative w-full min-h-[calc(100vh-72px)] flex items-center justify-start overflow-hidden py-16">
          {/* Background video cover */}
          <div className="absolute inset-0 z-0">
            <video 
              src="/forwarding_video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
            {/* Lighter dark overlay gradient to ensure a bright and vibrant background video while keeping text legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#101518]/50 via-[#101518]/25 to-transparent md:bg-gradient-to-r md:from-[#101518]/55 md:via-[#101518]/25 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Hero Section Content Container aligned exactly to reference image */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full py-10 flex flex-col justify-center text-left">
            <div className="max-w-2xl">
              {/* Vibrant Brand Yellow Title */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#D2E805] font-display drop-shadow-md">
                Ecommerce & D2C
              </h1>

              {/* Bold Bullet Point Features */}
              <ul className="space-y-4 mb-8 pl-1">
                <li className="flex items-start gap-3.5 text-lg sm:text-xl font-bold font-sans drop-shadow-sm">
                  <span className="bullet-dot text-2xl leading-none select-none">•</span>
                  <span className="bullet-text">Market Leader in Same Day Delivery Shipments</span>
                </li>
                <li className="flex items-start gap-3.5 text-lg sm:text-xl font-bold font-sans drop-shadow-sm">
                  <span className="bullet-dot text-2xl leading-none select-none">•</span>
                  <span className="bullet-text">Market Leader in Reverse Pick-up Shipments</span>
                </li>
                <li className="flex items-start gap-3.5 text-lg sm:text-xl font-bold font-sans drop-shadow-sm">
                  <span className="bullet-dot text-2xl leading-none select-none">•</span>
                  <span className="bullet-text">Customised Speed Shipping at Low Cost</span>
                </li>
              </ul>

              {/* Interactive Ship Now button matching reference design */}
              <button
                onClick={() => window.location.href = '#ship-now'}
                className="bg-[#D2E805] hover:bg-[#b9cc04] text-[#101518] font-bold text-sm py-3 px-6 rounded-lg transition-all duration-300 font-display shadow-lg shadow-[#D2E805]/20 flex items-center gap-2 cursor-pointer scale-100 hover:scale-103 active:scale-97 group w-fit"
              >
                <span>Ship Now</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">➔</span>
              </button>
            </div>
          </div>
        </section>

        {/* Beautiful Stats Card Banner matching reference image exactly */}
        <section className="relative bg-white py-12 px-6 z-10">
          <div className="max-w-6xl mx-auto bg-[#FFFEE5] border border-[#F4EFC2] rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center text-center">
              
              {/* Stat 1: Parcels Delivered */}
              <div className="flex flex-col items-center">
                <div className="mb-3 text-[#101518]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                    <path d="m3.3 7 8.7 5 8.7-5"/>
                    <path d="M12 22V12"/>
                    <circle cx="18" cy="15" r="2.5" className="fill-[#FFFEE5] stroke-slate-800" strokeWidth="1.5"/>
                    <path d="m17 15 1 1 2-2" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-[#101518] mb-1 font-display">1 Billion+</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">PARCELS DELIVERED</span>
              </div>

              {/* Stat 2: City Presence */}
              <div className="flex flex-col items-center">
                <div className="mb-3 text-[#101518]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                    <line x1="9" y1="22" x2="9" y2="16"/>
                    <line x1="15" y1="22" x2="15" y2="16"/>
                    <line x1="9" y1="16" x2="15" y2="16"/>
                    <path d="M8 6h2v2H8V6zm6 0h2v2h-2V6zm-6 4h2v2H8v-2zm6 0h2v2h-2v-2zm-6 4h2v2H8v-2zm6 0h2v2h-2v-2z"/>
                  </svg>
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-[#101518] mb-1 font-display">2,500+</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">CITY PRESENCE</span>
              </div>

              {/* Stat 3: Pin Code Coverage */}
              <div className="flex flex-col items-center">
                <div className="mb-3 text-[#101518]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-[#101518] mb-1 font-display">15,100+</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">PIN CODE COVERAGE</span>
              </div>

              {/* Stat 4: Trucks Running Daily */}
              <div className="flex flex-col items-center">
                <div className="mb-3 text-[#101518]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-[#101518] mb-1 font-display">3,000+</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">TRUCKS RUNNING DAILY</span>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic 'What is it ?' Split Section matching reference design */}
        <section className="relative bg-white py-16 px-6 z-10 border-t border-slate-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-5 mb-8">
                What is it ?
              </h2>
              <div className="space-y-6 text-[#101518]/90 font-medium text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  Angle Courier Service provides a range of delivery/courier services, from standard shipping to same day & next day delivery, tailored for D2C & E-commerce businesses.
                </p>
                <p>
                  Our advanced logistics and technology ensure efficient routes, fast transit times, and excellent customer experiences.
                </p>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <img 
                src={whatIsTruckImg} 
                alt="Angle Courier Service Branded Freight Truck over geometric backing" 
                className="w-full max-w-md object-contain drop-shadow-lg scale-102 hover:scale-105 transition-transform duration-300"
              />
            </div>

          </div>
        </section>

        {/* Interactive Tabs Banner Section matching reference design exactly */}
        <section className="relative bg-white pt-8 pb-16 px-6 z-10 border-t border-slate-100">
          <div className="max-w-6xl mx-auto flex flex-col">
            
            {/* Tabs Header Grid */}
            <div className="w-full bg-white rounded-xl shadow-md border border-slate-100 flex flex-row overflow-x-auto overflow-y-hidden mb-0 scrollbar-thin">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[150px] py-4 text-center text-sm md:text-base font-extrabold tracking-wide font-display transition-all duration-300 border-b-4 cursor-pointer ${isActive ? 'text-[#00796B] border-[#00796B] bg-[#E8F5F2]/20' : 'text-slate-500 border-transparent hover:text-[#00796B] hover:bg-slate-50'}`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>

            {/* Active Content Block in soft mint/teal container */}
            <div className="w-full bg-[#E8F5F2]/90 border border-[#CDEAE1] rounded-3xl p-6 md:p-8 shadow-sm mt-8 text-left transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Visual Column */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-full rounded-2xl overflow-hidden shadow-md border border-[#B1E0D1]/40 relative group">
                    <img 
                      src={tabs.find(t => t.id === activeTab).image} 
                      alt={tabs.find(t => t.id === activeTab).title}
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </div>

                {/* Copy Column */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-4 mb-6">
                    {tabs.find(t => t.id === activeTab).title}
                  </h3>
                  <p className="text-[#101518]/90 font-medium text-base sm:text-lg leading-relaxed font-sans">
                    {tabs.find(t => t.id === activeTab).description}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Testimonials Slider Section */}
        <section className="relative bg-white py-20 px-6 z-10 border-t border-slate-100">
          <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-5 mb-12">
              What Our Clients Say
            </h2>

            <div className="flex items-center justify-between gap-6 md:gap-12 w-full max-w-5xl mx-auto">
              
              {/* Left Prev Arrow Button */}
              <button
                onClick={handlePrevTestimonial}
                className="w-12 h-12 rounded-full bg-[#D2E805] hover:bg-[#b9cc04] flex items-center justify-center text-[#00796B] shadow-md transition-all duration-300 cursor-pointer shrink-0 scale-100 hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-5 h-5 text-[#00796B]" strokeWidth={2.5} />
              </button>

              {/* Central Text Block */}
              <div className="flex-1 flex flex-col items-center text-center px-2 md:px-8">
                <p className="text-[#101518]/90 font-medium text-lg md:text-xl leading-relaxed max-w-3xl mb-6 font-sans italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <span className="font-bold text-[#00796B] text-base md:text-lg mb-4">
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
                <ArrowRight className="w-5 h-5 text-[#00796B]" strokeWidth={2.5} />
              </button>

            </div>
          </div>
        </section>

        {/* Lead Intake Form / Leverage Business Section */}
        <TestimonialsForm />

        {/* Other Services Section */}
        <section className="relative py-24 bg-white z-10 overflow-hidden border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Left aligned title matching reference design */}
            <div className="text-left mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-5">
                <b>Other Services</b>
              </h2>
            </div>

            {/* 2 Column Grid for Services Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              
              {/* Card 1: Hyperlocal */}
              <Link to="/hyperlocal" className="flex flex-col text-left group">
                <div className="overflow-hidden rounded-2xl shadow-md bg-slate-50 border border-slate-100 mb-6 aspect-[4/3] w-full">
                  <img
                    src="/scooty.jpg"
                    alt="Hyperlocal & Quick Commerce"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <h3 className="font-display font-black text-xl text-[#101518] mb-4 group-hover:text-[#218A95] transition-colors duration-200 cursor-pointer">
                  <b>Hyperlocal & Quick Commerce</b>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans mt-0">
                  Enjoy rapid deliveries within hours or choose flexible slots for same day or next day service. From groceries to medicines and more, with real-time tracking and reliable service.
                </p>
              </Link>

              {/* Card 2: SME */}
              <div className="flex flex-col text-left">
                <div className="overflow-hidden rounded-2xl shadow-md bg-slate-50 border border-slate-100 mb-6 group cursor-pointer aspect-[4/3] w-full">
                  <img
                    src="/phone1.jpg"
                    alt="SME & Personal Courier"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <h3 className="font-display font-black text-xl text-[#101518] mb-4 hover:text-[#218A95] transition-colors duration-200 cursor-pointer">
                  <b>SME & Personal Courier</b>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  Angle Courier App powers on-demand pickup and drop services within the city for individuals and small businesses. Affordable, reliable, and backed by India's fastest-growing last-mile fleet.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Trusted Partners Logo Banner Area */}
        <div className="w-full bg-[#E8F5F2] py-12 px-6 border-t border-[#00796B]/10">
          <div className="max-w-7xl mx-auto">
            
            {/* Section header */}
            <h3 className="text-center text-xl md:text-2xl font-extrabold text-[#101518] tracking-tight mb-8 font-display">
              Partner Brands
            </h3>

            {/* Infinite sliding logo marquee */}
            <div className="relative w-full overflow-hidden py-4">
              {/* Left & Right gradient fades for premium look */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#E8F5F2] to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#E8F5F2] to-transparent z-20 pointer-events-none" />
              
              <motion.div
                className="flex items-center gap-x-16 md:gap-x-24 w-max"
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                }}
              >
                {/* Loop logos three times for seamless wrap-around marquee */}
                {[...Array(3)].map((_, loopIdx) => (
                  <React.Fragment key={loopIdx}>
                    {/* 1. Myntra */}
                    <div className="flex items-center gap-2 select-none opacity-85 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 bg-gradient-to-tr from-[#FF3F6C] via-[#F15535] to-[#F1C40F] rounded-md flex items-center justify-center text-white font-extrabold text-[11px] italic shadow-sm">
                        M
                      </div>
                      <span className="text-base md:text-lg font-bold text-slate-800 tracking-tight font-sans">
                        Myntra
                      </span>
                    </div>

                    {/* 2. Flipkart */}
                    <div className="flex items-center gap-2 select-none opacity-85 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 bg-[#2874F0] rounded-md flex items-center justify-center text-[#FFE11B] shadow-sm">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
                        </svg>
                      </div>
                      <span className="text-xl md:text-2xl font-extrabold italic text-[#2874F0] tracking-tight font-sans">
                        Flipkart
                      </span>
                    </div>

                    {/* 3. Flipkart Minute */}
                    <div className="flex items-center gap-2 select-none opacity-85 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-lg md:text-xl font-extrabold italic text-[#2874F0] tracking-tight font-sans">
                        Flipkart
                      </span>
                      <span className="text-[9px] md:text-[10px] font-black bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 py-0.5 rounded-full italic tracking-wider uppercase shadow-sm">
                        minute
                      </span>
                    </div>

                    {/* 4. Shopsy */}
                    <div className="flex items-center gap-2 select-none opacity-85 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-5.5 h-5.5 bg-[#FF4F64] rounded-full flex items-center justify-center text-white shadow-sm">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <span className="text-xl md:text-2xl font-black text-[#FF4F64] lowercase tracking-wide font-display">
                        shopsy
                      </span>
                    </div>

                    {/* 5. Snapdeal */}
                    <div className="flex items-center gap-2 select-none opacity-85 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-5 h-5 bg-[#E40046] rotate-45 flex items-center justify-center shadow-md rounded-[3px]">
                        <div className="w-2.5 h-2.5 bg-white rounded-[1px]" />
                      </div>
                      <span className="text-lg md:text-xl font-extrabold text-[#E40046] tracking-tight font-sans">
                        snapdeal
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </main>

      {/* Consistent Site Footer */}
      <Footer />
    </div>
  );
};

export default EcommercePage;
