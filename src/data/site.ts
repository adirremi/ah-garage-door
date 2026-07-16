export const site = {
  name: 'AH Garage Door',
  tagline: 'Professional Door Solutions',
  phone: '(833) 314-1418',
  phoneHref: 'tel:+18333141418',
  email: 'info@ahgaragedoor.com',
  url: 'https://ahgaragedoor.com',
  description:
    'AH Garage Door provides expert garage door repair, installation & maintenance across California. Open Mon–Thu & Sun 8AM–6PM, Fri 8AM–2PM. Call (833) 314-1418.',
} as const;

export const businessHours = {
  topbar: 'Open Mon–Thu & Sun 8AM–6PM · Fri 8AM–2PM · Sat Closed',
  short: 'Mon–Thu & Sun: 8AM–6PM · Fri: 8AM–2PM · Sat: Closed',
  schema: [
    'Mo 08:00-18:00',
    'Tu 08:00-18:00',
    'We 08:00-18:00',
    'Th 08:00-18:00',
    'Fr 08:00-14:00',
    'Su 08:00-18:00',
  ],
  schedule: [
    { day: 'Mon', hours: '8:00 AM – 6:00 PM' },
    { day: 'Tue', hours: '8:00 AM – 6:00 PM' },
    { day: 'Wed', hours: '8:00 AM – 6:00 PM' },
    { day: 'Thu', hours: '8:00 AM – 6:00 PM' },
    { day: 'Fri', hours: '8:00 AM – 2:00 PM' },
    { day: 'Sat', hours: 'Closed' },
    { day: 'Sun', hours: '8:00 AM – 6:00 PM' },
  ],
} as const;

