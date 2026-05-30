import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Cpu, Globe, Rocket, Shield, Zap, Lightbulb, Boxes, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
const warehouseImg = '/angleman.jpg';
import apiTechImg from '../../../assets/api_tech_developer.png';
import innovationLightbulbImg from '../../../assets/innovation_lightbulb.png';
import sustainabilityGrowthImg from '../../../assets/sustainability_growth.png';
import demandForecastingImg from '../../../assets/demand_forecasting.png';
import misroutingSolutionsImg from '../../../assets/misrouting_solutions.png';
import routeOptimizationImg from '../../../assets/route_optimization.png';
import niteshLohiyaImg from '../../../assets/nitesh_lohiya.png';
import ananyaSharmaImg from '../../../assets/ananya_sharma.png';
import openSourceWarehouseImg from '../../../assets/open_source_warehouse.png';

const InnovationPage = () => {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);

  const leadershipTeam = [
    {
      name: "Nitesh Lohiya",
      role: "Chief Product Officer",
      quote: "Our commitment to revolutionizing logistics is more than a mission – it's a product. As the Product Head, I take immense pride in crafting a solution that transcends the ordinary. Our logistics platform is not just a service; it's the embodiment of efficiency, innovation, and seamless connectivity. We're not just changing the game; we're rewriting the rules.",
      image: niteshLohiyaImg
    },
    {
      name: "Ananya Sharma",
      role: "Chief Technology Officer",
      quote: "Technology is at the core of everything we build. We are pushing the boundaries of AI, real-time routing, and smart logistics tracking. By creating scalable APIs that power thousands of business dispatches daily, we are defining the blueprint for the next generation of seamless hyper-local supply chains.",
      image: ananyaSharmaImg
    }
  ];

  const handlePrevLeader = () => {
    setActiveLeaderIndex((prev) => (prev === 0 ? leadershipTeam.length - 1 : prev - 1));
  };

  const handleNextLeader = () => {
    setActiveLeaderIndex((prev) => (prev === leadershipTeam.length - 1 ? 0 : prev + 1));
  };

  // Ensure page starts at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B132B] text-white flex flex-col font-sans">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* First Section: Hero */}
        <section className="pt-32 pb-24 relative flex items-center justify-center min-h-[95vh] w-full">
          {/* Subtle high-tech grid background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>
          
          {/* Radial ambient glow behind the globe */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,245,212,0.12)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl rounded-full"></div>
          <div className="absolute left-1/4 bottom-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(210,232,5,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Premium Sci-Fi Copy */}
            <div className="flex flex-col text-left space-y-6 lg:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D2E805]/10 border border-[#D2E805]/20 text-[#D2E805] text-xs font-semibold tracking-wider uppercase w-fit">
                <Cpu className="w-3.5 h-3.5 animate-pulse" />
                Angle Labs
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold font-display leading-[1.1] tracking-tight drop-shadow-sm select-none" style={{ color: '#D2E805' }}>
                Logistics Technology <br />
                <span style={{ color: '#D2E805' }}>and Innovation</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
                We anticipate tomorrow's challenges, leveraging next-gen technology to create smarter, faster, and future-ready logistics solutions.
              </p>

              {/* Micro-Features grid to show innovation metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Angle Maps AI</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Ultra-precise intelligent routing</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Angle Shield</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Biometric secure delivery lockers</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#D2E805] transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Right Column: Holographic Digital Globe */}
            <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[500px]">
              {/* The interactive glowing hologram system */}
              <div className="relative w-full h-full max-w-[450px] max-h-[450px] flex items-center justify-center">
                
                {/* Outer Rotating Scanning Ring */}
                <div className="absolute inset-0 border border-cyan-500/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none scale-110">
                  <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></div>
                  <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></div>
                </div>

                {/* Middle Rotating Orbit Line */}
                <div className="absolute inset-0 border border-dashed border-[#D2E805]/20 rounded-full animate-[spin_25s_linear_infinite_reverse] pointer-events-none scale-105"></div>

                {/* Main SVG Glove Hologram Layer */}
                <svg className="w-full h-full relative z-10 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Defs for gradients and glowing filters */}
                  <defs>
                    <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="60%" stopColor="#0891b2" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
                    </radialGradient>
                    
                    <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#00f5d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#D2E805" stopOpacity="0.4" />
                    </linearGradient>

                    <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Base volumetric glow circle */}
                  <circle cx="200" cy="200" r="150" fill="url(#globeGlow)" />

                  {/* Cyberpunk grid background of the sphere */}
                  {/* Horizontal Parallels */}
                  <ellipse cx="200" cy="200" rx="145" ry="35" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
                  <ellipse cx="200" cy="200" rx="135" ry="70" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
                  <ellipse cx="200" cy="200" rx="115" ry="105" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
                  <ellipse cx="200" cy="200" rx="80" ry="130" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />
                  
                  {/* Vertical Meridians */}
                  <ellipse cx="200" cy="200" rx="35" ry="145" stroke="rgba(34,211,238,0.15)" strokeWidth="1" className="animate-[pulse_4s_infinite]" />
                  <ellipse cx="200" cy="200" rx="70" ry="135" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
                  <ellipse cx="200" cy="200" rx="105" ry="115" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
                  <ellipse cx="200" cy="200" rx="130" ry="80" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />

                  {/* Main Sphere Outer Circle */}
                  <circle cx="200" cy="200" r="145" stroke="rgba(6,182,212,0.4)" strokeWidth="2.5" />
                  <circle cx="200" cy="200" r="148" stroke="rgba(210,232,5,0.2)" strokeWidth="1" strokeDasharray="10 15" />

                  {/* Holographic Continents/Dotted Landmass Shapes */}
                  <g className="opacity-75">
                    {/* North America dotted coordinates */}
                    <circle cx="120" cy="130" r="3.5" fill="#22d3ee" filter="url(#glowEffect)" />
                    <circle cx="135" cy="120" r="2.5" fill="#22d3ee" />
                    <circle cx="110" cy="145" r="4" fill="#00f5d4" filter="url(#glowEffect)" />
                    <circle cx="95" cy="160" r="3" fill="#22d3ee" />
                    <circle cx="130" cy="150" r="2" fill="#22d3ee" />
                    <circle cx="145" cy="165" r="3.5" fill="#D2E805" />

                    {/* South America */}
                    <circle cx="140" cy="220" r="3" fill="#22d3ee" />
                    <circle cx="150" cy="245" r="4" fill="#00f5d4" filter="url(#glowEffect)" />
                    <circle cx="160" cy="275" r="2.5" fill="#22d3ee" />
                    <circle cx="170" cy="300" r="3.5" fill="#22d3ee" />
                    <circle cx="155" cy="285" r="2" fill="#D2E805" />

                    {/* Africa / Europe / Asia */}
                    <circle cx="230" cy="140" r="4" fill="#22d3ee" filter="url(#glowEffect)" />
                    <circle cx="250" cy="130" r="3" fill="#00f5d4" />
                    <circle cx="270" cy="125" r="2.5" fill="#22d3ee" />
                    <circle cx="225" cy="180" r="3.5" fill="#D2E805" />
                    <circle cx="245" cy="205" r="4" fill="#22d3ee" filter="url(#glowEffect)" />
                    <circle cx="260" cy="235" r="3" fill="#00f5d4" />
                    <circle cx="280" cy="210" r="4" fill="#22d3ee" filter="url(#glowEffect)" />
                    <circle cx="295" cy="190" r="2" fill="#22d3ee" />
                    <circle cx="310" cy="165" r="3.5" fill="#D2E805" />
                    <circle cx="290" cy="150" r="3" fill="#22d3ee" />
                    
                    {/* Australia */}
                    <circle cx="300" cy="290" r="3" fill="#22d3ee" />
                    <circle cx="320" cy="300" r="4" fill="#00f5d4" filter="url(#glowEffect)" />
                    <circle cx="330" cy="285" r="2.5" fill="#D2E805" />
                  </g>

                  {/* Animated Light Rays Connecting Nodes */}
                  <path d="M110 145 Q 150 180 245 205" stroke="rgba(0,245,212,0.4)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_6s_linear_infinite]" />
                  <path d="M120 130 Q 200 100 270 125" stroke="rgba(210,232,5,0.4)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-[dash_8s_linear_infinite_reverse]" />
                  <path d="M245 205 Q 280 240 320 300" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" strokeDasharray="6 3" className="animate-[dash_5s_linear_infinite]" />

                  {/* Glowing Core center of the earth */}
                  <circle cx="200" cy="200" r="20" fill="#22d3ee" opacity="0.15" filter="url(#glowEffect)" />
                  <circle cx="200" cy="200" r="5" fill="#00f5d4" filter="url(#glowEffect)" className="animate-ping" />
                  
                  {/* Circuit Traces & Glow Platform at the base of the globe (Y: ~340) */}
                  <g filter="url(#glowEffect)">
                    {/* Circuit traces spreading horizontally */}
                    <path d="M100 340 L 150 340 L 175 355 L 225 355 L 250 340 L 300 340" stroke="url(#circuitGrad)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M120 350 L 160 350 L 180 365 L 220 365 L 240 350 L 280 350" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                    
                    {/* Vertical lines connecting to the circuit base */}
                    <path d="M200 325 L 200 355" stroke="#22d3ee" strokeWidth="2" />
                    <path d="M170 320 L 170 340" stroke="#00f5d4" strokeWidth="1.5" />
                    <path d="M230 320 L 230 340" stroke="#00f5d4" strokeWidth="1.5" />

                    {/* Pulsing base nodes */}
                    <circle cx="200" cy="355" r="4.5" fill="#D2E805" />
                    <circle cx="175" cy="355" r="3.5" fill="#22d3ee" />
                    <circle cx="225" cy="355" r="3.5" fill="#22d3ee" />
                    <circle cx="150" cy="340" r="3.5" fill="#00f5d4" />
                    <circle cx="250" cy="340" r="3.5" fill="#00f5d4" />
                  </g>
                </svg>

                {/* Glowing floor projection ring beneath the globe */}
                <div className="absolute bottom-[30px] w-[300px] h-[50px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.6)_0%,rgba(0,0,0,0)_70%)] opacity-80 blur-md pointer-events-none rounded-full"></div>
                
                {/* Additional high-tech circular border underlay */}
                <div className="absolute bottom-[40px] w-[260px] h-[40px] border border-cyan-400/40 rounded-full opacity-60 pointer-events-none scale-y-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Most Powerful Logistics API */}
        <section className="relative py-32 md:py-40 bg-white z-10 overflow-hidden border-t border-slate-100">
          {/* Subtle background decorative grid and glow */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.04)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              
              {/* Left Column: Heading and Paragraph */}
              <div className="lg:col-span-6 flex flex-col text-left justify-center lg:pr-6">
                <h2 className="text-4xl md:text-5xl lg:text-[48px] font-black leading-[1.2] tracking-tight font-display flex items-center border-l-[5px] border-[#D2E805] pl-6 mb-8" style={{ color: '#101518' }}>
                  <b>Most Powerful Logistics<br />API for Businesses</b>
                </h2>
                <p className="text-lg md:text-[20px] leading-relaxed font-light font-sans max-w-xl text-slate-600">
                  We are making logistics services smart, affordable and reliable, amplifying business growth.
                </p>
              </div>

              {/* Right Column: Warehouse Sorting Image */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-100 aspect-[4/3] w-full bg-slate-50">
                  <img
                    src={warehouseImg}
                    alt="Most Powerful Logistics API for Businesses"
                    className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Third Section: Logistics Tech Cards Grid */}
        <section className="relative pb-32 bg-white z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Card 1: Powered by APIs, Driven by Innovation */}
              <div className="bg-[#FDFAE3]/50 border-2 border-dashed border-[#D2E805]/40 rounded-2xl p-8 flex items-start gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Cpu className="w-7 h-7 text-[#00796B]" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                    Powered by APIs, Driven by Innovation
                  </h3>
                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                    We have empowered our logistics solutions with technology that guarantees safety from the first mile to the last mile.
                  </p>
                </div>
              </div>

              {/* Card 2: The Hub for New Ideas */}
              <div className="bg-[#FDFAE3]/50 border-2 border-dashed border-[#D2E805]/40 rounded-2xl p-8 flex items-start gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-7 h-7 text-[#00796B]" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                    The Hub for New Ideas
                  </h3>
                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                    We are a one-stop-shop for full-spectrum logistics services, providing tech-powered solutions, armed with our state-of-the-art APIs.
                  </p>
                </div>
              </div>

              {/* Card 3: Tech-Driven Warehouse Technologies */}
              <div className="bg-[#FDFAE3]/50 border-2 border-dashed border-[#D2E805]/40 rounded-2xl p-8 flex items-start gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Boxes className="w-7 h-7 text-[#00796B]" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                    Tech-Driven Warehouse Technologies
                  </h3>
                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                    Our innovative tech-powered end-to-end warehousing services are shaping the future in this segment, solving crucial problems with groundbreaking solutions.
                  </p>
                </div>
              </div>

              {/* Card 4: Enabling Tomorrow with Solutions Promising Safety */}
              <div className="bg-[#FDFAE3]/50 border-2 border-dashed border-[#D2E805]/40 rounded-2xl p-8 flex items-start gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Handshake className="w-7 h-7 text-[#00796B]" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                    Enabling Tomorrow with Solutions Promising Safety
                  </h3>
                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                    We have empowered our logistics solutions with technology that guarantees safety from the first mile to the last mile.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Fourth Section: Multi-Pronged Approach */}
        <section className="relative pb-32 bg-white z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Heading */}
            <div className="text-left mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-[5px] border-[#00796B] pl-6">
                <b>Multi-Pronged Approach</b>
              </h2>
            </div>

            {/* Inner Content Block */}
            <div className="bg-[#f8f9fa] border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Title and Paragraph */}
                <div className="lg:col-span-6 flex flex-col text-left justify-center pr-0 lg:pr-8">
                  <h3 className="text-2xl md:text-3xl font-black leading-[1.3] text-[#00796B] mb-6 font-display">
                    Optimizing Integrations with<br />Cutting-edge APIs
                  </h3>
                  <p className="text-slate-600 font-sans text-base md:text-lg leading-relaxed">
                    APIs are our strength, ensuring fast, reliable integrations across segments.
                  </p>
                </div>

                {/* Right Column: High-tech Developer Image */}
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-100 aspect-[16/10] md:aspect-[16/9] w-full bg-white">
                    <img
                      src={apiTechImg}
                      alt="Optimizing Integrations with Cutting-edge APIs"
                      className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Fifth Section: Innovation and Sustainability Side-by-Side Cards */}
        <section className="relative pb-32 bg-white z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Left Card: Innovation at the Core of Our Solutions */}
              <div className="bg-[#f8f9fa] border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="overflow-hidden rounded-2xl aspect-[16/10] w-full mb-6 bg-white border border-slate-100">
                    <img
                      src={innovationLightbulbImg}
                      alt="Innovation at the Core of Our Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left px-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-black text-[#00796B] mb-3 font-display">
                      Innovation at the Core of Our Solutions
                    </h3>
                    <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                      Innovation drives our impactful solutions, from micro to macro levels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card: An Eye on Sustainability & Growth */}
              <div className="bg-[#f8f9fa] border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="overflow-hidden rounded-2xl aspect-[16/10] w-full mb-6 bg-white border border-slate-100">
                    <img
                      src={sustainabilityGrowthImg}
                      alt="An Eye on Sustainability & Growth"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left px-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-black text-[#00796B] mb-3 font-display">
                      An Eye on Sustainability & Growth
                    </h3>
                    <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                      Our technology is aiming to balance growth with eco-consciousness.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sixth Section: Innovation Is In Our DNA */}
        <section className="relative pb-32 bg-white z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Heading */}
            <div className="text-left mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-[5px] border-[#00796B] pl-6">
                <b>Innovation Is In Our DNA</b>
              </h2>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              
              {/* Card 1: Demand Forecasting */}
              <div className="bg-[#f8f9fa] border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="overflow-hidden rounded-2xl aspect-[16/10] w-full mb-6 bg-white border border-slate-100">
                    <img
                      src={demandForecastingImg}
                      alt="Demand Forecasting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left px-2 mb-2">
                    <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                      Demand Forecasting
                    </h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed">
                      Our API-driven integrations are designed by innovators to create reliable solutions for delivery/courier services. These systems effectively align supply with demand, ensuring a smooth and efficient ecosystem that benefits clients, riders, and customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Efficient Misrouting Solutions */}
              <div className="bg-[#f8f9fa] border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="overflow-hidden rounded-2xl aspect-[16/10] w-full mb-6 bg-white border border-slate-100">
                    <img
                      src={misroutingSolutionsImg}
                      alt="Efficient Misrouting Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left px-2 mb-2">
                    <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                      Efficient Misrouting Solutions
                    </h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed">
                      We offer tech-enabled reverse logistics with doorstep and hub-based API-led quality checks, full shipment visibility, and customisable QC. Our systems detect and resolve misrouting swiftly, improving traceability and efficiency, key to powering seamless same-day and next-day deliveries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Swift Navigation with Route Optimization */}
              <div className="bg-[#f8f9fa] border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="overflow-hidden rounded-2xl aspect-[16/10] w-full mb-6 bg-white border border-slate-100">
                    <img
                      src={routeOptimizationImg}
                      alt="Swift Navigation with Route Optimization"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left px-2 mb-2">
                    <h3 className="text-xl font-bold text-[#00796B] mb-3 font-display">
                      Swift Navigation with Route Optimization
                    </h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed">
                      Our intelligent route and fleet management system optimizes routes and determines the best modes of travel for our delivery/courier services. This system ensures speed and reliability, crucial for achieving same day & next day delivery.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Seventh Section: What Our Leadership Team Says */}
        <section className="relative pb-16 bg-white z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            
            {/* Section Heading */}
            <div className="text-left mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-[5px] border-[#00796B] pl-6">
                <b>What Our Leadership Team Says</b>
              </h2>
            </div>

            {/* Carousel Content Container */}
            <div className="flex items-center justify-between gap-6 md:gap-12 w-full max-w-6xl mx-auto relative">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrevLeader}
                className="w-14 h-14 rounded-full bg-[#D2E805] hover:bg-[#b9cc04] flex items-center justify-center text-[#00796B] shadow-md transition-all duration-300 cursor-pointer shrink-0 scale-100 hover:scale-105 active:scale-95 z-20"
              >
                <ArrowLeft className="w-6 h-6 text-[#00796B]" strokeWidth={2.5} />
              </button>

              {/* Central Dynamic Card Grid */}
              <div className="flex-grow bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100/50 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  
                  {/* Left Column: Headshot Photo */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="overflow-hidden rounded-2xl shadow-md aspect-square w-full max-w-[280px] bg-slate-50 border border-slate-100">
                      <img
                        src={leadershipTeam[activeLeaderIndex].image}
                        alt={leadershipTeam[activeLeaderIndex].name}
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />
                    </div>
                  </div>

                  {/* Right Column: Quote copy, Name and Role */}
                  <div className="md:col-span-7 flex flex-col text-left justify-center">
                    <p className="text-slate-600 font-normal text-base md:text-[17px] leading-relaxed mb-6 font-sans italic">
                      "{leadershipTeam[activeLeaderIndex].quote}"
                    </p>
                    <h4 className="text-xl font-bold text-[#00796B] font-display mb-1">
                      {leadershipTeam[activeLeaderIndex].name}
                    </h4>
                    <span className="text-sm text-slate-500 font-medium">
                      {leadershipTeam[activeLeaderIndex].role}
                    </span>
                  </div>

                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNextLeader}
                className="w-14 h-14 rounded-full bg-[#D2E805] hover:bg-[#b9cc04] flex items-center justify-center text-[#00796B] shadow-md transition-all duration-300 cursor-pointer shrink-0 scale-100 hover:scale-105 active:scale-95 z-20"
              >
                <ArrowRight className="w-6 h-6 text-[#00796B]" strokeWidth={2.5} />
              </button>

            </div>

          </div>
        </section>

        {/* Eighth Section: Angle Open Source */}
        <section className="relative pt-16 pb-32 bg-white z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text content */}
              <div className="flex flex-col text-left space-y-6 lg:max-w-xl">
                <h2 className="text-3xl md:text-[40px] font-black leading-[1.15] text-[#101518] font-display tracking-tight">
                  Angle Open Source:<br />
                  From the makers' lab to you
                </h2>
                <p className="text-slate-600 font-sans text-base md:text-[17px] leading-relaxed font-normal">
                  Our innovators are driven by curiosity and you can quench yours too! Find the complete repository of our technical know-how enabling us to push the boundaries of innovation in logistics.
                </p>
                <div className="pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#D2E805] hover:bg-[#b9cc04] text-[#101518] hover:text-[#101518] font-extrabold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-display select-none hover:scale-105 active:scale-95 group text-base"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 text-[#101518] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Right Column: High-tech Dark Warehouse Image */}
              <div className="flex justify-center w-full">
                <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-100/50 aspect-[16/10] w-full max-w-[650px] bg-slate-900">
                  <img
                    src={openSourceWarehouseImg}
                    alt="Angle Open Source Warehouse"
                    className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InnovationPage;
