import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Radio, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Zap, 
  Orbit,
  Layers,
  ChevronRight
} from 'lucide-react';
import { LuminaLogoMark } from '../common/Logo';

interface BrandLogoShowcaseProps {
  onNavigate: (page: string) => void;
  onOpenContactModal: (service?: string) => void;
}

export const BrandLogoShowcase: React.FC<BrandLogoShowcaseProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: 'Custom ERP & Code Architecture',
      code: '< / >',
      badge: 'Software Engineering',
      color: 'from-[#0067D9] to-[#072B6B]',
      accentColor: '#0067D9',
      borderColor: 'border-[#0067D9]',
      glowColor: 'rgba(0, 103, 217, 0.3)',
      icon: Code2,
      desc: 'Built with clean, high-performance code for retail checkout, stock ledgers, and automated business workflows that scale without recurring user-seat limits.',
      benefits: [
        'Custom POS touchscreens & barcode scanning',
        'Direct M-Pesa STK push & automated reconciliation',
        'Multi-store cloud database synchronization'
      ],
      targetPage: 'pos-erp',
      actionText: 'Explore POS & ERP Systems'
    },
    {
      id: 1,
      title: 'Solar Speed & Instant Execution',
      code: '⚡ 0.8s',
      badge: 'High-Throughput Checkout',
      color: 'from-[#FFC700] to-[#FF9500]',
      accentColor: '#FFC700',
      borderColor: 'border-[#FFC700]',
      glowColor: 'rgba(255, 199, 0, 0.35)',
      icon: Zap,
      desc: 'Engineered for high-volume Kenyan counters during rush hours. Sub-second receipt generation, instant shift end audits, and zero cashier lag.',
      benefits: [
        'Instant customer phone push prompts',
        'Zero-delay thermal printer spooling',
        'Offline fallback caching when internet drops'
      ],
      targetPage: 'pos-erp',
      actionText: 'See High-Speed Features'
    },
    {
      id: 2,
      title: 'Cosmic 360° Multi-Branch Orbit',
      code: '360°',
      badge: 'Cloud Sync & Networking',
      color: 'from-[#38BDF8] to-[#0067D9]',
      accentColor: '#38BDF8',
      borderColor: 'border-[#38BDF8]',
      glowColor: 'rgba(56, 189, 248, 0.35)',
      icon: Orbit,
      desc: 'Complete full-circle connectivity connecting your Nairobi CBD headquarters, warehouses, and nationwide branch outlets into one unified live dashboard.',
      benefits: [
        'Live centralized stock & transfer tracking',
        'Owner mobile app with real-time sales alerts',
        'Enterprise Cat6 & long-range Wi-Fi deployments'
      ],
      targetPage: 'solutions',
      actionText: 'View Network Solutions'
    },
    {
      id: 3,
      title: 'Enterprise Security & Vigilance',
      code: '4K AI',
      badge: 'Commercial Security',
      color: 'from-[#FF2D78] to-[#E11D48]',
      accentColor: '#FF2D78',
      borderColor: 'border-[#FF2D78]',
      glowColor: 'rgba(255, 45, 120, 0.3)',
      icon: ShieldCheck,
      desc: 'Protect counter cash, back-office inventory, and customer zones with 4K ultra-HD security surveillance and biometric access controls.',
      benefits: [
        'Cash register optical zoom monitoring',
        '30-day continuous encrypted NVR storage',
        'Night-vision infrared & phone live-view streaming'
      ],
      targetPage: 'solutions',
      actionText: 'View CCTV Surveillance'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-blue-200/80 shadow-xs mb-3">
            <LuminaLogoMark size={22} animated={true} glow={true} />
            <span className="text-xs font-black uppercase tracking-wider text-[#0067D9]">
              The Lumina 360 Architecture
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#072B6B] tracking-tight leading-tight">
            Illuminating Business with{' '}
            <span className="text-gradient-brand">Intelligent Technology</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From the glowing code brackets <code className="text-[#0067D9] font-bold bg-blue-50 px-1.5 py-0.5 rounded">&lt; / &gt;</code> at our engineering core to full 360° hardware and network deployment, discover the foundation powering Kenya's smartest enterprises.
          </p>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 3D Animated Logo Emblem Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-72 sm:w-88 h-72 sm:h-88 flex items-center justify-center">
              
              {/* Outer Cosmic Orbit Ring (Logo Blue & Cyan) */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#0067D9]/30 animate-orbit-spin-slow pointer-events-none"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 103, 217, 0.2))' }}
              />

              {/* Middle Counter-Rotating Orbit Ring (Logo Pink & Yellow) */}
              <div 
                className="absolute inset-4 rounded-full border-2 border-dotted border-[#FF2D78]/35 animate-orbit-reverse pointer-events-none"
              />

              {/* Inner Pulsing Cyan Orbit Highlight */}
              <div 
                className="absolute inset-10 rounded-full border border-[#38BDF8]/40 animate-orbit-spin pointer-events-none"
              />

              {/* Ambient Glowing Aura Behind the 3D Bulb */}
              <div 
                className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#0067D9]/30 via-[#FFC700]/40 to-[#FF2D78]/25 blur-2xl animate-bulb-aura pointer-events-none"
              />

              {/* Central 3D Code Bulb Graphic */}
              <div className="relative z-10 p-5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(0,103,217,0.18)] flex items-center justify-center transition-transform hover:scale-105 duration-300">
                <img
                  src="/lumina-icon.png"
                  alt="Lumina 360 3D Code Bulb"
                  className="w-36 h-36 sm:w-44 sm:h-44 object-contain filter drop-shadow-[0_8px_20px_rgba(0,103,217,0.25)] animate-float-slow"
                />

                {/* Floating Orbiting Satellite Orb */}
                <div 
                  className="absolute top-2 right-4 w-4 h-4 rounded-full bg-[#38BDF8] border-2 border-white shadow-[0_0_12px_#38BDF8] animate-ping"
                  aria-hidden="true"
                />
              </div>

              {/* 4 Interactive Orbiting Micro-Tags (Positioned in 4 Cardinal Corners) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-blue-200 shadow-md flex items-center gap-1.5 text-[11px] font-black text-[#0067D9] animate-float-drift">
                <span className="w-2 h-2 rounded-full bg-[#0067D9]" />
                <span>&lt; / &gt; Custom ERP</span>
              </div>

              <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-300 shadow-md flex items-center gap-1.5 text-[11px] font-black text-amber-900 animate-float-slow">
                <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
                <span>⚡ M-Pesa STK</span>
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-pink-200 shadow-md flex items-center gap-1.5 text-[11px] font-black text-[#FF2D78] animate-float-reverse">
                <span className="w-2 h-2 rounded-full bg-[#FF2D78]" />
                <span>🛡️ 4K Security</span>
              </div>

              <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-sky-200 shadow-md flex items-center gap-1.5 text-[11px] font-black text-[#0284C7] animate-float-slow">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span>🌐 360° Cloud</span>
              </div>

            </div>

            {/* Sub-label under the emblem */}
            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Official Brand Mark • Verified Kenyan Systems</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 4-Pillar Tabs with Logo Colors */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Tab Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isActive = activeFeature === pillar.id;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveFeature(pillar.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#072B6B] shadow-md border-2 border-slate-200 scale-[1.02]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <div 
                      className="p-1 rounded-lg"
                      style={{ color: pillar.accentColor }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="truncate w-full text-center">{pillar.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card with Rich Animated Details */}
            {(() => {
              const cur = pillars[activeFeature];
              const Icon = cur.icon;

              return (
                <div 
                  key={cur.id}
                  className={`bg-white rounded-3xl border-2 ${cur.borderColor} p-6 sm:p-8 shadow-xl transition-all animate-tab-content relative overflow-hidden`}
                  style={{
                    boxShadow: `0 20px 40px -15px ${cur.glowColor}`
                  }}
                >
                  {/* Subtle Background Glow */}
                  <div 
                    className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ background: cur.accentColor }}
                  />

                  <div className="relative z-10 space-y-4">
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-black">
                        <span 
                          className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-200"
                          style={{ color: cur.accentColor }}
                        >
                          {cur.code}
                        </span>
                        <span className="text-slate-700">{cur.badge}</span>
                      </div>

                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                        style={{ background: `${cur.accentColor}18`, color: cur.accentColor }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#072B6B]">
                      {cur.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cur.desc}
                    </p>

                    {/* Bullet Benefits */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-xs font-black text-slate-800 uppercase tracking-wider">
                        Core Capabilities Included:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cur.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <span 
                              className="mt-0.5 p-0.5 rounded-full text-white shrink-0"
                              style={{ background: cur.accentColor }}
                            >
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => onNavigate(cur.targetPage)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                        style={{ background: cur.accentColor }}
                      >
                        <span>{cur.actionText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onOpenContactModal(cur.title)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        <span>Request Custom Proposal</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })()}

          </div>

        </div>

      </div>
    </section>
  );
};
