import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { faqs } from '../data/mockData';

// Individual Accordion Row component to ensure clean local state and smooth animation
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-4">
      <GlassCard
        className={`p-6 bg-gradient-to-br from-white/[0.02] to-transparent border-white/5 transition-all duration-300 ${
          isOpen ? 'border-indigo-500/20 shadow-[0_4px_25px_rgba(99,102,241,0.05)] bg-[#080521]' : 'hover:border-white/10'
        }`}
        hoverEffect={false}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
        >
          <span className="font-display font-semibold text-white text-base pr-4">
            {question}
          </span>
          <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-indigo-400 bg-indigo-500/10 border-indigo-500/20' : ''
          }`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="w-full h-px bg-white/5 mb-4" />
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#030014] z-10 overflow-hidden">
      
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] bg-indigo-600/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Explore quick answers to common operations, integrations, security calculations, and contract migration setup."
          align="center"
        />

        {/* Accordions stream */}
        <div className="mt-12 text-left">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
