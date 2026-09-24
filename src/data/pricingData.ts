export interface PricingOption {
  type: string;
  name: string;
  iconName: 'bar' | 'restaurant' | 'rest-bar' | 'rooms' | 'res-bar-rooms';
  installationFee: number;
  monthlySubscription: number;
  features: string[];
}

export interface BusinessTier {
  id: 'small' | 'medium' | 'corporate';
  name: string;
  badge: string;
  badgeBg: string;
  tagline: string;
  bestFor: string;
  color: string;
  options: PricingOption[];
}

export const ECO360_PRICING_TIERS: BusinessTier[] = [
  {
    id: 'small',
    name: 'Small Business',
    badge: 'Starter & Single Venue',
    badgeBg: 'bg-blue-100 text-[#0067D9]',
    tagline: 'Ideal for neighborhood bars, boutique bistros, standalone cafes, and guest houses.',
    bestFor: '1-2 billing counters or mobile waitstaff ordering',
    color: '#0067D9',
    options: [
      {
        type: 'bar',
        name: 'Bar Only',
        iconName: 'bar',
        installationFee: 25000,
        monthlySubscription: 2500,
        features: [
          'High-speed drink ringing & bottle stock ledger',
          'Fast M-Pesa STK push & cash reconciliation',
          'Shift opening float & bartender cash audits',
          '80mm thermal customer receipt printing'
        ]
      },
      {
        type: 'restaurant',
        name: 'Restaurant Only',
        iconName: 'restaurant',
        installationFee: 25000,
        monthlySubscription: 2500,
        features: [
          'Table & floor layout management',
          'Kitchen Display & Kitchen Order Tickets (KOT)',
          'Recipe-based ingredient & kitchen inventory',
          'Instant customer bill splitting & receipts'
        ]
      },
      {
        type: 'rest-bar',
        name: 'Restaurant & Bar',
        iconName: 'rest-bar',
        installationFee: 35000,
        monthlySubscription: 3000,
        features: [
          'Dual billing: separate Bar & Kitchen ticket routing',
          'Simultaneous KOT kitchen printer & bar dispense tickets',
          'Consolidated customer bill for food and beverages',
          'Real-time daily gross margin & sales analytics'
        ]
      },
      {
        type: 'rooms',
        name: 'Res & Rooms / Bar & Rooms',
        iconName: 'rooms',
        installationFee: 40000,
        monthlySubscription: 3000,
        features: [
          'Guest check-in, room folio billing & checkout slips',
          'Post restaurant/bar orders directly to guest room tab',
          'Room status & housekeeping availability dashboard',
          'Consolidated guest invoice upon checkout'
        ]
      },
      {
        type: 'res-bar-rooms',
        name: 'Res, Bar & Rooms',
        iconName: 'res-bar-rooms',
        installationFee: 50000,
        monthlySubscription: 3500,
        features: [
          'Full hospitality trifecta: Rooms, Restaurant dining & Bar',
          'Central guest master account folio & charge transfers',
          'Multi-department inventory tracking & low-stock alerts',
          'Owner mobile reports: track live hotel revenues anywhere'
        ]
      }
    ]
  },
  {
    id: 'medium',
    name: 'Medium Business',
    badge: 'Popular & High Volume',
    badgeBg: 'bg-amber-100 text-amber-900',
    tagline: 'Built for busy multi-table restaurants, sports lounges, garden clubs, and boutique hotels.',
    bestFor: '2-5 concurrent POS stations & multi-waiter tablet ordering',
    color: '#FFD21C',
    options: [
      {
        type: 'bar',
        name: 'Bar Only',
        iconName: 'bar',
        installationFee: 30000,
        monthlySubscription: 3000,
        features: [
          'Multi-station bar tills with bartender speed screens',
          'Keg, crate & spirit tot pour deduction ledger',
          'Midday safe drops, cashier handovers & Z-readings',
          'Automated low-stock supplier reorder warnings'
        ]
      },
      {
        type: 'restaurant',
        name: 'Restaurant Only',
        iconName: 'restaurant',
        installationFee: 30000,
        monthlySubscription: 3000,
        features: [
          'Multi-zone dining (Indoor, Terrace, VIP sections)',
          'Multi-station Kitchen Display Systems (KDS) & KOT',
          'Waiter tablet ordering directly firing to kitchen',
          'Item modifiers (no onions, extra sauce, well-done)'
        ]
      },
      {
        type: 'rest-bar',
        name: 'Restaurant & Bar',
        iconName: 'rest-bar',
        installationFee: 45000,
        monthlySubscription: 3500,
        features: [
          'Synchronized restaurant dining, cocktail bar & patio tabs',
          'Automated split billing, table transfer & merged checks',
          'Central beverage & food kitchen inventory deduplication',
          'Supervisor PIN overrides for voids, discounts & refunds'
        ]
      },
      {
        type: 'rooms',
        name: 'Res & Rooms / Bar & Rooms',
        iconName: 'rooms',
        installationFee: 50000,
        monthlySubscription: 3500,
        features: [
          'Front desk reservation calendar with advance deposits',
          'Direct room posting from restaurant, bar & room service',
          'Daily night audit report & room occupancy metrics',
          'Complimentary breakfast vouchers & guest billing history'
        ]
      },
      {
        type: 'res-bar-rooms',
        name: 'Res, Bar & Rooms',
        iconName: 'res-bar-rooms',
        installationFee: 60000,
        monthlySubscription: 5000,
        features: [
          'Full-scale resort & hotel ERP integration',
          'Unified guest ledger for accommodation, dining & bar lounge',
          'Departmental cost centers & automated profit/loss audits',
          'Priority WhatsApp, phone & remote technical support'
        ]
      }
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate Business',
    badge: 'Enterprise & Multi-Department',
    badgeBg: 'bg-purple-100 text-[#7D3FB2]',
    tagline: 'Engineered for luxury hotels, country clubs, conference resorts, and restaurant chains.',
    bestFor: 'Unlimited POS terminals, extensive facilities & enterprise auditing',
    color: '#7D3FB2',
    options: [
      {
        type: 'bar',
        name: 'Bar Only',
        iconName: 'bar',
        installationFee: 50000,
        monthlySubscription: 4500,
        features: [
          'High-density nightclub / mega-lounge bar stations',
          'Live tot & pour sensors reconciliation',
          'VIP membership accounts & RFID loyalty tap cards',
          'Custom audit trail with anti-theft video snapshot sync'
        ]
      },
      {
        type: 'restaurant',
        name: 'Restaurant Only',
        iconName: 'restaurant',
        installationFee: 50000,
        monthlySubscription: 4500,
        features: [
          'Multi-kitchen production routing (Bakery, Grill, Pastry)',
          'High-speed waiter tablet fleet with table status tracking',
          'Central recipe costing, wastage logs & supplier pricing',
          'Corporate banquet, catering & invoice account billing'
        ]
      },
      {
        type: 'rest-bar',
        name: 'Restaurant & Bar',
        iconName: 'rest-bar',
        installationFee: 75000,
        monthlySubscription: 5500,
        features: [
          'Multi-floor, rooftop lounge & fine dining ecosystem',
          'Enterprise multi-till cashier audits & bank reconciliation',
          'Centralized food & beverage commissary warehouse sync',
          'Custom executive dashboard with hourly revenue tracking'
        ]
      },
      {
        type: 'rooms',
        name: 'Res & Rooms / Bar & Rooms',
        iconName: 'rooms',
        installationFee: 100000,
        monthlySubscription: 7000,
        features: [
          'Complete hotel PMS integration with keycard door locks',
          'Corporate credit accounts, travel agent commissions & folios',
          'Multi-venue charge authorization with digital guest signature',
          'Dedicated account manager & 1-hour on-site SLA response'
        ]
      },
      {
        type: 'res-bar-rooms',
        name: 'Res, Bar & Rooms',
        iconName: 'res-bar-rooms',
        installationFee: 200000,
        monthlySubscription: 10000,
        features: [
          'Enterprise resort hospitality intelligence & multi-branch ERP',
          'Complete accommodation, fine dining, lounges, spa & events',
          'Automated KRA eTIMS server integration & custom financial exports',
          '24/7 dedicated tier-1 engineering hotline & periodic staff training'
        ]
      }
    ]
  }
];

export const ECO360_FEATURES = [
  {
    title: 'Table & Order Management',
    desc: 'Visual table layout, instant order placement, table transfers, and split billing.'
  },
  {
    title: 'Kitchen Display & KOT',
    desc: 'Kitchen Order Tickets fired directly to kitchen printers or digital kitchen display screens.'
  },
  {
    title: 'Inventory & Stock Control',
    desc: 'Recipe-based ingredient deduction, live stock levels, and automated low-stock warnings.'
  },
  {
    title: 'Multiple Payment Options',
    desc: 'Instant M-Pesa STK push, bank cards, cash drawer triggers, and room folio posting.'
  },
  {
    title: 'Real-Time Sales Reports',
    desc: 'Live revenue monitoring, cashier shift balances, bestsellers, and profit margin analysis.'
  },
  {
    title: 'Customer Receipts Efficiently',
    desc: '80mm auto-cutter thermal slips with business branding, VAT itemization, and KRA eTIMS.'
  }
];
