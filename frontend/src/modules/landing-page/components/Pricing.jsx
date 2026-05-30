import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { pricingPlans } from '../data/mockData';

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 bg-[#030014] z-10 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeading
          badge="Pricing Plans"
          title="Transparent, Scale-Friendly Pricing"
          subtitle="Choose the perfect fit for your operational needs. Start with a risk-free 14-day trial. Zero credit card details required during setup."
          align="center"
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="flex"
            >
              <GlassCard
                className={`w-full flex flex-col justify-between p-8 bg-gradient-to-br border-white/5 transition-all duration-500 relative min-h-[500px] ${
                  plan.recommended
                    ? 'border-indigo-500/35 bg-indigo-950/20 shadow-[0_15px_40px_-5px_rgba(99,102,241,0.15)] scale-105 z-10'
                    : 'bg-white/[0.02] hover:border-white/10 hover:shadow-[0_10px_35px_-5px_rgba(0,0,0,0.3)]'
                }`}
                hoverEffect={false}
              >
                
                {/* Recommended Tag */}
                {plan.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20">
                    RECOMMENDED PLAN
                  </span>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="text-left mb-6">
                    <h3 className="font-display font-bold text-2xl text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed">{plan.desc}</p>
                  </div>

                  {/* Price info */}
                  <div className="flex items-baseline gap-2 mb-8 text-left border-b border-white/5 pb-6">
                    <span className="font-display font-extrabold text-4xl md:text-5xl text-white">{plan.price}</span>
                    <span className="text-slate-400 text-xs font-light tracking-wide">{plan.billing}</span>
                  </div>

                  {/* Features List */}
                  <ul className="flex flex-col gap-4 text-left mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs font-light leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    variant={plan.recommended ? 'glow' : 'secondary'}
                    size="md"
                    className="w-full font-bold uppercase tracking-wide text-xs py-3.5"
                  >
                    {plan.cta}
                  </Button>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
