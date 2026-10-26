export interface ErpBusinessCategory {
  id: string;
  name: string;
  description: string;
  iconName?: string;
  badge?: string;
  isPopular?: boolean;
}

export const POS_BAR_RESTAURANT_URL = 'https://pos.lumina360.tech/auth/register';
export const ERP_REGISTRATION_URL = 'https://erp.lumina360.tech/register';

export const ERP_BUSINESS_CATEGORIES: ErpBusinessCategory[] = [
  {
    id: 'general-business',
    name: 'General Business',
    description: 'Everything except car dealership & CRM. Complete core accounting, sales & stock.',
    badge: 'Universal',
    isPopular: true
  },
  {
    id: 'retail-duka',
    name: 'Retail Store / Duka',
    description: 'Fast sales, multi-item barcode checkout, inventory & daily cash accounting for shops.',
    badge: 'Fast Moving',
    isPopular: true
  },
  {
    id: 'wholesale-distributor',
    name: 'Wholesale Distributor',
    description: 'LPOs, stock transfers across warehouses, bulk pricing tiers & credit sales.',
    badge: 'High Volume'
  },
  {
    id: 'car-dealership',
    name: 'Car Dealership',
    description: 'Car inventory tracking (VIN/Chassis), vehicle sales agreements & commission reports.',
    badge: 'Automotive'
  },
  {
    id: 'manufacturing-workshop',
    name: 'Manufacturing / Workshop',
    description: 'Departmental job cards, raw material requisitions, bill of materials & production cycles.',
    badge: 'Industrial'
  },
  {
    id: 'restaurant-cafe',
    name: 'Restaurant / Café',
    description: 'Food & beverage orders, table service, recipe costing & dine-in/takeaway operations.',
    badge: 'F&B'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    description: 'Specialized stock control with expiry tracking, supplier lot management & prescription records.',
    badge: 'Healthcare',
    isPopular: true
  },
  {
    id: 'chemist-drugstore',
    name: 'Chemist / Drugstore',
    description: 'Batch number & expiry date enforcement, shelf audit tracking & over-the-counter billing.',
    badge: 'Pharma'
  },
  {
    id: 'supermarket',
    name: 'Supermarket',
    description: 'Complete multi-till solution, weighing scale integration, back-office reorders & cashier shifts.',
    badge: 'Enterprise',
    isPopular: true
  },
  {
    id: 'hardware-store',
    name: 'Hardware Store',
    description: 'Building materials, timber, paint tinting variations, weight units & delivery dispatch.',
    badge: 'Construction'
  },
  {
    id: 'electronics-phone-shop',
    name: 'Electronics & Phone Shop',
    description: 'IMEI & serial number tracking, warranty management, trade-ins & gadget accessories.',
    badge: 'Tech Retail'
  },
  {
    id: 'boutique-fashion',
    name: 'Boutique / Fashion',
    description: 'Size/Color/Fit inventory matrix, barcode tagging, seasonal promotions & clothing retail.',
    badge: 'Apparel'
  },
  {
    id: 'salon-barber-shop',
    name: 'Salon / Barber Shop',
    description: 'Service orders, stylist commission tracking, appointment booking & beauty product retail.',
    badge: 'Personal Care'
  },
  {
    id: 'crm-only',
    name: 'CRM Only',
    description: 'Leads, sales pipelines, client support tickets, quotations & complete Customers 360° view.',
    badge: 'Sales Engine'
  },
  {
    id: 'corporate-professional',
    name: 'Corporate / Professional',
    description: 'Software houses, law firms, events managers, photography studios & consulting agencies.',
    badge: 'Services'
  }
];
