import React from 'react';
import { motion } from 'framer-motion';

// Import high-fidelity generated competitive edge assets
import mapsAsset from '../../../assets/angle_edge_maps.webp';
import shieldAsset from '../../../assets/angle_edge_shield.webp';
import gigsAsset from '../../../assets/angle_edge_gigs.webp';

const DashboardPreview = () => {
  const edgeCards = [
    {
      title: 'Angle Maps',
      image: mapsAsset,
      desc: 'Precision navigation logistics routing engine.'
    },
    {
      title: 'Angle Shield',
      image: shieldAsset,
      desc: 'Safe, verified, secure delivery infrastructure.'
    },
    {
      title: 'Angle Gigs',
      image: gigsAsset,
      desc: 'Dynamic, reliable, professional delivery fleet.'
    }
  ];

  return (
    <section id="competitive-edge" className="relative py-24 bg-white z-10 overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Corporate Header Block */}
        <div className="text-center mb-16 flex flex-col items-center justify-center" style={{ textAlign: 'center' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight mb-3 font-display text-center w-full" style={{ textAlign: 'center' }}>
            Unmatched Competitive Edge
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed text-center w-full" style={{ textAlign: 'center' }}>
            Driving business efficiency with every delivery
          </p>
        </div>

        {/* 3-Column Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {edgeCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group cursor-pointer border border-slate-100"
            >
              {/* Background Image with slight hover scale */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img loading="lazy" src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
                />
                
                {/* Deep bottom-to-top dark overlay to make white text crisp and legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              </div>

              {/* Text Content Overlay Bottom Left */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end text-left">
                <motion.h3 
                  className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-none mb-1 group-hover:text-teal-300 transition-colors duration-300 edge-card-title"
                  style={{ color: '#ffffff' }}
                >
                  {card.title}
                </motion.h3>
                <p 
                  className="text-xs text-slate-200 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 edge-card-desc"
                  style={{ color: '#e2e8f0' }}
                >
                  {card.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;
