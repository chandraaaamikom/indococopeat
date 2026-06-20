// Product catalog data
// EDITABLE — Update product details, specifications, and images as needed

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  specifications: Record<string, string>;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'cocopeat-polybag',
    name: 'Cocopeat Polybag',
    slug: 'cocopeat-polybag',
    category: 'Cocopeat',
    description:
      'Cocopeat polybag is a polybag filled with cocopeat, used in agriculture, horticulture, hydroponic media, and as a substitute for soil media. Our cocopeat polybag offers excellent water retention, proper aeration, and optimal pH levels for plant growth.',
    image: '/images/products/cocopeat-polybag.jpg',
    specifications: {
      Size: '30 x 40 x 70 cm',
      Weight: '30 kg',
      'Compression Ratio': '2:1',
      'Electrical Conductivity': '4 - 5 ms/cm',
      pH: '5.2 to 6.8',
      Expansion: '150 liters',
      Moisture: '37 - 40%',
      'Load Ability': '22.5 tons',
      'Container Capacity': '750 bags in 40ft HC Container',
    },
    features: [
      'High water retention',
      'Optimal pH balance',
      'Low EC levels',
      'Compressed for efficient shipping',
      'Suitable for horticulture and hydroponics',
    ],
  },
  {
    id: 'cocofiber',
    name: 'Cocofiber',
    slug: 'cocofiber',
    category: 'Fiber',
    description:
      'Natural fiber extracted from coconut husk, used in horticulture and hydroponic systems because it retains moisture, provides aeration, and has good drainage. Our cocofiber is carefully processed to maintain fiber integrity and minimize dust content.',
    image: '/images/products/cocofiber.jpg',
    specifications: {
      'Fibre Length': '5 - 20 cm',
      'Load Ability': '18 - 18.5 tons in 40ft HC Container',
      Impurities: '3% max',
      Dust: '3% max',
      Moisture: '15 - 20%',
      Packing: '180 bales in 40ft HC Container',
    },
    features: [
      'Natural coconut fiber',
      'Excellent moisture retention',
      'Good aeration properties',
      'Minimal dust content',
      'Versatile applications',
    ],
  },
  {
    id: 'coconut-coir-rope',
    name: 'Coconut Coir Rope',
    slug: 'coconut-coir-rope',
    category: 'Fiber',
    description:
      'Coconut fiber rope made from coconut husk fiber. Our coir rope is strong, durable, and biodegradable — ideal for agricultural, horticultural, and landscaping applications where natural fiber solutions are preferred.',
    image: '/images/products/coconut-coir-rope.jpg',
    specifications: {
      Diameter: '6 mm',
      Weight: '10 kg / Roll',
      Length: '70 Meter / Kg',
      'Load Ability': '800 Rolls in 40ft HC Container',
    },
    features: [
      '100% natural coconut fiber',
      'Strong and durable',
      'Biodegradable',
      'UV resistant',
      'Multiple diameter options available',
    ],
  },
  {
    id: 'cocopeat-brick',
    name: 'Cocopeat Brick',
    slug: 'cocopeat-brick',
    category: 'Cocopeat',
    description:
      'Cocopeat is a byproduct from coir fiber processing. It is natural, renewable, and organic, used for gardening, horticulture, and hydroponics. Our cocopeat bricks are sun-dried and compressed for maximum expansion and easy shipping.',
    image: '/images/products/cocopeat-brick.jpg',
    specifications: {
      Size: '30 x 30 x 13 cm',
      Weight: '5 kg',
      'Compression Ratio': '5:1',
      'Electrical Conductivity': '4 - 5 ms/cm',
      pH: '5.2 to 6.8',
      Expansion: '70 Liters',
      Moisture: '15 - 20%',
      'Load Ability': '22.5 tons in 40ft HC Container',
      'Pieces per Wrapping': '4',
      Drying: 'Sun Drying',
    },
    features: [
      'High compression ratio',
      'Sun dried naturally',
      'Excellent water absorption',
      'Lightweight and compact',
      'Eco-friendly packaging',
    ],
  },
];

export const productCategories: string[] = ['All', 'Cocopeat', 'Fiber'];
