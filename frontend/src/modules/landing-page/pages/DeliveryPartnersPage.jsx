import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Shield, 
  Clock, 
  Zap, 
  Bike, 
  Smile, 
  CheckCircle, 
  ArrowRight, 
  ClipboardCheck, 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  User 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const riderHeroImg = '/cour.webp';

const DeliveryPartnersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Form States
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    vehicle: 'Motorcycle',
    hasDl: false,
    hasAadhar: false,
    hasPan: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear errors when field is typed in
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name] : '' }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.city.trim()) newErrors.city = 'City of operation is required';
    
    // Checkboxes validation
    if (!formData.hasAadhar) newErrors.hasAadhar = 'Aadhaar Card is mandatory';
    if (!formData.hasPan) newErrors.hasPan = 'PAN Card is mandatory';
    if (formData.vehicle !== 'Bicycle' && formData.vehicle !== 'None' && !formData.hasDl) {
      newErrors.hasDl = 'Driving License is required for motorized vehicles';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API registration delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      vehicle: 'Motorcycle',
      hasDl: false,
      hasAadhar: false,
      hasPan: false,
    });
    setIsSuccess(false);
  };

  // Benefits Data
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-[#00796B]" />,
      title: 'Top Tier Earnings',
      description: 'Earn industry-best per-delivery payouts, along with premium daily and weekly performance bonuses.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00796B]" />,
      title: 'Flexible Gigs',
      description: 'Choose your own shifts. Work full-time, part-time, or choose flexible gig hours that fit your lifestyle.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#00796B]" />,
      title: 'Health & Accident Cover',
      description: 'Your safety is our priority. We provide comprehensive medical insurance and accidental coverage for you.'
    },
    {
      icon: <Bike className="w-6 h-6 text-[#00796B]" />,
      title: 'Eco-Friendly EV Support',
      description: 'No vehicle? No problem! Access special lease plans on Electric Vehicles (EVs) through our eco-partners.'
    }
  ];

  return (
    <div className="delivery-partners-scoped-wrapper min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Section 1: Hero Section */}
        <section className="relative w-full pt-8 pb-16 md:pt-14 md:pb-24 px-6 md:px-12 bg-white overflow-hidden">
          {/* Ambient Decorative Blurs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(210,232,5,0.07)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl z-0" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,121,107,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl z-0" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Headline and Pitch */}
            <div className="lg:col-span-6 flex flex-col text-left space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00796B]/5 border border-[#00796B]/15 text-[#00796B] text-[11px] font-extrabold tracking-widest uppercase w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                Join the Fleet Elite
              </div>

              <h1 
                className="text-4xl sm:text-5xl md:text-[52px] tracking-tight leading-[1.12] text-[#2D2A26]"
                style={{ fontWeight: 750, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                Ride and Earn <br />
                On Your Schedule
              </h1>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                Become a proud Delivery Partner with **Angle Courier Service**. Drive India's smartest, fastest-growing green delivery network and secure your financial future today.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#register-form"
                  className="bg-[#D2E805] hover:bg-[#b9cc04] text-[#101518] font-bold text-sm py-3.5 px-8 rounded-xl transition-all duration-300 font-display shadow-sm shadow-[#D2E805]/20 cursor-pointer scale-100 hover:scale-102 active:scale-98"
                >
                  Join Us Now
                </a>
                <a
                  href="#benefits"
                  className="text-sm font-bold text-slate-700 hover:text-[#00796B] flex items-center gap-1 group py-2"
                >
                  Explore Fleet Benefits
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Graphic Image */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="relative w-full max-w-xl aspect-[1.38] overflow-hidden rounded-2xl shadow-xl border border-slate-100/60 hover:shadow-2xl transition-shadow duration-500 bg-slate-50">
                <img loading="lazy" src="/cou.webp" 
                  alt="Angle Courier Delivery Rider" 
                  className="w-full h-full object-cover transform hover:scale-101 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Fleet Benefits */}
        <section id="benefits" className="relative bg-[#F8FAFC] py-20 px-6 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight font-display mb-4">
                Why Deliver with Angle Courier Service?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We empower our riders with premier financial payouts, comprehensive life support systems, and flexible modern gig opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col text-left space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00796B]/5 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#101518] font-sans">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Simple Three-Step Onboarding */}
        <section className="relative bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight font-display mb-4">
                Get Onboarded in 3 Simple Steps
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Start earning quickly with our transparent and efficient digital onboarding process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto relative">
              {/* Connector line for large screens */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0 pointer-events-none" />

              {[
                {
                  step: '01',
                  title: 'Register Online',
                  desc: 'Fill out our fast and simple application form below with your documents.'
                },
                {
                  step: '02',
                  title: 'Instant Verification',
                  desc: 'Our team will review your profile and contact you within 24 hours.'
                },
                {
                  step: '03',
                  title: 'Start Riding',
                  desc: 'Pick up your dynamic Angle kit and start taking orders instantly!'
                }
              ].map((stepObj, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#00796B] flex items-center justify-center shadow-sm">
                    <span className="text-lg font-black text-[#00796B] font-display">{stepObj.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#101518] font-sans">
                    {stepObj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
                    {stepObj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Onboarding Form & Testimonial Split Section */}
        <section id="register-form" className="relative bg-[#FFFDE8] py-20 px-6 border-t border-[#E3D96B]/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Testimonial & Support */}
            <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-28">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101518] tracking-tight font-display">
                Become a Proud <br />
                Fleet Champion
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Hundreds of delivery partners have found their financial independence with Angle. Join us today to gain security, bonuses, and flexible shifts.
              </p>

              {/* Testimonial Quote */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden">
                {/* Accent Teal Top border bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00796B]" />
                
                <p className="text-slate-700 italic text-sm md:text-base leading-relaxed mb-6">
                  "Joining Angle was a turning point. Weekly payouts are prompt, and the accidental insurance support gives my family complete peace of mind. The incentive structures are unmatched!"
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#00796B]/10 flex items-center justify-center font-bold text-[#00796B]">
                    <Smile className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#101518] font-sans">Rajesh Kumar</h4>
                    <span className="text-xs text-slate-500 font-medium">Fleet Leader, Bangalore Hub</span>
                  </div>
                </div>
              </div>

              {/* Support Notice */}
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <Smile className="w-6 h-6 text-[#00796B]" />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Have questions about onboarding? Speak with our helpline at **1800-ANGLE-FLEET** for instant assistance.
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Form Block */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 text-left relative overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form-container"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <ClipboardCheck className="w-7 h-7 text-[#00796B]" />
                        <div>
                          <h3 className="text-xl md:text-2xl font-extrabold text-[#101518] font-sans">
                            Partner Registration Form
                          </h3>
                          <p className="text-slate-500 text-xs mt-0.5">
                            Please provide exact details to fast-track verification.
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name and Mobile Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-slate-400" /> Full Name
                            </label>
                            <input 
                              type="text" 
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="Enter full name"
                              className={`w-full bg-slate-50 border ${errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#00796B]'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.fullName && <p className="text-red-500 text-[11px] font-bold mt-1.5">{errors.fullName}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-slate-400" /> Mobile Number
                            </label>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="10-digit number"
                              className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#00796B]'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.phone && <p className="text-red-500 text-[11px] font-bold mt-1.5">{errors.phone}</p>}
                          </div>
                        </div>

                        {/* Email and City Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address
                            </label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="name@email.com"
                              className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#00796B]'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.email && <p className="text-red-500 text-[11px] font-bold mt-1.5">{errors.email}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" /> City of Operation
                            </label>
                            <input 
                              type="text" 
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              placeholder="e.g. Bangalore, Delhi"
                              className={`w-full bg-slate-50 border ${errors.city ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#00796B]'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.city && <p className="text-red-500 text-[11px] font-bold mt-1.5">{errors.city}</p>}
                          </div>
                        </div>

                        {/* Vehicle Choice */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                            Select Vehicle Option
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {['Motorcycle', 'Electric Bike', 'Bicycle', 'None'].map((veh) => {
                              const isSelected = formData.vehicle === veh;
                              return (
                                <button
                                  type="button"
                                  key={veh}
                                  onClick={() => setFormData(prev => ({ ...prev, vehicle: veh }))}
                                  className={`py-3 px-2 border rounded-xl text-center text-xs font-bold transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                                    isSelected 
                                      ? 'border-[#00796B] bg-[#00796B]/5 text-[#00796B]' 
                                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                                  }`}
                                >
                                  <Bike className={`w-4 h-4 ${isSelected ? 'text-[#00796B]' : 'text-slate-400'}`} />
                                  <span>{veh}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Document checklist with alert boxes */}
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                            <FileText className="w-4 h-4 text-[#00796B]" /> Required Document Check (Self-Check)
                          </label>

                          <div className="space-y-3.5">
                            {/* Aadhar */}
                            <label className="flex items-start gap-3 select-none cursor-pointer">
                              <input 
                                type="checkbox"
                                name="hasAadhar"
                                checked={formData.hasAadhar}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#00796B] focus:ring-[#00796B] border-slate-300 rounded mt-0.5 cursor-pointer"
                              />
                              <div className="text-xs text-slate-600 font-medium">
                                I possess a valid **Aadhaar Card** for identity check
                              </div>
                            </label>
                            {errors.hasAadhar && <p className="text-red-500 text-[10px] font-bold pl-7 mt-0.5">{errors.hasAadhar}</p>}

                            {/* PAN Card */}
                            <label className="flex items-start gap-3 select-none cursor-pointer">
                              <input 
                                type="checkbox"
                                name="hasPan"
                                checked={formData.hasPan}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#00796B] focus:ring-[#00796B] border-slate-300 rounded mt-0.5 cursor-pointer"
                              />
                              <div className="text-xs text-slate-600 font-medium">
                                I possess a valid **PAN Card** for financial payouts
                              </div>
                            </label>
                            {errors.hasPan && <p className="text-red-500 text-[10px] font-bold pl-7 mt-0.5">{errors.hasPan}</p>}

                            {/* DL Checklist (Only required if vehicle is Motorcycle or Electric Bike) */}
                            {(formData.vehicle === 'Motorcycle' || formData.vehicle === 'Electric Bike') && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <label className="flex items-start gap-3 select-none cursor-pointer pt-1">
                                  <input 
                                    type="checkbox"
                                    name="hasDl"
                                    checked={formData.hasDl}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#00796B] focus:ring-[#00796B] border-slate-300 rounded mt-0.5 cursor-pointer"
                                  />
                                  <div className="text-xs text-slate-600 font-medium">
                                    I possess a valid **Driving License (DL)** for driving motor vehicles
                                  </div>
                                </label>
                                {errors.hasDl && <p className="text-red-500 text-[10px] font-bold pl-7 mt-0.5">{errors.hasDl}</p>}
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* Submit button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#00796B] hover:bg-[#005c51] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-[#00796B]/10 hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 text-sm text-center"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Verifying Details...</span>
                              </>
                            ) : (
                              <span>Register as Delivery Partner</span>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-container"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="text-center py-10 px-4 space-y-6 flex flex-col items-center"
                    >
                      <div className="w-20 h-20 bg-[#E8F5F2] border-2 border-[#00796B]/30 rounded-full flex items-center justify-center text-[#00796B] shadow-inner mb-2 animate-bounce">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-extrabold text-[#101518] font-sans">
                          Registration Successful!
                        </h3>
                        <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                          Thank you, **{formData.fullName}**! Your partner profile has been registered in the **{formData.city}** operational cluster.
                        </p>
                      </div>

                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left w-full max-w-md space-y-3.5 shadow-sm">
                        <h4 className="text-xs font-extrabold text-[#00796B] uppercase tracking-wider">
                          Next Steps for Onboarding
                        </h4>
                        
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                            <span className="w-4 h-4 bg-[#00796B] text-white rounded-full flex items-center justify-center font-bold text-[9px] mt-0.5">1</span>
                            <span>Document verification check by regional Hub Manager (underway).</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                            <span className="w-4 h-4 bg-[#00796B] text-white rounded-full flex items-center justify-center font-bold text-[9px] mt-0.5">2</span>
                            <span>You will receive a confirmation call on **{formData.phone}** within 24 hours.</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                            <span className="w-4 h-4 bg-[#00796B] text-white rounded-full flex items-center justify-center font-bold text-[9px] mt-0.5">3</span>
                            <span>Collect your Angle Rider App credentials and delivery kit at the Bangalore Hub.</span>
                          </li>
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs font-bold text-[#00796B] hover:text-[#005c51] underline tracking-wide py-2 cursor-pointer transition-colors"
                      >
                        Register another partner
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DeliveryPartnersPage;
