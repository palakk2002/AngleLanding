import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been submitted successfully.');
    setFormData({ name: '', contact: '', email: '', message: '' });
  };

  return (
    <section id="business-leverage" className="relative py-24 bg-white z-10 overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Soft lime-yellow to white gradient card wrap */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#D2E805]/12 via-[#D2E805]/2 to-white border border-slate-100 p-8 md:p-12 lg:p-16 shadow-sm">
          
          {/* Interactive grid split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: Visual Brand & Circular SVG Pointer (span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full text-left gap-8">
              
              {/* Green vertical bar labeled corporate title */}
              <div className="border-l-4 border-[#00796B] pl-5">
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#101518] leading-tight tracking-tight">
                  Gain Leverage For Your Business With Angle
                </h2>
              </div>

              {/* High-fidelity custom circular rotation SVG Graphic */}
              <div className="flex justify-center lg:justify-start py-4">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* Decorative wavy background line */}
                  <svg className="absolute -left-12 top-6 w-72 h-36 opacity-30 pointer-events-none" viewBox="0 0 280 140" fill="none">
                    <path d="M10 80 Q 40 10, 80 80 T 150 80 T 220 80" stroke="#00796B" strokeWidth="2.5" fill="none" strokeDasharray="6 6" />
                  </svg>

                  {/* Circular Text Rotator */}
                  <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_24s_linear_infinite]">
                    <defs>
                      <path 
                        id="circlePath" 
                        d="M 100, 100 m -64, 0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0" 
                      />
                    </defs>
                    
                    {/* Circle Text */}
                    <text fill="#00796B" fontSize="10" fontWeight="800" letterSpacing="4.8">
                      <textPath href="#circlePath">
                        ORDER  &gt;  DISPATCH  &gt;  RELAX  &gt;  
                      </textPath>
                    </text>
                  </svg>

                  {/* Static Center Teal Pointer Arrow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg viewBox="0 0 60 60" className="w-14 h-14 drop-shadow-sm">
                      <path 
                        d="M30 4 L6 50 L28 42 L32 42 L54 50 Z" 
                        fill="#00796B" 
                        transform="rotate(45 30 30)" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Business Intake Lead Form (span 7) */}
            <div className="lg:col-span-7 text-left">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Full name input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Enter your full name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-[#101518] placeholder-slate-300 focus:outline-none focus:border-[#00796B] transition-colors duration-300 shadow-sm text-sm"
                  />
                </div>

                {/* Contact number input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Enter your contact number
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-[#101518] placeholder-slate-300 focus:outline-none focus:border-[#00796B] transition-colors duration-300 shadow-sm text-sm"
                  />
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Enter your email
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@business.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-[#101518] placeholder-slate-300 focus:outline-none focus:border-[#00796B] transition-colors duration-300 shadow-sm text-sm"
                  />
                </div>

                {/* Message input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Enter your message
                  </label>
                  <textarea 
                    rows="3"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business logistics requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-[#101518] placeholder-slate-300 focus:outline-none focus:border-[#00796B] transition-colors duration-300 shadow-sm text-sm resize-none"
                  />
                </div>

                {/* Submit button aligned to the right */}
                <div className="flex justify-end mt-2">
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#D2E805] text-[#101518] font-bold text-sm font-display shadow-sm hover:bg-[#c5d804] transition-colors duration-300 cursor-pointer"
                  >
                    Submit 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
