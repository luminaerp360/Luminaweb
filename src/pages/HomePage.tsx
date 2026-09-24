import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Store, 
  Check, 
  Sparkles, 
  Smartphone, 
  ShieldCheck, 
  Wifi, 
  Globe,
  Layers,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Receipt,
  Barcode,
  Tv,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { AnimatedPatternBg } from '../components/common/AnimatedPatternBg';
import { LuminaLogoMark, LuminaLogo } from '../components/common/Logo';
import { BrandLogoShowcase } from '../components/home/BrandLogoShowcase';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenContactModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  // Moving slides state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Moving Hero Slides with authentic Kenyan business imagery
  const heroSlides = [
    {
      id: 0,
      title: 'Kenyan Supermarket & Retail POS',
      subtitle: 'Fast Cashier Ringing & Instant M-Pesa STK',
      badge: '🇰🇪 Nairobi & Countrywide',
      badgeColor: 'bg-[#FFC700] text-slate-950 font-black',
      tagColor: 'text-[#FFC700]',
      desc: 'Heavy-duty touchscreen station, thermal receipt printer, barcode reader & automated M-Pesa Till reconciliation.',
      image: '/images/kenyan-supermarket-pos.jpg',
      actionPage: 'pos-erp',
      actionText: 'Explore POS Setup'
    },
    {
      id: 1,
      title: 'Dairy & Agribusiness ERP Systems',
      subtitle: 'Digital Scales, Farmer SMS & Milk Ledgers',
      badge: 'Agri-Tech Solutions',
      badgeColor: 'bg-[#0067D9] text-white font-bold',
      tagColor: 'text-blue-300',
      desc: 'Digital scale integration recording milk liters, instant farmer SMS weigh slips, and automated milk payout deductions.',
      image: '/images/kenyan-dairy-erp.jpg',
      actionPage: 'pos-erp',
      actionText: 'View ERP Features'
    },
    {
      id: 2,
      title: 'Multi-Store Warehouse & Branch ERP',
      subtitle: 'Live Stock Sync Between Nairobi CBD & Branches',
      badge: 'Multi-Branch Cloud',
      badgeColor: 'bg-[#FF2D78] text-white font-bold',
      tagColor: 'text-pink-300',
      desc: 'Centralized stock ledger, multi-till reconciliation, supervisor PIN overrides & owner mobile monitoring app.',
      image: '/images/kenyan-warehouse-erp.jpg',
      actionPage: 'pos-erp',
      actionText: 'View Branch Sync'
    },
    {
      id: 3,
      title: '4K CCTV Security & Office Wi-Fi Networks',
      subtitle: 'Counter Cash Monitoring & Structured Cabling',
      badge: 'Turnkey Installations',
      badgeColor: 'bg-[#7C3AED] text-white font-bold',
      tagColor: 'text-purple-300',
      desc: 'Cashier till monitoring, 30-day NVR recording, remote phone live-view & neat Cat6 network cabling.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      actionPage: 'solutions',
      actionText: 'View CCTV & Wi-Fi'
    }
  ];

  // Auto-advance moving slides every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  // Moving marquee images data (looping continuously with Kenyan & African commerce images)
  const marqueeItems = [
    {
      img: '/images/kenyan-supermarket-pos.jpg',
      name: 'Nairobi Retail Checkout',
      tag: 'Supermarket POS',
      color: 'border-[#0067D9]',
      page: 'pos-erp'
    },
    {
      img: '/images/kenyan-supermarket-pos.jpg',
      name: 'M-Pesa STK Push Till',
      tag: 'Instant PIN Prompt',
      color: 'border-[#FFC700]',
      page: 'pos-erp'
    },
    {
      img: '/images/kenyan-dairy-erp.jpg',
      name: 'Kiambu Dairy Farmers ERP',
      tag: 'Milk Digital Scale',
      color: 'border-[#072B6B]',
      page: 'pos-erp'
    },
    {
      img: '/images/kenyan-warehouse-erp.jpg',
      name: 'Nairobi Logistics Depot',
      tag: 'Multi-Branch Cloud',
      color: 'border-[#FF2D78]',
      page: 'pos-erp'
    },
    {
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80',
      name: '4K CCTV Till Monitoring',
      tag: 'Phone Live-View',
      color: 'border-amber-400',
      page: 'solutions'
    },
    {
      img: '/images/kenyan-warehouse-erp.jpg',
      name: 'Enterprise Wi-Fi & Stock Sync',
      tag: 'Branch Network',
      color: 'border-[#7C3AED]',
      page: 'solutions'
    }
  ];

  return (
    <div className="space-y-14 sm:space-y-20 pb-20">
      
      {/* 1. HERO SECTION: Nice, Simple, Direct with Moving Showcase & Animated Patterns */}
      <section className="animate-section-1 relative pt-4 sm:pt-10 pb-4 overflow-hidden">
        {/* Animated Tech Pattern & Ambient Floating Orbs */}
        <AnimatedPatternBg 
          variant="light" 
          showGrid={true} 
          showOrbs={true} 
          showCircuit={true} 
          showDots={true} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Direct, Simple & Punchy Content */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              
              {/* Logo Colors Pill with Animated 3D Code Bulb Mark */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border-2 border-blue-200/90 shadow-2xs text-xs font-black hover:border-[#0067D9] transition-all group">
                <LuminaLogoMark size={24} animated={true} glow={true} />
                <span className="text-[#0067D9]">🇰🇪 Built for Kenyan Businesses</span>
                <span className="text-slate-300">·</span>
                <span className="text-[#072B6B]">Lumina 360</span>
              </div>

              {/* Bold Clear Headline with Logo Colors */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#072B6B] tracking-tight leading-[1.15]">
                Smart <span className="text-gradient-brand">POS & ERP Systems</span> for Kenyan Businesses.
              </h1>

              {/* Simple and direct copy */}
              <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Turn manual ledgers, slow counters, and paper receipts into synchronized business operations with fast touchscreen Point of Sale checkout, automated M-Pesa STK push, and multi-store inventory control across Nairobi and countrywide.
              </p>

              {/* Action Buttons in Logo Colors */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onNavigate('pos-erp')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0067D9] hover:bg-[#072B6B] text-white font-black px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all btn-interactive cursor-pointer text-xs sm:text-sm"
                >
                  <Store className="w-4 h-4 text-[#FFC700]" />
                  <span>Explore POS & ERP Systems</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenContactModal('POS & Business ERP Systems')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFC700] hover:bg-yellow-400 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-xs transition-all btn-interactive cursor-pointer text-xs sm:text-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Get Free Quote</span>
                </button>
              </div>

              {/* Direct Value Badges in Brand Logo Colors */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#0067D9] font-black" /> M-Pesa STK Push
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 font-black" /> On-Site Installation
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#FF2D78] font-black" /> 12 Months Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#38BDF8] font-black" /> Multi-Store Sync
                </span>
              </div>

            </div>

            {/* Right Column: Moving Images Slideshow Showcase with Floating 3D Emblem */}
            <div className="lg:col-span-6 relative">
              
              {/* Floating Lumina 360 3D Emblem with Orbit Animation */}
              <div 
                onClick={() => onNavigate('pos-erp')}
                className="absolute -top-5 -right-2 sm:-top-6 sm:-right-4 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border-2 border-amber-300 shadow-2xl flex items-center gap-2.5 animate-float-slow group/emblem cursor-pointer hover:scale-105 transition-all"
                title="Lumina 360 Engineering Architecture"
              >
                <div className="relative">
                  {/* Orbit spin rings around the 3D code-bulb mark */}
                  <div className="absolute -inset-2 rounded-full border border-dashed border-[#0067D9]/50 animate-orbit-spin pointer-events-none" />
                  <div className="absolute -inset-3 rounded-full border border-dotted border-[#FF2D78]/40 animate-orbit-reverse pointer-events-none" />
                  <LuminaLogoMark size={42} animated={true} glow={true} />
                </div>
                <div className="pr-1 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0067D9]">
                      Lumina 360 Core
                    </span>
                  </div>
                  <div className="text-xs font-black text-[#072B6B]">
                    3D Code & Hardware
                  </div>
                </div>
              </div>

              <div 
                className="relative mx-auto max-w-lg lg:max-w-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                
                {/* Colorful Glow Frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0067D9] via-[#FFD21C] to-[#F43D78] rounded-3xl blur-md opacity-40 -z-10" />

                {/* Main Slide Card Container */}
                <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden relative">
                  
                  {/* Active Slide Image */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                    <img
                      key={heroSlides[currentSlide].id}
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10 flex flex-col justify-between p-5">
                      
                      {/* Top Badges & Live Status */}
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm ${heroSlides[currentSlide].badgeColor}`}>
                          {heroSlides[currentSlide].badge}
                        </span>

                        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live System</span>
                        </div>
                      </div>

                      {/* Bottom Headline & Controls */}
                      <div className="text-white space-y-1">
                        <div className={`text-xs font-extrabold uppercase tracking-wider ${heroSlides[currentSlide].tagColor}`}>
                          {heroSlides[currentSlide].subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                          {heroSlides[currentSlide].title}
                        </h3>
                        <p className="text-xs text-slate-200 line-clamp-2 pt-0.5">
                          {heroSlides[currentSlide].desc}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Slide Navigator Toolbar */}
                  <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                    
                    {/* Slide Dots */}
                    <div className="flex items-center gap-1.5">
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-2.5 rounded-full transition-all cursor-pointer ${
                            currentSlide === idx 
                              ? 'w-7 bg-[#0067D9]' 
                              : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Action & Nav Arrows */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate(heroSlides[currentSlide].actionPage)}
                        className="text-xs font-bold text-[#0067D9] hover:text-[#073B8F] px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>{heroSlides[currentSlide].actionText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS MOVING IMAGES MARQUEE STRIP */}
      <section className="animate-section-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm overflow-hidden">
          
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0067D9] animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-[#073B8F]">
                Moving Systems Gallery
              </span>
            </div>
            <span className="text-[11px] font-bold text-slate-500">
              Hover to pause • Click to explore
            </span>
          </div>

          {/* Marquee Track */}
          <div className="overflow-hidden relative w-full rounded-xl">
            <div className="animate-marquee flex gap-4">
              {/* Render twice for continuous infinite glide */}
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate(item.page)}
                  className={`w-60 shrink-0 bg-slate-50 rounded-xl border-2 ${item.color} p-2 hover:shadow-md transition-all cursor-pointer group flex items-center gap-3`}
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-200">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-black uppercase text-[#0067D9] bg-blue-50 px-1.5 py-0.5 rounded">
                      {item.tag}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#0067D9] transition-colors truncate mt-1">
                      {item.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                      View details <ArrowRight className="w-3 h-3 text-[#0067D9]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BRAND INNOVATION & 3D LOGO ARCHITECTURE SHOWCASE */}
      <BrandLogoShowcase 
        onNavigate={onNavigate} 
        onOpenContactModal={onOpenContactModal} 
      />

      {/* 3. INDEPENDENT PORTALS: 4 Big Colorful Cards */}
      <section className="animate-section-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0067D9] text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#FFD21C]" />
            <span>Dedicated Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F]">
            Explore Lumina 360 Core Pages
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Each section operates as a complete, dedicated solution suite with detailed specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: POS & ERP */}
          <div 
            onClick={() => onNavigate('pos-erp')}
            className="group bg-white rounded-2xl border-2 border-[#0067D9] card-hover-effect p-5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 bg-blue-50">
                <img 
                  src="/images/kenyan-supermarket-pos.jpg" 
                  alt="POS Terminal Counter in Nairobi Supermarket" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-2 left-2 bg-[#0067D9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded shadow-xs">
                  FLAGSHIP
                </span>
              </div>
              <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#0067D9] transition-colors">
                POS & Business ERP Hub
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Barcode touch till, M-Pesa STK, multi-store stock ledger, and shift audits.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0067D9]">
              <span>Open POS Hub</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: All Solutions */}
          <div 
            onClick={() => onNavigate('solutions')}
            className="group bg-white rounded-2xl border-2 border-[#FF2D78] card-hover-effect p-5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 bg-pink-50">
                <img 
                  src="/images/kenyan-warehouse-erp.jpg" 
                  alt="E-Commerce, Cloud & Warehouse Distribution in Nairobi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-2 left-2 bg-[#FF2D78] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded shadow-xs">
                  6 SOLUTIONS
                </span>
              </div>
              <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#FF2D78] transition-colors">
                Solutions & Services
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Web design, online stores, CCTV security, office Wi-Fi, and CRM pipelines.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF2D78]">
              <span>View Solutions</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Industries */}
          <div 
            onClick={() => onNavigate('industries')}
            className="group bg-white rounded-2xl border-2 border-[#7C3AED] card-hover-effect p-5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 bg-purple-50">
                <img 
                  src="/images/kenyan-dairy-erp.jpg" 
                  alt="Kiambu Dairy Cooperative Milk Intake" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-2 left-2 bg-[#7C3AED] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded shadow-xs">
                  VERTICALS
                </span>
              </div>
              <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#7D3FB2] transition-colors">
                Industry Solutions
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Specialized configurations for Supermarkets, Dairy Farming, Clinics, and Schools.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7D3FB2]">
              <span>Explore Industries</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Pricing */}
          <div 
            onClick={() => onNavigate('pricing')}
            className="group bg-white rounded-2xl border-2 border-amber-400 card-hover-effect p-5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 bg-amber-50">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                  alt="Pricing & Estimates" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-2 left-2 bg-[#FFD21C] text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded shadow-xs">
                  PROPOSALS
                </span>
              </div>
              <h3 className="font-extrabold text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                ECO 360 Packages & Rates
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Official installation and monthly rates for Bars, Restaurants, and Hotels with custom deployment calculator.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>View Packages & Rates</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE LUMINA 360 GUARANTEE BANNER */}
      <section className="animate-section-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#073B8F] to-[#0067D9] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Animated Tech Pattern & Drifting Nodes */}
          <AnimatedPatternBg 
            variant="hero-blue" 
            showGrid={true} 
            showOrbs={true} 
            showCircuit={true} 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-[#FFC700] text-xs font-black uppercase tracking-wider border border-white/20">
                <LuminaLogoMark size={20} animated={true} glow={true} />
                <span>The Lumina 360 Guarantee</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Complete Hardware, Software & On-Site Support
              </h2>
              <p className="text-sm text-blue-100 font-normal leading-relaxed">
                We don't leave you with a box of cables and a user manual. Our engineers set up the counter, test thermal printing and M-Pesa STK, train your cashiers on-site, and provide 12 months full warranty.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-lg font-black text-[#FFD21C]">12 Months</div>
                  <div className="text-xs text-blue-200">Hardware Warranty</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-lg font-black text-[#FFD21C]">100% Own</div>
                  <div className="text-xs text-blue-200">Your Data & Hardware</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-lg font-black text-[#FFD21C]">24/7 Phone</div>
                  <div className="text-xs text-blue-200">Local Support Desk</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto lg:w-64 py-3.5 px-6 rounded-xl bg-[#FFD21C] hover:bg-yellow-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Calculate Setup Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenContactModal('POS & Business ERP Systems')}
                className="w-full sm:w-auto lg:w-64 py-3.5 px-6 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-all border border-white/30 cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#FFD21C]" />
                <span>Book Engineer Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
