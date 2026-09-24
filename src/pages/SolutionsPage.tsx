import React, { useState } from 'react';
import { 
  Store, 
  ShoppingCart, 
  Globe, 
  ShieldCheck, 
  Network, 
  Users, 
  Check, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  SlidersHorizontal,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SOLUTIONS_DATA, Solution } from '../data/solutionsData';
import { AnimatedPatternBg } from '../components/common/AnimatedPatternBg';

interface SolutionsPageProps {
  onSelectSolution: (solution: Solution) => void;
  onRequestQuote: (solutionTitle: string) => void;
  onNavigate: (page: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onSelectSolution,
  onRequestQuote,
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredSolutions = activeFilter === 'all' 
    ? SOLUTIONS_DATA 
    : SOLUTIONS_DATA.filter((s) => {
        if (activeFilter === 'software') return s.id.includes('pos') || s.id.includes('crm') || s.id.includes('ecommerce');
        if (activeFilter === 'infra') return s.id.includes('cctv') || s.id.includes('network');
        if (activeFilter === 'web') return s.id.includes('website') || s.id.includes('ecommerce');
        return true;
      });

  const getIcon = (id: string) => {
    switch (id) {
      case 'pos-erp-systems': return <Store className="w-5 h-5 text-[#0067D9]" />;
      case 'ecommerce-solutions': return <ShoppingCart className="w-5 h-5 text-[#F43D78]" />;
      case 'website-development': return <Globe className="w-5 h-5 text-[#073B8F]" />;
      case 'cctv-security': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'networking-services': return <Network className="w-5 h-5 text-[#7D3FB2]" />;
      case 'crm-systems': return <Users className="w-5 h-5 text-blue-600" />;
      default: return <Sparkles className="w-5 h-5 text-[#0067D9]" />;
    }
  };

  return (
    <div className="space-y-14 pb-20">
      
      {/* 1. PAGE HEADER: Colorful & Clear with Animated Patterns */}
      <section className="animate-section-1 bg-gradient-to-r from-[#073B8F] via-[#0067D9] to-[#7D3FB2] text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Animated Background Tech Pattern & Aurora Orbs */}
        <AnimatedPatternBg 
          variant="hero-blue" 
          showGrid={true} 
          showOrbs={true} 
          showCircuit={true} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#FFD21C] text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Solutions Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            High-Performance Technology Solutions
          </h1>

          <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal">
            From modern POS barcode tills and web stores to structured Cat6 networking and crystal-clear CCTV installations.
          </p>

          {/* Filter Bar with Logo Colors */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer btn-interactive ${
                activeFilter === 'all'
                  ? 'bg-[#FFD21C] text-slate-950 shadow-md font-black scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              All 6 Solutions
            </button>
            <button
              onClick={() => setActiveFilter('software')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer btn-interactive ${
                activeFilter === 'software'
                  ? 'bg-[#0067D9] text-white border-2 border-white shadow-md scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              POS & Business ERP Software
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer btn-interactive ${
                activeFilter === 'web'
                  ? 'bg-[#F43D78] text-white shadow-md font-black scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              E-Commerce & Websites
            </button>
            <button
              onClick={() => setActiveFilter('infra')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer btn-interactive ${
                activeFilter === 'infra'
                  ? 'bg-[#7D3FB2] text-white shadow-md font-black scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              CCTV & Networking
            </button>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID: Colorful Cards with Photos & Smooth Transitions */}
      <section className="animate-section-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div key={activeFilter} className="animate-tab-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className={`bg-white rounded-3xl border-2 ${sol.borderColor} shadow-md card-hover-effect overflow-hidden flex flex-col justify-between group`}
            >
              {/* Photo Header */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge Chip */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold shadow-sm ${sol.badgeBg} ${sol.badgeText}`}>
                    {sol.badge}
                  </span>
                </div>

                {/* Corner Quick Link if it's the POS page */}
                {sol.id === 'pos-erp-systems' && (
                  <button
                    onClick={() => onNavigate('pos-erp')}
                    className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#0067D9] text-xs font-bold px-3 py-1 rounded-lg shadow-sm flex items-center gap-1 cursor-pointer"
                  >
                    <span>Hub Page</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-slate-100 shrink-0">
                      {getIcon(sol.id)}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0067D9] transition-colors leading-tight">
                      {sol.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {sol.shortDesc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {sol.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#0067D9] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onRequestQuote(sol.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0067D9] hover:bg-[#073B8F] text-white text-xs font-bold transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {sol.id === 'pos-erp-systems' && (
                    <button
                      onClick={() => onNavigate('pos-erp')}
                      className="py-2.5 px-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0067D9] text-xs font-bold transition-colors cursor-pointer"
                      title="Explore Dedicated POS Page"
                    >
                      <span>Deep Dive</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITIES COMPARISON TABLE */}
      <section className="animate-section-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0067D9]">
              Deployment Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F] mt-1">
              What We Deliver on Every Setup
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Standard inclusions across our hardware installations and software deployments.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-900 font-black">
                  <th className="py-3 px-4">System Service</th>
                  <th className="py-3 px-4">Hardware Sourcing</th>
                  <th className="py-3 px-4">On-Site Setup</th>
                  <th className="py-3 px-4">Staff Training</th>
                  <th className="py-3 px-4">Warranty & Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#0067D9]">Point of Sale (POS) Systems</td>
                  <td className="py-3.5 px-4">✓ Touch Terminal, Scanners, Printers</td>
                  <td className="py-3.5 px-4">✓ Same-day installation</td>
                  <td className="py-3.5 px-4">✓ Cashiers & Supervisors</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-600">12 Months Support</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#F43D78]">E-Commerce Web Stores</td>
                  <td className="py-3.5 px-4">— Cloud Server Hosted</td>
                  <td className="py-3.5 px-4">✓ Domain, SSL & M-Pesa STK</td>
                  <td className="py-3.5 px-4">✓ Product Catalog & Orders</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-600">12 Months Support</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-amber-700">CCTV & Surveillance</td>
                  <td className="py-3.5 px-4">✓ HD Cameras, NVR & Hard Disks</td>
                  <td className="py-3.5 px-4">✓ Neat conduit & cable routing</td>
                  <td className="py-3.5 px-4">✓ Phone App & Playback</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-600">12 Months Warranty</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#7D3FB2]">Enterprise Wi-Fi & Cat6</td>
                  <td className="py-3.5 px-4">✓ Access Points, Routers, Racks</td>
                  <td className="py-3.5 px-4">✓ Patch panel crimping & test</td>
                  <td className="py-3.5 px-4">✓ Admin portal & guest portal</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-600">12 Months Warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM ACTION CALLOUT */}
      <section className="animate-section-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#FFD21C] to-amber-300 rounded-3xl p-8 sm:p-10 shadow-md text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-amber-400">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              Custom Project Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
              Have specific requirements for your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 mt-1">
              Talk directly with a Lumina 360 solution engineer for an on-site survey and fast quotation.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote('Custom Multi-System Solution')}
            className="shrink-0 bg-[#073B8F] hover:bg-[#0067D9] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 btn-interactive cursor-pointer flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule System Consultation</span>
          </button>
        </div>
      </section>

    </div>
  );
};
