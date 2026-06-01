import React from 'react';
import { motion } from 'framer-motion';

// Import high-fidelity generated blog images
import featuredImg from '../../../assets/angle_blog_featured.webp';
import aiImg from '../../../assets/angle_blog_ai.webp';
import fleetImg from '../../../assets/angle_blog_fleet.webp';
import partnersImg from '../../../assets/angle_blog_partners.webp';
import reverseImg from '../../../assets/angle_blog_reverse.webp';

const WhyChooseUs = () => {
  const rightBlogs = [
    {
      title: 'What is AI in Supply Chain?',
      image: aiImg,
      badge: 'Supply Chain',
      date: 'April 30, 2026',
      badgeBg: 'bg-[#E5F5F8] text-[#00796B]'
    },
    {
      title: 'What Is Fleet Management? A Guide for Logistics Businesses',
      image: fleetImg,
      badge: 'Fleet Management',
      date: 'April 24, 2026',
      badgeBg: 'bg-[#E5F5F8] text-[#00796B]'
    },
    {
      title: 'How Angle Supports Its Delivery Partners',
      image: partnersImg,
      badge: 'Delivery Partners',
      date: 'April 20, 2026',
      badgeBg: 'bg-[#E5F5F8] text-[#00796B]'
    },
    {
      title: 'Forward vs Reverse Logistics: What Is the Difference',
      image: reverseImg,
      badge: 'Logistics',
      date: 'April 16, 2026',
      badgeBg: 'bg-[#E5F5F8] text-[#00796B]'
    }
  ];

  return (
    <section id="blogs" className="relative py-24 bg-white z-10 overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Block (Title on left, yellow Read More on right) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight font-display text-left">
              Discover New Blogs
            </h2>
          </div>
          <div>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D2E805] text-[#101518] font-bold text-sm font-display shadow-sm hover:bg-[#c5d804] transition-colors duration-300 cursor-pointer"
            >
              Read More 
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* 1-Large (Left) + 2x2 Grid (Right) Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Large Featured Blog Card (span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col group cursor-pointer"
          >
            {/* Card image container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[6/5] shadow-sm border border-slate-100 mb-5">
              <img loading="lazy" src={featuredImg} 
                alt="Angle 360 digital shipping"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
              />
              
              {/* Soft overlay protection */}
              <div className="absolute inset-0 bg-black/45 z-10" />

              {/* Large White Text Overlay in the middle of image */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="why-choose-us-overlay-title text-white font-extrabold text-2xl md:text-3xl tracking-tight leading-none mb-2 font-display drop-shadow-md">
                  Angle 360
                </h3>
                <p className="why-choose-us-overlay-subtitle text-white/90 font-bold text-base md:text-lg tracking-wide uppercase drop-shadow-sm font-sans">
                  Digital Shipping Platform
                </p>
              </div>
            </div>

            {/* Content below the image */}
            <div className="text-left">
              {/* Badge & Date Line */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-[#E5F5F8] text-[#00796B] font-display">
                  Angle 360
                </span>
                <span className="text-slate-300 font-light">|</span>
                <span className="text-xs text-slate-500 font-light">May 04, 2026</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-[#101518] leading-snug group-hover:text-[#00796B] transition-colors duration-300">
                Angle 360: End to end Digital Shipping Platform Built for India's SMEs and D2C Brands
              </h3>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 2x2 Grid of smaller cards (span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {rightBlogs.map((blog, index) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="flex flex-col group cursor-pointer"
              >
                {/* Card image container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-sm border border-slate-100 mb-4">
                  <img loading="lazy" src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                  />
                </div>

                {/* Content below the image */}
                <div className="text-left">
                  {/* Badge & Date Line */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${blog.badgeBg} font-display`}>
                      {blog.badge}
                    </span>
                    <span className="text-slate-300 font-light text-[10px]">|</span>
                    <span className="text-[10px] text-slate-500 font-light">{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display font-extrabold text-sm md:text-base text-[#101518] leading-snug group-hover:text-[#00796B] transition-colors duration-300">
                    {blog.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
