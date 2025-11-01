"use client";
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useCart, Product } from '@/context/CartContext';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product } : ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-gray-50 rounded-br-2xl rounded-bl-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow w-full cursor-pointer">
        {/* Product Image */}
        <div className="bg-white p-8 flex items-center justify-center h-72 relative">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        
        {/* Product Info */}
        <div className="">
          <h3 className="text-xl font-bold text-gray-900 pt-2 pl-4">
            {product.name}
          </h3>
          
          <p className="text-lg font-semibold text-gray-900 pb-5 pl-4">
            ${product.price.toFixed(2)}
          </p>
          
          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Add to Cart
            <FontAwesomeIcon icon={faShoppingBag} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}