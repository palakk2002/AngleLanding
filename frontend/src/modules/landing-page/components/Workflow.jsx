import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  RotateCcw, 
  Zap, 
  Truck, 
  ShieldCheck, 
  MapPin as MapPinIcon, 
  ShoppingBag, 
  Leaf 
} from 'lucide-react';

const Workflow = () => {
  const row1Steps = [
    {
      number: '01',
      title: 'Express Parcel',
      desc: 'Enjoy reliable delivery/courier services with our solutions. We ensure smooth deliveries and quality checks for D2C businesses and small enterprises.',
      colorClass: 'bg-[#E8F5E9]/65 border-[#C8E6C9]/40', // Light green
      icon: <Package className="w-5 h-5 text-[#00796B]" />,
      isOffset: false,
    },
    {
      number: '02',
      title: 'Reverse Parcel',
      desc: 'Easily handle returns with our efficient reverse logistics and courier services. We provide doorstep quality checks, instant refunds, and seamless returns for D2Cs and more.',
      colorClass: 'bg-[#FFFDE7]/80 border-[#FFF9C4]/60', // Light yellow
      icon: <RotateCcw className="w-5 h-5 text-[#00796B]" />,
      isOffset: true,
    },
    {
      number: '03',
      title: 'Prime',
      desc: 'Upgrade to fast and reliable delivery/courier services with our efficient local delivery network. We guarantee same-day and next-day delivery across platforms, ensuring prompt item delivery.',
      colorClass: 'bg-[#E8F5E9]/65 border-[#C8E6C9]/40', // Light green
      icon: <Zap className="w-5 h-5 text-[#00796B]" />,
      isOffset: false,
    },
    {
      number: '04',
      title: 'Prime Large',
      desc: 'With Prime Large, we deliver 15 KG+ heavy goods same-day or next-day, fast, reliable, and future-ready. Backed by scalable infrastructure and technology-first execution, we ensure smooth logistics for high-volume, heavy duty shipping.',
      colorClass: 'bg-[#FFFDE7]/80 border-[#FFF9C4]/60', // Light yellow
      icon: <Truck className="w-5 h-5 text-[#00796B]" />,
      isOffset: true,
    },
  ];

  const row2Steps = [
    {
      number: '05',
      title: 'Critical Logistics',
      desc: 'We manage end-to-end movement of high-value, critical, luxury goods from manufacturing plants to warehouses and depots to distribution points, ensuring speed, security, and full compliance with handling protocols and timelines.',
      colorClass: 'bg-[#FFFDE7]/80 border-[#FFF9C4]/60', // Light yellow
      icon: <ShieldCheck className="w-5 h-5 text-[#00796B]" />,
      isOffset: false,
    },
    {
      number: '06',
      title: 'Hyperlocal',
      desc: 'Hyperlocal delivery offers low-cost, point-to-point courier services perfect for groceries, pharma, and meals. With real-time tracking, wide-area coverage, and a trained fleet, we support rapid deliveries within 10 minutes to 2 hours.',
      colorClass: 'bg-[#E8F5E9]/65 border-[#C8E6C9]/40', // Light green
      icon: <MapPinIcon className="w-5 h-5 text-[#00796B]" />,
      isOffset: true,
    },
    {
      number: '07',
      title: 'Quick Commerce',
      desc: 'Benefit from our convenient quick commerce service. We offer slotted and express doorstep deliveries for a seamless experience in dark or live stores.',
      colorClass: 'bg-[#FFFDE7]/80 border-[#FFF9C4]/60', // Light yellow
      icon: <ShoppingBag className="w-5 h-5 text-[#00796B]" />,
      isOffset: false,
    },
    {
      number: '08',
      title: 'Electric Vehicle Fleet',
      desc: 'Our electric fleet offers green, efficient delivery for couriers and e-commerce, supporting sustainable, cost-effective, and seamless last-mile logistics across cities.',
      colorClass: 'bg-[#E8F5E9]/65 border-[#C8E6C9]/40', // Light green
      icon: <Leaf className="w-5 h-5 text-[#00796B]" />,
      isOffset: true,
    },
  ];

  return (
    <section id="solutions" className="relative py-24 bg-white z-10 overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block centered matching screenshot */}
        <div className="text-center mb-20 flex flex-col items-center justify-center" style={{ textAlign: 'center' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight mb-3 font-display text-center w-full" style={{ textAlign: 'center' }}>
            Our Key Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed text-center w-full" style={{ textAlign: 'center' }}>
            For D2Cs, large marketplaces, small businesses and more
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP TIMELINE ROADMAP (lg and above) */}
        {/* ============================================================== */}
        <div className="hidden lg:block relative space-y-16 my-12">

          {/* ------------------------------------------------------------ */}
          {/* ROW 1: CARDS ON TOP, PINS IN MIDDLE */}
          {/* ------------------------------------------------------------ */}
          <div className="relative space-y-8">
            
            {/* Grid for Row 1 Cards */}
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {row1Steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full p-6 rounded-2xl border shadow-sm ${step.colorClass} flex flex-col justify-between min-h-[190px] text-left transition-all duration-300 hover:shadow-md hover:border-[#00796B]/30`}
                >
                  <p className="text-xs text-slate-700 leading-relaxed font-light mb-4">{step.desc}</p>
                  <h4 className="text-[#00796B] font-extrabold text-base font-display">{step.title}</h4>
                </motion.div>
              ))}
            </div>

            {/* Pins Row with Connecting Line and Arrow */}
            <div className="relative py-4 flex items-center justify-center min-h-[80px]">
              
              {/* Connecting Line pointing right */}
              <div className="absolute left-[12.5%] right-[12.5%] h-[3px] bg-gradient-to-r from-[#00796B]/15 via-[#00796B]/50 to-[#00796B]/15 pointer-events-none z-0" />

              {/* Grid for Row 1 Pins */}
              <div className="grid grid-cols-4 gap-8 w-full relative z-10">
                {row1Steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="flex items-center gap-3">
                      {/* Big Number */}
                      <span className="text-3xl font-black text-[#101518] font-sans tracking-tight">
                        {step.number}
                      </span>

                      {/* Teardrop Location MapPin */}
                      <div className="relative group cursor-pointer flex items-center justify-center w-14 h-16 transition-transform duration-300 hover:scale-105">
                        <svg className="w-full h-full text-[#00796B] drop-shadow-md fill-current" viewBox="0 0 24 30">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.25 10 16 10 16s10-10.75 10-16c0-5.52-4.48-10-10-10z" />
                          <circle cx="12" cy="12" r="6" className="fill-white" />
                        </svg>
                        <div className="absolute top-[18px] left-[17px] z-20">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 2: PINS ON TOP, CARDS AT BOTTOM */}
          {/* ------------------------------------------------------------ */}
          <div className="relative space-y-8 pt-4">
            
            {/* Pins Row with Connecting Line and Arrow */}
            <div className="relative py-4 flex items-center justify-center min-h-[80px]">
              
              {/* Connecting Line pointing right */}
              <div className="absolute left-[12.5%] right-[12.5%] h-[3px] bg-gradient-to-r from-[#00796B]/15 via-[#00796B]/50 to-[#00796B]/15 pointer-events-none z-0" />

              {/* Grid for Row 2 Pins */}
              <div className="grid grid-cols-4 gap-8 w-full relative z-10">
                {row2Steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="flex items-center gap-3">
                      {/* Big Number */}
                      <span className="text-3xl font-black text-[#101518] font-sans tracking-tight">
                        {step.number}
                      </span>

                      {/* Teardrop Location MapPin */}
                      <div className="relative group cursor-pointer flex items-center justify-center w-14 h-16 transition-transform duration-300 hover:scale-105">
                        <svg className="w-full h-full text-[#00796B] drop-shadow-md fill-current" viewBox="0 0 24 30">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.25 10 16 10 16s10-10.75 10-16c0-5.52-4.48-10-10-10z" />
                          <circle cx="12" cy="12" r="6" className="fill-white" />
                        </svg>
                        <div className="absolute top-[18px] left-[17px] z-20">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Grid for Row 2 Cards */}
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {row2Steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full p-6 rounded-2xl border shadow-sm ${step.colorClass} flex flex-col justify-between min-h-[190px] text-left transition-all duration-300 hover:shadow-md hover:border-[#00796B]/30`}
                >
                  <p className="text-xs text-slate-700 leading-relaxed font-light mb-4">{step.desc}</p>
                  <h4 className="text-[#00796B] font-extrabold text-base font-display">{step.title}</h4>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* MOBILE STACK TIMELINE (Below lg) */}
        {/* ============================================================== */}
        <div className="lg:hidden relative pl-8 md:pl-12 my-12 space-y-12">
          
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-[22px] md:left-[30px] w-[3px] bg-gradient-to-b from-[#00796B]/15 via-[#00796B]/50 to-[#00796B]/15 pointer-events-none z-0" />

          {[...row1Steps, ...row2Steps].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col relative z-10"
            >
              {/* TIMELINE MARKER IN MOBILE */}
              <div className="absolute -left-[45px] md:-left-[58px] top-4 flex items-center justify-center w-12 h-14">
                <svg className="w-full h-full text-[#00796B] drop-shadow-md fill-current" viewBox="0 0 24 30">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 5.25 10 16 10 16s10-10.75 10-16c0-5.52-4.48-10-10-10z" />
                  <circle cx="12" cy="12" r="6" className="fill-white" />
                </svg>
                <div className="absolute top-[14px] left-[13px] z-20">
                  {React.cloneElement(step.icon, { className: 'w-4 h-4 text-[#00796B]' })}
                </div>
              </div>

              {/* Number and Card Content */}
              <div className={`w-full p-6 rounded-2xl border shadow-sm ${step.colorClass} flex flex-col text-left transition-all duration-300`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-black text-[#101518] font-sans tracking-tight">
                    {step.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00796B]" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Solution</span>
                </div>
                
                <p className="text-xs text-slate-700 leading-relaxed font-light mb-4">{step.desc}</p>
                <h4 className="text-[#00796B] font-extrabold text-base font-display">{step.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workflow;
