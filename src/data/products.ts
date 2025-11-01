import { Product } from '@/context/CartContext';
import product1 from '@/assets/imgs/productsPage/product1.png';
import product2 from '@/assets/imgs/productsPage/product2.png';
import product3 from '@/assets/imgs/productsPage/product3.png';
import product4 from '@/assets/imgs/productsPage/product4.png';
import product5 from '@/assets/imgs/productsPage/product5.png';
import product6 from '@/assets/imgs/productsPage/product6.png';
import product7 from '@/assets/imgs/productsPage/product7.png';
import product8 from '@/assets/imgs/productsPage/product8.png';
import newProducts1 from '@/assets/imgs/landingPage/newProducts1.png';
import newProducts2 from '@/assets/imgs/landingPage/newProducts2.png';
import newProducts3 from '@/assets/imgs/landingPage/newProducts3.png';
import newProducts4 from '@/assets/imgs/landingPage/newProducts4.png';
import popularProducts1 from '@/assets/imgs/landingPage/popularProducts1.png';
import popularProducts2 from '@/assets/imgs/landingPage/popularProducts2.png';
import popularProducts3 from '@/assets/imgs/landingPage/popularProducts3.png';
import popularProducts4 from '@/assets/imgs/landingPage/popularProducts4.png';

export const products: Product[] = [
  {
    id: 1,
    name: 'Foley Catheter',
    price: 12.90,
    image: product1.src,
    category: 'Medical Equipment',
    inStock: true,
    description: 'High-quality Foley catheter for medical use. Sterile and safe for patient care.',
    specifications: {
      'Material': 'Medical-grade silicone',
      'Size': 'Multiple sizes available',
      'Sterility': 'Individually wrapped and sterile',
      'Usage': 'Single use only'
    }
  },
  {
    id: 2,
    name: 'Thermometer',
    price: 8.98,
    image: product2.src,
    category: 'Diagnostic Tools',
    inStock: true,
    description: 'Digital thermometer with fast and accurate temperature readings. Perfect for home and clinical use.',
    specifications: {
      'Type': 'Digital',
      'Reading Time': '10 seconds',
      'Accuracy': '±0.1°C',
      'Display': 'LCD screen'
    }
  },
  {
    id: 3,
    name: 'Non-rebreather Mask',
    price: 3.32,
    image: product3.src,
    category: 'Respiratory Care',
    inStock: true,
    description: 'Non-rebreather oxygen mask for high-concentration oxygen delivery.',
    specifications: {
      'Material': 'Medical-grade PVC',
      'Oxygen Concentration': 'Up to 90%',
      'Tube Length': '2 meters',
      'Size': 'Adult'
    }
  },
  {
    id: 4,
    name: 'Wound Dressing',
    price: 24.78,
    image: product4.src,
    category: 'Wound Care',
    inStock: true,
    description: 'Advanced wound dressing for optimal healing. Sterile and hypoallergenic.',
    specifications: {
      'Type': 'Adhesive foam dressing',
      'Size': '10cm x 10cm',
      'Absorption': 'High absorbency',
      'Waterproof': 'Yes'
    }
  },
  {
    id: 5,
    name: 'Oxygen Mask',
    price: 2.00,
    image: product5.src,
    category: 'Respiratory Care',
    inStock: true,
    description: 'Standard oxygen mask for general oxygen therapy. Comfortable and effective.',
    specifications: {
      'Material': 'Medical-grade PVC',
      'Oxygen Concentration': 'Up to 60%',
      'Tube Length': '2 meters',
      'Size': 'Universal'
    }
  },
  {
    id: 6,
    name: 'Surgical Gloves',
    price: 1.99,
    image: product6.src,
    category: 'Personal Protection',
    inStock: true,
    description: 'Latex-free surgical gloves. Powder-free and sterile for maximum protection.',
    specifications: {
      'Material': 'Nitrile',
      'Powder': 'Powder-free',
      'Sterility': 'Sterile',
      'Size': 'Multiple sizes available'
    }
  },
  {
    id: 7,
    name: 'Medical Mask',
    price: 0.89,
    image: product7.src,
    category: 'Personal Protection',
    inStock: true,
    description: '3-ply disposable medical mask. Provides effective protection against airborne particles.',
    specifications: {
      'Layers': '3-ply',
      'Filter Efficiency': '95%',
      'Type': 'Disposable',
      'Ear Loops': 'Elastic'
    }
  },
  {
    id: 8,
    name: 'Hand Sanitizer',
    price: 4.00,
    image: product8.src,
    category: 'Hygiene',
    inStock: true,
    description: '70% alcohol-based hand sanitizer. Kills 99.9% of germs and bacteria.',
    specifications: {
      'Volume': '500ml',
      'Alcohol Content': '70%',
      'Type': 'Gel',
      'Fragrance': 'Unscented'
    }
  },
  {
    id: 9,
    name: 'Foley Catheter',
    price: 12.90,
    image: newProducts1.src,
    category: 'Medical Equipment',
    inStock: true,
    description: 'High-quality Foley catheter for medical use. Sterile and safe for patient care.',
    specifications: {
      'Material': 'Medical-grade silicone',
      'Size': 'Multiple sizes available',
      'Sterility': 'Individually wrapped and sterile',
      'Usage': 'Single use only'
    }
  },
  {
    id: 10,
    name: 'Thermometer',
    price: 8.98,
    image: newProducts2.src,
    category: 'Diagnostic Tools',
    inStock: true,
    description: 'Digital thermometer with fast and accurate temperature readings.',
    specifications: {
      'Type': 'Digital',
      'Reading Time': '10 seconds',
      'Accuracy': '±0.1°C',
      'Display': 'LCD screen'
    }
  },
  {
    id: 11,
    name: 'Non-rebreather Mask',
    price: 3.32,
    image: newProducts3.src,
    category: 'Respiratory Care',
    inStock: true,
    description: 'Non-rebreather oxygen mask for high-concentration oxygen delivery.',
    specifications: {
      'Material': 'Medical-grade PVC',
      'Oxygen Concentration': 'Up to 90%',
      'Tube Length': '2 meters',
      'Size': 'Adult'
    }
  },
  {
    id: 12,
    name: 'Wound Dressing',
    price: 24.78,
    image: newProducts4.src,
    category: 'Wound Care',
    inStock: true,
    description: 'Advanced wound dressing for optimal healing.',
    specifications: {
      'Type': 'Adhesive foam dressing',
      'Size': '10cm x 10cm',
      'Absorption': 'High absorbency',
      'Waterproof': 'Yes'
    }
  },
  {
    id: 13,
    name: 'Oxygen Mask',
    price: 2.00,
    image: popularProducts1.src,
    category: 'Respiratory Care',
    inStock: true,
    description: 'Standard oxygen mask for general oxygen therapy.',
    specifications: {
      'Material': 'Medical-grade PVC',
      'Oxygen Concentration': 'Up to 60%',
      'Tube Length': '2 meters',
      'Size': 'Universal'
    }
  },
  {
    id: 14,
    name: 'Surgical Gloves',
    price: 1.99,
    image: popularProducts2.src,
    category: 'Personal Protection',
    inStock: true,
    description: 'Latex-free surgical gloves. Powder-free and sterile.',
    specifications: {
      'Material': 'Nitrile',
      'Powder': 'Powder-free',
      'Sterility': 'Sterile',
      'Size': 'Multiple sizes available'
    }
  },
  {
    id: 15,
    name: 'Medical Mask',
    price: 0.89,
    image: popularProducts3.src,
    category: 'Personal Protection',
    inStock: true,
    description: '3-ply disposable medical mask.',
    specifications: {
      'Layers': '3-ply',
      'Filter Efficiency': '95%',
      'Type': 'Disposable',
      'Ear Loops': 'Elastic'
    }
  },
  {
    id: 16,
    name: 'Hand Sanitizer',
    price: 4.00,
    image: popularProducts4.src,
    category: 'Hygiene',
    inStock: true,
    description: '70% alcohol-based hand sanitizer.',
    specifications: {
      'Volume': '500ml',
      'Alcohol Content': '70%',
      'Type': 'Gel',
      'Fragrance': 'Unscented'
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products.slice(0, limit);
};

