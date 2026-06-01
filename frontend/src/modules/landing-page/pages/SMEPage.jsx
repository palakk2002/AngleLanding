import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const deliveryHeroImg = '/cou.jpg';

const SMEPage = () => {
  // Ensure page scrolls to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page-wrapper min-h-screen flex flex-col bg-white">
      {/* Consistent Site Header */}
      <Navbar />

      <main className="flex-1 w-full pt-[72px] md:pt-[80px]">
        {/* SME Hero Section */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Text & CTA */}
              <div className="flex flex-col text-left justify-center pt-8 lg:pt-0 pl-0 lg:pl-12">
                
                {/* CSS App Icon (matching the green rounded square with yellow cursor) */}
                <div className="w-24 h-24 bg-[#00796B] rounded-[24px] flex items-center justify-center mb-6 shadow-sm overflow-hidden">
                  <svg className="w-14 h-14 text-[#D2E805] transform -rotate-45 translate-y-1 translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
                  </svg>
                </div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-[48px] font-black text-[#101518] leading-[1.2] tracking-tight font-display mb-4"
                >
                  Download Angle Courier
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-[#101518]/70 text-lg md:text-xl font-medium max-w-md font-sans mb-8 leading-relaxed"
                >
                  On-Demand Delivery Promise In<br />30 Minutes Within The City
                </motion.p>

                {/* App Store Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <a href="#" className="inline-flex transition-transform hover:scale-105 active:scale-95">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-[42px] w-auto" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.angle.user" target="_blank" rel="noopener noreferrer" className="inline-flex transition-transform hover:scale-105 active:scale-95">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[42px] w-auto" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="relative flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative z-10 w-full max-w-lg"
                >
                  <img
                    src={deliveryHeroImg}
                    alt="Delivery partner with a box"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-left">
            
            <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-4 border-[#00796B] pl-5 mb-4">
              <b>Why Choose Angle Courier?</b>
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl mb-12 font-sans leading-relaxed">
              Angle Courier App serves as on-demand delivery solution within the city, efficiently tackling the main challenges faced by D2C brands and emerging businesses through fast, reliable 30-45 minute delivery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-[#E8F5F2] rounded-2xl p-8 flex flex-col justify-between h-full min-h-[280px] shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                    Book Your Pickup
                  </h3>
                  <p className="text-[#101518]/80 text-sm md:text-base font-medium font-sans">
                    Select your pickup location, add parcel details, and schedule a pickup instantly.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end mt-8">
                  {/* Truck with lightning icon */}
                  <svg className="w-20 h-20 text-[#00796B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="2" y="8" width="13" height="10" rx="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11h4.5l2.5 3v4h-7" />
                    <circle cx="6" cy="18" r="2" />
                    <circle cx="17.5" cy="18" r="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10l-1.5 3.5h3L9.5 16" />
                  </svg>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#E8F5F2] rounded-2xl p-8 flex flex-col justify-between h-full min-h-[280px] shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                    Hand Over at Your Doorstep
                  </h3>
                  <p className="text-[#101518]/80 text-sm md:text-base font-medium font-sans">
                    An Angle Courier partner picks up your parcel quickly and moves it into our network.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end mt-8">
                  {/* Hand holding money bag icon */}
                  <svg className="w-20 h-20 text-[#00796B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-3.5 0-4.5 3.5-4.5 7 0 4 3 6 4.5 6s4.5-2 4.5-6c0-3.5-1-7-4.5-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4l-1-2h5l-1 2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.5h3m-3 2h3m-2.5 0A2 2 0 1113 12.5h-2l3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 18c-1.5 1-2 2.5-3 2.5h19a2.5 2.5 0 002.5-2.5" />
                  </svg>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#E8F5F2] rounded-2xl p-8 flex flex-col justify-between h-full min-h-[280px] shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                    Track Every Move
                  </h3>
                  <p className="text-[#101518]/80 text-sm md:text-base font-medium font-sans">
                    Follow your shipment in real time on the app, from pickup to delivery.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end mt-8">
                  {/* Delivery person with box icon */}
                  <svg className="w-20 h-20 text-[#00796B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14c-1.5 0-2 1-2 3v4h5v-5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7c0-2.5 1.5-3 3-3s3 .5 3 3h-6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7h7" />
                    <circle cx="12" cy="10" r="1.5" />
                    <rect x="13" y="13" width="9" height="7" rx="1" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h9" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#E9F3A1] via-[#F3F9D1] to-[#FDFEFA] overflow-hidden">
          
          {/* Decorative faint background wave lines */}
          <svg className="absolute left-0 bottom-0 w-full h-full text-[#00796B]/5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path stroke="currentColor" strokeWidth="0.2" fill="none" d="M -10,30 Q 20,80 50,30 T 110,30" />
            <path stroke="currentColor" strokeWidth="0.15" fill="none" d="M -10,40 Q 20,90 50,40 T 110,40" />
            <path stroke="currentColor" strokeWidth="0.25" fill="none" d="M -10,50 Q 30,10 70,60 T 110,50" />
          </svg>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start">
              
              {/* Left Side: Header & Graphic */}
              <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-12">
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#263152] leading-tight tracking-tight font-display flex items-start border-l-2 md:border-l-[3px] border-[#00796B] pl-4 md:pl-5 mb-16 text-left">
                  <b>Gain Leverage For Your Business With Angle Courier</b>
                </h2>

                {/* Circular Text & Arrow Graphic */}
                <div className="relative w-48 h-48 ml-0 md:ml-12 mt-4 flex items-center justify-center">
                  <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                    {/* SVG for circular text "ORDER > DISPATCH > RELAX >" */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#00796B] font-extrabold tracking-[0.2em] text-[11px] font-sans">
                      <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                      <text>
                        <textPath href="#textPath" startOffset="0%" fill="currentColor">
                          O R D E R &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp; D I S P A T C H &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp; R E L A X &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  {/* Central Teal Cursor Arrow */}
                  <svg className="w-16 h-16 text-[#00796B] transform -rotate-45 translate-y-1 translate-x-1 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-[450px] lg:w-[500px] shrink-0 mt-8 md:mt-0">
                <form className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[13px] md:text-sm font-medium text-slate-500 ml-1">Enter your full name</label>
                    <input 
                      type="text" 
                      className="w-full h-11 md:h-12 bg-white rounded-md border border-white px-4 outline-none focus:border-[#00796B] focus:ring-1 focus:ring-[#00796B] transition-all shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[13px] md:text-sm font-medium text-slate-500 ml-1">Enter your contact number</label>
                    <input 
                      type="tel" 
                      className="w-full h-11 md:h-12 bg-white rounded-md border border-white px-4 outline-none focus:border-[#00796B] focus:ring-1 focus:ring-[#00796B] transition-all shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[13px] md:text-sm font-medium text-slate-500 ml-1">Enter your email</label>
                    <input 
                      type="email" 
                      className="w-full h-11 md:h-12 bg-white rounded-md border border-white px-4 outline-none focus:border-[#00796B] focus:ring-1 focus:ring-[#00796B] transition-all shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[13px] md:text-sm font-medium text-slate-500 ml-1">Enter your message</label>
                    <textarea 
                      className="w-full h-24 md:h-28 bg-white rounded-md border border-white p-4 outline-none focus:border-[#00796B] focus:ring-1 focus:ring-[#00796B] transition-all resize-none shadow-sm"
                    ></textarea>
                  </div>
                </form>
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

export default SMEPage;
