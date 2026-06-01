import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#00796B] text-white pt-20 pb-10 overflow-hidden border-t border-teal-800" style={{ backgroundColor: '#00796B' }}>
      
      {/* Dynamic absolute background wireframe pointer graphics (bottom right) */}
      <div className="absolute right-0 bottom-0 w-80 h-80 opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white" stroke="currentColor" strokeWidth="1" fill="none">
          <path d="M50 10 L20 70 L48 60 L52 60 L80 70 Z" transform="rotate(25 50 50) translate(20, -10) scale(0.6)" />
          <path d="M50 10 L20 70 L48 60 L52 60 L80 70 Z" transform="rotate(45 50 50) translate(0, 20) scale(0.8)" />
          <path d="M50 10 L20 70 L48 60 L52 60 L80 70 Z" transform="rotate(15 50 50) translate(-30, -30) scale(0.4)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Links Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 items-start text-left">
          
          {/* LEFT AREA: Brand details, Address, Socials (span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Logo area */}
            <div className="flex items-start gap-3">
              {/* Yellow Chevron pointer logo */}
              <svg className="w-10 h-10 text-[#D2E805] drop-shadow-sm" viewBox="0 0 60 60" fill="currentColor">
                <path d="M30 4 L6 50 L28 42 L32 42 L54 50 Z" transform="rotate(45 30 30)" />
              </svg>
              
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-2xl tracking-wider text-white leading-none">
                  ANGLE COURIER SERVICE
                </span>
                <span className="text-[10px] text-white/90 italic tracking-wider font-light mt-1 font-sans">
                  Think ahead!
                </span>
              </div>
            </div>

            {/* Office address */}
            <p className="address-text text-xs text-white/90 leading-relaxed max-w-sm font-sans font-light">
              UP_GTA2( ARAZI NO -372, PATANAVA, BASANT NAGAR,<br />
              Ram Nagar Industrial Area, Varanasi,<br />
              Uttar Pradesh, 221110
            </p>

            {/* Phone link */}
            <a 
              href="tel:+915412315192" 
              className="footer-phone-link text-xs text-[#D2E805] transition-colors duration-300 font-sans font-light"
            >
              Phone: +91 5412 315192
            </a>

            {/* Email link */}
            <a 
              href="mailto:support@anglecourier.com" 
              className="footer-email-link text-xs text-[#D2E805] underline transition-colors duration-300 font-sans font-medium"
            >
              support@anglecourier.com
            </a>

            {/* Flat white social media icons row */}
            <div className="flex items-center gap-4 py-2">
              {[
                {
                  // Facebook
                  icon: (
                    <svg className="w-5 h-5 text-white hover:text-[#D2E805] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  ),
                  url: 'https://www.facebook.com/share/193VFCeWV5/'
                },
                {
                  // Instagram
                  icon: (
                    <svg className="w-5 h-5 text-white hover:text-[#D2E805] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  ),
                  url: 'https://www.instagram.com/anglecourier_service?igsh=MWE4bmh1eXh2N2ZxOQ=='
                }
              ].map((item, i) => (
                <a key={i} href={item.url} target={item.url !== '#' ? '_blank' : undefined} rel={item.url !== '#' ? 'noopener noreferrer' : undefined} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D2E805] transition-colors duration-300">
                  {item.icon}
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT AREA: Multiple Link Columns (span 7 total) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-8">
            
            {/* Quick Links Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-extrabold text-sm text-[#D2E805] uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {['Track Shipment', 'Book a Delivery', 'Support', 'Angle Courier Service App'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-extrabold text-sm text-[#D2E805] uppercase tracking-wider">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link to="/ecommerce" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                    Ecommerce & D2C
                  </Link>
                </li>
                <li>
                  <Link to="/hyperlocal" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                    Hyperlocal & Quick Commerce
                  </Link>
                </li>
                <li>
                  <a href="/#services" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                    SME & Personal Courier
                  </a>
                </li>
              </ul>
            </div>

            {/* Partners Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-extrabold text-sm text-[#D2E805] uppercase tracking-wider">
                Partners
              </h4>
              <ul className="flex flex-col gap-2.5">
                {['Delivery Partner', 'Client Partner', 'Franchise Partner'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-extrabold text-sm text-[#D2E805] uppercase tracking-wider">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                {['About Us', 'Careers', 'Blogs', 'Innovation', 'Social Impact', 'Investor Relations', 'Get In Touch'].map((link) => {
                  const isAbout = link === 'About Us';
                  const isInnovation = link === 'Innovation';
                  const isSocialImpact = link === 'Social Impact';
                  const isCareers = link === 'Careers';
                  
                  if (isAbout) {
                    return (
                      <li key={link}>
                        <Link to="/about" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                          {link}
                        </Link>
                      </li>
                    );
                  } else if (isInnovation) {
                    return (
                      <li key={link}>
                        <Link to="/innovation" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                          {link}
                        </Link>
                      </li>
                    );
                  } else if (isSocialImpact) {
                    return (
                      <li key={link}>
                        <Link to="/social-impact" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                          {link}
                        </Link>
                      </li>
                    );
                  } else if (isCareers) {
                    return (
                      <li key={link}>
                        <Link to="/careers" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                          {link}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={link}>
                        <a href="#" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                          {link}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-extrabold text-sm text-[#D2E805] uppercase tracking-wider">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5">
                {['Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/90 hover:text-[#D2E805] hover:underline transition-all duration-300 font-sans font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM AREA: Download App Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-teal-800 pt-8 mb-8 text-left">
          
          {/* Delivery Partner App badge */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D2E805] font-display">
              Delivery Partner App
            </span>
            <div className="flex items-center">
              <a href="https://play.google.com/store/apps/details?id=com.angle.user" target="_blank" rel="noopener noreferrer" className="inline-block transform hover:scale-103 transition-transform duration-300">
                <div className="footer-badge">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 3.125C3.0625 3.3125 3 3.625 3 4V20C3 20.375 3.0625 20.6875 3.25 20.875L3.3125 20.9375L13.125 11.125V10.875L3.3125 1.0625L3.25 1.125V3.125Z" fill="#00E5FF"/>
                    <path d="M16.375 14.375L13.125 11.125V10.875L16.375 7.625L16.4375 7.6875L20.25 9.875C21.3125 10.5 21.3125 11.5 20.25 12.125L16.4375 14.3125L16.375 14.375Z" fill="#FFC107"/>
                    <path d="M16.4375 14.3125L13.125 11L3.25 20.875C3.5625 21.1875 4.0625 21.1875 4.625 20.875L16.4375 14.3125Z" fill="#FF3D00"/>
                    <path d="M16.4375 7.6875L4.625 1.125C4.0625 0.8125 3.5625 0.8125 3.25 1.125L13.125 11L16.4375 7.6875Z" fill="#4CAF50"/>
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="footer-badge-title">GET IT ON</span>
                    <span className="footer-badge-value">Google Play</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Shadowfax Courier App badge */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D2E805] font-display">
              Angle Courier Service App
            </span>
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Google Play */}
              <a href="https://play.google.com/store/apps/details?id=com.angle.user" target="_blank" rel="noopener noreferrer" className="inline-block transform hover:scale-103 transition-transform duration-300">
                <div className="footer-badge">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 3.125C3.0625 3.3125 3 3.625 3 4V20C3 20.375 3.0625 20.6875 3.25 20.875L3.3125 20.9375L13.125 11.125V10.875L3.3125 1.0625L3.25 1.125V3.125Z" fill="#00E5FF"/>
                    <path d="M16.375 14.375L13.125 11.125V10.875L16.375 7.625L16.4375 7.6875L20.25 9.875C21.3125 10.5 21.3125 11.5 20.25 12.125L16.4375 14.3125L16.375 14.375Z" fill="#FFC107"/>
                    <path d="M16.4375 14.3125L13.125 11L3.25 20.875C3.5625 21.1875 4.0625 21.1875 4.625 20.875L16.4375 14.3125Z" fill="#FF3D00"/>
                    <path d="M16.4375 7.6875L4.625 1.125C4.0625 0.8125 3.5625 0.8125 3.25 1.125L13.125 11L16.4375 7.6875Z" fill="#4CAF50"/>
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="footer-badge-title">GET IT ON</span>
                    <span className="footer-badge-value">Google Play</span>
                  </div>
                </div>
              </a>

              {/* Apple Store */}
              <a href="#" className="inline-block transform hover:scale-103 transition-transform duration-300">
                <div className="footer-badge">
                  <svg className="text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39" />
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="footer-badge-title">Download on the</span>
                    <span className="footer-badge-value">App Store</span>
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT LINE */}
        <div className="border-t border-teal-800 pt-6 text-center">
          <p className="copyright-text text-[10px] text-white/80 font-sans font-light tracking-wider">
            &copy; {new Date().getFullYear()} All rights reserved. Angle Technologies Limited
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
