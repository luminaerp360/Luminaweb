export interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  image: string;
  badge: string;
  color: string;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  keyPoints: string[];
}

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: 'pos-erp-systems',
    title: 'POS & Business ERP Systems',
    shortDesc: 'Fast point-of-sale checkout, live multi-branch inventory, and custom ERP software designed around your business.',
    tagline: 'Replace paper receipts and spreadsheet errors with synchronized operations.',
    image: '/images/kenyan-supermarket-pos.jpg',
    badge: 'Flagship Solution',
    color: '#0067D9',
    accentColor: '#FFD21C',
    borderColor: 'border-[#0067D9]',
    badgeBg: 'bg-[#0067D9]',
    badgeText: 'text-white',
    keyPoints: [
      'High-speed barcode scanner & touch screen checkout',
      'Direct M-Pesa STK push & automatic payment matching',
      'Live multi-store inventory tracking & low-stock alerts',
      'Role permissions for Cashiers, Supervisors & Owners'
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce & Mobile Money Stores',
    shortDesc: 'Full online stores with automated M-Pesa STK push, card payments, product catalogs, and automatic stock deduction.',
    tagline: 'Sell 24/7 with instant mobile money confirmation and automated SMS receipts.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
    badge: 'Online Commerce',
    color: '#F43D78',
    accentColor: '#FFD21C',
    borderColor: 'border-[#F43D78]',
    badgeBg: 'bg-[#F43D78]',
    badgeText: 'text-white',
    keyPoints: [
      'Automated M-Pesa STK prompt right on customer phone',
      'Product catalog with size, color & variant choices',
      'Instant SMS & email order notifications',
      'Inventory sync with your physical store warehouse'
    ]
  },
  {
    id: 'website-development',
    title: 'Websites & Web Applications',
    shortDesc: 'Modern, high-speed websites engineered to showcase your brand, rank high on Google, and convert visitors into clients.',
    tagline: 'Fast, responsive web design optimized for all phones, tablets, and laptops.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    badge: 'Digital Presence',
    color: '#073B8F',
    accentColor: '#0067D9',
    borderColor: 'border-[#073B8F]',
    badgeBg: 'bg-[#073B8F]',
    badgeText: 'text-white',
    keyPoints: [
      'Custom modern layout tailored to your brand identity',
      'Mobile-first responsive design that loads in under 1 second',
      'Direct WhatsApp chat button & instant inquiry form',
      'Google Search Console setup & technical SEO built-in'
    ]
  },
  {
    id: 'cctv-security',
    title: 'CCTV & Surveillance Systems',
    shortDesc: 'Crystal-clear HD and 4K security camera installations with remote phone viewing and smart boundary tripwire alerts.',
    tagline: 'Protect your premises, monitor staff compliance, and prevent theft 24/7.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    badge: 'Security',
    color: '#FFD21C',
    accentColor: '#073B8F',
    borderColor: 'border-amber-400',
    badgeBg: 'bg-[#FFD21C]',
    badgeText: 'text-slate-950',
    keyPoints: [
      'Crystal-clear HD & night-vision IP security cameras',
      'Live mobile phone monitoring from anywhere in the world',
      'Motion detection & perimeter intrusion alert alerts',
      'Tamper-proof local NVR video recording & backup'
    ]
  },
  {
    id: 'networking-services',
    title: 'Networking & Enterprise Wi-Fi',
    shortDesc: 'High-speed office Wi-Fi, structured Cat6 cabling, neat server racks, and firewall security with zero dead zones.',
    tagline: 'Fast, dependable connectivity for POS checkouts, office PCs, and staff phones.',
    image: '/images/kenyan-warehouse-erp.jpg',
    badge: 'Connectivity',
    color: '#7D3FB2',
    accentColor: '#F43D78',
    borderColor: 'border-[#7D3FB2]',
    badgeBg: 'bg-[#7D3FB2]',
    badgeText: 'text-white',
    keyPoints: [
      'Structured Cat6A data cabling with neat patch rack labeling',
      'Enterprise Wi-Fi access points with seamless roaming',
      'Separate secure VLAN networks for POS, staff, and guests',
      'Dual-internet backup failover to eliminate downtime'
    ]
  },
  {
    id: 'crm-systems',
    title: 'CRM & Sales Pipeline Systems',
    shortDesc: 'Organize customer leads, track sales deals, automate follow-up reminders, and monitor team performance in one place.',
    tagline: 'Never lose another client inquiry or quote opportunity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    badge: 'Sales Pipeline',
    color: '#0067D9',
    accentColor: '#7D3FB2',
    borderColor: 'border-blue-400',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    keyPoints: [
      'Central lead capture from website, calls, and WhatsApp',
      'Visual sales deal stages (New, Quoted, Closed)',
      'Automated reminders for quotes, calls, and follow-ups',
      'Full customer history, past orders, and billing notes'
    ]
  }
];
