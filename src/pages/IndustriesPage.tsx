import React, { useState } from 'react';
import { 
  Building2, 
  Check, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Store, 
  Milk, 
  Stethoscope, 
  UtensilsCrossed, 
  GraduationCap, 
  Briefcase 
} from 'lucide-react';
import { INDUSTRIES_DATA, IndustryCard } from '../data/industriesData';
import { AnimatedPatternBg } from '../components/common/AnimatedPatternBg';

interface IndustriesPageProps {
  onRequestQuoteForIndustry: (industryName: string) => void;
  onNavigate: (page: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onRequestQuoteForIndustry,
  onNavigate,
}) => {
  const [selectedId, setSelectedId] = useState<string>('all');

  const filteredIndustries = selectedId === 'all'
    ? INDUSTRIES_DATA
    : INDUSTRIES_DATA.filter((item) => item.id === selectedId);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'retail': return <Store className="w-5 h-5 text-[#0067D9]" />;
      case 'dairy-farming': return <Milk className="w-5 h-5 text-[#073B8F]" />;
      case 'healthcare': return <Stethoscope className="w-5 h-5 text-[#F43D78]" />;
      case 'hospitality': return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
      case 'schools': return <GraduationCap className="w-5 h-5 text-[#0067D9]" />;
      case 'professional-firms': return <Briefcase className="w-5 h-5 text-[#7D3FB2]" />;
      default: return <Building2 className="w-5 h-5 text-[#0067D9]" />;
    }
  };

  return (
    <div className="space-y-14 pb-20">
      
      {/* 1. PAGE HERO with Animated Patterns */}
      <section className="animate-section-1 bg-gradient-to-r from-[#073B8F] via-[#7D3FB2] to-[#0067D9] text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Animated Background Tech Pattern & Aurora Orbs */}
        <AnimatedPatternBg 
          variant="hero-purple" 
          showGrid={true} 
          showOrbs={true} 
          showCircuit={true} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#FFD21C] text-xs font-black uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Target Verticals</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered Specifically for Your Industry
          </h1>

          <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal">
            Every business sector has distinct rules, workflows, and compliance needs. We deploy pre-configured modules tailored to how your industry operates.
          </p>

          {/* Quick industry filter chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 btn-interactive cursor-pointer ${
                selectedId === 'all'
                  ? 'bg-[#FFD21C] text-slate-950 shadow-md font-black scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              All Industries
            </button>
            {INDUSTRIES_DATA.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 btn-interactive cursor-pointer ${
                  selectedId === ind.id
                    ? 'bg-white text-[#073B8F] shadow-md font-black scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {ind.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES PHOTO GRID with Smooth Filter Transition */}
      <section className="animate-section-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div key={selectedId} className="animate-tab-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((ind) => (
            <div
              key={ind.id}
              className={`bg-white rounded-3xl border-2 ${ind.borderColor} shadow-md card-hover-effect overflow-hidden flex flex-col justify-between group`}
            >
              {/* Photo Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge Chip */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold shadow-sm ${ind.badgeBg} ${ind.badgeText}`}>
                    {ind.badge}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-slate-100 shrink-0">
                      {getIndustryIcon(ind.id)}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0067D9] transition-colors leading-tight">
                      {ind.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
                    {ind.tagline}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {ind.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#0067D9] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onRequestQuoteForIndustry(ind.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0067D9] hover:bg-[#073B8F] text-white text-xs font-bold transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Request {ind.name.split(' ')[0]} Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CASE SUMMARY SECTION */}
      <section className="animate-section-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#073B8F] to-[#0067D9] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Animated Background Tech Pattern & Aurora Orbs */}
          <AnimatedPatternBg 
            variant="hero-blue" 
            showGrid={true} 
            showOrbs={true} 
            showCircuit={true} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFD21C]">
                Rapid Deployment
              </span>
              <h2 className="text-3xl font-black text-white">
                Don't see your specific field listed here?
              </h2>
              <p className="text-sm text-blue-100 leading-relaxed font-normal">
                Our core engine is modular. We can configure custom tables, product categories, barcodes, digital weigh-scales, and role workflows for any specialized enterprise.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <button
                onClick={() => onRequestQuoteForIndustry('Custom Industry Workflow')}
                className="bg-[#FFD21C] hover:bg-yellow-400 text-slate-950 text-xs sm:text-sm font-black px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 btn-interactive cursor-pointer flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Discuss Custom Requirements</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
