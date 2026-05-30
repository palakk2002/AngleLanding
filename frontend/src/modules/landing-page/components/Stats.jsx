import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Warehouse, MapPin, Users } from 'lucide-react';

const Stats = () => {
  const statsList = [
    {
      icon: <Package className="w-8 h-8 text-[#00a86b]" />,
      value: '1 Billion+',
      label: 'PARCELS DELIVERED',
    },
    {
      icon: <Truck className="w-8 h-8 text-[#00a86b]" />,
      value: '3,000+',
      label: 'TRUCKS',
    },
    {
      icon: <Warehouse className="w-8 h-8 text-[#00a86b]" />,
      value: '4.5 Million+',
      label: 'SQ. FT. OF OPERATIONAL SPACE',
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#00a86b]" />,
      value: '15,100+',
      label: 'PIN CODES',
    },
    {
      icon: <Users className="w-8 h-8 text-[#00a86b]" />,
      value: '2.5 Lakhs+',
      label: 'QUARTERLY DELIVERY PARTNERS',
    },
  ];

  return (
    <section className="relative bg-white pt-20 pb-0 z-10">
      
      {/* 1. Stats Counter Area */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        
        {/* Title Centered */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight font-display">
            Fast. Flexible. Future-Ready.
          </h2>
        </div>

        {/* 5 Column Grid for Stat Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-start text-center">
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center px-2"
            >
              {/* Icon Container */}
              <div className="mb-4 p-3 bg-emerald-50 rounded-full flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>

              {/* Number Value */}
              <span className="text-2xl md:text-3xl font-extrabold text-[#101518] mb-2 font-display">
                {stat.value}
              </span>

              {/* Description Label */}
              <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 2. Trusted By Client Logo Banner Area */}
      <div className="w-full bg-[#E5F5F8] py-12 px-6 border-t border-[#218A95]/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <h3 className="text-center text-xl md:text-2xl font-extrabold text-[#101518] tracking-tight mb-8 font-display">
            Trusted By
          </h3>

          {/* Infinite sliding logo marquee */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left & Right gradient fades for premium look */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#E5F5F8] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#E5F5F8] to-transparent z-20 pointer-events-none" />
            
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

    </section>
  );
};

export default Stats;
