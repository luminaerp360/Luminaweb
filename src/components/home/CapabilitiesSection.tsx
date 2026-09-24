import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { CAPABILITIES_CASES, CapabilityCase } from '../../data/capabilitiesData';

interface CapabilitiesSectionProps {
  onRequestSimilarProject: (capabilityHeadline: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  onRequestSimilarProject,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CAPABILITIES_CASES[0].id);

  const activeCase = CAPABILITIES_CASES.find((c) => c.id === selectedCaseId) || CAPABILITIES_CASES[0];

  return (
    <section id="capabilities" className="py-20 bg-[#F5F8FC] border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0067D9] mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0067D9]" />
            <span>Proven Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B8F] tracking-tight">
            Selected Capabilities & Case Studies
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Real operational challenges solved with bespoke software, dependable hardware integration, and end-to-end technical execution.
          </p>
        </div>

        {/* Case Studies Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {CAPABILITIES_CASES.map((item) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCaseId(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#0067D9] shadow-md ring-2 ring-[#0067D9]/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    <span>{item.category}</span>
                    {isSelected && <span className="text-[#0067D9]">Active</span>}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {item.headline}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Industry: {item.industry}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0067D9] font-semibold">
                  <span>Inspect Blueprint</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Case Study Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Challenge & Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0067D9] mb-1">
                  <span>{activeCase.category}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 font-medium">{activeCase.industry}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B8F] tracking-tight">
                  {activeCase.headline}
                </h3>
              </div>

              {/* Challenge Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  The Operational Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              {/* Solution Architecture */}
              <div className="p-4 sm:p-5 rounded-xl bg-blue-50/50 border border-blue-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0067D9] mb-2">
                  Lumina 360 Technical Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeCase.solutionArchitecture}
                </p>
              </div>

              {/* Outcomes */}
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Measurable Operational Outcome</span>
                </h4>
                <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  {activeCase.operationalOutcome}
                </p>
              </div>
            </div>

            {/* Right: Deliverables & Tech Stack */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 pb-2 border-b border-slate-200">
                  Key Deliverables Deployed
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeCase.keyDeliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0067D9] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 pb-2 border-b border-slate-200">
                  Technology Stack & Infrastructure
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeCase.technologiesUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onRequestSimilarProject(activeCase.headline)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <span>Request Similar Project Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
