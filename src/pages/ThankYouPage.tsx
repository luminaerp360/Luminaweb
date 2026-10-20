import React, { useEffect } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  Mail, 
  ArrowLeft, 
  Clock, 
  ShieldCheck,
  Sparkles 
} from 'lucide-react';
import { AnimatedPatternBg } from '../components/common/AnimatedPatternBg';
import { trackGTMEvent } from '../utils/gtm';

interface ThankYouPageProps {
  onNavigate: (pageId: string) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Fire Google Analytics / Google Ads conversion event
    trackGTMEvent('conversion', {
      send_to: 'google_ads_lead',
      event_category: 'Lead',
      event_label: 'Quote Request Submitted',
    });
    trackGTMEvent('generate_lead', {
      value: 1,
      currency: 'KES',
    });
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedPatternBg variant="hero-blue" showGrid={true} showOrbs={true} />

      <div className="max-w-2xl w-full bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-emerald-500/30 p-8 sm:p-12 shadow-[0_24px_60px_rgba(0,103,217,0.12)] text-center relative z-10 animate-page-enter">
        
        {/* Animated Success Badge */}
        <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-ping" />
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-500 flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
        </div>

        {/* Headline */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Quote Request Confirmed</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-[#073B8F] tracking-tight mb-3">
          Thank You! We Have Received Your Request.
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto mb-8">
          A Lumina 360 systems engineer is reviewing your project details. We will reach out with a detailed proposal and pricing within <strong>2 business hours</strong>.
        </p>

        {/* Priority Actions */}
        <div className="space-y-3 max-w-md mx-auto mb-8">
          <a
            href="https://wa.me/254741377463?text=Hello%20Lumina%20360,%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website%20and%20would%20like%20to%20follow%20up."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer btn-interactive"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Connect on WhatsApp for Instant Response</span>
          </a>

          <a
            href="tel:+254741377463"
            className="w-full py-3 px-6 rounded-2xl bg-blue-50 hover:bg-blue-100 text-[#0067D9] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-blue-200 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Our Helpline: +254 741 377 463</span>
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100 text-left text-xs text-slate-600">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50">
            <Clock className="w-4 h-4 text-[#0067D9] shrink-0" />
            <span>Under 2 hrs response</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Dedicated engineer review</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50">
            <Mail className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Official quote to your email</span>
          </div>
        </div>

        {/* Back Button */}
        <div className="pt-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0067D9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Lumina 360 Home</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;
