import React, { useState } from 'react';
import { 
  Layers, 
  ShoppingCart, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ExternalLink,
  Laptop
} from 'lucide-react';
import { PLATFORMS_DATA, PlatformProduct } from '../../data/platformsData';

interface PlatformsSectionProps {
  onRequestDemo: (platformName: string) => void;
}

export const PlatformsSection: React.FC<PlatformsSectionProps> = ({
  onRequestDemo,
}) => {
  const [activePlatformId, setActivePlatformId] = useState<string>(PLATFORMS_DATA[0].id);

  const activeProduct = PLATFORMS_DATA.find((p) => p.id === activePlatformId) || PLATFORMS_DATA[0];

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'lumina-flow': return <Layers className="w-5 h-5 text-[#0067D9]" />;
      case 'lumina-commerce': return <ShoppingCart className="w-5 h-5 text-[#F43D78]" />;
      case 'lumina-securelink': return <ShieldCheck className="w-5 h-5 text-[#073B8F]" />;
      default: return <Sparkles className="w-5 h-5 text-[#0067D9]" />;
    }
  };

  return (
    <section id="platforms" className="py-20 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#073B8F] mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21C]" />
            <span>Proprietary Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B8F] tracking-tight">
            Lumina 360 Platforms & Modules
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Pre-architected, production-tested software cores that accelerate your deployment and eliminate technical debt.
          </p>

          {/* Platform Switcher */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-xl">
            {PLATFORMS_DATA.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setActivePlatformId(prod.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                  activePlatformId === prod.id
                    ? 'bg-white text-[#073B8F] shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {getPlatformIcon(prod.id)}
                <span>{prod.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Product Detailed Showcase */}
        <div className="bg-[#F5F8FC] rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Info & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0067D9]">
                  {activeProduct.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B8F] mt-1">
                  {activeProduct.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-700 mt-2">
                  {activeProduct.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Target Audience */}
              <div className="text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-800">Ideal for: </span>
                {activeProduct.targetAudience}
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {activeProduct.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                    <h5 className="text-xs font-bold text-slate-900">{feat.title}</h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">{feat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Integrations */}
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Native Hardware & Service Integrations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProduct.integrations.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onRequestDemo(activeProduct.name)}
                  className="inline-flex items-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Laptop className="w-4 h-4" />
                  <span>Request Live Platform Walkthrough</span>
                </button>
              </div>
            </div>

            {/* Right: Architectural UI Mockup */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-800">Deployment Status</span>
                </div>
                <span className="text-[11px] font-mono text-[#0067D9] font-semibold bg-blue-50 px-2 py-0.5 rounded">
                  {activeProduct.status}
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="font-bold text-slate-900 text-sm">Strategic Benefits</div>
                <ul className="space-y-2">
                  {activeProduct.businessBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0067D9] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-800">Deployment Timeline & SLA</div>
                <p className="text-slate-600 leading-relaxed">
                  Typically deployed, calibrated, and staff-trained within 3 to 6 weeks, supported by continuous SLA monitoring and technical updates.
                </p>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => onRequestDemo(`Custom Architecture for ${activeProduct.name}`)}
                  className="text-xs font-bold text-[#0067D9] hover:text-[#073B8F] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire about custom extensions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
