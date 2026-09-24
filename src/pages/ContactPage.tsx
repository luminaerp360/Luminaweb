import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AnimatedPatternBg } from '../components/common/AnimatedPatternBg';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialService = 'POS & Business ERP Systems',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Simulate submission
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Lumina 360, I am inquiring about ${formData.service || 'your POS and business systems'}. My name is ${formData.name || 'a prospective client'}.`
  );

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO BANNER with Animated Tech Grid & Floating Lights */}
      <section className="animate-section-1 bg-gradient-to-r from-[#073B8F] via-[#0067D9] to-[#7D3FB2] text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Animated Background Tech Pattern & Aurora Orbs */}
        <AnimatedPatternBg 
          variant="hero-blue" 
          showGrid={true} 
          showOrbs={true} 
          showCircuit={true} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#FFD21C] text-xs font-black uppercase tracking-wider mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Client Consultation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Talk to a Systems Engineer Today
          </h1>

          <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal">
            Whether you need a single retail checkout till, a multi-store inventory sync, or a whole-building network install, we are ready to assist.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID: Form on left, WhatsApp & details on right */}
      <section className="animate-section-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-md">
            <h2 className="text-xl sm:text-2xl font-black text-[#073B8F] mb-1">
              Request a Custom Quote or Callback
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below and a solution engineer will contact you within 2 business hours.
            </p>

            {submitted ? (
              <div className="animate-tab-content p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-black">Thank you, {formData.name}!</h3>
                <p className="text-xs text-emerald-800">
                  Your inquiry regarding <strong>{formData.service}</strong> has been received. Our engineering team is reviewing your requirements and will reach out to you on <strong>{formData.phone}</strong> promptly.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/254741377463?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all duration-200 btn-interactive cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Kamau / Highland Hotel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0067D9] focus:ring-2 focus:ring-[#0067D9]/20 text-xs text-slate-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0712 345 678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0067D9] focus:ring-2 focus:ring-[#0067D9]/20 text-xs text-slate-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0067D9] focus:ring-2 focus:ring-[#0067D9]/20 text-xs text-slate-900 outline-none transition-all bg-white"
                  >
                    <option value="POS & Business ERP Systems">POS & Business ERP Systems</option>
                    <option value="E-Commerce & Mobile Money Stores">E-Commerce & Mobile Money Stores</option>
                    <option value="Website & Web Applications">Website & Web Applications</option>
                    <option value="CCTV & Surveillance Installation">CCTV & Surveillance Installation</option>
                    <option value="Networking & Enterprise Wi-Fi">Networking & Enterprise Wi-Fi</option>
                    <option value="CRM & Sales Pipeline Systems">CRM & Sales Pipeline Systems</option>
                    <option value="Custom Multi-System Solution">Custom Multi-System Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brief Note or Outlet Location (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. We have 2 retail counters in Nairobi CBD and need barcode scanners and M-Pesa STK."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0067D9] focus:ring-2 focus:ring-[#0067D9]/20 text-xs text-slate-900 outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0067D9] hover:bg-[#073B8F] text-white font-bold text-xs sm:text-sm transition-all duration-200 btn-interactive cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Proposal Request</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Fast Card */}
            <div className="bg-emerald-600 rounded-3xl p-6 sm:p-7 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Instant Response</span>
                </div>
                <h3 className="text-xl font-black">Chat on WhatsApp</h3>
                <p className="text-xs text-emerald-100">
                  Prefer a fast chat? Message our technical team directly for quick pricing questions, hardware photos, and booking.
                </p>
                <a
                  href={`https://wa.me/254741377463?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-emerald-800 font-black text-xs px-5 py-3 rounded-xl shadow-xs transition-all duration-200 btn-interactive cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 space-y-4">
              <h3 className="font-extrabold text-sm text-[#073B8F]">
                Direct Contacts & Location
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#0067D9] shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Direct Helpline</div>
                    <div className="text-slate-600">
                      <a href="tel:+254741377463" className="hover:text-[#0067D9] font-semibold">+254 741 377 463</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-pink-50 text-[#F43D78] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Official Email</div>
                    <div className="text-slate-600">
                      <a href="mailto:support@eco360.co.ke" className="hover:text-[#0067D9]">support@eco360.co.ke</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-purple-50 text-[#7D3FB2] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Operating Hours</div>
                    <div className="text-slate-600">Mon - Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 3:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Deployment Coverage</div>
                    <div className="text-slate-600">Nairobi, Eldoret, Nakuru, Kisumu, Mombasa, Nyeri & East Africa</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
