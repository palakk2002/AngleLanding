import React, { useState } from 'react';
import { X, Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import angleLogo from '../../../assets/anglecourierlogo.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Links with dropdown items matching reference images exactly
  const links = [
    { 
      name: 'Services', 
      hasDropdown: true, 
      href: '#services', 
      dropdownItems: ['Ecommerce & D2C', 'Hyperlocal & Quick Commerce', 'SMEs & Personal Courier'] 
    },
    { 
      name: 'Company', 
      hasDropdown: true, 
      href: '#company', 
      dropdownItems: ['About Us', 'Innovation', 'Social Impact', 'Careers'] 
    },
    { 
      name: 'Partners', 
      hasDropdown: true, 
      href: '#partners', 
      dropdownItems: ['Client Partners', 'Delivery Partners'] 
    },
  ];

  return (
    <>
      {/* Header bar: Always solid white background */}
      <header
        className="fixed top-0 left-0 w-full z-50 py-3.5 bg-white border-b border-slate-100 shadow-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with Angle Courier Brand image */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <img 
              src={angleLogo} 
              alt="Angle Courier Service Logo" 
              className="h-10 md:h-11 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 animate-none">
            {links.map((link) => {
              const isHovered = hoveredLink === link.name;
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a
                      href={link.href}
                      className={`text-sm font-semibold flex items-center gap-1 transition-colors duration-200 relative font-display ${isHovered ? 'text-[#00796B]' : 'text-[#101518] hover:text-[#00796B]'}`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isHovered ? 'rotate-180 text-[#00796B]' : ''}`} />
                    </a>

                    {/* Generic Dropdown Menu Card (displays on hover) */}
                    <AnimatePresence>
                      {isHovered && link.dropdownItems && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-50 flex flex-col text-left"
                        >
                           {link.dropdownItems.map((item) => {
                            const isEcommerce = item === 'Ecommerce & D2C';
                            const isHyperlocal = item === 'Hyperlocal & Quick Commerce';
                            const isSme = item === 'SMEs & Personal Courier';
                            const isAbout = item === 'About Us';
                            const isInnovation = item === 'Innovation';
                            const isSocialImpact = item === 'Social Impact';
                            const isCareers = item === 'Careers';
                            const isClientPartners = item === 'Client Partners';
                            const isDeliveryPartners = item === 'Delivery Partners';
                            if (isEcommerce) {
                              return (
                                <Link 
                                  key={item}
                                  to="/ecommerce"
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block"
                                >
                                  {item}
                                </Link>
                              );
                            } else if (isHyperlocal) {
                              return (
                                <Link 
                                  key={item}
                                  to="/hyperlocal"
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block"
                                >
                                  {item}
                                </Link>
                              );
                            } else if (isSme) {
                              return (
                                <Link 
                                  key={item}
                                  to="/sme"
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block"
                                >
                                  {item}
                                </Link>
                              );
                            } else if (isAbout) {
                              return (
                                <Link 
                                  key={item}
                                  to="/about"
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block"
                                >
                                  {item}
                                </Link>
                              );
                            } else if (isInnovation) {
                              return (
                                <Link 
                                  key={item}
                                  to="/innovation"
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block font-semibold text-[#00796B] bg-[#00796B]/5"
                                >
                                  {item}
                                </Link>
                              );
                            } else if (isSocialImpact) {
                              return (
                                <Link 
                                  key={item}
                                  to="/social-impact"
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block font-semibold text-[#00796B] bg-[#00796B]/5"
                                >
                                  {item}
                                </Link>
                              );
                            } else if (isCareers) {
                              return (
                                <Link 
                                  key={item}
                                  to="/careers"
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block font-semibold text-[#00796B] bg-[#00796B]/5"
                                >
                                  {item}
                                </Link>
                              );
                            } else if (isClientPartners) {
                               return (
                                 <Link 
                                   key={item}
                                   to="/client-partners"
                                   className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block font-semibold text-[#00796B] bg-[#00796B]/5"
                                 >
                                   {item}
                                 </Link>
                               );
                             } else if (isDeliveryPartners) {
                                return (
                                  <Link 
                                    key={item}
                                    to="/delivery-partners"
                                    className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block font-semibold text-[#00796B] bg-[#00796B]/5"
                                  >
                                    {item}
                                  </Link>
                                );
                             } else {
                              return (
                                <a 
                                  key={item}
                                  href={`/${link.href}`}
                                  className="text-[13px] font-medium text-slate-800 hover:text-[#00796B] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-all duration-200 text-left block"
                                >
                                  {item}
                                </a>
                              );
                            }
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Normal links without dropdowns
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#101518] hover:text-[#00796B] py-2 flex items-center gap-1 transition-colors duration-200 relative group font-display"
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => window.location.href = '#ship'}
              className="bg-[#D2E805] hover:bg-[#b9cc04] text-[#101518] font-bold text-sm py-2.5 px-6 rounded-lg transition-all duration-300 font-display shadow-sm shadow-[#D2E805]/20 cursor-pointer scale-100 hover:scale-102 active:scale-98"
            >
              Ship with us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#101518] hover:text-[#00796B] rounded-lg focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>


      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 lg:hidden flex flex-col justify-center px-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#101518] hover:text-[#00796B] rounded-lg focus:outline-none transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Mobile Nav Roster */}
            <nav className="flex flex-col gap-6 text-center mb-12">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-[#101518] hover:text-[#00796B] py-2 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile action call */}
            <div className="flex flex-col gap-4 text-center items-center">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '#ship';
                }}
                className="w-full max-w-xs bg-[#D2E805] hover:bg-[#b9cc04] text-[#101518] font-extrabold text-base py-3 px-6 rounded-lg transition-all duration-300 font-display shadow-md shadow-[#D2E805]/20 cursor-pointer"
              >
                Ship with us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
