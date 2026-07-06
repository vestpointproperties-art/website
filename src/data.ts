import { Property, BlogArticle, Testimonial, InvestmentProject } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Ambiance Height Apartment',
    description: 'An elegant and sophisticated 2-bedroom maisonette with an attached Boys Quarters (BQ) in the prime zone of Lekki Phase 1, Lagos. Offering modern luxury finishes, spacious living areas, and high-quality construction. Perfect for families and smart investors.',
    category: 'luxury',
    type: 'Maisonette',
    price: 250000000, // ₦250,000,000
    location: 'Lekki Phase 1, Lagos',
    size: '250 SQM',
    bedrooms: 2,
    bathrooms: 3,
    titleType: 'C of O',
    paymentPlan: '12 Months',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Boys Quarters (BQ)', 'Maisonette Structure', 'Fully Automated', 'Rooftop Lounge', '24/7 Security', 'Swimming Pool'],
    amenities: ['Fitted Kitchen', 'GYM & Wellness Center', 'Prepaid Meter', 'Armed Security Patrol', 'Sewage Treatment Plant'],
    landmarks: ['The Palms Shopping Mall', 'Lekki Coliseum', 'Nike Art Gallery', 'Lekki-Ikoyi Link Bridge'],
    roi: '25% Expected Annual Appreciation',
    investmentPotential: 'Lekki Phase 1 is one of the most premium and high-demand residential corridors in Lagos. This property offers excellent rental yield and capital appreciation potential due to its highly accessible and coveted location.',
    isFeatured: true,
    isLuxury: true,
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // placeholder video
  },
  {
    id: 'prop-2',
    title: 'Micasa Lagos',
    description: 'Dry, 100% table land in the rapidly developing commercial zone of Ibeju-Lekki, directly facing the major expansion road. Situated 10 minutes from the Dangote Refinery and Lekki Deep Sea Port. Excellent opportunity for commercial development or long-term land banking.',
    category: 'land',
    type: 'Land Plot',
    price: 32400000, // ₦32,400,000
    location: 'Ibeju-Lekki, Lagos',
    size: '500 SQM',
    titleType: 'Government Allocation',
    paymentPlan: '6 Months',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524431144429-03f0f7e5e8b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['100% Dry Land', 'Fenced and Gated', 'Direct Road Facing', 'Immediate Allocation', 'Electricity Infrastructure Ready'],
    amenities: ['Paved Estate Roads', 'Solar Street Lighting', 'Gated Security Hub', 'Green Recreational Zone'],
    landmarks: ['Lekki Free Trade Zone', 'Dangote Refinery Complex', 'Lekki Deep Sea Port', 'La Campagne Tropicana Beach Resort'],
    roi: '45% Projected Annual ROI',
    investmentPotential: 'Properties in this corridor have appreciated by 300% over the last 4 years. With the deep sea port and refinery fully operational, this is the highest appreciation zone in West Africa.',
    isFeatured: true,
    isLand: true
  },
  {
    id: 'prop-3',
    title: 'Lekki Avana Estate',
    description: 'Exquisite 3- and 4-bedroom luxury bungalows, offering options with a private swimming pool or without a pool. Situated at Elerangbe, strategically off the Epe/Ibeju-Lekki Expressway, Lagos. Designed with modern eco-friendly infrastructure, high-end finishing, and 24/7 security.',
    category: 'residential',
    type: 'Bungalow',
    price: 78000000, // ₦78,000,000
    priceLabel: 'From ₦78,000,000',
    location: 'Elerangbe, off Epe/Ibeju-Lekki Expressway, Lagos',
    size: '3 & 4 Bedroom Units',
    bedrooms: 3,
    bathrooms: 4,
    titleType: 'C of O',
    paymentPlan: '12 Months',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['3- & 4-Bedroom Options', 'With/Without Pool Options', 'Spacious Compound', 'Fully Detached Structure', 'Gated Secure Community'],
    amenities: ['Armed Security Patrol', 'Solar Powered Street Lights', 'Central Drainage System', 'Dedicated Transformer'],
    landmarks: ['Alaro City Development', 'Proposed International Airport', 'Epe Resort & Spa', 'Pan-Atlantic University'],
    roi: '30% Projected Annual ROI',
    investmentPotential: 'Located in the prime Elerangbe residential hub off the Epe/Ibeju-Lekki Expressway, these bungalows are ideal for modern families, short-let hospitality investors, and expatriates seeking serene security.',
    isFeatured: true
  },
  {
    id: 'prop-4',
    title: 'Chrysland City Epe',
    description: 'A premium-planned, high-yield gated estate layout in the fast-growing hub of Epe, Lagos. Featuring dry, level, and ready-to-build 500 SQM plots with exceptional infrastructural road networks, secure perimeter fencing, and high ROI potential.',
    category: 'land',
    type: 'Land Plot',
    price: 20000000, // ₦20,000,000
    location: 'Epe, Lagos',
    size: '500 SQM',
    titleType: 'Registered Survey',
    paymentPlan: '24 Months',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['100% Dry/Level Ground', 'No Omo-Onile Disturbances', 'Perimeter Fencing Started', 'Ready for Immediate Construction', 'Instalment Options up to 24 Months'],
    amenities: ['Gated Entrance Gatehouse', 'Perimeter Fencing', 'Electricity Connection Point', 'Internal Grade Roads'],
    landmarks: ['Augustine University', 'Alaro City', 'Epe Resort and Spa', 'Lagos Food Security Systems Park'],
    roi: '35% Compound Annual Growth Rate',
    investmentPotential: 'Epe has become the ultimate haven for land banking. A plot of land bought in this area is experiencing immense capital appreciation backed by massive state infrastructure projects.',
    isFeatured: true,
    isLand: true
  },
  {
    id: 'prop-5',
    title: 'The Capital Vista Commercial Hub',
    description: 'A premium-sized commercial plot strategically positioned on the Lekki-Epe Expressway, Victoria Island Extension. Zoned specifically for corporate office blocks, premium retail outlets, or luxury mid-rise apartment developments.',
    category: 'commercial',
    type: 'Commercial Space',
    price: 650000000, // ₦650,000,000
    location: 'Victoria Island, Lagos',
    size: '1200 SQM',
    titleType: 'C of O',
    paymentPlan: 'Outright',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Dual Access Corners', 'Federal Title Cleanliness', 'High Traffic Visibility', 'Ideal for High-Rise Structures'],
    amenities: ['Pre-installed Drainage Mains', 'Industrial Water Borehole', 'Heavy-Duty Transformer Connect'],
    landmarks: ['Civic Center Victoria Island', 'Four Points by Sheraton Hotel', 'The Palms Shopping Mall'],
    roi: '18% Stable Yield + Capital Growth',
    investmentPotential: 'Victoria Island remains the corporate pulse of West Africa. This high-barrier commercial plot provides outstanding appreciation and rental security for institutions or family offices.',
    isFeatured: false
  },
  {
    id: 'prop-6',
    title: 'Maplewood Residences, Chevron Area',
    description: 'Sophisticated 4-Bedroom Semi-Detached Duplex with an architectural layout prioritizing light, air, and family privacy. Located inside a secure, fully serviced residential community in Chevron, Lekki.',
    category: 'residential',
    type: 'Duplex',
    price: 135000000, // ₦135,000,000
    location: 'Chevron, Lekki, Lagos',
    size: '350 SQM',
    bedrooms: 4,
    bathrooms: 4,
    titleType: "Governor's Consent",
    paymentPlan: '12 Months',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Fully Serviced Estate', 'Borehole with Treatment Plant', '2 Car Carport', 'Stamping Concrete Compound'],
    amenities: ['CCTV Surveillance Cameras', '24/7 Security Gatehouse', 'Recreational Park', 'Intercom system'],
    landmarks: ['Chevron Corporate HQ', 'Atlantic Centre Shopping Complex', 'Conservation Centre Lekki'],
    roi: '15% Annual Appreciation',
    investmentPotential: 'Chevron area represents a high-density executive housing corridor with stable rental returns of ₦7M - ₦10M per annum.',
    isFeatured: false
  },
  {
    id: 'prop-7',
    title: 'The Apex Luxury Mansion, Ikeja GRA',
    description: 'A masterpiece of classic design: brand new 6-bedroom fully detached mansion with a private basement cinema, indoor swimming pool, smart bulletproof doors, and dual security gatehouses in the ultra-exclusive Ikeja GRA neighborhood.',
    category: 'luxury',
    type: 'Duplex',
    price: 520000000, // ₦520,000,000
    location: 'Ikeja GRA, Lagos',
    size: '720 SQM',
    bedrooms: 6,
    bathrooms: 7,
    titleType: 'C of O',
    paymentPlan: 'Outright',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Bulletproof Outer Doors', 'Private Wine Cellar', 'Indoor Heated Pool', 'Basement Private Cinema', 'Executive Meeting Lounge'],
    amenities: ['Dedicated Power Transformer', 'Integrated Security Alarm', 'Smart Climate Systems', 'Triple Car Garage'],
    landmarks: ['Sheraton Lagos Hotel', 'Ikeja Golf Club', 'Maryland Mall', 'Lagos State Governor House'],
    roi: '25% Annual Appreciation',
    investmentPotential: 'GRA Ikeja holds historical prestige. Land and luxury home supply here is extremely limited, ensuring immediate capital appreciation and high resale values.',
    isFeatured: false,
    isLuxury: true
  },
  {
    id: 'prop-8',
    title: 'Elite Oasis Estate, Epe (Commercial plots)',
    description: 'Strategic commercial plots zoned for shopping centers, private schools, hospitality suites, or premium office locations in Epe, directly opposite Alaro City development. Outstanding highway accessibility.',
    category: 'land',
    type: 'Land Plot',
    price: 18000000, // ₦18,000,000
    location: 'Epe, Lagos',
    size: '1000 SQM',
    titleType: 'C of O',
    paymentPlan: '12 Months',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524431144429-03f0f7e5e8b3?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Expressway Facing', '100% Solid Table Land', 'Commercial Zoned', 'No Drainage Challenges', 'Perimeter Fencing Provided'],
    amenities: ['Gatehouse with 24h Guard', 'Pre-installed Transformer', 'Spacious Estate Access Highways'],
    landmarks: ['Alaro City Gate', 'Epe Toll Plaza', 'Atlantic Hall School'],
    roi: '40% Annual Appreciation',
    investmentPotential: 'As Alaro City rapidly expands, neighboring commercial properties are skyrocketing. This is a low-entry high-appreciation opportunity.',
    isFeatured: false,
    isLand: true
  },
  {
    id: 'prop-agric-1',
    title: 'Vestpoint Greenland Agricultural Estate',
    description: 'A premium-planned agricultural land banking layout in the fertile agricultural belt of Epe, Lagos. Ideal for high-yield mechanized farming, agro-processing projects, or secure medium-to-long term wealth preservation with stellar appreciation prospects.',
    category: 'land',
    type: 'Agricultural Land',
    price: 8500000,
    priceLabel: 'From ₦8.5M / Acre',
    location: 'Epe Agricultural Zone, Lagos',
    size: '1 Acre (4,000 SQM)',
    titleType: 'Government Allocation',
    paymentPlan: '12 Months',
    image: '/src/assets/images/agric_land_banking_1783351809079.jpg',
    images: [
      '/src/assets/images/agric_land_banking_1783351809079.jpg'
    ],
    features: ['Highly Fertile Loamy Soil', 'Excellent Natural Drainage', 'Zoned for Agricultural & Agro-Allied use', 'Secure Perimeter Ditching & Fencing'],
    amenities: ['Central Processing Barn Access', 'Direct Farm Gate Road Infrastructure', 'Tractor Rental Service Station', 'On-site Agronomist Advisory Office'],
    landmarks: ['Epe Agro-Processing Hub', 'Lagos Food Logistics Park Ketu-Epe', 'Augustine University'],
    roi: '35% Annual Land Value Appreciation',
    investmentPotential: 'With the Lagos State Government aggressively investing in the Ketu-Epe Food Logistics Hub, zoned agricultural lands are seeing unprecedented capital appreciation. Bank land now for tomorrow’s wealth.',
    isFeatured: true,
    isLand: true
  },
  {
    id: 'prop-cashback-1',
    title: 'Real Estate Cashback - Tier 1 (Buy-to-Resell)',
    description: 'A fractional buy-to-resell investment initiative tailored for individual and community smart wealth builders. Invest starting from ₦1M to ₦100M and receive a guaranteed, asset-backed dividend profit of 35% at 12-month maturity.',
    category: 'investment',
    type: 'Cashback Opportunity',
    price: 1000000,
    priceLabel: 'From ₦1M - ₦100M',
    location: 'Lagos High-Growth Corridors',
    size: 'From 28 SQM land allocation',
    titleType: 'Bank Guarantee',
    paymentPlan: '12 Months',
    image: '/src/assets/images/cashback_tier1_flyer_1783349804454.jpg',
    images: [
      '/src/assets/images/cashback_tier1_flyer_1783349804454.jpg',
      '/src/assets/images/buy_to_resell_flyer_1783349835243.jpg'
    ],
    features: ['35% Dividend Guaranteed', 'Secured with Registered Survey Backed Deeds', 'Bank-Guaranteed Refund Agreements', 'From 28 SQM to 2,778 SQM Security Equivalent'],
    amenities: ['Legal Contract Allocation', 'Maturity Direct Transfer', '100% Capital Protection Guarantee', 'Physical Inspection Available'],
    landmarks: ['Epe Expansion Hub', 'Ibeju-Lekki Commercial Corridor', 'Alaro City Environs'],
    roi: '35% Guaranteed 12-Month Profit',
    investmentPotential: 'This fractional ownership structure removes high-barrier real estate entry. You pool capital to purchase raw land blocks which Vestpoint handles, sells, and distributes profit with complete corporate accountability.',
    isFeatured: true
  },
  {
    id: 'prop-cashback-2',
    title: 'Real Estate Cashback - Tier 2 (Institutional)',
    description: 'An institutional-grade buy-to-resell program tailored for high-net-worth individuals, cooperatives, and corporate entities looking to deploy larger capital pools into high-yielding Lagos land banking. Get a 37% guaranteed dividend profit at 12-month maturity.',
    category: 'investment',
    type: 'Cashback Opportunity',
    price: 101000000,
    priceLabel: 'From ₦101M - ₦1B',
    location: 'Lagos High-Growth Corridors',
    size: 'From 2,778 SQM land allocation',
    titleType: 'Bank Guarantee',
    paymentPlan: '12 Months',
    image: '/src/assets/images/cashback_tier2_flyer_1783349820407.jpg',
    images: [
      '/src/assets/images/cashback_tier2_flyer_1783349820407.jpg',
      '/src/assets/images/buy_to_resell_flyer_1783349835243.jpg'
    ],
    features: ['37% Dividend Guaranteed', 'Full Title Security Deed', 'CAC RC Registered Legal Security', 'Bank Corporate Guarantees'],
    amenities: ['Dedicated Wealth Advisor', 'Direct Escrow Backing', 'Quarterly Progress Reports', 'Deed of Coordinate Allocation'],
    landmarks: ['Lekki Free Trade Zone', 'Lekki Deep Sea Port Area', 'Epe Prime Core'],
    roi: '37% Guaranteed 12-Month Profit',
    investmentPotential: 'Institutional-level investment backed by a licensed, CAC-registered corporate brokerage firm. Your investments are secure and backed by real coordinate surveys in prime development zones.',
    isFeatured: true
  },
  {
    id: 'prop-cashback-3',
    title: 'Buy-to-Resell Shared Prosperity Initiative',
    description: 'Turning shared investment into shared prosperity. Our Buy-to-Resell framework makes premium, fully-vetted real estate accessible to everyone. Pool funds, secure premium acreage, and enjoy 35% - 37% ROI on 12-month asset cycles.',
    category: 'investment',
    type: 'Buy to Resell',
    price: 5000000,
    priceLabel: 'Flexible Entry Options',
    location: 'Epe & Ibeju-Lekki Hubs',
    size: 'Fractional Share',
    titleType: 'Deed of Assignment',
    paymentPlan: '12 Months',
    image: '/src/assets/images/buy_to_resell_flyer_1783349835243.jpg',
    images: [
      '/src/assets/images/buy_to_resell_flyer_1783349835243.jpg',
      '/src/assets/images/cashback_tier1_flyer_1783349804454.jpg',
      '/src/assets/images/cashback_tier2_flyer_1783349820407.jpg'
    ],
    features: ['Accessible Fractional Entry', 'Robust Asset Security', 'Complete Transparency Dashboard', 'Guaranteed Exit Clauses'],
    amenities: ['Digital Investment Deeds', 'CAC Legal Protections', 'Physical Plot Inspections', 'Zero Management Overhead'],
    landmarks: ['Epe Gateway', 'Ibeju-Lekki Free Trade', 'Alaro City'],
    roi: '35% to 37% Annual Dividend',
    investmentPotential: 'This is the absolute best way to protect cash capital against inflation. Fully asset-backed, fully legal, and fully managed by Vestpoint Properties Limited.',
    isFeatured: true
  },
  {
    id: 'prop-reit-1',
    title: 'Vestpoint High-Yield Liquid REITs',
    description: 'Diversify your wealth with the Vestpoint Real Estate Investment Trust. Fully liquid, highly secured fractional ownership of grade-A commercial high-rises and luxury housing complexes across Ikoyi, Victoria Island, and Lekki. Enjoy consistent high-yield dividend payouts without the stress of tenant management.',
    category: 'investment',
    type: 'REITs',
    price: 500000,
    priceLabel: 'From ₦500,000',
    location: 'Ikoyi & Victoria Island, Lagos',
    size: 'Liquid Trust Units',
    titleType: 'Government Allocation',
    paymentPlan: 'Outright',
    image: '/src/assets/images/reit_investment_flyer_1783351622204.jpg',
    images: [
      '/src/assets/images/reit_investment_flyer_1783351622204.jpg'
    ],
    features: ['Fully Liquid Portfolio', 'Consistent Quarterly Dividends', 'SDA Approved Trust Structure', 'Prime Commercial Assets'],
    amenities: ['Online Dividend Portal', 'Direct Bank Settlements', 'Professional Fund Managers', '100% Asset-Backed Security'],
    landmarks: ['Eko Atlantic City', 'Kingsway Tower Ikoyi', 'Victoria Island Financial Core'],
    roi: '22% - 25% Annual Yield',
    investmentPotential: 'Our REIT provides micro-investment opportunities in major premium grade-A commercial buildings and ultra-luxury penthouses. High liquidity with flexible exit windows makes it a stellar, accessible inflation shield.',
    isFeatured: true
  },
  {
    id: 'prop-abuja-1',
    title: 'The Citadel Residence, Abuja',
    description: 'An ultra-exclusive 4-bedroom detached duplex with fully automated smart automation, situated in the highly coveted Katampe Extension region of Abuja. Combining panoramic mountain views with pristine luxury. Built for absolute privacy.',
    category: 'luxury',
    type: 'Duplex',
    price: 380000000,
    location: 'Abuja',
    size: '450 SQM',
    bedrooms: 4,
    bathrooms: 5,
    titleType: 'C of O',
    paymentPlan: '12 Months',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Automated Smart Home', 'Penthouse Terrace', 'Panoramic Mountain View', 'Pre-installed Solar Power Grid'],
    amenities: ['Fitted Smart Kitchen', 'Private Swimming Pool', 'Armed Security Guard Post', 'Fiber Optic Internet Access'],
    landmarks: ['Katampe Hill Scenic Overlook', 'Maitama District (10 mins)', 'Diplomatic Enclave'],
    roi: '28% Expected Annual Appreciation',
    investmentPotential: 'Abuja real estate continues to see massive capital inflow from diaspora investors and political capitals. Gwarinpa and Katampe areas are experiencing rapid, high-yield value hikes.',
    isFeatured: true,
    isLuxury: true
  },
  {
    id: 'prop-enugu-1',
    title: 'Centenary Heights Estate, Enugu',
    description: 'Vetted, premium table land situated inside the prestigious Centenary Layout, Enugu State. Perfectly elevated topography with excellent views of the beautiful hills of Enugu. Excellent natural drainage, suitable for instant villa construction or land banking.',
    category: 'land',
    type: 'Land Plot',
    price: 28000000,
    location: 'Enugu',
    size: '600 SQM',
    titleType: 'C of O',
    paymentPlan: '12 Months',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['100% Table Dry Land', 'Gated Perimeter', 'Access Road Already Asphalted', 'Ready for Instant Allocation'],
    amenities: ['Central Estate Security Network', 'Underground Drainage System', 'Power Distribution Lines Active'],
    landmarks: ['Akanu Ibiam International Airport (15 mins)', 'Enugu Lifestyle Golf Estate', 'Coal City Garden'],
    roi: '30% Annual Value Appreciation',
    investmentPotential: 'Enugu Centenary Layout is the high-brow region of Enugu with premium security and development. Ideal for secure diaspora investments.',
    isFeatured: true,
    isLand: true
  },
  {
    id: 'prop-ph-1',
    title: 'The Gardenia Court, Port Harcourt',
    description: 'A stunning 3-bedroom luxury apartment with a master suite and panoramic views of the city. Located in GRA Phase 2, Port Harcourt. Fully fitted with top-grade European sanitary ware, custom fitted kitchen, and robust concierge services.',
    category: 'luxury',
    type: 'Apartment',
    price: 145000000,
    location: 'Port Harcourt',
    size: '180 SQM',
    bedrooms: 3,
    bathrooms: 4,
    titleType: 'C of O',
    paymentPlan: '6 Months',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Private Elevators', 'Rooftop Lounge', 'Central Gas & Water Supply', 'High Ceilings'],
    amenities: ['Fitted Gym', 'Olympic Size Pool', '24/7 Power Supply', 'Armed Security Checkpoints'],
    landmarks: ['GRA Phase 2 Commercial Hub', 'Polo Club Port Harcourt', 'Sheraton Hotel Environs'],
    roi: '22% Annual Appreciation',
    investmentPotential: 'High corporate rental demand from oil & gas executives makes GRA Phase 2 apartments highly lucrative for long-term lease investments.',
    isFeatured: true,
    isLuxury: true
  },
  {
    id: 'prop-oyo-1',
    title: 'Ibadan Agro-Wealth Estate, Oyo',
    description: 'Highly fertile loamy soil acreage mapped specifically for automated mechanized farming, agro-processing, or strategic agricultural land banking. Situated in the fast-expanding Oyo-Ibadan agricultural corridor, with excellent access to regional trade highways.',
    category: 'land',
    type: 'Agricultural Land',
    price: 3500000,
    priceLabel: 'From ₦3.5M / Acre',
    location: 'Oyo',
    size: '1 Acre (4,000 SQM)',
    titleType: 'Registered Survey',
    paymentPlan: '12 Months',
    image: '/src/assets/images/agric_land_banking_1783351809079.jpg',
    images: [
      '/src/assets/images/agric_land_banking_1783351809079.jpg'
    ],
    features: ['Rich Loamy Soil Profile', 'Pristine Topographic Flatness', 'Excellent Year-Round Water Supply', 'Secure Land Boundary Ditching'],
    amenities: ['Farm Gate Logistics Access Road', 'On-site Agronomy Support Center', 'Communal Agro-Storage Silos Access'],
    landmarks: ['Ibadan-Oyo Express Interchange', 'International Institute of Tropical Agriculture (IITA)', 'University of Ibadan'],
    roi: '32% Expected Annual Appreciation',
    investmentPotential: 'With rising local food demand and aggressive state agricultural incentives, Ibadan/Oyo farmland is experiencing a massive value boom.',
    isFeatured: true,
    isLand: true
  },
  {
    id: 'prop-ogun-1',
    title: 'The Gateway Industrial & Residential Estate, Ogun',
    description: 'Strategically positioned dry land plot in the high-growth corridor of Mowe-Ofada, Ogun State. Directly accessible via the Lagos-Ibadan Expressway. Perfect for logistic hubs, warehouses, or affordable residential layouts.',
    category: 'land',
    type: 'Land Plot',
    price: 6500000,
    location: 'Ogun',
    size: '600 SQM',
    titleType: 'C of O',
    paymentPlan: '12 Months',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['100% Dry Level Ground', 'Fenced Estate Perimeter', 'Access Road Leveling', 'Immediate Physical Allocation'],
    amenities: ['Electricity Transformer Dedicated', 'Clean Water Infrastructure Ready', 'Armed Security Guard Patrols'],
    landmarks: ['Redeemed Christian Church (RCCG) Camp', 'Mowe Market', 'Nestle Flowrgart Industrial Facility'],
    roi: '26% Expected Annual Appreciation',
    investmentPotential: 'Ogun State stands as Nigeria’s industrial capital, with massive outward migration from Lagos making Mowe-Ofada a premium low-entry high-growth location.',
    isFeatured: true,
    isLand: true
  },
  {
    id: 'prop-intl-1',
    title: 'The Marina Heights Signature Suite, Dubai',
    description: 'A stunning premium freehold apartment suite in Dubai Marina, offering hard-currency AED-pegged yields and massive tax-free ROI. Fully managed hands-free by our international luxury asset desk.',
    category: 'investment',
    type: 'Buy to Resell',
    price: 180000000,
    priceLabel: 'From ₦180M / Dirham Equivalent',
    location: 'Abroad',
    size: '85 SQM Suite',
    titleType: 'Freehold',
    paymentPlan: '24 Months',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Guaranteed Dollar Rental Income', 'Dubai Residency Visa Eligible', 'Tax-Free Appreciation', 'Hands-Free Property Management'],
    amenities: ['Infinity Sky Pool', 'Direct Marina Access', 'Valet Parking', 'Luxury Spa and Concierge Service'],
    landmarks: ['Dubai Marina Yacht Club', 'Jumeirah Beach Residences (JBR)', 'Mall of the Emirates'],
    roi: '12% Hard-Currency Annual Yield',
    investmentPotential: 'Hedge against currency fluctuations with premium, tax-free international assets in one of the world\'s most resilient luxury hubs.',
    isFeatured: true
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'How to Avoid Land Scams in Lagos: The Ultimate Buyer’s Guide',
    excerpt: 'Lagos real estate is highly lucrative, but without proper due diligence, you risk falling victim to scams. Learn the critical documentation steps and verification actions required to secure your hard-earned funds.',
    content: `### Understanding the Lagos Land Maze

Lagos real estate is one of the most rewarding investment fields in Africa, but it also contains a complex web of ownership challenges. Property fraud—ranging from selling a single plot of land to multiple buyers, to fake titles, to "Omo-onile" (local family) disputes—has cost buyers billions of Naira.

Fortunately, avoiding these scams is entirely straightforward if you follow a rigorous, non-negotiable verification process. Here is your ultimate blueprint for secure land purchase:

---

### 1. Never Buy Land Without a Registered Survey & Search
Before transferring any funds, you must verify the exact location and legal status of the property at the Lagos State Ministry of Physical Planning or the Land Registry in Alausa, Ikeja.
- **The Charting Process**: Hire an independent licensed surveyor to take the GPS coordinates (using global positioning instruments) of the plot boundaries.
- **The Land Search**: Run a search with the coordinates at the Alausa Surveyor General’s office. This will reveal if the land is "under government acquisition" (meaning it belongs to the government and cannot legally be sold to you) or if it is completely free for private purchase.

---

### 2. Verify the Legal Title Documentation
Do not buy properties based on verbal promises or superficial papers. Insist on seeing official documents, and verify them:
- **Certificate of Occupancy (C of O)**: The highest standard land document in Lagos. Ensure the name on the C of O matches the actual seller, or there is an unbroken chain of title (Deeds of Assignment) leading to the current seller.
- **Governor's Consent**: If the C of O has already been issued on the property, any subsequent transfer of ownership MUST receive the official consent of the Lagos State Governor.
- **Gazette**: If the land was originally owned by a community but was released ("excised") by the government, check the Gazette to ensure that specific plot coordinates are within the officially excised portion.

---

### 3. Conduct Physical Site Verification
Never buy real estate in Lagos completely blind (sight unseen). If you are in the diaspora, appoint a trusted family member, an independent real estate lawyer, or a highly reputable company like **Vestpoint Properties Limited** to conduct physical inspection:
- Ensure the land exists, matches the dimensions, is dry (unless you are prepared to sand-fill and pile-foundation), and has clear boundaries.
- Speak with neighbors or locals nearby to ensure there are no active, unresolved court battles or communal land family ownership disputes.

---

### 4. Direct All Payments to Corporate Bank Accounts
One of the most common scam markers is asking for cash payments or payments to individual private bank accounts.
- **Payment Destination**: Always pay directly to the verified corporate bank account of the developer or the real estate company.
- **Documentation trail**: Request official corporate receipts and signing of a contract of sale immediately upon transaction payment.

At Vestpoint Properties Limited, we act as your protective shield. Every single property on our roster undergoes exhaustive charting, legal validation, and physical vetting by our experts before being presented to clients.`,
    category: 'Buying Guides',
    author: 'Legal & Compliance Team',
    date: 'June 20, 2026',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: 'blog-2',
    title: 'Why Lagos is Africa’s Real Estate Goldmine: Capital Appreciation Demystified',
    excerpt: 'Lagos is experiencing unprecedented population growth and urban sprawl. Discover the core factors driving real estate appreciation and where to position your capital today.',
    content: `### The Lagos Growth Engine

With a population exceeding 22 million and serving as the primary economic hub of West Africa, Lagos is an absolute giant. The city’s geography is limited—surrounded by lagoons and the Atlantic Ocean—creating a classic economic supply-and-demand mismatch.

This geographic boundary, combined with rapid urbanization and a growing middle class, has created a real estate investment landscape with historic returns.

---

### Core Drivers of Appreciation in Lagos

1. **Massive Population Density & Urban Sprawl**
   Over 2,000 people migrate to Lagos daily. This drives massive demand for residential homes, rental apartments, and retail spaces.

2. **Unmatched Infrastructure Development**
   Lagos is undergoing massive infrastructure expansions. The **Lekki-Epe Expressway expansion**, the **Lagos Blue and Red Line Metro Railways**, the **Lekki-Ikoyi Link Bridge**, and the upcoming **Fourth Mainland Bridge** instantly skyrocket the value of nearby lands.

3. **Mega Commercial Projects**
   The Ibeju-Lekki axis has been transformed by massive industrial investments:
   - **The Lekki Free Trade Zone**: A tax-free commercial zone hosting multi-billion-dollar companies.
   - **The Dangote Refinery**: The largest single-train oil refinery in the world.
   - **The Lekki Deep Sea Port**: Designed to handle massive cargo container fleets, boosting logistics value.
   - **Alaro City**: A modern master-planned city rising in Epe.

---

### Where to Invest Your Capital Today

- **For Immediate Rental Income**: Focus on finished duplexes or 2-bedroom smart apartments in **Lekki Phase 1, Chevron Corridor, and Ikoyi**. Yields are denominated in high figures and often match inflation rates.
- **For High-Growth Land Banking**: Purchase acreage or plots in **Epe and Ibeju-Lekki**. Land that sold for ₦2M six years ago in Epe is now exchanging hands at ₦8.5M - ₦12M, providing a safer, more predictable return than traditional equities or crypto assets.

When you invest through a verified partner like **Vestpoint Properties Limited**, we analyze the macroeconomic indicators to ensure your capital is positioned in high-velocity appreciation corridors.`,
    category: 'Investment',
    author: 'Investment Advisory Group',
    date: 'May 14, 2026',
    image: 'https://images.unsplash.com/photo-1533512918816-72cb6fb3ec82?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 'blog-3',
    title: 'The Diaspora Buyer’s Handbook: Secure Property Ownership Remotely',
    excerpt: 'Living abroad shouldn’t prevent you from building wealth back home. Learn the legal framework and processes that guarantee a secure, hands-free real estate portfolio in Lagos.',
    content: `### Empowering Nigerians in Diaspora

For millions of Nigerians living in the UK, US, Canada, Europe, and the Middle East, investing in Lagos real estate is the ultimate way to maintain cultural ties, build a retirement haven, or secure high-yielding investments.

However, the primary barrier has always been **Trust**. Many have stories of sending hard-earned funds to relatives or unchecked agents, only to find the land was never bought, or the money was diverted.

Today, technology and structured real estate companies have completely solved this problem, enabling diaspora investors to securely acquire verified properties from anywhere in the world.

---

### The 4 Pillars of Secure Diaspora Investing

#### 1. Deal Only with Registered Corporate Entities
Never engage in private property transactions using relatives as proxies. Relatives, despite good intentions, are rarely real estate experts and are highly susceptible to agent manipulation.
- Deal directly with a licensed corporate brokerage and advisory firm like **Vestpoint Properties Limited**. This establishes legal accountability, corporate guarantees, and a clear paper trail.

#### 2. Leverage Virtual Consultations & Digital Inspections
Physical distance is no longer an obstacle:
- Request live virtual walk-throughs and drone recordings. Reputable companies provide interactive high-definition footage of the property, surrounding layout, access roads, and nearby landmarks.
- Utilize video calls to ask direct questions about title status, drainage systems, and neighborhood developments.

#### 3. Power of Attorney & Corporate Execution
When completing paperwork, you can legally execute contracts from abroad:
- **Contract of Sale**: Sent via secure digital signing platforms (like DocuSign), which are legally binding.
- **Power of Attorney**: If you require a representative to execute complex local deeds, ensure it is prepared by a qualified Nigerian lawyer specializing in property law.

#### 4. Secured Electronic Payments
Never send money through individual remitters. Use formal corporate channels:
- Make payments directly into the verified corporate bank accounts of the real estate developer or our Escrow accounts.
- Bank-to-bank transfers provide legal evidence of payment and can be referenced in any legal proceeding.

With Vestpoint, our dedicated Diaspora Advisory desk has assisted over 250 international clients in building massive, secure, high-yield Lagos real estate portfolios entirely hands-free.`,
    category: 'Buying Guides',
    author: 'Diaspora Advisory Desk',
    date: 'April 02, 2026',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Chidi Okechukwu',
    role: 'Consultant Cardiologist',
    location: 'Houston, Texas (Diaspora Investor)',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Investing back home was a nightmare until I connected with Vestpoint. Their level of transparency is exceptional. They sent survey charts, video inspections, and verified C of O documentation before I paid a single Dollar. I now own 4 highly appreciating plots in Ibeju-Lekki.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Mrs. Funmi Adebayo',
    role: 'Tech Executive',
    location: 'Lekki Phase 1, Lagos',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Vestpoint didn’t just sell me a home; they acted as my real estate advisors. They analyzed rental trends, verified title structures, and negotiated a very flexible 12-month payment plan for my smart duplex in Lekki. Their customer service is unmatched in Nigeria.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Engr. Ibrahim Yusuf',
    role: 'Real Estate Portfolio Investor',
    location: 'Abuja, Nigeria',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'As an active investor, I look at real estate from a pure numbers perspective. Vestpoint helped me map out a land banking strategy in Epe. The land we bought in 2024 at ₦4M is already valued at ₦8.5M in 2026. Highly recommend their professional advisory services.',
    rating: 5
  }
];

