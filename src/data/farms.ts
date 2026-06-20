// Farm and sourcing data
// EDITABLE SAMPLE DATA — Replace with actual farm data

export interface Farm {
  id: string;
  name: string;
  location: string;
  province: string;
  farmerCount: number;
  monthlyProduction: string;
  description: string;
  image: string;
  mapsUrl: string;
}

export const farms: Farm[] = [
  {
    id: 'magelang',
    name: 'Magelang Coconut Farm',
    location: 'Magelang Regency',
    province: 'Central Java',
    farmerCount: 65,
    monthlyProduction: '150 Tons',
    description:
      'Our primary coconut husk collection center in Magelang, working with local farming communities to source the finest quality coconut husks for cocopeat and fiber production.',
    image: '/images/farms/farm-magelang.jpg',
    mapsUrl: 'https://maps.google.com/?q=Magelang+Jawa+Tengah',
  },
  {
    id: 'purworejo',
    name: 'Purworejo Collection Point',
    location: 'Purworejo Regency',
    province: 'Central Java',
    farmerCount: 45,
    monthlyProduction: '120 Tons',
    description:
      'A strategic collection center serving the southern coastal coconut farming areas, ensuring steady raw material supply throughout the year.',
    image: '/images/farms/farm-purworejo.jpg',
    mapsUrl: 'https://maps.google.com/?q=Purworejo+Jawa+Tengah',
  },
  {
    id: 'kebumen',
    name: 'Kebumen Coir Hub',
    location: 'Kebumen Regency',
    province: 'Central Java',
    farmerCount: 50,
    monthlyProduction: '130 Tons',
    description:
      "Located in one of Central Java's most productive coconut regions, this hub processes and forwards raw coconut husks to our main facility.",
    image: '/images/farms/farm-kebumen.jpg',
    mapsUrl: 'https://maps.google.com/?q=Kebumen+Jawa+Tengah',
  },
  {
    id: 'temanggung',
    name: 'Temanggung Supply Center',
    location: 'Temanggung Regency',
    province: 'Central Java',
    farmerCount: 40,
    monthlyProduction: '100 Tons',
    description:
      'An expanding collection network in Temanggung, tapping into highland coconut plantations known for producing husks with excellent fiber quality.',
    image: '/images/farms/farm-temanggung.jpg',
    mapsUrl: 'https://maps.google.com/?q=Temanggung+Jawa+Tengah',
  },
];

export const farmStatistics = [
  { label: 'Total Partner Farmers', value: 200, suffix: '+' },
  { label: 'Collection Regions', value: 4, suffix: '' },
  { label: 'Monthly Production', value: 500, suffix: ' Tons' },
];
