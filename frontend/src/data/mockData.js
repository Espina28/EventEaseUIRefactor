// Mock data for EventEase application
// This file contains all the sample data used throughout the application

// Event categories data - can be easily modified here
export const eventCategories = [
  {
    id: 1,
    name: 'Weddings',
    image: 'https://images.unsplash.com/flagged/photo-1566155603908-2bbd3e6124cc',
    description: 'Create your perfect wedding day with our premium packages',
    shortDesc: 'Beautiful wedding ceremonies'
  },
  {
    id: 2,
    name: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c',
    description: 'Professional corporate events that impress and inspire',
    shortDesc: 'Professional business gatherings'
  },
  {
    id: 3,
    name: 'Birthday Celebrations',
    image: 'https://images.unsplash.com/photo-1482731910308-31e96e5d1d28',
    description: 'Unforgettable birthday celebrations for all ages',
    shortDesc: 'Memorable birthday parties'
  },
  {
    id: 4,
    name: 'Debuts',
    image: 'https://images.unsplash.com/photo-1639135689749-f8df3126b467',
    description: 'Elegant debut parties to mark special milestones',
    shortDesc: 'Elegant coming-of-age celebrations'
  },
  {
    id: 5,
    name: 'Premium Catering',
    image: 'https://images.pexels.com/photos/4705928/pexels-photo-4705928.jpeg',
    description: 'Exquisite culinary experiences for your events',
    shortDesc: 'Gourmet dining experiences'
  },
  {
    id: 6,
    name: 'Event Planning',
    image: 'https://images.unsplash.com/photo-1648297346835-8a7f7dd44528',
    description: 'Complete event planning from concept to execution',
    shortDesc: 'Full-service event coordination'
  }
];

// Wedding packages data - extracted from the provided image
export const weddingPackages = [
  {
    id: 1,
    name: 'Cherry Blossom',
    price: '300K',
    originalPrice: '350K',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    services: [
      'Catering',
      'Decorations',
      'Bride Bean Rentals',
      'Groom Suit Rentals',
      'Bridal Entourage gown, suit and flowers',
      '1 jar Wedding Cake',
      'Wine for Toasting',
      'Invitations & Souvenirs',
      'Bridal Car',
      'Sounds & Lights',
      'Professional Host',
      'Wedding Coordinators',
      'Wedding Makeup',
      'Photobooth',
      'Photography (PreNup & Wedding day)',
      'Videography (Wedding day Only)'
    ],
    description: 'Perfect for intimate weddings with essential services',
    terms: 'Package valid for 6 months. 50% deposit required upon booking.',
    popular: false
  },
  {
    id: 2,
    name: 'Tulip',
    price: '450K',
    originalPrice: '500K',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92',
    services: [
      'Catering',
      'Decorations',
      'Bridal Gown (Owned)',
      'Groom Suit (Owned)',
      'Bridal Entourage gown, suit and flowers',
      '3 tier Wedding Cake and Cupcakes',
      'Wine for Toasting',
      'Invitations & Souvenirs',
      'Bridal Car',
      'Van Service',
      'Sounds & Lights',
      'Professional Host',
      'Doves',
      'Wedding Coordinators',
      'Wedding Makeup',
      'Photobooth',
      'Photography & Videography (PreNup & Wedding day)',
      'SDE Video',
      '1 Lechon',
      'Mobile Bar',
      'Dessert Station'
    ],
    description: 'Most comprehensive package with premium services',
    terms: 'Package valid for 8 months. 40% deposit required upon booking.',
    popular: true
  },
  {
    id: 3,
    name: 'Rose',
    price: '350K',
    originalPrice: '400K',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a745',
    services: [
      'Catering',
      'Decorations',
      'Bridal Gown (1st Use)',
      'Groom Suit (1st Use)',
      'Bridal Entourage gown, suit and flowers',
      '2 tier Wedding Cake',
      'Wine for Toasting',
      'Invitations & Souvenirs',
      'Bridal Car',
      'Van Service',
      'Sounds & Lights',
      'Professional Host',
      'Doves',
      'Wedding Coordinators',
      'Wedding Makeup',
      'Photobooth',
      'Photography & Videography (PreNup & Wedding day)'
    ],
    description: 'Balanced package with excellent value for money',
    terms: 'Package valid for 7 months. 45% deposit required upon booking.',
    popular: false
  }
];

// Sample gallery images for event detail pages
export const eventGalleries = {
  1: [ // Weddings
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92',
    'https://images.unsplash.com/photo-1583939003579-730e3918a745',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866'
  ],
  2: [ // Corporate Events
    'https://images.unsplash.com/photo-1576085898323-218337e3e43c',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    'https://images.unsplash.com/photo-1559223607-b4d0555ae227',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329'
  ],
  3: [ // Birthday Celebrations
    'https://images.unsplash.com/photo-1482731910308-31e96e5d1d28',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  ],
  4: [ // Debuts
    'https://images.unsplash.com/photo-1639135689749-f8df3126b467',
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
  ],
  5: [ // Premium Catering
    'https://images.pexels.com/photos/4705928/pexels-photo-4705928.jpeg',
    'https://images.unsplash.com/photo-1577303935007-0d306ee4f77b',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'
  ],
  6: [ // Event Planning
    'https://images.unsplash.com/photo-1648297346835-8a7f7dd44528',
    'https://images.unsplash.com/photo-1511578314322-379afb476865',
    'https://images.unsplash.com/photo-1485518994577-6cd6a9a7eb95',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678'
  ]
};

// Company highlights data
export const companyHighlights = [
  { number: '500+', label: 'Events Completed', icon: '🎉' },
  { number: '1000+', label: 'Happy Clients', icon: '😊' },
  { number: '50+', label: 'Venue Partners', icon: '🏛️' },
  { number: '24/7', label: 'Support Available', icon: '📞' }
];

// Why choose us data
export const whyChooseUs = [
  { 
    icon: '👑', 
    title: 'Luxury Experience', 
    description: 'Premium venues and world-class service for your special moments' 
  },
  { 
    icon: '🎯', 
    title: 'Personalized Planning', 
    description: 'Tailored event planning that matches your unique vision and style' 
  },
  { 
    icon: '🤝', 
    title: 'Trusted Partners', 
    description: 'Exclusive partnerships with top venues and premium service providers' 
  },
  { 
    icon: '⚡', 
    title: 'Seamless Execution', 
    description: 'Flawless event coordination ensuring everything runs perfectly' 
  }
];