function slugify(city: string) {
  return city
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const locations = [
  {
    city: 'Palo Alto',
    street: '660 Stanford Shopping Center',
    zip: '94304',
    region: 'Silicon Valley',
    areas: ['Menlo Park', 'Mountain View', 'Los Altos', 'Stanford'],
    blurb:
      'Serving Palo Alto and the Silicon Valley peninsula with fast garage door repair, installation, and maintenance for homes and businesses.',
  },
  {
    city: 'San Marino',
    street: '2500 Mission St',
    zip: '91108',
    region: 'San Gabriel Valley',
    areas: ['Pasadena', 'San Gabriel', 'Alhambra', 'Arcadia'],
    blurb:
      'Local garage door experts in San Marino offering reliable repairs, new door installations, and preventative maintenance across the San Gabriel Valley.',
  },
  {
    city: 'Manhattan Beach',
    street: '3200 N Sepulveda Blvd',
    zip: '90266',
    region: 'South Bay',
    areas: ['Hermosa Beach', 'Redondo Beach', 'El Segundo', 'Torrance'],
    blurb:
      'South Bay garage door service from our Manhattan Beach location — spring repairs, opener installs, and same-day support when you need it.',
  },
  {
    city: 'Irvine',
    street: '670 Spectrum Center Dr',
    zip: '92618',
    region: 'Orange County',
    areas: ['Tustin', 'Newport Beach', 'Costa Mesa', 'Lake Forest'],
    blurb:
      'Orange County garage door repair and installation based in Irvine. Residential and commercial service with clear pricing and expert technicians.',
  },
  {
    city: 'Beverly Hills',
    street: '241 N Canon Dr',
    zip: '90210',
    region: 'West Los Angeles',
    areas: ['West Hollywood', 'Century City', 'Bel Air', 'Brentwood'],
    blurb:
      'Premium garage door installation and repair for Beverly Hills and Westside neighborhoods — quiet openers, insulated doors, and careful craftsmanship.',
  },
  {
    city: 'Carmel-By-The-Sea',
    street: 'Ocean Ave & Mission St',
    zip: '93921',
    region: 'Monterey Peninsula',
    areas: ['Monterey', 'Pacific Grove', 'Pebble Beach', 'Carmel Valley'],
    blurb:
      'Garage door service for Carmel-By-The-Sea and the Monterey Peninsula — coastal-ready doors, repairs, and dependable local technicians.',
  },
  {
    city: 'Oakland',
    street: '4000 Piedmont Ave',
    zip: '94611',
    region: 'East Bay',
    areas: ['Berkeley', 'Alameda', 'Piedmont', 'Emeryville'],
    blurb:
      'East Bay garage door specialists in Oakland handling broken springs, stuck doors, opener failures, and full residential replacements.',
  },
  {
    city: 'La Jolla',
    street: '8657 Villa La Jolla Dr',
    zip: '92037',
    region: 'San Diego',
    areas: ['Del Mar', 'Pacific Beach', 'University City', 'Solana Beach'],
    blurb:
      'San Diego garage door repair and installation from La Jolla — coastal homes, smart openers, and professional same-day service when available.',
  },
  {
    city: 'Roseville',
    street: '1151 Galleria Blvd',
    zip: '95678',
    region: 'Sacramento Area',
    areas: ['Rocklin', 'Granite Bay', 'Citrus Heights', 'Folsom'],
    blurb:
      'Sacramento-area garage door service from Roseville — installations, spring repairs, maintenance, and commercial door support.',
  },
  {
    city: 'South Pasadena',
    street: '1000 Mission St',
    zip: '91030',
    region: 'Los Angeles County',
    areas: ['Pasadena', 'Highland Park', 'Eagle Rock', 'Alhambra'],
    blurb:
      'Trusted garage door repair and installation in South Pasadena and nearby LA County communities with free on-site estimates.',
  },
].map((loc) => ({
  ...loc,
  slug: slugify(loc.city),
  address: `${loc.street}, ${loc.city}, CA ${loc.zip}`,
  href: `/locations/${slugify(loc.city)}`,
}));

export type Location = (typeof locations)[number];

export const services = [
  {
    slug: 'garage-door-installation',
    title: 'Garage Door Installation',
    shortTitle: 'Installation',
    headline: 'New Garage Door Installation Built to Last',
    summary:
      'Residential and commercial garage door installations with a wide range of styles, materials, and smart-home compatible openers.',
    description:
      'Whether you need a new insulated residential door or a heavy-duty commercial system, our technicians handle the full install — from measuring and removal to alignment, opener setup, and safety testing.',
    benefits: [
      'Wide selection of steel, wood, glass, and insulated doors',
      'Professional removal of your old door and hardware',
      'Smart opener setup with remotes and keypads',
      'Safety sensor calibration and final walkthrough',
    ],
    includes: [
      'On-site measurement and free estimate',
      'Door, track, spring, and hardware installation',
      'Opener programming and testing',
      'Cleanup and operation demonstration',
    ],
  },
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Repair',
    shortTitle: 'Repair',
    headline: 'Fast, Expert Garage Door Repair',
    summary:
      'Expert fixes for broken springs, malfunctioning openers, off-track doors, damaged panels, and all mechanical issues.',
    description:
      'A broken spring or stuck door should not shut down your day. We diagnose the issue on-site, explain your options clearly, and complete most common repairs during the same visit.',
    benefits: [
      'Broken torsion and extension spring replacement',
      'Off-track door realignment and roller repair',
      'Cable, hinge, and drum fixes',
      'Opener troubleshooting and motor repair',
    ],
    includes: [
      'Free diagnostic assessment',
      'Transparent quote before work begins',
      'Quality parts matched to your door',
      'Safety check after every repair',
    ],
  },
  {
    slug: 'garage-door-maintenance',
    title: 'Maintenance & Tune-Ups',
    shortTitle: 'Maintenance',
    headline: 'Preventive Garage Door Maintenance',
    summary:
      'Preventive maintenance programs to keep your door running smoothly, safely, and extend its lifespan for years.',
    description:
      'Regular tune-ups catch worn parts early, reduce noisy operation, and help prevent expensive emergency repairs. Ideal for busy households and commercial properties.',
    benefits: [
      'Lubrication of rollers, hinges, and springs',
      'Balance and tension adjustments',
      'Hardware tightening and track alignment',
      'Safety reverse and sensor testing',
    ],
    includes: [
      'Full mechanical inspection',
      'Opener performance check',
      'Written recommendations for next steps',
      'Priority scheduling for follow-up work',
    ],
  },
  {
    slug: 'emergency-garage-door-repair',
    title: 'Emergency Repair Service',
    shortTitle: 'Emergency',
    headline: 'Urgent Garage Door Repair When You Need It',
    summary:
      'Locked out or door stuck? Call us during business hours for urgent garage door assistance.',
    description:
      'When your garage door will not open, close, or stay on track, we prioritize urgent calls during business hours so you can get back in quickly and safely.',
    benefits: [
      'Priority scheduling during business hours',
      'Stuck or off-track door recovery',
      'Broken spring and cable emergencies',
      'Opener failures and lockout help',
    ],
    includes: [
      'Rapid phone triage',
      'Same-day service when available',
      'On-site safety assessment',
      'Clear repair options and pricing',
    ],
  },
  {
    slug: 'commercial-garage-doors',
    title: 'Commercial Services',
    shortTitle: 'Commercial',
    headline: 'Commercial Garage & Overhead Door Solutions',
    summary:
      'Heavy-duty commercial door solutions for warehouses, loading docks, storefronts, and industrial facilities.',
    description:
      'Businesses rely on doors that work every day. We service and install commercial overhead doors, dock equipment, and high-cycle systems with minimal disruption to operations.',
    benefits: [
      'Sectional and rolling steel door service',
      'High-cycle spring and operator repair',
      'Loading dock and warehouse systems',
      'Preventive maintenance for facilities teams',
    ],
    includes: [
      'Commercial site assessment',
      'Parts sourcing for major brands',
      'After-hours coordination when needed',
      'Maintenance plans for multi-door sites',
    ],
  },
  {
    slug: 'garage-door-panel-replacement',
    title: 'Panel Replacement',
    shortTitle: 'Panel Replacement',
    headline: 'Garage Door Panel Replacement',
    summary:
      'Damaged or dented panels? We replace individual panels to restore your door’s appearance and functionality.',
    description:
      'A dented or cracked panel does not always mean a full door replacement. We match panels by style and color whenever possible and restore smooth, safe operation.',
    benefits: [
      'Single-panel or multi-panel replacement',
      'Style and color matching support',
      'Hardware and weatherseal updates',
      'More affordable than full door replacement',
    ],
    includes: [
      'Damage assessment and quote',
      'Panel sourcing and installation',
      'Door balance check after install',
      'Finish inspection for fit and seal',
    ],
  },
] as const;

