// Product catalog data
// INDOCOCOPEAT — CV LOKA ADI JAYA
// EDITABLE - Update product details, specifications, and images as needed

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
      'Cocopeat Polybag is a ready-to-use growing media product filled with processed cocopeat. It is suitable for agriculture, horticulture, hydroponic cultivation, and soil substitute applications.',
    image: '/images/products/cocopeat-polybag.png',
    specifications: {
      Expansion: '150 liters',
      Weight: '30 kg',
      Moisture: '37 - 40%',
      'Particle Size': '0.3 mm',
      Size: '30 x 40 x 70 cm',
      'Compression Ratio': '2 : 1',
      'Electrical Conductivity': '4 - 5 mS/cm',
      pH: '5.2 to 6.8',
      'Load Ability': '22.5 tons in 40 ft HC Container',
      'Packing Reference': '750 bags in 40 ft HC Container',
    },
    features: [
      '150 liter expansion',
      '30 kg polybag',
      '37 - 40% moisture',
      'Hydroponic media',
      '22.5 tons load ability',
    ],
  },
  {
    id: 'cocopeat-block',
    name: 'Cocopeat Block',
    slug: 'cocopeat-block',
    category: 'Cocopeat',
    description:
      'Cocopeat Block is a compressed cocopeat product made from coir pith. It is natural, renewable, and widely used for gardening, horticulture, hydroponics, seedling media, and sustainable growing media applications.',
    image: '/images/products/cocopeat-block.png',
    specifications: {
      Size: '30 x 30 x 13 cm',
      Weight: '5 kg',
      'Compression Ratio': '5 : 1',
      'Electrical Conductivity': '4 - 5 mS/cm',
      pH: '5.2 to 6.8',
      Expansion: '70 liters',
      Moisture: '15 - 20%',
      'Load Ability': '22.5 tons in 40 ft HC Container',
      'Pieces per Wrapping': '4 pcs',
      Drying: 'Sun Drying',
      'Packing Reference': '5 kg x 4,800 pcs',
    },
    features: [
      '5 kg block',
      '70 liter expansion',
      '5 : 1 compression',
      'Sun drying',
      '4 pieces per wrapping',
    ],
  },
  {
    id: 'cocofiber',
    name: 'Cocofiber',
    slug: 'cocofiber',
    category: 'Fiber',
    description:
      'Cocofiber is a natural coconut fiber extracted from coconut husks. It is commonly used for horticulture, hydroponic systems, growing media, mattress filling, erosion control, and other natural fiber applications.',
    image: '/images/products/cocofiber.png',
    specifications: {
      'Bale Weight': '100 - 115 kg',
      Moisture: '15 - 17%',
      'Fibre Length': '5 - 20 cm',
      Impurities: 'Max 3%',
      Dust: 'Max 3%',
      Packing: 'Bale packing',
      'Container Load Reference': '18 - 18.5 tons in 40 ft HC Container',
      'PPT Packing Reference': '180 bales in 40 ft HC Container',
    },
    features: [
      'Natural coconut fiber',
      '100 - 115 kg bale',
      '15 - 17% moisture',
      '5 - 20 cm fiber length',
      '18 - 18.5 tons load',
    ],
  },
  {
    id: 'coconut-coir-rope',
    name: 'Coconut Coir Rope',
    slug: 'coconut-coir-rope',
    category: 'Rope',
    description:
      'Coconut Coir Rope is a natural rope made from coconut husk fiber. It is suitable for agriculture, horticulture, erosion control, plant support, landscaping, craft, and industrial applications.',
    image: '/images/products/coco-rope.png',
    specifications: {
      Diameter: '6 mm',
      Weight: '10 kg / roll',
      Length: '70 meter / kg',
      'Load Ability': '800 rolls in 40 ft HC Container',
      Material: 'Natural coconut fiber',
    },
    features: [
      '6 mm diameter',
      '10 kg per roll',
      '70 meter per kg',
      'Natural coir fiber',
      '800 rolls per 40 ft HC',
    ],
  },
  {
    id: 'shisha-hookah-briquettes',
    name: 'Shisha Hookah Briquettes',
    slug: 'shisha-hookah-briquettes',
    category: 'Briquettes',
    description:
      'Shisha Hookah Briquettes are coconut shell charcoal briquettes designed for shisha and hookah use. They are available in cube and flat shapes with Premium, Grade A, and Grade B quality options.',
    image: '/images/products/shisha-bricket.png',
    specifications: {
      Product: 'Cube & Flat Shape Shisha Hookah Briquettes',
      'Cube Sizes':
        '20 x 20 x 20 mm, 22 x 22 x 22 mm, 25 x 25 x 25 mm, 26 x 26 x 26 mm',
      'Flat Size': '25 x 25 x 15 mm',
      Grade: 'Premium, Grade A & B',
      'Ash Content': '1.8% - 2.5%',
      'Ash Color': 'White / Light Grey',
      'Burning Time': '90 - 120 minutes',
      'Ignition Time': 'Less than 2 minutes',
      'Fixed Carbon': 'Minimum 80%',
      Moisture: 'Max 5%',
      'Volatile Matter': '14%',
      'Calorific Value': '7000 - 7500 Kcal/kg',
      Material: '100% Coconut Shell Charcoal',
    },
    features: [
      'Cube and flat shape',
      'Premium grade',
      '90 - 120 minutes burning',
      'White / light grey ash',
      '100% coconut shell charcoal',
    ],
  },
  {
    id: 'bbq-briquettes',
    name: 'BBQ Briquettes',
    slug: 'bbq-briquettes',
    category: 'Briquettes',
    description:
      'BBQ Briquettes are charcoal briquettes designed for barbecue and grill use. They are available in hexagonal and finger shapes with long burning time, stable heat, and practical size options for food service and retail buyers.',
    image: '/images/products/bbq-bricket.png',
    specifications: {
      Product: 'Hexagonal & Finger Shape Barbeque / Grill Briquettes',
      'Hexagonal Sizes':
        '50 x 200 mm, 50 x 150 mm, 50 x 100 mm, 50 x 50 mm, 40 x 200 mm, 40 x 150 mm, 40 x 100 mm, 40 x 50 mm',
      'Stick / Finger Sizes': '22 x 50 mm, 25 x 50 mm, 22 x 40 mm',
      Grade: 'Premium, Grade A & B',
      'Ash Content': '12% - 22%',
      'Ash Color': 'White / Light Grey',
      'Burning Time': '6 - 8 hours',
      'Ignition Time': 'Less than 10 minutes',
      'Fixed Carbon': 'Minimum 80%',
      Moisture: 'Max 5%',
      'Calorific Value': '6500 - 7000 Kcal/kg',
      Material: 'Coconut shell charcoal, wood charcoal, candlenut shell charcoal',
    },
    features: [
      'Hexagonal and finger shape',
      '6 - 8 hours burning',
      'Premium grade',
      '6500 - 7000 Kcal/kg',
      'BBQ and grill use',
    ],
  },
  {
    id: 'coconut-husk-raw-material',
    name: 'Coconut Husk Raw Material',
    slug: 'coconut-husk-raw-material',
    category: 'Raw Material',
    description:
      'Coconut Husk Raw Material is the main raw material used to produce cocopeat, cocofiber, coconut coir rope, cocopeat polybag, and cocopeat block. It supports sustainable production by turning coconut byproducts into useful agricultural and industrial materials.',
    image: '/images/products/coco-raw.png',
    specifications: {
      Material: 'Coconut husk',
      Source: 'Outer husk of coconut',
      'Processed Into':
        'Cocopeat, Cocofiber, Coconut Coir Rope, Cocopeat Polybag, Cocopeat Block',
      Application: 'Raw material for agricultural and coir-based products',
      Character: 'Natural, renewable, and fiber-rich coconut byproduct',
    },
    features: [
      'Raw coconut husk',
      'Cocopeat feedstock',
      'Cocofiber feedstock',
      'Renewable byproduct',
      'Coir-based production',
    ],
  },
];

export const productCategories: string[] = [
  'All',
  'Cocopeat',
  'Fiber',
  'Rope',
  'Briquettes',
  'Raw Material',
];