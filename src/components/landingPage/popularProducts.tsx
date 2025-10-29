import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../other/productCard';
import popularProductsImage1 from '@/assets/imgs/landingPage/popularProducts1.png';
import popularProductsImage2 from '@/assets/imgs/landingPage/popularProducts2.png';
import popularProductsImage3 from '@/assets/imgs/landingPage/popularProducts3.png';
import popularProductsImage4 from '@/assets/imgs/landingPage/popularProducts4.png';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const PopularProducts = () => {
  // Sample products data - replace with your actual data
  const products: Product[] = [
    {
      id: 1,
      name: 'Oxygen Mask',
      price: 2.00,
      image: popularProductsImage1.src,
    },
    {
      id: 2,
      name: 'Surgical Gloves',
      price: 1.99,
      image: popularProductsImage2.src,
    },
    {
      id: 3,
      name: 'Medical Mask',
      price: 0.89,
      image: popularProductsImage3.src,
    },
    {
      id: 4,
      name: 'Hand Sanitizer',
      price: 4.00,
      image: popularProductsImage4.src,
    },
  ];

  return (
    <section className="w-full px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Popular Products
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

export default PopularProducts;