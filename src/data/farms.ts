// Farm and sourcing data
// INDOCOCOPEAT — CV LOKA ADI JAYA
// Data based on estimated coconut-producing areas and supply potential.

export interface Farm {
  id: string;
  name: string;
  location: string;
  province: string;

  // Kept for compatibility with existing components.
  // Use estimatedFarmers for display text.
  farmerCount: number;
  monthlyProduction: string;

  estimatedFarmers: string;
  estimatedVillages: string;
  productionPotential: string;
  potential: string;

  description: string;
  image: string;
  mapsUrl: string;
}

export interface FarmStatistic {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
}

export const farms: Farm[] = [
  {
    id: 'kulon-progo',
    name: 'Kulon Progo Supply Area',
    location: 'Kulon Progo Regency',
    province: 'DI Yogyakarta',
    farmerCount: 12000,
    monthlyProduction: 'Medium Potential',
    estimatedFarmers: '8,000–12,000 farmers',
    estimatedVillages: '40–50 villages',
    productionPotential: 'Medium',
    potential:
      'Potential source of mature coconut, organic coconut, and dwarf coconut varieties. The area is also supported by access to YIA Airport and Tanjung Adikarto Port development.',
    description:
      'Coconut-producing area supporting raw material supply for cocopeat and coconut fiber production.',
    image: '/images/farms/kulonprogo.jpg',
    mapsUrl: 'https://maps.google.com/?q=Kulon+Progo+Yogyakarta',
  },
  {
    id: 'wates',
    name: 'Wates Collection Point',
    location: 'Wates, Kulon Progo',
    province: 'DI Yogyakarta',
    farmerCount: 2500,
    monthlyProduction: 'Low Potential',
    estimatedFarmers: '1,500–2,500 farmers',
    estimatedVillages: '8–10 villages',
    productionPotential: 'Low / Collection Point',
    potential:
      'Suitable as a supporting collection point for coconut husks and coconut derivative raw materials within the Kulon Progo supply network.',
    description:
      'Collection support area for coconut husks and coconut derivative raw materials.',
    image: '/images/farms/kebun.jpg',
    mapsUrl: 'https://maps.google.com/?q=Wates+Kulon+Progo+Yogyakarta',
  },
  {
    id: 'kebumen',
    name: 'Kebumen Cocopeat Potential Area',
    location: 'Kebumen Regency',
    province: 'Central Java',
    farmerCount: 25000,
    monthlyProduction: 'High Potential',
    estimatedFarmers: '18,000–25,000 farmers',
    estimatedVillages: '80–100 villages',
    productionPotential: 'High',
    potential:
      'Coconut-producing area with many community coconut farms and local superior varieties. High potential for cocopeat production development.',
    description:
      'Sourcing area supporting cocofiber, cocopeat, and coconut husk material supply.',
    image: '/images/farms/kebun.jpg',
    mapsUrl: 'https://maps.google.com/?q=Kebumen+Jawa+Tengah',
  },
  {
    id: 'cilacap',
    name: 'Cilacap Coconut Supply Center',
    location: 'Cilacap Regency',
    province: 'Central Java',
    farmerCount: 35000,
    monthlyProduction: 'High Potential',
    estimatedFarmers: '25,000–35,000 farmers',
    estimatedVillages: '90–120 villages',
    productionPotential: 'High',
    potential:
      'One of the largest coconut areas in Central Java, supported by export port access and strong raw material potential.',
    description:
      'Coconut-producing area supporting continuous raw material availability.',
    image: '/images/farms/kebun.jpg',
    mapsUrl: 'https://maps.google.com/?q=Cilacap+Jawa+Tengah',
  },
  {
    id: 'purworejo',
    name: 'Purworejo Coconut Supply Area',
    location: 'Purworejo Regency',
    province: 'Central Java',
    farmerCount: 18000,
    monthlyProduction: 'High Potential',
    estimatedFarmers: '12,000–18,000 farmers',
    estimatedVillages: '60–80 villages',
    productionPotential: 'High',
    potential:
      'Known as a coconut production area with national superior coconut varieties and coconut sugar production potential.',
    description:
      'Collection area supporting cocopeat and coconut fiber processing needs.',
    image: '/images/farms/kebun.jpg',
    mapsUrl: 'https://maps.google.com/?q=Purworejo+Jawa+Tengah',
  },
  {
    id: 'gunung-kidul',
    name: 'Gunung Kidul High Potential Area',
    location: 'Gunung Kidul Regency',
    province: 'DI Yogyakarta',
    farmerCount: 40000,
    monthlyProduction: 'Very High Potential',
    estimatedFarmers: '30,000–40,000 farmers',
    estimatedVillages: '120–140 villages',
    productionPotential: 'Very High',
    potential:
      'Large community coconut production area spread across the southern coastal region, with very high potential for cocopeat production development.',
    description:
      'Sourcing area supporting coconut husk supply for processed coconut derivative products.',
    image: '/images/farms/kebun.jpg',
    mapsUrl: 'https://maps.google.com/?q=Gunung+Kidul+Yogyakarta',
  },
];

export const farmStatistics: FarmStatistic[] = [
  {
    label: 'Estimated Coconut Farmer Base',
    value: 140000,
    suffix: ' farmers',
    prefix: '±',
    description:
      'Estimated farmer base across Kulon Progo, Gunung Kidul, Purworejo, Kebumen, and Cilacap supply areas.',
  },
  {
    label: 'Supply Areas',
    value: 6,
    suffix: ' areas',
    description:
      'Kulon Progo, Wates, Kebumen, Cilacap, Purworejo, and Gunung Kidul.',
  },
  {
    label: 'Polybag Load Ability',
    value: 22.5,
    suffix: ' tons / 40 ft HC',
    description:
      'Cocopeat Polybag loading reference for 40 feet HC container.',
  },
];