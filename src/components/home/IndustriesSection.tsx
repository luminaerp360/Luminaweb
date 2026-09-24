import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { INDUSTRIES_DATA, IndustryCard } from '../../data/industriesData';

interface IndustriesSectionProps {
  onRequestQuoteForIndustry: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onRequestQuoteForIndustry,
}) => {
  return (
    <section id="industries" className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#7D3FB2] text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Your Industry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#073B8F] tracking-tight">
            Specialized systems for your specific trade.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We customize workflows and hardware for your daily operational conditions.
          </p>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#0067D9] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white/95 text-slate-900 shadow-xs">
                      {ind.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2.5">
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.tagline}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    {ind.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#0067D9] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => onRequestQuoteForIndustry(ind.name)}
                  className="w-full py-2 px-3 rounded-xl border-2 border-slate-200 hover:border-[#0067D9] hover:bg-blue-50 text-slate-800 hover:text-[#0067D9] font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Inquire for {ind.badge}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
