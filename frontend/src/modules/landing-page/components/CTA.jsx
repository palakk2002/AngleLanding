import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const CTA = () => {
  return (
    <section className="relative py-24 bg-[#030014] z-10 overflow-hidden">
      
      {/* Decorative background grid and flares */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Glow board panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl border border-white/10 bg-slate-950/65 backdrop-blur-2xl p-10 md:p-16 text-center shadow-[0_20px_50px_rgba(99,102,241,0.15)] overflow-hidden group"
        >
          {/* Inner ambient glow rings */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700" />

          {/* Heading */}
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            
            {/* Spark badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unlock Complete Automation</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-display">
              Ready to Modernize Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400">
                HR & Payroll Workflows?
              </span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-8 max-w-lg">
              Empower your administrators and staff with beautiful self-service grids, bank credit interfaces, statutory compliance generators, and time-off tracking.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
              <Button variant="glow" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Schedule Custom Audit
              </Button>
            </div>

            {/* Micro value labels */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 text-xs">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Instant Bank Clears
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Under 15-Min Setups
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Cancel Anytime
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
