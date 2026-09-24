import React, { useState } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Store, 
  Check, 
  Sparkles, 
  Smartphone, 
  ShieldCheck, 
  Wifi, 
  MessageCircle,
  CreditCard
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onTalkClick: () => void;
  onSelectPOS: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onTalkClick,
  onSelectPOS,
}) => {
  // Interactive live quick-demo state
  const [activeItem, setActiveItem] = useState<string>('Milk Pack');
  const [paymentDone, setPaymentDone] = useState(false);

  const demoItems = [
    { id: '1', name: 'Fresh Milk 1L', price: 'KES 80', cat: 'Dairy' },
    { id: '2', name: 'Retail Roll 80mm', price: 'KES 150', cat: 'Supplies' },
    { id: '3', name: 'Cat6 Patch Cord', price: 'KES 450', cat: 'Hardware' },
  ];

  const handleSimulatePayment = () => {
    setPaymentDone(true);
    setTimeout(() => setPaymentDone(false), 2500);
  };

  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-[#F5F8FC]">
      {/* Vibrant Ambient Glows using authentic Lumina 360 logo colors */}
      <div 
        className="absolute top-8 left-10 w-96 h-96 bg-[#FFD21C]/20 blur-3xl rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-12 right-10 w-96 h-96 bg-[#0067D9]/20 blur-3xl rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-6 left-1/3 w-80 h-80 bg-[#F43D78]/15 blur-3xl rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Straightforward, Colorful & Punchy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Colorful Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-blue-200 shadow-xs text-xs font-black text-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD21C] shadow-[0_0_8px_#FFD21C]" />
              <span className="text-[#0067D9]">Lumina 360</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#073B8F]">Technology Solutions Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#073B8F] tracking-tight leading-[1.12]">
              Smart <span className="text-[#0067D9]">POS & ERP Systems</span> Built for Your Business.
            </h1>

            {/* Straight to the Point Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We install fast <strong>Point of Sale (POS) checkouts</strong>, <strong>custom business ERPs</strong>, <strong>modern websites</strong>, <strong>CCTV cameras</strong>, and <strong>office Wi-Fi networks</strong>.
            </p>

            {/* 4 Colorful Solution Pills (Logo Colors) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-100 text-[#0067D9] font-bold text-xs border border-blue-200">
                <Store className="w-3.5 h-3.5" />
                <span>POS & ERP</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-100 text-[#F43D78] font-bold text-xs border border-pink-200">
                <Smartphone className="w-3.5 h-3.5" />
                <span>E-Commerce & M-Pesa</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs border border-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>CCTV Cameras</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-100 text-[#7D3FB2] font-bold text-xs border border-purple-200">
                <Wifi className="w-3.5 h-3.5" />
                <span>Office Wi-Fi</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onSelectPOS}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0067D9] hover:bg-[#073B8F] text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
              >
                <Store className="w-4 h-4" />
                <span>Explore POS Systems</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onTalkClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD21C] hover:bg-yellow-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-xs transition-all cursor-pointer text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request a Free Quote</span>
              </button>
            </div>

            {/* Simple Trust Points */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> Fast on-site installation
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0067D9]" /> Direct M-Pesa STK push
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F43D78]" /> Free staff training & warranty
              </span>
            </div>

          </div>

          {/* Right Column: Visual Picture Showcase + Interactive Mini POS Widget */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Vibrant Glow Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0067D9] via-[#FFD21C] to-[#F43D78] rounded-3xl blur-md opacity-40 -z-10" />

              <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden">
                
                {/* Hero Picture Banner */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80"
                    alt="Lumina 360 Kenyan Point of Sale System & Checkout"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#FFD21C] text-slate-950 px-2 py-0.5 rounded">
                        Lumina 360 POS
                      </span>
                      <h3 className="text-white text-base font-bold mt-1">
                        High-Speed Barcode Checkout & M-Pesa Terminal
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Interactive Mini Checkout Simulator */}
                <div className="p-4 sm:p-5 space-y-3 bg-white">
                  <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                    <span>Try the Instant Checkout Demo:</span>
                    <span className="text-[11px] text-[#0067D9]">Tap an item</span>
                  </div>

                  {/* Item buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    {demoItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveItem(item.name)}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer text-xs ${
                          activeItem === item.name
                            ? 'bg-blue-50 border-[#0067D9] font-bold text-[#073B8F] shadow-2xs'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="truncate font-semibold">{item.name}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{item.price}</div>
                      </button>
                    ))}
                  </div>

                  {/* Payment Trigger */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[11px] text-slate-500">Selected Product</div>
                      <div className="font-bold text-slate-900">{activeItem}</div>
                    </div>
                    <button
                      onClick={handleSimulatePayment}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Pay M-Pesa STK</span>
                    </button>
                  </div>

                  {/* Feedback on click */}
                  {paymentDone && (
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold text-center animate-in fade-in duration-150">
                      ✓ M-Pesa prompt received! Receipt printed automatically.
                    </div>
                  )}

                  {/* Direct Contact link */}
                  <button
                    onClick={onTalkClick}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0067D9] hover:bg-[#073B8F] text-white text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    Get POS Hardware & Software Setup
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
