import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import handshakeImg from '../../../assets/partner_handshake.webp';

const ClientPartnersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="client-partners-scoped-wrapper min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Inline CSS for marquee animation and layout enhancements */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: max-content;
            animation: marquee 18s linear infinite;
          }
          .animate-marquee-infinite:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* First Section: Hero matching screenshot exactly, but enhanced */}
        <section className="relative w-full pt-8 pb-16 md:pt-10 md:pb-24 px-6 md:px-12 bg-white overflow-hidden">
          {/* Premium Ambient Background Auras */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(210,232,5,0.06)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl z-0" />
          <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(0,121,107,0.04)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl z-0" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Title and Infinite Carousel */}
            <div className="lg:col-span-6 flex flex-col text-left space-y-10">
              <h1 
                className="text-4xl sm:text-5xl md:text-[52px] tracking-tight leading-[1.12] text-[#2D2A26]"
                style={{ fontWeight: 750, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                Apply To Become<br />
                A Client Partner
              </h1>

              {/* Enhanced Partner Carousel Container */}
              <div className="w-full bg-[#E8F5F2]/20 border border-[#00796B]/5 rounded-2xl p-6 relative overflow-hidden shadow-sm backdrop-blur-sm">
                <p className="text-xs font-bold text-[#00796B]/60 uppercase tracking-widest mb-4 font-sans text-left">
                  Trusted by India's Largest Brands
                </p>
                
                {/* Carousel Ticker Outer Wrapper */}
                <div className="w-full overflow-hidden relative">
                  {/* Left & Right gradient fade masks for clean high-end aesthetics */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fafdfc] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fafdfc] to-transparent z-10 pointer-events-none" />

                  {/* Scrolling ticker */}
                  <div className="animate-marquee-infinite flex gap-12 items-center select-none">
                    {[1, 2, 3].map((batchIdx) => (
                      <React.Fragment key={batchIdx}>
                        {/* Brand 1: myntra */}
                        <div className="flex items-center">
                          <span className="font-extrabold text-xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#E01E5A] to-[#FF5722] font-display uppercase italic">Myntra</span>
                        </div>

                        {/* Brand 2: flipkart */}
                        <div className="flex items-center">
                          <span className="font-black text-xl tracking-tight text-[#1F74E4] font-display">Flip<span className="text-[#FFC200]">kart</span></span>
                        </div>

                        {/* Brand 3: flipkart minute */}
                        <div className="flex items-center">
                          <span className="font-extrabold text-lg tracking-tight text-[#1F74E4] font-display flex items-center gap-1">
                            Flipkart <span className="bg-[#00796B] text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded tracking-widest font-sans">Minute</span>
                          </span>
                        </div>

                        {/* Brand 4: shopsy */}
                        <div className="flex items-center">
                          <span className="font-black text-xl tracking-tight text-[#FF5722] font-display">shop<span className="text-[#00796B]">sy</span></span>
                        </div>

                        {/* Brand 5: snapdeal */}
                        <div className="flex items-center">
                          <span className="font-bold text-xl tracking-tight text-[#E01E5A] font-sans">snap<span className="text-black font-medium">deal</span></span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Handshake Image */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="relative w-full max-w-xl aspect-[1.38] overflow-hidden rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-500">
                <img loading="lazy" src={handshakeImg} 
                  alt="Client Partners Handshake" 
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Premium Informational Form / Call-to-action Section */}
        <section className="relative bg-[#FFFDE8] py-20 px-6 z-10 border-t border-[#E3D96B]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] font-display mb-4">
              Grow Your Business with Angle Courier
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base font-sans leading-relaxed">
              Partner with India's fastest-growing logistics network. Fill out the application form below and our team will get in touch within 24 hours.
            </p>

            <form className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 text-left max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mokobara"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00796B] focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Contact Person</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00796B] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="partner@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00796B] focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00796B] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Monthly Shipment Volume</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00796B] focus:bg-white transition-all">
                  <option>&lt; 1,000 shipments / month</option>
                  <option>1,000 - 10,000 shipments / month</option>
                  <option>10,000 - 50,000 shipments / month</option>
                  <option>50,000+ shipments / month</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  className="w-full bg-[#00796B] hover:bg-[#005c51] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-[#00796B]/10 hover:shadow-lg cursor-pointer text-center block text-sm"
                >
                  Submit Partnership Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClientPartnersPage;
