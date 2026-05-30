import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const teamGroupImg = '/angleteam.jpg';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="careers-scoped-wrapper min-h-screen bg-[#080B1A] text-slate-100 flex flex-col font-sans antialiased">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* First Section: Hero matching screenshot exactly */}
        <section className="relative w-full min-h-[560px] md:min-h-[660px] flex items-center justify-start overflow-hidden">
          {/* Background image cover */}
          <div className="absolute inset-0 z-0">
            <img 
              src={teamGroupImg} 
              alt="Angle Courier Team Group" 
              className="w-full h-full object-cover object-center"
            />
            {/* Real photo overlay with gradient fade to make text highly readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/5 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/5 z-10" />
          </div>

          {/* Hero Content Container aligned exactly as requested */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full py-16 flex flex-col justify-center text-left">
            <div className="max-w-2xl">
              <h1 
                className="text-4xl sm:text-5xl md:text-[54px] font-black tracking-tight mb-6 leading-[1.15] drop-shadow-md font-display"
                style={{ color: '#D2E805' }}
              >
                Join the<br />
                <span>Angle Courier Team!</span>
              </h1>

              <p className="text-white font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl drop-shadow-sm opacity-95">
                Join a team of passionate people moving the world forward. We're hiring those who want to help shape the future of logistics with us.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Premium Careers Info section */}
        <section className="relative bg-white py-20 px-6 z-10 text-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] font-display mb-4">
              Why Work With Us?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base font-sans leading-relaxed">
              We believe in fostering an inclusive environment that fuels learning, autonomy, and impactful growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Rapid Innovation", desc: "Work with cutting-edge tech in logistics AI and routing software." },
                { title: "Dynamic Growth", desc: "Build paths that scale along with your skills and ambitions." },
                { title: "Inclusive Culture", desc: "Be part of a supportive, passionate group of global professionals." }
              ].map((card, idx) => (
                <div key={idx} className="bg-[#E8F5F2]/40 rounded-2xl p-6 border border-[#00796B]/5 text-left transition-transform hover:-translate-y-1 duration-300">
                  <h3 className="text-lg font-bold text-[#00796B] mb-2 font-display">{card.title}</h3>
                  <p className="text-slate-600 text-sm font-sans leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
