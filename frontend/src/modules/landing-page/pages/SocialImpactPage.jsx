import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ridersImg from '../../../assets/social_impact_riders.png';
import impactEducationImg from '../../../assets/impact_education.png';
import impactEconomyImg from '../../../assets/impact_economy.png';
import gajendraRiderImg from '../../../assets/gajendra_rider.png';
import niteshLohiyaImg from '../../../assets/nitesh_lohiya.png';
import blogPartnersImg from '../../../assets/angle_blog_partners.png';
import pharmacyImg from '../../../assets/pharmacy_dark_store_quick_commerce.png';
const deliveryHeroImg = '/cou.jpg';

const SocialImpactPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sliderItems = [
    {
      title: "Delivering Education",
      description: "Our commitment to rural education and expanding digital learning networks helps empower schools and support local communities at the heart of everywhere.",
      image: impactEducationImg
    },
    {
      title: "Securing Jobs & Dreams",
      description: "At Angle Courier, creating job opportunities through innovative logistics strategies is essential to our mission. We are dedicated to growing our network of over 100k delivery partners by providing comprehensive training and talent development, paving the way for rewarding career opportunities.",
      image: '/cour.jpg'
    },
    {
      title: "Empowering Local Economy",
      description: "We support the local economy by providing digital integrations and seamless courier logistics, ensuring small businesses and vendors reach a broader market efficiently.",
      image: impactEconomyImg
    }
  ];

  return (
    <div className="social-impact-scoped-wrapper min-h-screen bg-[#030014] text-slate-100 flex flex-col font-sans antialiased">
      <style>{`
        .social-impact-scoped-wrapper h1 {
          color: #D2E805 !important;
        }
      `}</style>
      
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* First Section: Hero matching screenshot exactly */}
        <section className="relative w-full min-h-[580px] md:min-h-[660px] flex items-center justify-start overflow-hidden">
          {/* Background image cover */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero2.jpg" 
              alt="Our Social Impact & Growth Initiatives Riders" 
              className="w-full h-full object-cover object-center"
            />
            {/* Real photo overlay with reduced opacity for a brighter image look, exactly as requested */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/5 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/5 z-10" />
          </div>

          {/* Hero Content Container aligned exactly as requested */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full py-16 flex flex-col justify-center text-left">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#D2E805] font-display leading-[1.15] drop-shadow-md">
                Our Social Impact &<br />
                Growth Initiatives
              </h1>

              <p className="text-white font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-sm opacity-95">
                Since 2015, we've been building a reliable logistics network while empowering 1M micro-entrepreneurs through tech and social impact.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section: Fueling Growth matching screenshot exactly */}
        <section className="relative bg-white py-20 px-6 z-10 text-slate-800">
          <div className="max-w-7xl mx-auto bg-[#E8F5F2]/50 border border-[#00796B]/5 rounded-[32px] p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text copy */}
              <div className="lg:col-span-5 flex flex-col text-left">
                <h2 className="text-3xl md:text-4xl font-black text-[#101518] tracking-tight font-display flex items-center border-l-[5px] border-[#00796B] pl-6 mb-6">
                  <b>Fueling Growth to<br />Build a Stronger Nation</b>
                </h2>
                <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-normal">
                  From the beginning, we've aimed to create a fair marketplace by offering opportunities through our platform and supporting businesses of all sizes. Our core values are innovation, transparency, and accountability.
                </p>
              </div>

              {/* Right Column: 3D Overlapping Card Slider */}
              <div className="lg:col-span-7 flex justify-center items-center relative w-full h-[460px] overflow-hidden">
                <div className="flex items-center justify-center gap-4 w-full relative">
                  {sliderItems.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    const isLeft = idx < activeIndex;
                    const isRight = idx > activeIndex;
                    
                    let cardClass = "";
                    if (isActive) {
                      cardClass = "z-30 scale-100 opacity-100 translate-x-0 relative shadow-lg";
                    } else if (isLeft) {
                      cardClass = "z-10 scale-90 opacity-40 -translate-x-14 absolute left-0 cursor-pointer hover:opacity-60 hidden md:block";
                    } else if (isRight) {
                      cardClass = "z-10 scale-90 opacity-40 translate-x-14 absolute right-0 cursor-pointer hover:opacity-60 hidden md:block";
                    }

                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 w-[290px] sm:w-[330px] shrink-0 ${cardClass}`}
                      >
                        {/* Image */}
                        <div className="aspect-[1.5] w-full overflow-hidden bg-slate-50">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover select-none"
                          />
                        </div>
                        
                        {/* Card content matching the visual spec */}
                        <div className="p-5 flex flex-col text-left justify-between min-h-[220px]">
                          <div>
                            <h4 className="text-base font-bold text-[#00796B] font-display mb-3 text-center">
                              {item.title}
                            </h4>
                            <p className="text-slate-600 font-sans text-xs sm:text-[13px] leading-relaxed text-left">
                              {item.description}
                            </p>
                          </div>
                          
                          {/* Inner Card Dots indicator */}
                          {isActive && (
                            <div className="flex justify-center items-center gap-1.5 pt-4">
                              {sliderItems.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveIndex(dotIdx);
                                  }}
                                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${dotIdx === activeIndex ? 'bg-slate-800 scale-110' : 'border border-slate-400 bg-transparent'}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Third Section: A Million Micro-Entrepreneurs matching screenshot exactly */}
        <section className="relative bg-white pb-32 px-6 z-10 text-slate-800">
          <div className="max-w-7xl mx-auto bg-[#FFFDE8] border border-[#E3D96B]/20 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-visible">
            
            {/* Large Translucent Arrow/Cursor shape in the top right corner of the container */}
            <div className="absolute right-0 top-0 w-80 h-80 overflow-hidden pointer-events-none rounded-[32px] z-0">
              <svg className="w-[420px] h-[420px] text-[#E3D96B]/15 transform translate-x-20 -translate-y-20 -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column: Text copy */}
              <div className="lg:col-span-6 flex flex-col text-left">
                <h2 className="text-3xl md:text-[42px] font-black text-[#101518] tracking-tight font-display mb-6 leading-tight">
                  <b>A Million Micro-<br />Entrepreneurs</b>
                </h2>
                <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-normal max-w-md">
                  We play a key role in entry-level job creation with a dedicated fleet of over 100K skilled delivery partners.
                </p>
              </div>

              {/* Right Column: Testimony Card overlapping the container */}
              <div className="lg:col-span-6 flex justify-center items-center w-full relative">
                <div className="bg-[#00796B] text-white p-6 md:p-8 rounded-[24px] shadow-lg relative flex flex-col md:flex-row items-center md:items-start gap-6 max-w-lg lg:translate-x-6 translate-y-12 lg:translate-y-16 hover:shadow-xl transition-shadow duration-300 z-20">
                  {/* Rider photo */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 shrink-0 bg-slate-100">
                    <img
                      src={gajendraRiderImg}
                      alt="Gajendra - Shadowfax Partner"
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                  
                  {/* Testimony quote */}
                  <div className="flex flex-col text-left">
                    <p className="text-white font-sans text-xs sm:text-[13px] md:text-sm font-normal italic leading-relaxed mb-4">
                      "I make good money to support my family. I can choose my work hours and work location that gives me flexibility to spend time with my family & friends"
                    </p>
                    <h4 className="text-sm font-black tracking-wide uppercase">
                      Gajendra
                    </h4>
                    <span className="text-[11px] text-white/70 font-medium">
                      Shadowfax partner since 2016
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Fourth Section: Highly Specialised Training - Matching visual screenshot exactly */}
        <section className="relative bg-[#F4F5F7] py-20 px-6 z-10 text-slate-800 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
              
              {/* Left Column: Text copy */}
              <div className="lg:col-span-5 flex flex-col text-left">
                <div className="border-l-[5px] border-[#00796B] pl-6 md:pl-8">
                  <h2 className="text-3xl md:text-[38px] font-bold text-slate-800 tracking-tight font-display leading-[1.2] whitespace-pre-line">
                    Highly Specialised<br />Training
                  </h2>
                </div>
                <div className="pl-6 md:pl-8 mt-6">
                  <p className="text-slate-600 font-sans text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
                    Despite high driver turnover in this sector, drivers trained by Shadowfax have the chance to move up, with opportunities to join major employers like Amazon and Flipkart. These companies offer career paths in fulfillment centers, among other roles, in addition to the growth potential within Shadowfax.
                  </p>
                </div>
              </div>

              {/* Right Column: Flat Rectangular Image (Watermark-Free, Shadow-Free) */}
              <div className="lg:col-span-7 flex justify-center items-center">
                <div className="w-full aspect-[16/10] overflow-hidden rounded-none border-none shadow-none bg-slate-100">
                  <img
                    src="/cou.jpg"
                    alt="Highly Specialised Training"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Fifth Section: Empowering SMEs matching screenshot exactly */}
        <section className="relative bg-white pb-32 px-6 z-10 text-slate-800">
          <div className="max-w-7xl mx-auto bg-[#FFFDE8] border border-[#E3D96B]/20 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-visible">
            
            {/* Large Translucent Arrow/Cursor shape in the top right corner of the container */}
            <div className="absolute right-0 top-0 w-80 h-80 overflow-hidden pointer-events-none rounded-[32px] z-0">
              <svg className="w-[420px] h-[420px] text-[#E3D96B]/15 transform translate-x-20 -translate-y-20 -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column: Text copy */}
              <div className="lg:col-span-6 flex flex-col text-left">
                <h2 className="text-3xl md:text-[42px] font-black text-[#101518] tracking-tight font-display mb-6 leading-tight">
                  <b>Empowering SMEs</b>
                </h2>
                <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-normal max-w-md">
                  We've supported more than 7,500 businesses with expert logistics advice, guidance, and unending support, strengthening India's economic foundation.
                </p>
              </div>

              {/* Right Column: Testimony Card overlapping the container */}
              <div className="lg:col-span-6 flex justify-center items-center w-full relative">
                <div className="bg-[#00796B] text-white p-6 md:p-8 rounded-[24px] shadow-lg relative flex flex-col md:flex-row items-center md:items-start gap-6 max-w-lg lg:translate-x-6 translate-y-12 lg:translate-y-16 hover:shadow-xl transition-shadow duration-300 z-20">
                  {/* Partner photo */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 shrink-0 bg-slate-100">
                    <img
                      src={niteshLohiyaImg}
                      alt="Bikram Sinha - Aardhya Electric Supply"
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                  
                  {/* Testimony quote */}
                  <div className="flex flex-col text-left">
                    <p className="text-white font-sans text-xs sm:text-[13px] md:text-sm font-normal leading-relaxed mb-4">
                      "We started work with Shadowfax in 2018 and they provide excellent service for my company. We started with 15 cities but have scaled up to deliver our material in over 75 cities with their help, they have supported us beyond what we had expected. We deliver 120-150 orders everyday. I was amazed by the ease of integration and getting started it was so simple!"
                    </p>
                    <h4 className="text-sm font-black tracking-wide uppercase">
                      Bikram Sinha
                    </h4>
                    <span className="text-[11px] text-white/70 font-medium">
                      Aardhya Electric Supply, Ranchi
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sixth Section: Food & Essential Delivery - Matching user's screenshot exactly */}
        <section className="relative bg-white py-16 px-6 z-10 text-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Top Indicator Accent & Section Heading */}
            <div className="flex flex-col items-start mb-8">
              <div className="flex items-center gap-1.5 mb-3">
                {/* Yellow-green horizontal line with a circle/dot on the left */}
                <div className="w-2 h-2 rounded-full bg-[#00796B]" />
                <div className="w-20 h-[3px] bg-[#D2E805]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-[#101518] tracking-tight font-display text-left">
                Food & Essential Delivery
              </h2>
            </div>

            {/* Inner rounded container with light-mint/teal bg and flush right-side image */}
            <div className="bg-[#E8F5F2]/60 rounded-[32px] border border-[#00796B]/5 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left Column: Text copy */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left p-8 md:p-12 lg:p-16">
                  <h3 className="text-xl md:text-2xl font-black text-[#00796B] tracking-tight font-display mb-6 leading-tight">
                    Partnered with NGOs for Essential<br />Goods Delivery PAN-India
                  </h3>
                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal">
                    We partnered with NGOs to deliver essential goods across India, including dry rations, sanitary products, medicines, and other necessities to vulnerable communities. This effort covered major cities like Mumbai, Ahmedabad, Kolkata, Bangalore, and Delhi, equivalent to 106 vehicle days and 7,394 kilometers, amounting to INR 180,250.
                  </p>
                </div>

                {/* Right Column: Flush Image (Rounded right edge clipped by parent overflow-hidden) */}
                <div className="lg:col-span-7 w-full min-h-[320px] lg:min-h-[420px] relative">
                  <img
                    src={blogPartnersImg}
                    alt="Food & Essential Delivery Partner"
                    className="absolute inset-0 w-full h-full object-cover select-none"
                  />
                </div>

              </div>
            </div>

            {/* Second Card: Zomato Feeding India - Matching user's screenshot exactly */}
            <div className="bg-[#E8F5F2]/60 rounded-[32px] border border-[#00796B]/5 overflow-hidden shadow-sm mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left Column: Text copy */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left p-8 md:p-12 lg:p-16">
                  <h3 className="text-xl md:text-2xl font-black text-[#00796B] tracking-tight font-display mb-6 leading-tight">
                    Lending Full-Fledged Support to<br />Zomato Feeding India Campaign
                  </h3>
                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal">
                    We also supported the Zomato Feeding India campaign, ensuring that vulnerable communities had access to food during the pandemic. We handled the logistics, distributing 2,50,000 ration kits across Bangalore, Mumbai, and Delhi, covering 1,786 kilometers over 60 vehicle days, valued at INR 65,418.
                  </p>
                </div>

                {/* Right Column: Flush Image (Rounded right edge clipped by parent overflow-hidden) */}
                <div className="lg:col-span-7 w-full min-h-[320px] lg:min-h-[420px] relative">
                  <img
                    src={impactEconomyImg}
                    alt="Zomato Feeding India Campaign"
                    className="absolute inset-0 w-full h-full object-cover select-none"
                  />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Seventh Section: Financial Support - Matching user's screenshot exactly */}
        <section className="relative bg-white pb-24 px-6 z-10 text-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Top Indicator Accent & Section Heading */}
            <div className="flex flex-col items-start mb-8">
              <div className="flex items-center gap-1.5 mb-3">
                {/* Yellow-green horizontal line with a circle/dot on the left */}
                <div className="w-2 h-2 rounded-full bg-[#00796B]" />
                <div className="w-20 h-[3px] bg-[#D2E805]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-[#101518] tracking-tight font-display text-left">
                Financial Support
              </h2>
            </div>

            {/* Inner rounded container with light-mint/teal bg and flush right-side image */}
            <div className="bg-[#E8F5F2]/60 rounded-[32px] border border-[#00796B]/5 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left Column: Text copy */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left p-8 md:p-12 lg:p-16">
                  <h3 className="text-xl md:text-2xl font-black text-[#00796B] tracking-tight font-display mb-6 leading-tight">
                    Support for Our Delivery Partners
                  </h3>
                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal">
                    We teamed up with a donation platform to assist our delivery partners financially during the pandemic. Shadowfax provided essentials, rations, and logistical support to NGOs free of charge, helping to supply relief materials and health kits to those in need. We've raised INR 1,01,13,850 with the help of 57 donors, supporting 40,113 families.
                  </p>
                </div>

                {/* Right Column: Flush Image (Rounded right edge clipped by parent overflow-hidden) */}
                <div className="lg:col-span-7 w-full min-h-[320px] lg:min-h-[420px] relative">
                  <img
                    src={pharmacyImg}
                    alt="Support for Our Delivery Partners"
                    className="absolute inset-0 w-full h-full object-cover select-none"
                  />
                </div>

              </div>
            </div>

            {/* Second Card: Partnership with Homeline - Matching user's screenshot exactly */}
            <div className="bg-[#E8F5F2]/60 rounded-[32px] border border-[#00796B]/5 overflow-hidden shadow-sm mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left Column: Text copy */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left p-8 md:p-12 lg:p-16">
                  <h3 className="text-xl md:text-2xl font-black text-[#00796B] tracking-tight font-display mb-6 leading-tight">
                    Partnership with Homeline
                  </h3>
                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal">
                    In collaboration with the Government of Karnataka, Shadowfax partnered with BBMP to facilitate the delivery of groceries, daily essentials, and medicines in urban Bangalore at competitive prices. This initiative helps local kirana stores join the online delivery network, keeping their businesses operational despite the economic slowdown.
                  </p>
                </div>

                {/* Right Column: Flush Image (Rounded right edge clipped by parent overflow-hidden) */}
                <div className="lg:col-span-7 w-full min-h-[320px] lg:min-h-[420px] relative">
                  <img
                    src={deliveryHeroImg}
                    alt="Partnership with Homeline"
                    className="absolute inset-0 w-full h-full object-cover select-none"
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

export default SocialImpactPage;
