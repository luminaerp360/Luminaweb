export interface IndustryCard {
  id: string;
  name: string;
  tagline: string;
  image: string;
  color: string;
  borderColor: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  points: string[];
}

export const INDUSTRIES_DATA: IndustryCard[] = [
  {
    id: 'retail',
    name: 'Retail Stores & Supermarkets',
    tagline: 'High-speed barcode checkout, cashier shift audits, and live multi-branch inventory.',
    image: '/images/kenyan-supermarket-pos.jpg',
    color: '#0067D9',
    borderColor: 'border-[#0067D9]',
    badge: 'Retail & Wholesale',
    badgeBg: 'bg-[#0067D9]',
    badgeText: 'text-white',
    points: [
      'Touchscreen POS with barcode scanner & receipt printer',
      'Instant M-Pesa STK push & automatic transaction reconciliation',
      'Multi-store inventory deduction & automated low-stock reorders'
    ]
  },
  {
    id: 'dairy-farming',
    name: 'Dairy & Commercial Farming',
    tagline: 'Digital milk intake scales, farmer account ledgers, and automated payout SMS.',
    image: '/images/kenyan-dairy-erp.jpg',
    color: '#073B8F',
    borderColor: 'border-[#073B8F]',
    badge: 'Agribusiness',
    badgeBg: 'bg-[#073B8F]',
    badgeText: 'text-white',
    points: [
      'Digital scale integration recording milk liters automatically',
      'Instant SMS receipts sent to farmers with weight & balance',
      'Automated deduction ledger for farm inputs and advances'
    ]
  },
  {
    id: 'healthcare',
    name: 'Medical & Dental Practices',
    tagline: 'Electronic patient records, triage queue, doctor notes, and pharmacy stock.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    color: '#F43D78',
    borderColor: 'border-[#F43D78]',
    badge: 'Healthcare',
    badgeBg: 'bg-[#F43D78]',
    badgeText: 'text-white',
    points: [
      'Digital patient triage and doctor consultation queue',
      'Direct pharmacy prescription fulfillment and expiry warnings',
      'Consolidated cashier billing combining consultation, lab & meds'
    ]
  },
  {
    id: 'hospitality',
    name: 'Hotels, Bars & Restaurants',
    tagline: 'Table ordering tablets, kitchen printers, bar pour tracking, and guest billing.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    color: '#FFD21C',
    borderColor: 'border-amber-400',
    badge: 'Hospitality',
    badgeBg: 'bg-[#FFD21C]',
    badgeText: 'text-slate-950',
    points: [
      'Waitstaff tablet ordering firing tickets directly to kitchen printers',
      'Bar & kitchen recipe-based ingredient stock deduction',
      'Single consolidated bill for food, drinks, and rooms'
    ]
  },
  {
    id: 'schools',
    name: 'Schools & Training Institutes',
    tagline: 'Student fee collection, automated SMS reminders to parents, and library/canteen tracking.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    color: '#0067D9',
    borderColor: 'border-[#0067D9]',
    badge: 'Education',
    badgeBg: 'bg-[#0067D9]',
    badgeText: 'text-white',
    points: [
      'Bank & M-Pesa fee reconciliation with instant parent receipt SMS',
      'Student term report generation and exam grading portal',
      'Campus gate security and staff attendance logs'
    ]
  },
  {
    id: 'professional-firms',
    name: 'Law, Audit & Corporate Offices',
    tagline: 'Client case files, billable hours tracking, retainer invoices, and secure document vaults.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    color: '#7D3FB2',
    borderColor: 'border-[#7D3FB2]',
    badge: 'Corporate',
    badgeBg: 'bg-[#7D3FB2]',
    badgeText: 'text-white',
    points: [
      'Digital case docket management with strict confidentiality roles',
      'Automated retainer billing, expense tracking & tax invoicing',
      'Secure Cat6 network & CCTV monitoring for executive suites'
    ]
  }
];
