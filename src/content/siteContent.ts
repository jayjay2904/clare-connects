const assetBase = window.location.hostname.endsWith('github.io') ? '/clare-connects/' : '/'
const asset = (fileName: string) => `${assetBase}assets/${fileName}`

export const site = {
  name: 'Clare Connects',
  url: 'https://clareconnects.com',
  email: 'clare@clareconnects.com',
  phone: '',
  whatsapp: '',
  tradingName: '',
  legalStatus: '',
  complaintsProcedure: '',
  responseTime: 'Clare aims to respond within two working days.',
  social: { facebook: '', instagram: '', linkedin: 'https://www.linkedin.com/in/clareconnects/' },
  serviceAreas: ['Staffordshire', 'Stoke-on-Trent', 'Newcastle-under-Lyme', 'Stone', 'Stafford'],
  logo: asset('clare-connects-logo.png'),
  portrait: asset('clare-headshot-studio.jpg'),
  portraitWarm: asset('clare-headshot-warm.jpg'),
  teamImage: asset('clare-connects-team.png'),
  obLabsLogo: asset('ob-labs-logo.svg'),
  links: {
    opportunity: 'https://uw.partners/clare.and.john/partner/join',
    homeUtilities: 'https://uw.partners/clare.and.john/join',
    teamPresentation: 'https://earnuw.co.uk',
    connectorRegistration: 'https://uw.partners/clare.and.john/connect',
    connectorExplainer: 'https://vimeo.com/1200796333',
  },
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Home Utilities', to: '/home-utilities' },
  { label: 'Business Utilities', to: '/business-utilities' },
  { label: 'Become a Connector', to: '/connectors' },
  { label: 'Work With Clare', to: '/join' },
  { label: 'Contact Clare', to: '/contact' },
]

export const homeServices = [
  { title: 'Energy', text: 'Explore suitable gas and electricity options with a clear, personal conversation.', icon: 'Zap' },
  { title: 'Broadband', text: 'Compare connectivity options around the way your household actually uses them.', icon: 'Wifi' },
  { title: 'Mobile', text: 'Review mobile services alongside your other household essentials.', icon: 'Smartphone' },
  { title: 'Household review', text: 'Look across several essential services together, without juggling separate conversations.', icon: 'House' },
  { title: 'Insurance & protection', text: 'Explore home insurance, boiler cover and income protection options where available.', icon: 'ShieldCheck' },
  { title: 'Trusted introductions', text: 'Access relevant specialists through Clare’s network when your needs go further.', icon: 'Handshake' },
]

export const businessServices = [
  { title: 'Energy & water', text: 'Commercial electricity, gas and water conversations, subject to availability.', icon: 'Factory' },
  { title: 'Connectivity', text: 'Business broadband, telecoms and mobile options shaped around your operation.', icon: 'Radio' },
  { title: 'Payments', text: 'Introductions to merchant and payment solutions where they are a useful fit.', icon: 'CreditCard' },
  { title: 'Efficiency', text: 'Explore LED lighting, consumption reviews and practical efficiency opportunities.', icon: 'Gauge' },
  { title: 'Renewables', text: 'Trusted introductions for solar, renewable energy and EV charging solutions.', icon: 'Leaf' },
  { title: 'Renewal planning', text: 'Bring contracts and renewal dates into one straightforward conversation.', icon: 'CalendarClock' },
]

export const faqs = {
  home: [
    ['Is Clare Connects a utility supplier?', 'No. Clare helps you compare and arrange services with established providers, giving you one personal point of contact.'],
    ['Can Clare guarantee savings?', 'No. Every household is different. Clare will help you explore suitable options without promising a particular saving.'],
    ['Can I review more than one service?', 'Yes. A joined-up review can cover several household essentials, depending on what is available and relevant.'],
  ],
  business: [
    ['Which organisations can Clare help?', 'Clare welcomes conversations with SMEs, offices, retailers, hospitality businesses, community venues and property businesses.'],
    ['Does Clare install equipment?', 'Clare coordinates conversations and makes trusted introductions. Any installation or supply is carried out by the relevant provider or specialist.'],
    ['When should we discuss renewals?', 'Starting before a contract ends gives more time to understand your position and explore suitable next steps.'],
  ],
  join: [
    ['Do I need sales experience?', 'Not necessarily. Listening well, building trust and being willing to learn are more important starting points.'],
    ['Is an income guaranteed?', 'No. Outcomes vary and depend on individual effort, circumstances, customers and applicable programme terms.'],
    ['What happens first?', 'You will have an open conversation with Clare about your goals, availability and whether the opportunity feels suitable.'],
  ],
}

export type Testimonial = {
  quote: string
  service: string
  firstName?: string
  surnameInitial?: string
  business?: string
  location?: string
}

export const testimonials: Testimonial[] = [
  { quote: 'Clare is knowledgeable, approachable, and genuinely cares about finding the right solution for every business. Her friendly, professional approach makes the whole process straightforward and stress-free.', service: 'Business Utilities' },
  { quote: 'Clare takes the time to explain everything clearly and supports her customers with genuine care and patience. She goes above and beyond to help, making even complex utility decisions feel simple.', service: 'Home Utilities' },
]

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Clare Connects | Home and business utilities made simpler', description: 'A friendly point of contact for household services, business utilities and trusted introductions across Staffordshire.' },
  '/home-utilities': { title: 'Home Utilities in Staffordshire | Clare Connects', description: 'Review household bills and essential services with personal support from Clare Connects.' },
  '/business-utilities': { title: 'Business Utilities in Staffordshire | Clare Connects', description: 'Discuss business utilities, renewals and trusted specialist introductions with Clare.' },
  '/connectors': { title: 'Become a Connector | Clare Connects', description: 'Learn how thoughtful referrals work and become part of Clare’s trusted Connector network.' },
  '/join': { title: 'Work With Clare | Clare Connects', description: 'Explore a flexible, relationship-led business opportunity with Clare and her supportive team.' },
  '/contact': { title: 'Contact Clare | Clare Connects Staffordshire', description: 'Ask Clare about home utilities, business services, referrals or working with her.' },
  '/privacy': { title: 'Privacy | Clare Connects', description: 'How Clare Connects handles website and enquiry information.' },
  '/cookies': { title: 'Cookies | Clare Connects', description: 'How the Clare Connects website uses essential browser storage.' },
  '/terms': { title: 'Website Terms | Clare Connects', description: 'Terms for using the Clare Connects website and information about Clare’s role.' },
}