export const INVESTMENT_PROJECTS: InvestmentProject[] = [
  {
    id: 'proj-1',
    title: 'Ambiance Height Apartment',
    location: 'Lekki Phase 1, Lagos',
    description: 'An elegant and sophisticated 2-bedroom maisonette with an attached Boys Quarters (BQ) in the prime zone of Lekki Phase 1, Lagos. Offering modern luxury finishes and high-quality construction.',
    expectedAppreciation: '25% Annually',
    minInvestment: 250000000,
    roi: '25% Expected Annual Appreciation',
    features: ['Boys Quarters (BQ)', 'Maisonette Structure', 'Rooftop Lounge'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    paymentPlan: '12 Months Payment Plan'
  },
  {
    id: 'proj-2',
    title: 'Micasa Lagos',
    location: 'Ibeju-Lekki, Lagos',
    description: 'Dry, 100% table land in the rapidly developing commercial zone of Ibeju-Lekki, directly facing the major expansion road. Situated 10 minutes from the Dangote Refinery and Lekki Deep Sea Port.',
    expectedAppreciation: '45% Annually',
    minInvestment: 32400000,
    roi: '45% Projected Annual ROI',
    features: ['100% Dry Land', 'Fenced and Gated', 'Direct Road Facing'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    paymentPlan: '6 Months Payment Plan'
  },
  {
    id: 'proj-3',
    title: 'Lekki Avana Estate',
    location: 'Elerangbe, off Epe/Ibeju-Lekki Expressway, Lagos',
    description: 'Exquisite 3- and 4-bedroom luxury bungalows, offering options with a private swimming pool or without a pool. Designed with modern eco-friendly infrastructure and 24/7 security.',
    expectedAppreciation: '30% Annually',
    minInvestment: 78000000,
    roi: '30% Projected Annual ROI',
    features: ['3- & 4-Bedroom Options', 'With/Without Pool Options', 'Gated Secure Community'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    paymentPlan: '12 Months Payment Plan'
  },
  {
    id: 'proj-4',
    title: 'Chrysland City Epe',
    location: 'Epe, Lagos',
    description: 'A premium-planned, high-yield gated estate layout in the fast-growing hub of Epe, Lagos. Featuring dry, level, and ready-to-build 500 SQM plots with exceptional infrastructural road networks, secure perimeter fencing, and high ROI potential.',
    expectedAppreciation: '35% Annually',
    minInvestment: 20000000,
    roi: '35% Compound Annual Growth Rate',
    features: ['500 SQM Standard Plots', '100% Dry Level Land', 'Perimeter Fencing Ready'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    paymentPlan: '24 Months Payment Plan'
  }
];

export const LAKELANDMARK_FAQ = [
  {
    question: "How do I verify that a property sold by Vestpoint is legally secure?",
    answer: "Every single property listed on our website has undergone exhaustive pre-vetting and legal charting by our dedicated compliance team. We verify the root of title at the Alausa Lands Registry, check coordinates against state master plans, and ensure the property is completely free from any government acquisition, judicial dispute, or local 'Omo-onile' claims. We provide certified copies of surveys and title documents for your independent verification."
  },
  {
    question: "Can I buy land or a home safely if I live in the diaspora?",
    answer: "Yes, over 60% of our clients are Nigerians living abroad. We have structured a seamless, highly secure remote buying process. This includes real-time live virtual property walk-throughs, high-definition drone layout recordings, secure electronic contract execution (via DocuSign), and payments directed exclusively to verified corporate accounts with official digital receipts. We also handle virtual inspections and send periodic development progress reports."
  },
  {
    question: "What is the difference between Certificate of Occupancy (C of O) and Governor's Consent?",
    answer: "A Certificate of Occupancy (C of O) is the first document issued by the state government to lease land to an individual for 99 years. A Governor's Consent is the official approval given by the state Governor when the holder of a C of O decides to transfer or sell that land to a new buyer. Both are legally secure and highly reputable titles in Lagos State."
  },
  {
    question: "What payment plan options are available?",
    answer: "We offer highly flexible payment plans structured to make ownership comfortable. Depending on the property, you can opt for an 'Outright Payment' (which typically attracts a discount), or structured instalments spanning 6 months, 12 months, or 24 months with a reasonable initial deposit (typically 20% to 30%)."
  },
  {
    question: "How do inspections work? Are they free?",
    answer: "Yes, all our property inspections are 100% free of charge. We organize physical site inspections daily (Monday to Saturday) in modern, air-conditioned corporate vehicles leaving from our office. For international clients, we organize high-definition virtual inspections via video call, showing you everything from the road access to the land topology."
  },
  {
    question: "What is Land Banking and why is it recommended?",
    answer: "Land banking is the practice of buying undeveloped land in strategic, high-growth corridors (such as Epe or Ibeju-Lekki) at a low price, holding it while the surrounding infrastructure matures, and selling it later for substantial profits. It is one of the safest wealth-building strategies because land does not depreciate, requires near-zero maintenance, and grows rapidly as the Lagos population expands outwards."
  }
];
