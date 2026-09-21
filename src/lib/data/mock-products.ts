import { Product } from '@/types';

export const mockProducts: Product[] = [
  // Rings
  {
    id: 'gid://shopify/Product/1',
    handle: 'eternal-radiance-solitaire',
    title: 'Eternal Radiance Solitaire',
    description: 'A timeless expression of eternal love. The Eternal Radiance Solitaire features a breathtaking round lab-grown diamond set in 18k white gold, capturing the essence of pure light and modern sophistication.',
    descriptionHtml: '<p>A timeless expression of eternal love. The <strong>Eternal Radiance Solitaire</strong> features a breathtaking round lab-grown diamond set in 18k white gold, capturing the essence of pure light and modern sophistication.</p>',
    productType: 'Ring',
    vendor: 'SERONAA',
    images: [{ id: 'img1', url: '/images/products/eternal-radiance-solitaire-1.jpg', altText: 'Eternal Radiance Solitaire', width: 1200, height: 1500 }],
    price: 4200,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v1', title: 'Size 6 / White Gold', price: 4200, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: '6' }, { name: 'Metal', value: 'White Gold' }] },
      { id: 'v2', title: 'Size 7 / White Gold', price: 4200, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: '7' }, { name: 'Metal', value: 'White Gold' }] }
    ],
    options: [
      { id: 'opt1', name: 'Size', values: ['6', '7', '8'] },
      { id: 'opt2', name: 'Metal', values: ['White Gold', 'Yellow Gold', 'Rose Gold', 'Platinum'] }
    ],
    tags: ['Ring', 'round', 'white-gold'],
    diamondShape: 'round',
    metal: 'white-gold',
    collections: ['signature', 'bridal']
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'aurora-halo-ring',
    title: 'Aurora Halo Ring',
    description: 'Inspired by the celestial lights, the Aurora Halo Ring encircles a brilliant oval lab-grown diamond with a shimmering halo of pavé stones. Set in romantic 18k rose gold for a truly majestic aura.',
    descriptionHtml: '<p>Inspired by the celestial lights, the <strong>Aurora Halo Ring</strong> encircles a brilliant oval lab-grown diamond with a shimmering halo of pavé stones. Set in romantic 18k rose gold for a truly majestic aura.</p>',
    productType: 'Ring',
    vendor: 'SERONAA',
    images: [{ id: 'img2', url: '/images/products/aurora-halo-ring-1.jpg', altText: 'Aurora Halo Ring', width: 1200, height: 1500 }],
    price: 5800,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v3', title: 'Size 6 / Rose Gold', price: 5800, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: '6' }, { name: 'Metal', value: 'Rose Gold' }] }
    ],
    options: [
      { id: 'opt3', name: 'Size', values: ['6', '7', '8'] },
      { id: 'opt4', name: 'Metal', values: ['Rose Gold'] }
    ],
    tags: ['Ring', 'oval', 'rose-gold'],
    diamondShape: 'oval',
    metal: 'rose-gold',
    collections: ['signature', 'new-arrivals']
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'celestial-three-stone-ring',
    title: 'Celestial Three-Stone Ring',
    description: 'Representing your past, present, and future. A magnificent emerald-cut lab-grown diamond is flanked by two perfectly proportioned side stones in a solid platinum setting.',
    descriptionHtml: '<p>Representing your past, present, and future. A magnificent emerald-cut lab-grown diamond is flanked by two perfectly proportioned side stones in a solid platinum setting.</p>',
    productType: 'Ring',
    vendor: 'SERONAA',
    images: [{ id: 'img3', url: '/images/products/celestial-three-stone-ring-1.jpg', altText: 'Celestial Three-Stone Ring', width: 1200, height: 1500 }],
    price: 8500,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v4', title: 'Size 7 / Platinum', price: 8500, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: '7' }, { name: 'Metal', value: 'Platinum' }] }
    ],
    options: [
      { id: 'opt5', name: 'Size', values: ['6', '7', '8'] },
      { id: 'opt6', name: 'Metal', values: ['Platinum'] }
    ],
    tags: ['Ring', 'emerald', 'platinum'],
    diamondShape: 'emerald',
    metal: 'platinum',
    collections: ['bridal', 'celestial']
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'whisper-band',
    title: 'Whisper Band',
    description: 'Delicate yet profound, the Whisper Band features a continuous row of meticulously set round lab-grown diamonds. Crafted in glowing 18k yellow gold for everyday luxury.',
    descriptionHtml: '<p>Delicate yet profound, the <strong>Whisper Band</strong> features a continuous row of meticulously set round lab-grown diamonds. Crafted in glowing 18k yellow gold for everyday luxury.</p>',
    productType: 'Ring',
    vendor: 'SERONAA',
    images: [{ id: 'img4', url: '/images/products/whisper-band-1.jpg', altText: 'Whisper Band', width: 1200, height: 1500 }],
    price: 2400,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v5', title: 'Size 6 / Yellow Gold', price: 2400, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: '6' }, { name: 'Metal', value: 'Yellow Gold' }] }
    ],
    options: [
      { id: 'opt7', name: 'Size', values: ['6', '7', '8'] },
      { id: 'opt8', name: 'Metal', values: ['Yellow Gold'] }
    ],
    tags: ['Ring', 'round', 'yellow-gold'],
    diamondShape: 'round',
    metal: 'yellow-gold',
    collections: ['bridal']
  },
  // Earrings
  {
    id: 'gid://shopify/Product/5',
    handle: 'luminous-drop-earrings',
    title: 'Luminous Drop Earrings',
    description: 'Suspended in perfect harmony, these exquisite pear-shaped lab-grown diamonds catch the light from every angle. Set in 18k white gold for a timeless, elegant drape.',
    descriptionHtml: '<p>Suspended in perfect harmony, these exquisite pear-shaped lab-grown diamonds catch the light from every angle. Set in 18k white gold for a timeless, elegant drape.</p>',
    productType: 'Earring',
    vendor: 'SERONAA',
    images: [{ id: 'img5', url: '/images/products/luminous-drop-earrings-1.jpg', altText: 'Luminous Drop Earrings', width: 1200, height: 1500 }],
    price: 3600,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v6', title: 'One Size / White Gold', price: 3600, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'One Size' }, { name: 'Metal', value: 'White Gold' }] }
    ],
    options: [
      { id: 'opt9', name: 'Size', values: ['One Size'] },
      { id: 'opt10', name: 'Metal', values: ['White Gold'] }
    ],
    tags: ['Earring', 'pear', 'white-gold'],
    diamondShape: 'pear',
    metal: 'white-gold',
    collections: ['signature']
  },
  {
    id: 'gid://shopify/Product/6',
    handle: 'constellation-studs',
    title: 'Constellation Studs',
    description: 'The foundation of any fine jewellery collection. Brilliant round lab-grown diamonds held securely in our signature platinum basket setting.',
    descriptionHtml: '<p>The foundation of any fine jewellery collection. Brilliant round lab-grown diamonds held securely in our signature platinum basket setting.</p>',
    productType: 'Earring',
    vendor: 'SERONAA',
    images: [{ id: 'img6', url: '/images/products/constellation-studs-1.jpg', altText: 'Constellation Studs', width: 1200, height: 1500 }],
    price: 2800,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v7', title: 'One Size / Platinum', price: 2800, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'One Size' }, { name: 'Metal', value: 'Platinum' }] }
    ],
    options: [
      { id: 'opt11', name: 'Size', values: ['One Size'] },
      { id: 'opt12', name: 'Metal', values: ['Platinum'] }
    ],
    tags: ['Earring', 'round', 'platinum'],
    diamondShape: 'round',
    metal: 'platinum',
    collections: ['signature', 'celestial']
  },
  {
    id: 'gid://shopify/Product/7',
    handle: 'cascade-chandelier-earrings',
    title: 'Cascade Chandelier Earrings',
    description: 'A masterpiece of movement and light. Intricately arranged marquise lab-grown diamonds flow like liquid fire, set gracefully in 18k rose gold.',
    descriptionHtml: '<p>A masterpiece of movement and light. Intricately arranged marquise lab-grown diamonds flow like liquid fire, set gracefully in 18k rose gold.</p>',
    productType: 'Earring',
    vendor: 'SERONAA',
    images: [{ id: 'img7', url: '/images/products/cascade-chandelier-earrings-1.jpg', altText: 'Cascade Chandelier Earrings', width: 1200, height: 1500 }],
    price: 6200,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v8', title: 'One Size / Rose Gold', price: 6200, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'One Size' }, { name: 'Metal', value: 'Rose Gold' }] }
    ],
    options: [
      { id: 'opt13', name: 'Size', values: ['One Size'] },
      { id: 'opt14', name: 'Metal', values: ['Rose Gold'] }
    ],
    tags: ['Earring', 'marquise', 'rose-gold'],
    diamondShape: 'marquise',
    metal: 'rose-gold',
    collections: ['new-arrivals', 'celestial']
  },
  // Necklaces
  {
    id: 'gid://shopify/Product/8',
    handle: 'soleil-pendant',
    title: 'Soleil Pendant',
    description: 'Radiating warmth and brilliance. The Soleil Pendant centers around a magnificent cushion-cut lab-grown diamond, framed in 18k yellow gold for a modern, sunlit glow.',
    descriptionHtml: '<p>Radiating warmth and brilliance. The <strong>Soleil Pendant</strong> centers around a magnificent cushion-cut lab-grown diamond, framed in 18k yellow gold for a modern, sunlit glow.</p>',
    productType: 'Necklace',
    vendor: 'SERONAA',
    images: [{ id: 'img8', url: '/images/products/soleil-pendant-1.jpg', altText: 'Soleil Pendant', width: 1200, height: 1500 }],
    price: 4800,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v9', title: '18" / Yellow Gold', price: 4800, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Length', value: '18"' }, { name: 'Metal', value: 'Yellow Gold' }] }
    ],
    options: [
      { id: 'opt15', name: 'Length', values: ['16"', '18"', '20"'] },
      { id: 'opt16', name: 'Metal', values: ['Yellow Gold'] }
    ],
    tags: ['Necklace', 'cushion', 'yellow-gold'],
    diamondShape: 'cushion',
    metal: 'yellow-gold',
    collections: ['signature']
  },
  {
    id: 'gid://shopify/Product/9',
    handle: 'infinite-grace-necklace',
    title: 'Infinite Grace Necklace',
    description: 'A study in elegant restraint. An exceptional oval lab-grown diamond rests delicately on a fine 18k white gold chain, offering understated luxury for the most memorable occasions.',
    descriptionHtml: '<p>A study in elegant restraint. An exceptional oval lab-grown diamond rests delicately on a fine 18k white gold chain, offering understated luxury for the most memorable occasions.</p>',
    productType: 'Necklace',
    vendor: 'SERONAA',
    images: [{ id: 'img9', url: '/images/products/infinite-grace-necklace-1.jpg', altText: 'Infinite Grace Necklace', width: 1200, height: 1500 }],
    price: 7200,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v10', title: '16" / White Gold', price: 7200, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Length', value: '16"' }, { name: 'Metal', value: 'White Gold' }] }
    ],
    options: [
      { id: 'opt17', name: 'Length', values: ['16"', '18"'] },
      { id: 'opt18', name: 'Metal', values: ['White Gold'] }
    ],
    tags: ['Necklace', 'oval', 'white-gold'],
    diamondShape: 'oval',
    metal: 'white-gold',
    collections: ['bridal']
  },
  {
    id: 'gid://shopify/Product/10',
    handle: 'ethereal-choker',
    title: 'Ethereal Choker',
    description: 'A striking statement piece combining classic glamour with contemporary edge. Featuring a spectacular princess-cut lab-grown diamond integrated into a woven platinum collar.',
    descriptionHtml: '<p>A striking statement piece combining classic glamour with contemporary edge. Featuring a spectacular princess-cut lab-grown diamond integrated into a woven platinum collar.</p>',
    productType: 'Necklace',
    vendor: 'SERONAA',
    images: [{ id: 'img10', url: '/images/products/ethereal-choker-1.jpg', altText: 'Ethereal Choker', width: 1200, height: 1500 }],
    price: 9500,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v11', title: '14" / Platinum', price: 9500, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Length', value: '14"' }, { name: 'Metal', value: 'Platinum' }] }
    ],
    options: [
      { id: 'opt19', name: 'Length', values: ['14"'] },
      { id: 'opt20', name: 'Metal', values: ['Platinum'] }
    ],
    tags: ['Necklace', 'princess', 'platinum'],
    diamondShape: 'princess',
    metal: 'platinum',
    collections: ['new-arrivals', 'celestial']
  },
  // Bracelets
  {
    id: 'gid://shopify/Product/11',
    handle: 'riviere-bracelet',
    title: 'Rivière Bracelet',
    description: 'The pinnacle of fine jewellery craftsmanship. A seamless river of masterfully matched round lab-grown diamonds, meticulously set in 18k white gold for a fluid, continuous display of brilliance.',
    descriptionHtml: '<p>The pinnacle of fine jewellery craftsmanship. A seamless river of masterfully matched round lab-grown diamonds, meticulously set in 18k white gold for a fluid, continuous display of brilliance.</p>',
    productType: 'Bracelet',
    vendor: 'SERONAA',
    images: [{ id: 'img11', url: '/images/products/riviere-bracelet-1.jpg', altText: 'Rivière Bracelet', width: 1200, height: 1500 }],
    price: 12000,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v12', title: '7" / White Gold', price: 12000, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Length', value: '7"' }, { name: 'Metal', value: 'White Gold' }] }
    ],
    options: [
      { id: 'opt21', name: 'Length', values: ['6.5"', '7"', '7.5"'] },
      { id: 'opt22', name: 'Metal', values: ['White Gold'] }
    ],
    tags: ['Bracelet', 'round', 'white-gold'],
    diamondShape: 'round',
    metal: 'white-gold',
    collections: ['signature']
  },
  {
    id: 'gid://shopify/Product/12',
    handle: 'serenity-bangle',
    title: 'Serenity Bangle',
    description: 'A modern icon. This architectural 18k rose gold bangle features a singular, imposing radiant-cut lab-grown diamond, balancing bold lines with exquisite refinement.',
    descriptionHtml: '<p>A modern icon. This architectural 18k rose gold bangle features a singular, imposing radiant-cut lab-grown diamond, balancing bold lines with exquisite refinement.</p>',
    productType: 'Bracelet',
    vendor: 'SERONAA',
    images: [{ id: 'img12', url: '/images/products/serenity-bangle-1.jpg', altText: 'Serenity Bangle', width: 1200, height: 1500 }],
    price: 5400,
    compareAtPrice: null,
    availableForSale: true,
    variants: [
      { id: 'v13', title: 'Medium / Rose Gold', price: 5400, compareAtPrice: null, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'Medium' }, { name: 'Metal', value: 'Rose Gold' }] }
    ],
    options: [
      { id: 'opt23', name: 'Size', values: ['Small', 'Medium', 'Large'] },
      { id: 'opt24', name: 'Metal', values: ['Rose Gold'] }
    ],
    tags: ['Bracelet', 'radiant', 'rose-gold'],
    diamondShape: 'radiant',
    metal: 'rose-gold',
    collections: ['new-arrivals']
  }
];
