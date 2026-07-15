export const site = {
  name: 'Clare Connects',
  url: 'https://clareconnects.com',
  email: 'clare@clareconnects.com',
  phone: '', // CONTENT_TODO: confirm Clare's preferred public telephone number.
  responseTime: 'Clare aims to respond within two working days.',
  social: { facebook: '', instagram: '', linkedin: '' }, // CONTENT_TODO: confirm public profiles.
  portrait: '/assets/clare-portrait-placeholder.svg',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Home Utilities', to: '/home-utilities' },
  { label: 'Business Utilities', to: '/business-utilities' },
  { label: 'Connectors', to: '/connectors' },
  { label: 'Join the Opportunity', to: '/join' },
  { label: 'Contact Clare', to: '/contact' },
]

export const homeServices = [
  { title: 'Energy', text: 'Explore suitable gas and electricity options with a clear, personal conversation.', icon: 'Zap' },
  { title: 'Broadband', text: 'Compare connectivity options around the way your household actually uses them.', icon: 'Wifi' },
  { title: 'Mobile', text: 'Review mobile services alongside your other household essentials.', icon: 'Smartphone' },
  { title: 'Household review', text: 'Look across several essential services together, without juggling separate conversations.', icon: 'House' },
  { title: 'Smart living', text: 'Discuss practical energy-saving and smart-home options where available.', icon: 'Lightbulb' },
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

export const testimonials = [
  { quote: 'A real customer story will sit here, focusing on the clarity and care Clare brought to the conversation.', label: 'Customer testimonial placeholder' },
  { quote: 'This space is ready for an approved business client story once Clare has permission to publish it.', label: 'Business testimonial placeholder' },
]

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Clare Connects | Practical connections for home and business', description: 'One trusted point of contact for household utilities, business essentials and valuable opportunities.' },
  '/home-utilities': { title: 'Home Utilities | Clare Connects', description: 'A personal, joined-up way to review essential household services.' },
  '/business-utilities': { title: 'Business Utilities | Clare Connects', description: 'Simplify business utilities, renewals and trusted specialist introductions.' },
  '/connectors': { title: 'Clare Connectors | Clare Connects', description: 'Create useful introductions and become part of Clare’s trusted network.' },
  '/join': { title: 'Join the Opportunity | Clare Connects', description: 'Explore a flexible, relationship-led opportunity with Clare.' },
  '/contact': { title: 'Contact Clare | Clare Connects', description: 'Start a friendly, straightforward conversation with Clare.' },
  '/privacy': { title: 'Privacy | Clare Connects', description: 'How Clare Connects handles website and enquiry information.' },
  '/terms': { title: 'Terms | Clare Connects', description: 'Starter website terms for Clare Connects.' },
}
