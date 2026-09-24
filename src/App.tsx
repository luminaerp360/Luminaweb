import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Independent Dedicated Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PosErpPage } from './pages/PosErpPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { LegalModal } from './components/modals/LegalModal';
import { ContactModal } from './components/modals/ContactModal';

export function App() {
  // Parse initial page from URL hash
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash === 'business-systems') return 'pos-erp';
    if (['solutions', 'pos-erp', 'industries', 'pricing', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);

  const [legalDocType, setLegalDocType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string>('POS & Business ERP Systems');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    const normalized = pageId === 'business-systems' ? 'pos-erp' : pageId;
    setCurrentPage(normalized);
    
    // Update hash for true multi-page URL support
    if (normalized === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = normalized;
    }

    // Always scroll to top when changing to an independent page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactModal = (defaultService?: string) => {
    setModalDefaultService(defaultService || 'POS & Business ERP Systems');
    setIsContactModalOpen(true);
  };

  const handleOpenLegalModal = (docType: 'privacy' | 'terms' | 'cookies') => {
    setLegalDocType(docType);
    setIsLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#171A21] selection:bg-[#FFD21C] selection:text-slate-900">
      
      {/* Header with Logo Color Accents */}
      <Header
        activeSection={currentPage}
        onNavigate={handleNavigate}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Independent Dedicated Pages Container with Smooth Transitions */}
      <main className="flex-1 pt-20">
        <div key={currentPage} className="animate-page-enter">
          {/* Page 1: Home Flagship */}
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenContactModal={handleOpenContactModal}
            />
          )}

          {/* Page 2: Solutions & Services Dedicated Page */}
          {currentPage === 'solutions' && (
            <SolutionsPage
              onSelectSolution={(sol) => handleOpenContactModal(sol.title)}
              onRequestQuote={handleOpenContactModal}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 3: POS & Business ERP Hub Dedicated Page */}
          {currentPage === 'pos-erp' && (
            <PosErpPage
              onOpenContactModal={handleOpenContactModal}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 4: Industries Dedicated Page */}
          {currentPage === 'industries' && (
            <IndustriesPage
              onRequestQuoteForIndustry={(indName) => handleOpenContactModal(`${indName} Proposal`)}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 5: Pricing & Scope Calculator Dedicated Page */}
          {currentPage === 'pricing' && (
            <PricingPage
              onSelectTier={(tierName) => handleOpenContactModal(`${tierName} Proposal`)}
              onOpenContactModal={handleOpenContactModal}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 6: Contact & WhatsApp Consultation Dedicated Page */}
          {currentPage === 'contact' && (
            <ContactPage
              initialService={modalDefaultService}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Universal Modals */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        docType={legalDocType}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={modalDefaultService}
      />
    </div>
  );
}

export default App;