export type Service = (typeof services)[number];

export const faqs = [
  {
    q: 'What brands of garage doors do you service?',
    a: 'We work with all major garage door brands, including LiftMaster, Chamberlain, Craftsman, Genie, Wayne Dalton, Clopay, Amarr, and more. No matter the brand, our certified technicians can diagnose and repair it.',
  },
  {
    q: 'Do you offer warranties on your services?',
    a: 'Yes! We offer warranties on both our installation workmanship and the garage door products themselves. The manufacturer warranty covers the door and parts, while our service warranty covers the labor and installation quality.',
  },
  {
    q: 'How quickly can you repair my garage door?',
    a: 'Most repairs are completed within the same day during our business hours (Mon–Thu & Sun 8AM–6PM, Fri 8AM–2PM). Call us and we will schedule your service as quickly as possible. More complex replacements or installations may take a few hours depending on the scope.',
  },
  {
    q: 'What areas in California do you serve?',
    a: 'We have 10 locations across California including Palo Alto, San Marino, Manhattan Beach, Irvine, Beverly Hills, Carmel-By-The-Sea, Oakland, La Jolla, Roseville, and South Pasadena. We service these areas and surrounding communities.',
  },
  {
    q: 'How much does a garage door repair cost?',
    a: 'Repair costs vary depending on the issue. We provide free, no-obligation estimates before any work begins. Common repairs like spring replacement or opener fixes are very competitively priced. Call us for a personalized quote.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Absolutely! We offer free on-site estimates for all garage door services. Our technician will assess the situation, explain the options, and provide a transparent quote with no hidden fees.',
  },
] as const;

export function getLocation(slug: string) {
  return locations.find((loc) => loc.slug === slug);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function locationSchema(loc: Location, pageUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `AH Garage Door - ${loc.city}`,
    telephone: '+1-833-314-1418',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: 'CA',
      postalCode: loc.zip,
      addressCountry: 'US',
    },
    openingHours: businessHours.schema,
    priceRange: '$$',
    url: pageUrl ?? `${site.url}${loc.href}`,
  };
}

export function serviceSchema(service: Service, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      telephone: '+1-833-314-1418',
      url: site.url,
    },
    areaServed: 'California',
    url: pageUrl,
  };
}
