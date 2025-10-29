import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../other/productCard';
import newProductsImage1 from '@/assets/imgs/landingPage/newProducts1.png';
import newProductsImage2 from '@/assets/imgs/landingPage/newProducts2.png';
import newProductsImage3 from '@/assets/imgs/landingPage/newProducts3.png';
import newProductsImage4 from '@/assets/imgs/landingPage/newProducts4.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const NewProducts = () => {
  // Sample products data - replace with your actual data
  const products: Product[] = [
    {
      id: 1,
      name: 'Foley Catheter',
      price: 12.90,
      image: newProductsImage1.src,
    },
    {
      id: 2,
      name: 'Thermometer',
      price: 8.98,
      image: newProductsImage2.src,
    },
    {
      id: 3,
      name: 'Non-rebreather mask',
      price: 3.32,
      image: newProductsImage3.src,
    },
    {
      id: 4,
      name: 'Wound Dressing',
      price: 24.78,
      image: newProductsImage4.src,
    },
  ];

  return (
    <section className="w-full px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            New Products
          </h2>
          <Link
            href="/products"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base transition-colors"
          >
            View All
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className='space-x-5'>
                <ProductCard image={product.image} title={product.name} price={product.price} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};    

export default NewProducts;