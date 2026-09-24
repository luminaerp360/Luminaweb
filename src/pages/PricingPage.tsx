import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Calculator, 
  ChevronDown, 
  ChevronUp,
  UtensilsCrossed,
  BedDouble,
  Building2,
  Receipt,
  ClipboardList,
  Tv,
  CreditCard,
  TrendingUp,
  Package,
  Layers
} from 'lucide-react';
import { ECO360_PRICING_TIERS, ECO360_FEATURES, BusinessTier, PricingOption } from '../data/pricingData';
import { AnimatedPatternBg } from '../components/common/AnimatedPatternBg';

interface PricingPageProps {
  onSelectTier: (tierName: string) => void;
  onOpenContactModal: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onSelectTier,
  onOpenContactModal,
  onNavigate,
}) => {
  // Active business tier tab (Small, Medium, Corporate)
  const [selectedTierId, setSelectedTierId] = useState<'small' | 'medium' | 'corporate'>('small');
  
  // Interactive Calculator State
  const [calcTierId, setCalcTierId] = useState<'small' | 'medium' | 'corporate'>('small');
  const [calcOptionType, setCalcOptionType] = useState<string>('rest-bar');
  const [extraStations, setExtraStations] = useState<number>(0);
  const [includeCctv, setIncludeCctv] = useState<boolean>(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const currentTier = ECO360_PRICING_TIERS.find((t) => t.id === selectedTierId) || ECO360_PRICING_TIERS[0];
  const calcTier = ECO360_PRICING_TIERS.find((t) => t.id === calcTierId) || ECO360_PRICING_TIERS[0];
  const calcSelectedOption = calcTier.options.find((o) => o.type === calcOptionType) || calcTier.options[2];

  // Additional calculation
  const extraStationCost = 25000;
  const cctvAddonCost = 35000;
  const calculatedInstallation = calcSelectedOption.installationFee + (extraStations * extraStationCost) + (includeCctv ? cctvAddonCost : 0);
  const calculatedMonthly = calcSelectedOption.monthlySubscription + (extraStations * 500);

  const getOptionIcon = (iconName: PricingOption['iconName']) => {
    switch (iconName) {
      case 'bar':
        return <span className="text-xl">🍸</span>;
      case 'restaurant':
        return <UtensilsCrossed className="w-5 h-5 text-[#F43D78]" />;
      case 'rest-bar':
        return <span className="text-xl">🍽️</span>;
      case 'rooms':
        return <BedDouble className="w-5 h-5 text-[#7D3FB2]" />;
      case 'res-bar-rooms':
        return <Building2 className="w-5 h-5 text-[#0067D9]" />;
      default:
        return <Layers className="w-5 h-5 text-[#0067D9]" />;
    }
  };

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ClipboardList className="w-5 h-5 text-[#0067D9]" />;
      case 1: return <Tv className="w-5 h-5 text-[#F43D78]" />;
      case 2: return <Package className="w-5 h-5 text-amber-600" />;
      case 3: return <CreditCard className="w-5 h-5 text-emerald-600" />;
      case 4: return <TrendingUp className="w-5 h-5 text-[#7D3FB2]" />;
      case 5: return <Receipt className="w-5 h-5 text-[#073B8F]" />;
      default: return <Sparkles className="w-5 h-5 text-[#0067D9]" />;
    }
  };

  const faqs = [
    {
      q: 'What is included in the one-time Installation Fee?',
      a: 'The installation fee covers on-site hardware setup (touchscreens, receipt printers, barcode scanners, KOT kitchen printers), network router configuration, POS software deployment, menu/inventory catalog loading, and thorough in-person staff & manager training.'
    },
    {
      q: 'What does the Monthly Subscription cover?',
      a: 'The monthly subscription includes cloud database hosting, multi-branch live sync, daily automated data backups, continuous software updates, KRA eTIMS compliance sync, and unlimited priority phone, WhatsApp, and remote AnyDesk technical support.'
    },
    {
      q: 'Can Kitchen Order Tickets (KOT) be printed directly in the kitchen?',
      a: 'Yes. When waitstaff ring food and drinks, the system automatically routes food items to the kitchen thermal printer (or digital kitchen display) and beverage items to the bar dispense printer simultaneously.'
    },
    {
      q: 'Does the system support direct M-Pesa STK Push?',
      a: 'Yes. The cashier simply selects M-Pesa and the exact bill amount pops up on the customer’s phone requesting their M-Pesa PIN. When entered, the POS automatically matches the transaction and prints the receipt without manual cashier entry.'
    },
    {
      q: 'Do you deploy to hotels and restaurants outside Nairobi?',
      a: 'Yes. Our technical team installs systems across Kenya including Nairobi, Mombasa, Nakuru, Kisumu, Eldoret, Naivasha, Nanyuki, and surrounding towns.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO BANNER: ECO 360 - POS COMPLETE BUSINESS INTELLIGENCE */}
      <section className="animate-section-1 bg-gradient-to-r from-[#073B8F] via-[#0067D9] to-[#7D3FB2] text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Animated Background Tech Pattern & Aurora Orbs */}
        <AnimatedPatternBg 
          variant="hero-purple" 
          showGrid={true} 
          showOrbs={true} 
          showCircuit={true} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-[#FFD21C] text-xs font-black uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ECO 360 - COMPLETE BUSINESS INTELLIGENCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Power Your Restaurant, Bar or Hotel With a <span className="text-[#FFD21C]">Modern POS</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed">
            Built to deliver speed, accuracy, and exceptional customer experiences. From processing sales and managing inventory to tracking performance and generating reports.
          </p>

          <div className="mt-5 inline-flex items-center gap-4 text-xs font-bold bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
            <span className="text-white">All the tools you need. One system you can trust.</span>
            <span className="text-[#FFD21C]">•</span>
            <a href="tel:+254741377463" className="text-[#FFD21C] hover:underline flex items-center gap-1.5 font-black btn-interactive">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+254 741 377 463</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE 6 CORE CAPABILITIES (FROM BROCHURE PAGE 1) */}
      <section className="animate-section-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#0067D9]">
            Complete Business Intelligence
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F] mt-1">
            The Perfect Solution For Your Business
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Eco360 POS is an all-in-one Point of Sale solution designed to simplify day-to-day business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ECO360_FEATURES.map((feat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-xs hover:border-[#0067D9] card-hover-effect flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                {getPillarIcon(idx)}
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm text-slate-900">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OFFICIAL PACKAGES & PRICING (FROM BROCHURE PAGE 2) */}
      <section className="animate-section-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0067D9] text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#FFD21C]" />
            <span>Official Rate Card</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#073B8F] tracking-tight">
            Packages & Pricing
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Select your business size below to see exact installation fees and monthly subscription rates.
          </p>
        </div>

        {/* 3 Business Category Switcher Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 flex flex-wrap gap-2 justify-center max-w-2xl w-full">
            {ECO360_PRICING_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`flex-1 min-w-[150px] py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 btn-interactive cursor-pointer text-center ${
                  selectedTierId === tier.id
                    ? 'bg-[#073B8F] text-white shadow-md scale-102'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                <div>{tier.name}</div>
                <div className={`text-[10px] font-medium mt-0.5 ${selectedTierId === tier.id ? 'text-[#FFD21C]' : 'text-slate-500'}`}>
                  {tier.badge}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tier Overview Banner */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl border-2 border-blue-200 p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-base sm:text-lg font-black text-[#073B8F]">{currentTier.name} Configuration Suite</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${currentTier.badgeBg}`}>
                {currentTier.badge}
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {currentTier.tagline} • <strong>Best for:</strong> {currentTier.bestFor}
            </p>
          </div>
          <button
            onClick={() => onOpenContactModal(`${currentTier.name} POS Installation`)}
            className="shrink-0 px-5 py-2.5 bg-[#FFD21C] hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-xs transition-all duration-200 btn-interactive cursor-pointer flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Consult for {currentTier.name}</span>
          </button>
        </div>

        {/* 5 Configuration Cards Grid with Smooth Tier Transition */}
        <div key={selectedTierId} className="animate-tab-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTier.options.map((opt, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl border-2 p-6 shadow-sm card-hover-effect flex flex-col justify-between ${
                opt.type === 'rest-bar' || opt.type === 'res-bar-rooms'
                  ? 'border-[#0067D9] ring-2 ring-[#0067D9]/15'
                  : 'border-slate-200 hover:border-blue-300'
              }`}
            >
              <div>
                {/* Header with Type & Number */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                      {getOptionIcon(opt.iconName)}
                    </span>
                    <span className="text-xs font-black text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>
                  {(opt.type === 'rest-bar' || opt.type === 'res-bar-rooms') && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#0067D9] text-white rounded shadow-2xs">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-slate-900">
                  {opt.name}
                </h3>

                {/* Pricing Badges: Installation Fee + Monthly Subscription */}
                <div className="my-4 p-4 rounded-2xl bg-[#F5F8FC] border border-blue-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Installation Fee:</span>
                    <span className="text-base font-black text-[#073B8F]">
                      Ksh {opt.installationFee.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Monthly Subscription:</span>
                    <span className="text-base font-black text-[#0067D9]">
                      Ksh {opt.monthlySubscription.toLocaleString()}<span className="text-[11px] font-normal text-slate-500">/mo</span>
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-xs text-slate-700 mb-6">
                  <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider text-slate-400">
                    Included capabilities:
                  </div>
                  {opt.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0067D9] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => onOpenContactModal(`${currentTier.name} - ${opt.name} (Install: Ksh ${opt.installationFee.toLocaleString()}, Sub: Ksh ${opt.monthlySubscription.toLocaleString()}/mo)`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#0067D9] hover:bg-[#073B8F] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Select {opt.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MASTER RATE COMPARISON MATRIX */}
      <section className="animate-section-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-black text-[#073B8F]">
              Comprehensive Rate Card Comparison
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Side-by-side rates for Small, Medium, and Corporate businesses as published in the official brochure.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#073B8F] text-white font-extrabold text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-3.5 sm:p-4">Package / Configuration</th>
                  <th className="p-3.5 sm:p-4 text-center bg-[#0067D9]">Small Business</th>
                  <th className="p-3.5 sm:p-4 text-center bg-blue-800">Medium Business</th>
                  <th className="p-3.5 sm:p-4 text-center bg-purple-900">Corporate Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {/* 1. Bar Only */}
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="text-base">🍸</span>
                    <span>1. Bar Only</span>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#0067D9]">Ksh 25,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 2,500/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#073B8F]">Ksh 30,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 3,000/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#7D3FB2]">Ksh 50,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 4,500/month</div>
                  </td>
                </tr>

                {/* 2. Restaurant Only */}
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-extrabold text-slate-900 flex items-center gap-2">
                    <UtensilsCrossed className="w-4 h-4 text-[#F43D78]" />
                    <span>2. Restaurant Only</span>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#0067D9]">Ksh 25,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 2,500/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#073B8F]">Ksh 30,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 3,000/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#7D3FB2]">Ksh 50,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 4,500/month</div>
                  </td>
                </tr>

                {/* 3. Restaurant & Bar */}
                <tr className="hover:bg-blue-50/40 transition-colors bg-blue-50/20">
                  <td className="p-3.5 sm:p-4 font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="text-base">🍽️</span>
                    <span>3. Restaurant & Bar</span>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#0067D9]">Ksh 35,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 3,000/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#073B8F]">Ksh 45,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 3,500/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#7D3FB2]">Ksh 75,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 5,500/month</div>
                  </td>
                </tr>

                {/* 4. Res & Rooms / Bar & Rooms */}
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-extrabold text-slate-900 flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-[#7D3FB2]" />
                    <span>4. Res & Rooms / Bar & Rooms</span>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#0067D9]">Ksh 40,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 3,000/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#073B8F]">Ksh 50,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 3,500/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#7D3FB2]">Ksh 100,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 7,000/month</div>
                  </td>
                </tr>

                {/* 5. Res, Bar & Rooms */}
                <tr className="hover:bg-blue-50/40 transition-colors bg-purple-50/20">
                  <td className="p-3.5 sm:p-4 font-extrabold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0067D9]" />
                    <span>5. Res, Bar & Rooms</span>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#0067D9]">Ksh 50,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 3,500/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#073B8F]">Ksh 60,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 5,000/month</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center">
                    <div className="font-bold text-[#7D3FB2]">Ksh 200,000 install</div>
                    <div className="text-slate-500 text-[11px]">Ksh 10,000/month</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ESTIMATE CALCULATOR */}
      <section className="animate-section-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0067D9] text-xs font-bold mb-1">
                <Calculator className="w-3.5 h-3.5" />
                <span>Estimate Generator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F]">
                Custom Deployment Calculator
              </h2>
              <p className="text-xs text-slate-600">
                Configure your venue size and setup to compute your exact installation fee and monthly subscription.
              </p>
            </div>

            <div className="bg-[#F5F8FC] p-4 rounded-2xl border border-blue-200 text-right shrink-0">
              <div className="text-[11px] text-slate-500 font-bold uppercase">Installation Fee:</div>
              <div className="text-2xl sm:text-3xl font-black text-[#0067D9]">
                Ksh {calculatedInstallation.toLocaleString()}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-0.5">
                + Ksh {calculatedMonthly.toLocaleString()}/mo subscription
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Choose Business Tier */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-2">
                  1. Select Business Scale:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {ECO360_PRICING_TIERS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setCalcTierId(t.id)}
                      className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                        calcTierId === t.id
                          ? 'bg-blue-50 border-[#0067D9] text-[#073B8F] font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{t.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Choose Configuration Type */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-2">
                  2. Select Venue Configuration:
                </label>
                <div className="space-y-2">
                  {calcTier.options.map((opt) => (
                    <button
                      key={opt.type}
                      onClick={() => setCalcOptionType(opt.type)}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                        calcOptionType === opt.type
                          ? 'bg-blue-50 border-[#0067D9] font-bold text-[#073B8F] shadow-xs'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 flex items-center justify-center">
                          {getOptionIcon(opt.iconName)}
                        </span>
                        <span className="text-xs font-bold">{opt.name}</span>
                      </div>
                      <div className="text-right text-xs">
                        <span className="font-extrabold text-[#0067D9]">Ksh {opt.installationFee.toLocaleString()}</span>
                        <span className="text-slate-500 text-[10px] ml-1.5">({opt.monthlySubscription.toLocaleString()}/mo)</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Optional Extra Stations / Hardware */}
              <div>
                <label className="text-xs font-bold text-slate-800 flex items-center justify-between mb-2">
                  <span>3. Extra Waiter Tablet / Billing Stations:</span>
                  <span className="text-sm font-black text-[#0067D9]">+{extraStations} Station(s)</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={extraStations}
                  onChange={(e) => setExtraStations(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0067D9]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Standard setup</span>
                  <span>+1 Station</span>
                  <span>+2 Stations</span>
                  <span>+3 Stations</span>
                  <span>+4 Stations</span>
                  <span>+5 Stations</span>
                </div>
              </div>

              {/* Optional CCTV Addon */}
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeCctv}
                    onChange={(e) => setIncludeCctv(e.target.checked)}
                    className="w-4 h-4 text-[#0067D9] rounded"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Include 4-Channel HD Counter CCTV Kit</div>
                    <div className="text-[11px] text-slate-500">Includes 4 HD night-vision cameras, NVR recorder & phone app</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#0067D9]">+Ksh 35,000</span>
              </label>
            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#F5F8FC] p-6 rounded-3xl border-2 border-blue-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0067D9]">Investment Summary</span>
                  <h4 className="font-extrabold text-base text-slate-900">
                    {calcTier.name} — {calcSelectedOption.name}
                  </h4>
                </div>
                <span className="text-xl">
                  {getOptionIcon(calcSelectedOption.iconName)}
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 divide-y divide-slate-200">
                <div className="flex justify-between pt-1">
                  <span>Base Installation Fee:</span>
                  <span className="font-bold text-slate-900">Ksh {calcSelectedOption.installationFee.toLocaleString()}</span>
                </div>

                {extraStations > 0 && (
                  <div className="flex justify-between pt-2">
                    <span>{extraStations}x Extra Station Hardware & Setup:</span>
                    <span className="font-bold text-slate-900">Ksh {(extraStations * extraStationCost).toLocaleString()}</span>
                  </div>
                )}

                {includeCctv && (
                  <div className="flex justify-between pt-2">
                    <span>4-Ch HD Till CCTV Kit:</span>
                    <span className="font-bold text-slate-900">Ksh 35,000</span>
                  </div>
                )}

                <div className="flex justify-between pt-2 font-bold text-slate-900">
                  <span>Total One-Time Installation:</span>
                  <span className="text-[#073B8F] text-sm">Ksh {calculatedInstallation.toLocaleString()}</span>
                </div>

                <div className="flex justify-between pt-2 font-bold text-[#0067D9]">
                  <span>Monthly Cloud & Support Subscription:</span>
                  <span className="text-sm">Ksh {calculatedMonthly.toLocaleString()}/mo</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-800">Included with this configuration:</div>
                <div>• Complete on-site setup and staff certification</div>
                <div>• Kitchen Order Ticket (KOT) routing</div>
                <div>• Automated M-Pesa STK push & receipt printing</div>
                <div>• Direct helpline: <a href="tel:+254741377463" className="text-[#0067D9] font-bold">+254 741 377 463</a></div>
              </div>

              <button
                onClick={() => onOpenContactModal(`${calcTier.name} - ${calcSelectedOption.name} (Calculated: Install Ksh ${calculatedInstallation.toLocaleString()}, Sub Ksh ${calculatedMonthly.toLocaleString()}/mo)`)}
                className="w-full py-3.5 bg-[#0067D9] hover:bg-[#073B8F] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                <PhoneCall className="w-4 h-4 text-[#FFD21C]" />
                <span>Book On-Site Installation</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="animate-section-5 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0067D9]">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {expandedFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#0067D9] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {expandedFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
