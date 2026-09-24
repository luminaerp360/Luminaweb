import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Award,
  ArrowRight,
  Handshake,
  Wrench,
  Lightbulb
} from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onContactClick,
}) => {
  const values = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0067D9]" />,
      title: 'Integrity',
      desc: 'Transparent pricing, honest technical recommendations, and zero hidden licensing traps.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#073B8F]" />,
      title: 'Craftsmanship',
      desc: 'Obsession with high-grade engineering—from structured cable dressing to clean, tested code.'
    },
    {
      icon: <Handshake className="w-5 h-5 text-[#F43D78]" />,
      title: 'Long-Term Partnership',
      desc: 'We do not simply ship and disappear; we maintain active SLAs to ensure systems evolve with you.'
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      title: 'Practical Innovation',
      desc: 'Technology chosen because it improves your bottom line, not for empty buzzwords or novelty.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      title: 'System Reliability',
      desc: 'High-availability infrastructure designed to keep retail checkouts, cameras, and portals running 24/7.'
    }
  ];

  const workflowStages = [
    {
      step: '01',
      title: 'Discovery & Workflow Audit',
      desc: 'We visit your facility or consult with your key leads to map actual operational bottlenecks, existing data spreadsheets, and physical security parameters.'
    },
    {
      step: '02',
      title: 'Architecture & System Design',
      desc: 'Our engineers create full database schemas, UI wireframes, network heatmaps, or CCTV coverage blueprints before writing a single line of code or pulling cables.'
    },
    {
      step: '03',
      title: 'Engineering & Hardware Integration',
      desc: 'Software is deployed, hardware (scales, IP cameras, UniFi access points, thermal printers) is installed and calibrated on-site with clean structured cabling.'
    },
    {
      step: '04',
      title: 'Staff Onboarding & SLA Support',
      desc: 'We conduct hands-on training for operators and executives, provide clear user manuals, and activate guaranteed response SLAs for ongoing peace of mind.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0067D9] mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0067D9]" />
            <span>Company & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B8F] tracking-tight">
            Technology built for real businesses.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Lumina 360 was founded on a simple principle: modern organizations should not have to choose between fragmented digital agencies, unreliable software contractors, and hardware installers.
          </p>
        </div>

        {/* Who We Are & Mission / Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl font-extrabold text-[#073B8F]">
              Your end-to-end technology solutions architect.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We engineer digital platforms, tailored business management software, advanced IP surveillance networks, and robust enterprise Wi-Fi systems. We work directly with agribusinesses, medical practices, retail chains, and corporate firms across Kenya and East Africa.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Rather than selling generic one-size-fits-all products, we immerse ourselves in your operational reality. When your cashier rings up a customer, when a farmer checks in milk at dawn, or when security monitors warehouse perimeter fences at midnight—Lumina 360 systems provide the silent, unbreakable infrastructure that powers your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0067D9] mb-1">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Empower forward-thinking organizations with intelligent, reliable, and scalable technology infrastructure crafted around their authentic operational workflows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7D3FB2] mb-1">
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  To be East Africa’s most trusted partner for unified enterprise technology, digital transformation, and mission-critical business systems.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F5F8FC] rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Principles
            </div>
            <div className="space-y-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3 text-xs bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-50">
                    {v.icon}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">{v.title}</span>
                    <span className="text-slate-600 leading-snug">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4-Step Execution Methodology */}
        <div className="bg-[#F5F8FC] rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 mb-12">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0067D9] mb-1">
              Methodology
            </div>
            <h3 className="text-2xl font-extrabold text-[#073B8F]">
              How We Work: Predictable, Rigorous Execution
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every deployment follows our proven 4-stage engineering lifecycle to guarantee on-time delivery and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowStages.map((st) => (
              <div key={st.step} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="text-3xl font-black text-[#0067D9]/30 font-mono mb-3">
                    {st.step}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="text-center">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Start a Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
