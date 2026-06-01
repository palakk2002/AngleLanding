import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Asset imports
const deliveryPartnerImg = '/truck.jpg';
const highwayTruckImg = '/truck.jpg';
import networkMapImg from '../../../assets/angle_edge_maps.png';
import scooterImg from '../../../assets/angle_blog_fleet.png';
import warehouseImg from '../../../assets/step_03_management.png';
import niteshLohiyaImg from '../../../assets/nitesh_lohiya.png';
import ananyaSharmaImg from '../../../assets/ananya_sharma.png';

const AboutPage = () => {
  // Ensure page scrolls to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const galleryPhotos = [
    { id: 1, category: "Awards", title: "Best Tech in Logistics 2023 Ceremony", image: "/p1.jpg" },
    { id: 2, category: "Team Life", title: "Annual Leadership Alignment Summit", image: "/p2.jpg" },
    { id: 3, category: "Milestone", title: "Celebrating 10 Years of Excellence", image: "/p3.jpg" },
    { id: 4, category: "Activities", title: "Regional Operations Team Meetup", image: "/p4.jpg" },
    { id: 5, category: "Awards", title: "National Courier Network Award 2024", image: "/p5.jpg" },
    { id: 6, category: "Conferences", title: "Logistics Future Tech Expo 2025", image: "/p6.jpg" },
    { id: 7, category: "Activities", title: "Angle Fleet Kickoff and Celebrations", image: "/p7.jpg" },
    { id: 8, category: "Awards", title: "ONDC's Best Logistics Innovation 2023", image: "/p9.jpg" },
    { id: 9, category: "Team Life", title: "Annual Sports and Wellness Championship", image: "/p11.jpg" },
    { id: 10, category: "Milestone", title: "Express Parcel Launch Ceremony", image: "/p18.jpg" },
    { id: 11, category: "Conferences", title: "National Hyperlocal Supply Chain Meet 2024", image: "/p15.jpg" },
    { id: 12, category: "Activities", title: "Customer Support Team Appreciation Event", image: "/p13.jpg" }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowLeft') {
        setCurrentPhotoIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentPhotoIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, galleryPhotos.length]);

  const [activeYear, setActiveYear] = useState(2022);
  const years = [2022, 2023, 2024, 2025];

  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);

  const leadershipTeam = [
    {
      name: "Shrikant Singh",
      role: "CEO",
      quote: "Our commitment to revolutionizing logistics is more than a mission – it's a product. We are crafting a solution that transcends the ordinary, embodying efficiency, innovation, and seamless connectivity.",
      image: niteshLohiyaImg
    },
    {
      name: "Ajeet Kumar Singh",
      role: "Director",
      quote: "Strategic leadership is the cornerstone of our operations. By aligning our resources and vision, we ensure that every delivery reflects our promise of reliability and speed across the nation.",
      image: "/director.jpg"
    },
    {
      name: "Pratima Singh",
      role: "Director",
      quote: "Operational excellence is what drives us. I am proud of the team’s dedication to maintaining the highest standards of service as we continue to expand our reach to every corner of India.",
      image: "/fdirector.jpg"
    },
    {
      name: "Neha",
      role: "Senior Accountant",
      quote: "Technology is at the core of everything we build. We are defining the blueprint for the next generation of seamless hyper-local supply chains through scalable financial and operational insights.",
      image: ananyaSharmaImg
    }
  ];

  const handlePrevLeader = () => {
    setActiveLeaderIndex((prev) => (prev === 0 ? leadershipTeam.length - 1 : prev - 1));
  };

  const handleNextLeader = () => {
    setActiveLeaderIndex((prev) => (prev === leadershipTeam.length - 1 ? 0 : prev + 1));
  };

  const awardsScrollRef = useRef(null);

  const scrollAwards = (direction) => {
    if (awardsScrollRef.current) {
      const scrollAmount = 340; // width of a card + gap
      awardsScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page-wrapper min-h-screen flex flex-col bg-white">
      {/* Consistent Site Header */}
      <Navbar />

      <main className="flex-1 w-full pt-[72px] md:pt-[80px]">
        {/* About Us First Section */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text */}
              <div className="flex flex-col text-left justify-center lg:pr-8">
                
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-black text-white leading-[1.2] tracking-tight font-display mb-8 border-l-4 border-[#00796B] pl-5">
                  About Angle Courier Service
                </h1>

                <p className="text-slate-600 text-base md:text-lg font-sans mb-6 leading-relaxed">
                  Angle Courier stands as India's leading logistics service provider for e-commerce, express parcel, and value-added services. With an extensive distribution network covering over 2,500+ cities and more than 15,100 PIN codes, we've established ourselves as market leaders through strategic thinking and forward-focused solutions.
                </p>

                <p className="text-slate-600 text-base md:text-lg font-sans mb-6 leading-relaxed">
                  As we celebrate 10 years of transforming logistics, Angle Courier continues to lead with speed, agility, innovation, and service excellence. Our versatility spans from lightning-fast intracity deliveries to same-day fulfillment, while our tech-driven AI solutions like Angle Maps and Angle Shield deliver exceptional value and set new industry benchmarks.
                </p>

                <p className="text-slate-600 text-base md:text-lg font-sans leading-relaxed mb-10">
                  With a relentless focus on operational efficiency and intelligent automation, Angle Courier has become the preferred logistics partner for India's top e-commerce and hyperlocal brands. We are thinking beyond today to redefine and shape the future of logistics.
                </p>

                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 bg-[#FDFAE3] border-l border-t border-[#E3D96B] w-full max-w-lg shadow-sm">
                  {/* Stat 1 */}
                  <div className="p-6 border-r border-b border-[#E3D96B] flex flex-col items-center justify-center text-center h-40 md:h-44">
                    <h3 className="text-4xl md:text-5xl font-black text-[#00796B] mb-2 font-display">2.5L+</h3>
                    <p className="text-[#101518] text-[13px] md:text-[15px] font-bold font-sans leading-snug">Quarterly<br/>Delivery Partners</p>
                  </div>
                  {/* Stat 2 */}
                  <div className="p-6 border-b border-[#E3D96B] flex flex-col items-center justify-center text-center h-40 md:h-44">
                    <h3 className="text-4xl md:text-5xl font-black text-[#00796B] mb-2 font-display">1.6</h3>
                    <p className="text-[#101518] text-[13px] md:text-[15px] font-bold font-sans leading-snug">Million Packages<br/>Delivered Daily</p>
                  </div>
                  {/* Stat 3 */}
                  <div className="p-6 border-r border-[#E3D96B] flex flex-col items-center justify-center text-center h-40 md:h-44">
                    <h3 className="text-4xl md:text-5xl font-black text-[#00796B] mb-2 font-display">2,500+</h3>
                    <p className="text-[#101518] text-[13px] md:text-[15px] font-bold font-sans leading-snug">Cities</p>
                  </div>
                  {/* Stat 4 */}
                  <div className="p-6 flex flex-col items-center justify-center text-center h-40 md:h-44">
                    <h3 className="text-4xl md:text-5xl font-black text-[#00796B] mb-2 font-display">15,100+</h3>
                    <p className="text-[#101518] text-[13px] md:text-[15px] font-bold font-sans leading-snug">PIN Codes</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Image Collage */}
              <div className="grid grid-cols-2 gap-4 h-full relative mt-8 lg:mt-0 items-start">
                
                {/* Left side of collage (stacked 3 images) */}
                <div className="flex flex-col gap-4">
                  {/* Top Left Image: Delivery Partner */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-md group h-[260px] md:h-[280px]"
                  >
                    <img 
                      src={deliveryPartnerImg} 
                      alt="Delivery Partner" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm md:text-base leading-snug drop-shadow-md" style={{ color: '#ffffff' }}>
                      2.5L+ Average Quarterly<br />Transacting Delivery Partners
                    </p>
                  </motion.div>

                  {/* Middle Left Image: Trucks */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden shadow-md group h-[200px] md:h-[220px]"
                  >
                    <img 
                      src={highwayTruckImg} 
                      alt="Logistics Fleet" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm md:text-base leading-snug drop-shadow-md" style={{ color: '#ffffff' }}>
                      Operating in 2,500+ Cities
                    </p>
                  </motion.div>

                  {/* Bottom Left Image: Scooter */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative rounded-2xl overflow-hidden shadow-md group h-[260px] md:h-[280px]"
                  >
                    <img 
                      src={scooterImg} 
                      alt="Scooter Fleet" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </motion.div>
                </div>

                {/* Right side of collage (stacked 2 images) */}
                <div className="flex flex-col gap-4">
                  {/* Top Right Image (Tall) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-md group h-[476px] md:h-[516px]"
                  >
                    <img 
                      src={networkMapImg} 
                      alt="Network Map" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm md:text-base leading-snug drop-shadow-md" style={{ color: '#ffffff' }}>
                      Serving 15,100+ PIN Codes
                    </p>
                  </motion.div>

                  {/* Bottom Right Image: Warehouse */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-md group h-[260px] md:h-[280px]"
                  >
                    <img 
                      src={warehouseImg} 
                      alt="Warehouse" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm md:text-base leading-snug drop-shadow-md text-center" style={{ color: '#ffffff' }}>
                      Handling a Staggering Volume of<br />Over 22L Orders Daily
                    </p>
                  </motion.div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Leadership Lineup Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#263152] leading-tight tracking-tight font-display flex items-start border-l-[3px] border-[#00796B] pl-4 md:pl-5">
                Our Leadership Lineup
              </h2>

            </div>

            {/* Leadership Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Leader 1 */}
              <div className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-[#E2E8F0] to-[#94A3B8] relative">
                  <img 
                    src={niteshLohiyaImg} 
                    alt="Shrikant Singh" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-0.5 group-hover:text-[#005f54] transition-colors">Shrikant Singh</h3>
                <p className="text-slate-500 text-[15px] font-medium font-sans">CEO</p>
              </div>

              {/* Leader 2 */}
              <div className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-[#E2E8F0] to-[#94A3B8] relative">
                  <img 
                    src="/director.jpg" 
                    alt="Ajeet Kumar Singh" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-0.5 group-hover:text-[#005f54] transition-colors">Ajeet Kumar Singh</h3>
                <p className="text-slate-500 text-[15px] font-medium font-sans">Director</p>
              </div>

              {/* Leader 3 */}
              <div className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-[#E2E8F0] to-[#94A3B8] relative">
                  <img 
                    src="/fdirector.jpg" 
                    alt="Pratima Singh" 
                    className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-0.5 group-hover:text-[#005f54] transition-colors">Pratima Singh</h3>
                <p className="text-slate-500 text-[15px] font-medium font-sans">Director</p>
              </div>

              {/* Leader 4 */}
              <div className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-[#E2E8F0] to-[#94A3B8] relative">
                  <img 
                    src={ananyaSharmaImg} 
                    alt="Neha" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-0.5 group-hover:text-[#005f54] transition-colors truncate">Neha</h3>
                <p className="text-slate-500 text-[15px] font-medium font-sans truncate">Senior Accountant</p>
              </div>

            </div>


          </div>
        </section>

        {/* Team Life & Achievements Gallery Section */}
        <section className="relative bg-[#F8FAFC] py-16 md:py-24 border-t border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="mb-12 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#263152] leading-tight tracking-tight font-display flex items-start border-l-[3px] border-[#00796B] pl-4 md:pl-5">
                Angle Courier Team in Action
              </h2>
              <p className="text-slate-500 text-[15px] font-medium font-sans mt-3 max-w-2xl">
                Capturing our moments of glory, collaborative team activities, national awards ceremonies, and the vibrant life that defines Angle Courier.
              </p>
            </div>

            {/* Gallery Grid (Shows only first 4 items, responsive columns) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryPhotos.slice(0, 4).map((item, idx) => {
                const isLast = idx === 3;
                return (
                  <div 
                    key={item.id} 
                    onClick={() => {
                      // Start at the first hidden photo (index 4) if clicking "+ More", else start at clicked photo index
                      setCurrentPhotoIndex(isLast ? 4 : idx);
                      setIsLightboxOpen(true);
                    }}
                    className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md aspect-[4/3] bg-slate-100 border border-slate-200/50 cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Actual image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {isLast ? (
                      /* "+ More Photos" Dark Blur Overlay */
                      <div className="absolute inset-0 bg-[#263152]/70 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-4 z-20 group-hover:bg-[#263152]/75 transition-colors duration-300">
                        <span className="text-white text-3xl font-black font-display tracking-tight">
                          +{galleryPhotos.length - 4}
                        </span>
                        <span className="text-[#D2E805] text-xs font-bold uppercase tracking-wider mt-1">
                          More Photos
                        </span>
                      </div>
                    ) : (
                      /* Very subtle dark tint for depth (lowered opacity) */
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[9999] bg-[#101518]/95 backdrop-blur-[4px] flex flex-col items-center justify-center select-none animate-fadeIn">
            {/* Close Button top-right */}
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer p-2 z-30 scale-100 hover:scale-110 active:scale-95"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter Indicator top-center */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest font-sans z-30">
              {currentPhotoIndex + 1} / {galleryPhotos.length}
            </div>

            {/* Left Navigation Arrow */}
            <button 
              onClick={() => setCurrentPhotoIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1))}
              className="absolute left-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer z-30 scale-100 hover:scale-105 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Image Slider Frame */}
            <div className="w-full max-w-4xl max-h-[85vh] px-4 flex flex-col items-center justify-center z-20">
              <img 
                src={galleryPhotos[currentPhotoIndex].image} 
                alt={galleryPhotos[currentPhotoIndex].title}
                loading="lazy"
                className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-2xl transition-all duration-300 transform scale-100"
              />
              <p className="text-white/80 text-center font-sans text-sm md:text-base font-semibold mt-4 px-8 max-w-2xl leading-snug shrink-0">
                {galleryPhotos[currentPhotoIndex].title}
              </p>

              {/* Premium Thumbnail Navigation Row */}
              <div 
                className="flex gap-2 mt-6 overflow-x-auto max-w-full px-4 py-1.5 shrink-0 justify-center" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {galleryPhotos.map((thumb, tIdx) => (
                  <div 
                    key={thumb.id}
                    onClick={() => setCurrentPhotoIndex(tIdx)}
                    className={`relative w-11 h-11 md:w-14 md:h-14 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 shrink-0 ${
                      currentPhotoIndex === tIdx ? 'border-[#D2E805] scale-105 shadow-md opacity-100' : 'border-transparent opacity-40 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb.image} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button 
              onClick={() => setCurrentPhotoIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1))}
              className="absolute right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer z-30 scale-100 hover:scale-105 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* What Our Leadership Team Says Section */}
        <section className="relative pb-32 bg-white z-10 overflow-hidden">
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


        {/* What We Strive For Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#263152] leading-tight tracking-tight font-display flex items-start border-l-[3px] border-[#00796B] pl-4 md:pl-5">
                What We Strive For
              </h2>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              {/* Vision Card */}
              <div className="relative rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-center p-8 md:p-10 lg:p-12 shadow-sm group border border-slate-100">
                <div className="absolute inset-0">
                  <img src={networkMapImg} alt="Vision Background" className="w-full h-full object-cover opacity-[0.25] mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D2E805]/60 via-[#E8F5A4]/70 to-white/95"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <h3 className="text-3xl md:text-[34px] font-bold text-[#00796B] font-display">Our Vision</h3>
                  <p className="text-[#101518] text-base md:text-[17px] font-medium font-sans leading-[1.6]">
                    Enabling seamless commerce by empowering lives through technology-driven logistics services, creating opportunities for everyone, everywhere, across India.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="relative rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-center p-8 md:p-10 lg:p-12 shadow-sm group border border-slate-100">
                <div className="absolute inset-0">
                  <img src={warehouseImg} alt="Mission Background" className="w-full h-full object-cover opacity-[0.25] mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D2E805]/60 via-[#E8F5A4]/70 to-white/95"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <h3 className="text-3xl md:text-[34px] font-bold text-[#00796B] font-display">Our Mission</h3>
                  <p className="text-[#101518] text-base md:text-[17px] font-medium font-sans leading-[1.6]">
                    Building the fastest and most reliable logistics network by empowering a million micro-entrepreneurs through technology to deliver anything, anywhere.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Our Journey So Far Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#263152] leading-tight tracking-tight font-display flex items-start border-l-[3px] border-[#00796B] pl-4 md:pl-5">
                Our Journey So Far
              </h2>
            </div>

            {/* Journey Content */}
            <div className="mb-16">
              
              {/* Left Side: Year and Text */}
              <div className="flex flex-col text-left max-w-4xl mx-auto">
                <h3 className="text-[80px] md:text-[120px] font-black text-[#00796B] leading-none mb-6 md:mb-10 font-display">
                  {activeYear}
                </h3>
                <ul className="list-disc pl-5 space-y-4 text-slate-600 text-base md:text-lg font-sans">
                  <li>Angle Courier started as a pure last-mile food delivery/courier services.</li>
                  <li>10,000+ orders/day were delivered in a year.</li>
                </ul>
              </div>

            </div>

            {/* Timeline Carousel */}
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-[2px] border-b-4 border-slate-800" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <button 
                onClick={() => setActiveYear(Math.max(2022, activeYear - 1))}
                className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full bg-[#D2E805] flex items-center justify-center hover:bg-[#c2d600] transition-colors shadow-sm group mb-2"
              >
                <svg className="w-5 h-5 text-[#00796B] transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>

              <div className="flex items-center justify-between flex-1 min-w-max px-4 md:px-8 gap-6 md:gap-10">
                {years.map((year) => (
                  <button 
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`text-[17px] md:text-[19px] font-bold font-sans transition-colors relative pb-3 ${
                      activeYear === year ? 'text-[#00796B]' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {year}
                    {activeYear === year && (
                      <div className="absolute bottom-[-6px] left-0 right-0 h-1 bg-[#00796B]"></div>
                    )}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setActiveYear(Math.min(2025, activeYear + 1))}
                className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full bg-[#D2E805] flex items-center justify-center hover:bg-[#c2d600] transition-colors shadow-sm group mb-2"
              >
                <svg className="w-5 h-5 text-[#00796B] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="relative bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#263152] leading-tight tracking-tight font-display flex items-start border-l-[3px] border-[#00796B] pl-4 md:pl-5">
                Our Core Values
              </h2>
            </div>

            {/* Core Values Grid with Large Yellow Cross */}
            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              
              {/* Value 1: Customer Centricity */}
              <div className="flex flex-col sm:flex-row items-start gap-8 p-8 md:p-12 lg:p-16 border-b-[4px] md:border-r-[4px] border-[#D2E805]">
                <div className="flex-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-4">Customer Centricity</h3>
                  <p className="text-slate-500 text-[15px] font-sans leading-relaxed">
                    Nurturing strong bonds & delivering an outstanding customer experience is the hallmark of our services. The customer is at the heart of our business ecosystem.
                  </p>
                </div>
                {/* Icon */}
                <div className="w-16 h-16 shrink-0 text-[#00796B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
              </div>

              {/* Value 2: Innovation */}
              <div className="flex flex-col sm:flex-row items-start gap-8 p-8 md:p-12 lg:p-16 border-b-[4px] border-[#D2E805]">
                <div className="flex-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-4">Innovation</h3>
                  <p className="text-slate-500 text-[15px] font-sans leading-relaxed">
                    With constant innovation and an endless chain of original ideas, we aim to revolutionise the industrial landscape through robust and refined logistics solutions.
                  </p>
                </div>
                {/* Icon */}
                <div className="w-16 h-16 shrink-0 text-[#00796B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M12 2v1" />
                    <path d="M12 7v1" />
                    <path d="M4.93 4.93l.71.71" />
                    <path d="M8.46 8.46l.71.71" />
                    <path d="M2 12h1" />
                    <path d="M7 12h1" />
                    <path d="M4.93 19.07l.71-.71" />
                    <path d="M22 12h-1" />
                    <path d="M17 12h-1" />
                    <path d="M19.07 4.93l-.71.71" />
                    <path d="M15.54 8.46l-.71.71" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
              </div>

              {/* Value 3: Empathy */}
              <div className="flex flex-col sm:flex-row items-start gap-8 p-8 md:p-12 lg:p-16 border-b-[4px] md:border-b-0 md:border-r-[4px] border-[#D2E805]">
                <div className="flex-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-4">Empathy</h3>
                  <p className="text-slate-500 text-[15px] font-sans leading-relaxed">
                    Showing empathy enables us to anticipate the needs, fears, and difficulties of others and put in genuine effort to address them.
                  </p>
                </div>
                {/* Icon */}
                <div className="w-16 h-16 shrink-0 text-[#00796B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M14 15l2-2 2 2" />
                  </svg>
                </div>
              </div>

              {/* Value 4: Integrity */}
              <div className="flex flex-col sm:flex-row items-start gap-8 p-8 md:p-12 lg:p-16">
                <div className="flex-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#00796B] font-display mb-4">Integrity</h3>
                  <p className="text-slate-500 text-[15px] font-sans leading-relaxed">
                    Powered by integrity and driven by strong morals, India's most trusted logistics brand values ethics over anything else.
                  </p>
                </div>
                {/* Icon */}
                <div className="w-16 h-16 shrink-0 text-[#00796B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                    <path d="M7 16h10" />
                    <path d="M9 20h6" />
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Awards Section */}
        <section className="relative bg-white py-16 md:py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#263152] leading-tight tracking-tight font-display flex items-start border-l-[3px] border-[#00796B] pl-4 md:pl-5">
                The Top-Trusted Choice of Brands
              </h2>
              
              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollAwards('left')}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#D2E805] flex items-center justify-center hover:bg-[#c2d600] transition-colors shadow-sm group"
                >
                  <svg className="w-5 h-5 text-[#00796B] transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <button 
                  onClick={() => scrollAwards('right')}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#D2E805] flex items-center justify-center hover:bg-[#c2d600] transition-colors shadow-sm group"
                >
                  <svg className="w-5 h-5 text-[#00796B] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Awards Carousel */}
            <div 
              ref={awardsScrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 text-center hide-scrollbar" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              
              {/* Award 1 */}
              <div className="bg-[#EEF7F5] rounded-xl p-8 flex flex-col items-center justify-between min-h-[340px] min-w-[280px] md:min-w-[316px] shrink-0 snap-center">
                <div className="mb-6 flex justify-center w-full">
                  <svg viewBox="0 0 24 24" className="w-20 h-20 drop-shadow-md text-[#D4AF37]" fill="currentColor">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.5-6.3-4.8-6.3 4.8 2.3-7.5-6-4.6h7.6z"/>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-slate-600 text-[15px] mb-1 font-sans">Winner of</p>
                  <h3 className="text-[17px] font-bold text-[#00796B] font-display mb-4 leading-snug">
                    Best use of Technology<br/>in Contact Centre<br/>(Logistics)
                  </h3>
                </div>
                <p className="text-[#263152] font-bold text-[15px] font-sans">2nd Annual Cx<br/>Excellence Awards,<br/>2023</p>
              </div>

              {/* Award 2 */}
              <div className="bg-[#EEF7F5] rounded-xl p-8 flex flex-col items-center justify-between min-h-[340px] min-w-[280px] md:min-w-[316px] shrink-0 snap-center">
                <div className="mb-6 flex justify-center w-full">
                  <svg viewBox="0 0 24 24" className="w-20 h-20 drop-shadow-md text-[#D4AF37]" fill="currentColor">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.5-6.3-4.8-6.3 4.8 2.3-7.5-6-4.6h7.6z"/>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-slate-600 text-[15px] mb-1 font-sans">Winner of</p>
                  <h3 className="text-[17px] font-bold text-[#00796B] font-display mb-4 leading-snug">
                    Operational Excellence<br/>Awards
                  </h3>
                </div>
                <p className="text-[#263152] font-bold text-[15px] font-sans">ONDC's Elevate<br/>Awards, 2023</p>
              </div>

              {/* Award 3 */}
              <div className="bg-[#EEF7F5] rounded-xl p-8 flex flex-col items-center justify-between min-h-[340px] min-w-[280px] md:min-w-[316px] shrink-0 snap-center">
                <div className="mb-6 flex justify-center w-full">
                  <svg viewBox="0 0 24 24" className="w-20 h-20 drop-shadow-md text-[#D4AF37]" fill="currentColor">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.5-6.3-4.8-6.3 4.8 2.3-7.5-6-4.6h7.6z"/>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-slate-600 text-[15px] mb-1 font-sans">Winner of</p>
                  <h3 className="text-[17px] font-bold text-[#00796B] font-display mb-4 leading-snug">
                    Outstanding<br/>performance in the<br/>COVID Focussed<br/>Community Support
                  </h3>
                </div>
                <p className="text-[#263152] font-bold text-[15px] font-sans">4th CSR Health Impact<br/>Awards, 2020 COVID<br/>Edition</p>
              </div>

              {/* Award 4 */}
              <div className="bg-[#EEF7F5] rounded-xl p-8 flex flex-col items-center justify-between min-h-[340px] min-w-[280px] md:min-w-[316px] shrink-0 snap-center">
                <div className="mb-6 flex justify-center w-full">
                  <svg viewBox="0 0 24 24" className="w-20 h-20 drop-shadow-md text-[#D4AF37]" fill="currentColor">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.5-6.3-4.8-6.3 4.8 2.3-7.5-6-4.6h7.6z"/>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-slate-600 text-[15px] mb-1 font-sans">Winner of</p>
                  <h3 className="text-[17px] font-bold text-[#00796B] font-display mb-4 leading-snug">
                    Innovation in Transport<br/>Tech
                  </h3>
                </div>
                <p className="text-[#263152] font-bold text-[15px] font-sans">10th Aegis Graham Bell<br/>Awards, 2020</p>
              </div>

            </div>

          </div>
        </section>

        {/* Investors & Trusted By Section */}
        <section className="relative bg-white py-16 md:py-24 border-t border-slate-100 overflow-hidden">
          
          {/* Our Investors */}
          <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263152] font-display">
              Our Investors
            </h2>
          </div>

          <div className="flex overflow-hidden relative w-full bg-white mb-20 md:mb-28">
            <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div 
              className="flex items-center gap-16 md:gap-24 w-max px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {[...Array(4)].map((_, idx) => (
                <React.Fragment key={`investor-${idx}`}>
                  {/* Myntra */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-gradient-to-tr from-[#FF3F6C] via-[#F15535] to-[#F1C40F] rounded-md flex items-center justify-center text-white font-extrabold text-[11px] italic shadow-sm">
                      M
                    </div>
                    <span className="text-base md:text-lg font-bold text-slate-800 tracking-tight font-sans">
                      Myntra
                    </span>
                  </div>

                  {/* Flipkart */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-[#2874F0] rounded-md flex items-center justify-center text-[#FFE11B] shadow-sm">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
                      </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-extrabold italic text-[#2874F0] tracking-tight font-sans">
                      Flipkart
                    </span>
                  </div>

                  {/* Flipkart Minute */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-lg md:text-xl font-extrabold italic text-[#2874F0] tracking-tight font-sans">
                      Flipkart
                    </span>
                    <span className="text-[9px] md:text-[10px] font-black bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 py-0.5 rounded-full italic tracking-wider uppercase shadow-sm">
                      minute
                    </span>
                  </div>

                  {/* Shopsy */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5.5 h-5.5 bg-[#FF4F64] rounded-full flex items-center justify-center text-white shadow-sm">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-black text-[#FF4F64] lowercase tracking-wide font-display">
                      shopsy
                    </span>
                  </div>

                  {/* Snapdeal */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5 h-5 bg-[#E40046] rotate-45 flex items-center justify-center shadow-md rounded-[3px]">
                      <div className="w-2.5 h-2.5 bg-white rounded-[1px]" />
                    </div>
                    <span className="text-lg md:text-xl font-extrabold text-[#E40046] tracking-tight font-sans">
                      snapdeal
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Trusted By */}
          <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263152] font-display">
              Trusted By
            </h2>
          </div>

          <div className="flex overflow-hidden relative w-full bg-white">
            <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div 
              className="flex items-center gap-12 md:gap-20 w-max px-8"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...Array(4)].map((_, idx) => (
                <React.Fragment key={`trusted-${idx}`}>
                  {/* Myntra */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-gradient-to-tr from-[#FF3F6C] via-[#F15535] to-[#F1C40F] rounded-md flex items-center justify-center text-white font-extrabold text-[11px] italic shadow-sm">
                      M
                    </div>
                    <span className="text-base md:text-lg font-bold text-slate-800 tracking-tight font-sans">
                      Myntra
                    </span>
                  </div>

                  {/* Flipkart */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-[#2874F0] rounded-md flex items-center justify-center text-[#FFE11B] shadow-sm">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
                      </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-extrabold italic text-[#2874F0] tracking-tight font-sans">
                      Flipkart
                    </span>
                  </div>

                  {/* Flipkart Minute */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-lg md:text-xl font-extrabold italic text-[#2874F0] tracking-tight font-sans">
                      Flipkart
                    </span>
                    <span className="text-[9px] md:text-[10px] font-black bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 py-0.5 rounded-full italic tracking-wider uppercase shadow-sm">
                      minute
                    </span>
                  </div>

                  {/* Shopsy */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5.5 h-5.5 bg-[#FF4F64] rounded-full flex items-center justify-center text-white shadow-sm">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-black text-[#FF4F64] lowercase tracking-wide font-display">
                      shopsy
                    </span>
                  </div>

                  {/* Snapdeal */}
                  <div className="flex items-center gap-2 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5 h-5 bg-[#E40046] rotate-45 flex items-center justify-center shadow-md rounded-[3px]">
                      <div className="w-2.5 h-2.5 bg-white rounded-[1px]" />
                    </div>
                    <span className="text-lg md:text-xl font-extrabold text-[#E40046] tracking-tight font-sans">
                      snapdeal
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Consistent Site Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
