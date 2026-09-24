import React from 'react';
import { Check, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectTier,
}) => {
  const tiers = [
    {
      name: 'Starter Setup',
      badge: 'Single Outlet',
      color: 'border-blue-200 hover:border-[#0067D9]',
      btnBg: 'bg-white text-[#073B8F] border-2 border-slate-200 hover:border-[#0067D9]',
      desc: 'Perfect for single-store retail or small businesses needing fast POS and a digital website.',
      includes: [
        'Single-terminal barcode POS checkout software',
        'Direct M-Pesa STK mobile payment integration',
        'Responsive company website with WhatsApp button',
        'Staff training & 1-month setup warranty'
      ]
    },
    {
      name: 'Growth Suite',
      badge: 'Most Popular',
      featured: true,
      color: 'border-2 border-[#0067D9] ring-2 ring-[#0067D9]/20 shadow-md',
      btnBg: 'bg-[#0067D9] hover:bg-[#073B8F] text-white',
      desc: 'For growing businesses requiring multi-store stock tracking, online orders, and CRM sales pipelines.',
      includes: [
        'Multi-branch inventory sync & central dashboard',
        'E-Commerce online store with automated payments',
        'CRM customer pipeline & automated follow-ups',
        'Thermal receipt printing & SMS customer receipts',
        '3 months dedicated priority technical support'
      ]
    },
    {
      name: 'Enterprise Infrastructure',
      badge: 'Full Tech Partner',
      color: 'border-purple-200 hover:border-[#7D3FB2]',
      btnBg: 'bg-[#073B8F] hover:bg-[#0067D9] text-white',
      desc: 'Complete turnkey rollout combining custom ERP, HD CCTV surveillance, and office Wi-Fi networks.',
      includes: [
        'Custom operational ERP software (Dairy, Clinic, Law, Retail)',
        'HD/4K CCTV security cameras with remote smartphone viewing',
        'Structured Cat6 network cabling & office Wi-Fi mesh',
        'Role-governed databases with automated daily backups',
        'Ongoing annual Service Level Agreement (SLA)'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-[#F43D78] text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Project Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#073B8F] tracking-tight">
            Simple, honest proposals tailored to your scope.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tell us your branch count and requirements—we prepare a written technical proposal within 24 hours.
          </p>
        </div>

        {/* 3 Clean Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${tier.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    tier.featured ? 'bg-[#FFD21C] text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {tier.desc}
                </p>

                <div className="my-5 pt-4 border-t border-slate-100">
                  <div className="text-2xl font-black text-[#073B8F]">
                    Custom Proposal
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Scope-based quotation upon quick discovery
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="font-bold text-slate-900 mb-2">Key Deliverables:</div>
                  {tier.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0067D9] shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors ${tier.btnBg}`}
                >
                  <span>Request {tier.name} Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
