import React from 'react';
import { 
  Store, 
  Globe, 
  ShoppingCart, 
  ShieldCheck, 
  Network, 
  Users, 
  ArrowRight, 
  Check
} from 'lucide-react';
import { SOLUTIONS_DATA, Solution } from '../../data/solutionsData';

interface SolutionsSectionProps {
  onSelectSolution: (solution: Solution) => void;
  onRequestQuote: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
  onRequestQuote,
}) => {
  return (
    <section id="solutions" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Straight to the point */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0067D9] text-xs font-black uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD21C]" />
            <span>Our Core Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#073B8F] tracking-tight">
            Technology systems designed to run your operations.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Click any solution to explore features or request an immediate quote.
          </p>
        </div>

        {/* 6 High-Impact Visual Cards with Pictures & Logo Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.map((sol) => {
            const isPOS = sol.id === 'pos-erp-systems';

            return (
              <div
                key={sol.id}
                className={`bg-white rounded-2xl border-2 ${sol.borderColor} shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs ${sol.badgeBg} ${sol.badgeText}`}>
                        {sol.badge}
                      </span>
                    </div>
                    {isPOS && (
                      <div className="absolute top-3 right-3 bg-[#FFD21C] text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded shadow-xs">
                        Top Seller
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sol.shortDesc}
                    </p>

                    {/* Key points with colored checkmarks */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                      {sol.keyPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0067D9] shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onRequestQuote(sol.title)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0067D9] hover:bg-[#073B8F] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Request Quote for {sol.title.split('&')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
