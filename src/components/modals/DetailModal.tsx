import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { Solution } from '../../data/solutionsData';
import { IndustryCard } from '../../data/industriesData';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution?: Solution | null;
  industry?: IndustryCard | null;
  onRequestQuote: (contextTitle: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  solution,
  industry,
  onRequestQuote,
}) => {
  if (!isOpen || (!solution && !industry)) return null;

  const title = solution ? solution.title : industry?.name || '';
  const desc = solution ? solution.shortDesc : industry?.tagline || '';
  const image = solution ? solution.image : industry?.image;
  const points = solution ? solution.keyPoints : industry?.points || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Header */}
        {image && (
          <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Header */}
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-xl font-extrabold text-[#073B8F]">
            {title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {desc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs text-slate-700">
          <div className="font-bold text-slate-900">System Capabilities:</div>
          <div className="space-y-2">
            {points.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <Check className="w-3.5 h-3.5 text-[#0067D9] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(title);
            }}
            className="inline-flex items-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
