import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [awbNumber, setAwbNumber] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if (awbNumber.trim()) {
      alert(`Tracking shipment with AWB Number: ${awbNumber}`);
    } else {
      alert('Please enter a valid AWB Number');
    }
  };

  // Google Play Badge matching the official white-background badge style
  const GooglePlayBadge = () => (
    <a href="https://play.google.com/store/apps/details?id=com.angle.user" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white hover:bg-slate-50 text-[#101518] border border-slate-200 py-1.5 px-3.5 rounded-lg cursor-pointer transition-all duration-300 shadow-sm hover:shadow">
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.25 3.125C3.0625 3.3125 3 3.625 3 4V20C3 20.375 3.0625 20.6875 3.25 20.875L3.3125 20.9375L13.125 11.125V10.875L3.3125 1.0625L3.25 1.125V3.125Z" fill="#00E5FF"/>
        <path d="M16.375 14.375L13.125 11.125V10.875L16.375 7.625L16.4375 7.6875L20.25 9.875C21.3125 10.5 21.3125 11.5 20.25 12.125L16.4375 14.3125L16.375 14.375Z" fill="#FFC107"/>
        <path d="M16.4375 14.3125L13.125 11L3.25 20.875C3.5625 21.1875 4.0625 21.1875 4.625 20.875L16.4375 14.3125Z" fill="#FF3D00"/>
        <path d="M16.4375 7.6875L4.625 1.125C4.0625 0.8125 3.5625 0.8125 3.25 1.125L13.125 11L16.4375 7.6875Z" fill="#4CAF50"/>
      </svg>
      <div className="text-left leading-tight select-none">
        <div className="text-[7px] font-medium text-slate-500 uppercase tracking-widest leading-none font-sans">GET IT ON</div>
        <div className="text-xs font-bold text-slate-900 leading-none mt-0.5 font-sans">Google Play</div>
      </div>
    </a>
  );

  // Apple App Store Badge matching the official white-background badge style
  const AppStoreBadge = () => (
    <div className="flex items-center gap-2.5 bg-white hover:bg-slate-50 text-[#101518] border border-slate-200 py-1.5 px-3.5 rounded-lg cursor-pointer transition-all duration-300 shadow-sm hover:shadow">
      <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
      </svg>
      <div className="text-left leading-tight select-none">
        <div className="text-[7px] font-medium text-slate-500 uppercase tracking-widest leading-none font-sans">Download on the</div>
        <div className="text-xs font-bold text-slate-900 leading-none mt-0.5 font-sans">App Store</div>
      </div>
    </div>
  );

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-76px)] mt-[76px] py-20 flex items-center justify-center overflow-hidden bg-cover bg-no-repeat"
      style={{ 
        backgroundImage: `url('/hero.webp')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      
      {/* Reduced-Opacity Left-to-Right Gradient Overlay: Keeps the photorealistic delivery image extremely bright, clear, and vivid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101518]/30 via-[#101518]/15 to-transparent md:bg-gradient-to-r md:from-[#101518]/35 md:via-[#101518]/10 md:to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full items-center">
        
        {/* Left Column (Spanning 8 spaces) to let white/yellow text float directly on dark left-gradient side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-8 flex flex-col text-left"
        >
          {/* Main Title floating directly on overlay: Entirely colored in Brand Lime-Yellow */}
          <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#D2E805] mb-6 leading-[1.15] font-display shadow-sm">
            India's Trusted Partner For <br />
            Speed and Reliable Delivery
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base sm:text-lg text-slate-200 mb-10 max-w-xl font-medium leading-relaxed drop-shadow-sm">
            Your trusted partner for express parcels, returns, same-day, next-day, 30-min delivery, and fulfillment solutions.
          </p>


          {/* Get App Area */}
          <div className="flex flex-col gap-3 text-left">
            <span 
              className="text-xs font-bold uppercase tracking-wide drop-shadow-sm"
              style={{ color: '#FFFFFF' }}
            >
              Get the app for faster updates
            </span>
            <div className="flex flex-wrap items-center gap-3.5">
              <GooglePlayBadge />
              <AppStoreBadge />
            </div>
          </div>
        </motion.div>

        {/* Right Column (Spanning 4 spaces) is kept empty to let the bright and clear visual delivery action shine */}
        <div className="hidden lg:block lg:col-span-4" />

      </div>
    </section>
  );
};

export default Hero;
