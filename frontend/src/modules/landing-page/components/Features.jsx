import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ecommerceImg from '../../../assets/angle_service_ecommerce.webp';

const Features = () => {
  const services = [
    {
      image: '/truck.webp',
      title: 'Ecommerce & D2C',
      route: '/ecommerce',
      description:
        'We provide end-to-end delivery services, from standard shipping to same-day and next-day delivery, designed for D2C and E-commerce brands. Our smart logistics and tech ensure speed, efficiency, and great customer experiences.',
    },
    {
      image: '/scooty.webp',
      title: 'Hyperlocal & Quick Commerce',
      route: '/hyperlocal',
      description:
        'Enjoy rapid deliveries within hours or choose flexible slots for same-day or next-day service. From groceries to medicines and more, with real-time tracking and reliable service.',
    },
    {
      image: '/phone1.webp',
      title: 'SME & Personal Courier',
      route: null,
      description:
        "Angle Courier App powers on-demand pickup and drop services within the city for individuals and small businesses. Affordable, reliable, and backed by India's fastest-growing last-mile fleet.",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-white z-10 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title and Subtitle Centered matching screenshot */}
        <div className="text-center mb-16 flex flex-col items-center justify-center" style={{ textAlign: 'center' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight mb-3 font-display text-center w-full" style={{ textAlign: 'center' }}>
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed text-center w-full" style={{ textAlign: 'center' }}>
            To meet the dynamic market needs of your business
          </p>
        </div>

        {/* 3 Column Grid for Services Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {services.map((service, index) => {
            const cardContent = (
              <>
                {/* Premium Rectangular Service Image Container */}
                <div className="overflow-hidden rounded-2xl shadow-md bg-slate-50 border border-slate-100 mb-6 group cursor-pointer aspect-[4/3] w-full">
                  <img loading="lazy" src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Service Title */}
                <h3 className="font-display font-extrabold text-xl text-white mb-4 group-hover:text-[#218A95] transition-colors duration-200 cursor-pointer">
                  {service.title}
                </h3>
              </>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                className="flex flex-col text-left"
              >
                {service.route ? (
                  <Link to={service.route} className="flex flex-col block group">
                    {cardContent}
                  </Link>
                ) : (
                  <div className="flex flex-col group">
                    {cardContent}
                  </div>
                )}

                {/* Service Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans mt-0">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
