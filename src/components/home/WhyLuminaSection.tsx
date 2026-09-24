import React from 'react';
import { 
  Workflow, 
  ShieldCheck, 
  TrendingUp, 
  Headphones, 
  Compass, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface WhyLuminaSectionProps {
  onStartConversation: () => void;
}

export const WhyLuminaSection: React.FC<WhyLuminaSectionProps> = ({
  onStartConversation,
}) => {
  const pillars = [
    {
      icon: <Workflow className="w-6 h-6 text-[#0067D9]" />,
      title: 'Built Around Your Workflow',
      description: 'We do not force your operations into generic rigid molds. We conduct an operational assessment first, then tailor web, software, and hardware around how your team actually gets work done.',
      accent: 'border-blue-200'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#073B8F]" />,
      title: 'Secure by Design',
      description: 'Security is not an afterthought or bolt-on plugin. From isolated VLAN networks for POS and CCTV to encrypted databases and role-based access restrictions, our architectures protect critical assets.',
      accent: 'border-indigo-200'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#F43D78]" />,
      title: 'Scalable From Day One',
      description: 'Whether you are launching your first online store or expanding to five regional chilling centers, our systems are built on modular foundations that grow alongside your transaction volumes.',
      accent: 'border-pink-200'
    },
    {
      icon: <Headphones className="w-6 h-6 text-emerald-600" />,
      title: 'Accessible Technical Support',
      description: 'Direct phone, on-site, and WhatsApp technical assistance. We provide responsive maintenance agreements, preventative audits, and clear documentation so you are never left stranded.',
      accent: 'border-emerald-200'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#7D3FB2]" />,
      title: 'One Unified Technology Partner',
      description: 'Eliminate finger-pointing between your web designer, network technician, CCTV installer, and software developer. Lumina 360 unites your entire digital and physical tech stack.',
      accent: 'border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0067D9] mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0067D9]" />
            <span>The Lumina 360 Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B8F] tracking-tight">
            Engineered for reliability, built for growth.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We partner with forward-thinking enterprises to deliver robust digital infrastructure, eliminate operational friction, and provide dependable support at every stage.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border ${p.accent} bg-[#F5F8FC]/50 hover:bg-white transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-[#0067D9]" />
                <span>Verified Architecture Standard</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Callout to Action */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#073B8F] to-[#0067D9] text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                Ready to Upgrade?
              </span>
              <h3 className="text-xl font-extrabold text-white mt-2 mb-3">
                Experience the difference of a complete tech partner.
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Schedule a consultation with our technology team. We will review your current systems, network, or digital presence and deliver an actionable technical proposal.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={onStartConversation}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD21C] hover:bg-yellow-400 text-slate-950 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Talk to Lumina 360</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
