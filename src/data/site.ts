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

export const locations = [
  { city: 'Palo Alto', address: '660 Stanford Shopping Center, Palo Alto, CA 94304' },
  { city: 'San Marino', address: '2500 Mission St, San Marino, CA 91108' },
  { city: 'Manhattan Beach', address: '3200 N Sepulveda Blvd, Manhattan Beach, CA 90266' },
  { city: 'Irvine', address: '670 Spectrum Center Dr, Irvine, CA 92618' },
  { city: 'Beverly Hills', address: '241 N Canon Dr, Beverly Hills, CA 90210' },
  { city: 'Carmel-By-The-Sea', address: 'Ocean Ave & Mission St, Carmel-By-The-Sea, CA 93921' },
  { city: 'Oakland', address: '4000 Piedmont Ave, Oakland, CA 94611' },
  { city: 'La Jolla', address: '8657 Villa La Jolla Dr, La Jolla, CA 92037' },
  { city: 'Roseville', address: '1151 Galleria Blvd, Roseville, CA 95678' },
  { city: 'South Pasadena', address: '1000 Mission St, South Pasadena, CA 91030' },
] as const;

export const reviews = [
  {
    initials: 'NM',
    name: 'Nancy M.',
    source: 'Google Review — Palo Alto',
    text: 'AH Garage Door was incredibly responsive. They came out the same day, diagnosed the issue with my spring, and had it fixed within an hour. Very professional team!',
  },
  {
    initials: 'RM',
    name: 'R. Miller',
    source: 'Google Review — Beverly Hills',
    text: "We had our entire garage door replaced and couldn't be happier. The team in Beverly Hills was punctual, clean, and the new door looks amazing. Fair pricing too!",
  },
  {
    initials: 'SK',
    name: 'Steven K.',
    source: 'Google Review — Irvine',
    text: "Second time using AH Garage Door. They've been excellent both times. Accurate estimates, timely arrival, and competitive prices for my new garage door installation.",
  },
  {
    initials: 'LT',
    name: 'Lisa T.',
    source: 'Google Review — La Jolla',
    text: 'Outstanding service from start to finish. My garage door was repaired quickly, on schedule, and their support team was incredibly helpful throughout.',
  },
  {
    initials: 'JD',
    name: 'John D.',
    source: 'Google Review — Oakland',
    text: "I'm impressed with AH Garage Door's reliability. They handled my opener repair with care, and the pricing was better than other companies I researched in the area.",
  },
  {
    initials: 'ER',
    name: 'Emily R.',
    source: 'Google Review — Manhattan Beach',
    text: 'AH Garage Door exceeded my expectations. Their team was responsive, and my new insulated door was installed perfectly. Will definitely use them again!',
  },
] as const;

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

export const schemaLocations = [
  { city: 'Palo Alto', address: '660 Stanford Shopping Center', zip: '94304' },
  { city: 'San Marino', address: '2500 Mission St', zip: '91108' },
  { city: 'Manhattan Beach', address: '3200 N Sepulveda Blvd', zip: '90266' },
  { city: 'Irvine', address: '670 Spectrum Center Dr', zip: '92618' },
  { city: 'Beverly Hills', address: '241 N Canon Dr', zip: '90210' },
  { city: 'Carmel-By-The-Sea', address: 'Ocean Ave & Mission St', zip: '93921' },
  { city: 'Oakland', address: '4000 Piedmont Ave', zip: '94611' },
  { city: 'La Jolla', address: '8657 Villa La Jolla Dr', zip: '92037' },
  { city: 'Roseville', address: '1151 Galleria Blvd', zip: '95678' },
  { city: 'South Pasadena', address: '1000 Mission St', zip: '91030' },
] as const;

export function locationSchema(loc: (typeof schemaLocations)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `AH Garage Door - ${loc.city}`,
    telephone: '+1-833-314-1418',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: 'CA',
      postalCode: loc.zip,
      addressCountry: 'US',
    },
    openingHours: businessHours.schema,
    priceRange: '$$',
    url: site.url,
  };
}
