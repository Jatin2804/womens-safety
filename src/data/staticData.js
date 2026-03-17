/**
 * Static data for Women's Safety & Community (India-focused)
 * No APIs - all content is defined here
 */

// Carousel slides (clickable → scroll to sections)
export const carouselSlides = [
  {
    id: 'safety',
    title: 'Safety Tips',
    subtitle: 'Stay informed, stay safe',
    icon: 'shield',
  },
  {
    id: 'community',
    title: 'Community Support',
    subtitle: 'Connect with others',
    icon: 'people',
  },
  {
    id: 'helplines',
    title: 'Helpline Numbers',
    subtitle: 'India emergency contacts',
    icon: 'phone',
  },
  {
    id: 'complaint',
    title: 'Raise Complaint',
    subtitle: 'Report safely & anonymously',
    icon: 'report',
  },
];

// Tab 1: Safety accordions
export const safetyAccordions = [
  {
    id: 'self-defense',
    title: 'Self-Defense Tips',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
    fallbackText: 'Self-defense awareness',
    content: [
      'Always share your live location with trusted contacts when traveling.',
      'Avoid isolated areas, especially after dark.',
      'Carry pepper spray or a personal safety alarm (check local laws).',
      'Use trusted transport apps (Ola, Uber) and share trip details.',
      'Learn basic self-defense moves; many NGOs offer free workshops in India.',
    ],
  },
  {
    id: 'travel',
    title: 'Travel Safety Tips',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
    fallbackText: 'Travel safety',
    content: [
      'Prefer well-lit, crowded routes.',
      'Keep emergency numbers on speed dial (1091, 112).',
      'Use women-only compartments in metros where available.',
      'Inform family/friends of your itinerary and check in regularly.',
      'Trust your instincts—if something feels wrong, leave or call for help.',
    ],
  },
  {
    id: 'night',
    title: 'Night Safety Tips',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=250&fit=crop',
    fallbackText: 'Night safety',
    content: [
      'Avoid walking alone at night; use cab/auto from verified apps.',
      'Stay in well-lit areas and near other people.',
      'Keep your phone charged and carry a power bank.',
      'Wear comfortable shoes in case you need to move quickly.',
      'Know nearby police stations and safe spots (24/7 shops, hospitals).',
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency Preparedness',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=250&fit=crop',
    fallbackText: 'Emergency preparedness',
    content: [
      'Save emergency contacts: 112 (national emergency), 1091 (women helpline), 100 (police).',
      'Enable SOS shortcuts on your phone (e.g., power button 5 times).',
      'Add trusted contacts in your phone’s emergency settings.',
      'Keep a small emergency kit: phone charger, whistle, pepper spray if legal.',
      'Know your location; use Google Maps to share live location quickly.',
    ],
  },
];

// Tab 2: Community accordions
export const communityAccordions = [
  {
    id: 'instagram',
    title: 'Instagram Pages',
    items: [
      { name: '@safecityindia', desc: 'Mapping harassment & building safer cities', link: '#' },
      { name: '@womenpower', desc: 'Empowerment & safety awareness', link: '#' },
      { name: '@sheroes_hangout', desc: 'Community for women by women', link: '#' },
      { name: '@breakthrough_ind', desc: 'Ending violence against women', link: '#' },
    ],
  },
  {
    id: 'youtube',
    title: 'YouTube Channels / Videos',
    items: [
      { name: 'Self-defense basics for women', desc: 'Short tutorials', embedId: 'placeholder', link: 'https://www.youtube.com' },
      { name: 'Women safety awareness campaigns', desc: 'NGO and government campaigns', embedId: 'placeholder', link: 'https://www.youtube.com' },
    ],
  },
  {
    id: 'other',
    title: 'Other Platforms',
    items: [
      { name: 'Facebook', desc: 'Women safety groups (e.g., Safe City India community)', link: '#' },
      { name: 'Twitter (X)', desc: 'Follow @NCWIndia, @MinistryWCD for updates', link: '#' },
      { name: 'NGOs', desc: 'Breakthrough, Safecity, Jagori, CREA - support & helplines', link: '#' },
    ],
  },
];

// Tab 3: Helplines (India only)
export const helplineAccordions = [
  {
    id: 'national',
    title: 'National Emergency & Women Helpline',
    items: [
      { name: 'Women Helpline', number: '1091', desc: '24/7 support for women in distress' },
      { name: 'National Emergency', number: '112', desc: 'Single number for police, fire, ambulance' },
      { name: 'Police', number: '100', desc: 'Police emergency' },
      { name: 'Ambulance', number: '102', desc: 'Medical emergency' },
    ],
  },
  {
    id: 'transport',
    title: 'Transport Safety',
    items: [
      { name: 'Uber Safety', link: 'https://www.uber.com/in/en/safety/', desc: 'In-app emergency button & trip sharing' },
      { name: 'Rapido Safety', link: 'https://www.rapido.bike/', desc: 'Share ride details with contacts' },
      { name: 'Ola Emergency', link: 'https://www.olacabs.com/', desc: 'Emergency support in Ola app' },
    ],
  },
];

// Quick Safety Hacks
export const quickSafetyHacks = [
  {
    id: 'fake-call',
    title: 'Fake Call Trick',
    desc: 'Set a reminder or use an app to simulate an incoming "urgent" call so you can excuse yourself from an uncomfortable situation.',
    icon: 'phone',
  },
  {
    id: 'sos',
    title: 'SOS Shortcuts',
    desc: 'On most Android: press power button 5 times. On iPhone: press side button 5 times or hold side + volume. Add emergency contacts in Settings.',
    icon: 'warning',
  },
  {
    id: 'emergency-settings',
    title: 'Phone Emergency Settings',
    desc: 'Enable "Emergency SOS" and add trusted contacts. Use "Share location" in Google Maps or WhatsApp for live location sharing.',
    icon: 'settings',
  },
  {
    id: 'trusted-contacts',
    title: 'Trusted Contacts',
    desc: 'Add family or close friends as emergency contacts. Use Google\'s Trusted Contacts app or similar to share location when needed.',
    icon: 'people',
  },
];
