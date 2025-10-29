import ProductCard from '@/components/other/productCard';
import product1 from '@/assets/imgs/productsPage/product1.png';
import product2 from '@/assets/imgs/productsPage/product2.png';
import product3 from '@/assets/imgs/productsPage/product3.png';
import product4 from '@/assets/imgs/productsPage/product4.png';
import product5 from '@/assets/imgs/productsPage/product5.png';
import product6 from '@/assets/imgs/productsPage/product6.png';
import product7 from '@/assets/imgs/productsPage/product7.png';
import product8 from '@/assets/imgs/productsPage/product8.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductsPage = () => {
  // Sample products data - replace with your actual data
  const products: Product[] = [
    {
      id: 1,
      name: 'Foley Catheter',
      price: 12.90,
      image: product1.src,
    },
    {
      id: 2,
      name: 'Thermometer',
      price: 8.98,
      image: product2.src,
    },
    {
      id: 3,
      name: 'Non-rebreather mask',
      price: 3.32,
      image: product3.src,
    },
    {
      id: 4,
      name: 'Wound Dressing',
      price: 24.78,
      image: product4.src,
    },
    {
      id: 5,
      name: 'Oxygen Mask',
      price: 2.00,
      image: product5.src,
    },
    {
      id: 6,
      name: 'Surgical Gloves',
      price: 1.99,
      image: product6.src,
    },
    {
      id: 7,
      name: 'Medical Mask',
      price: 0.89,
      image: product7.src,
    },
    {
      id: 8,
      name: 'Hand Sanitizer',
      price: 4.00,
      image: product8.src,
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard 
                image={product.image}
                title={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;