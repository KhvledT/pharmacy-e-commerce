import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}
export default function ProductCard({ image, title, price } : ProductCardProps) {
  return (
    <div className="bg-gray-50 rounded-br-2xl rounded-bl-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow w-full">
      {/* Product Image */}
      <div className="bg-white p-8 flex items-center justify-center h-72">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Product Info */}
      <div className="">
        <h3 className="text-xl font-bold text-gray-900 pt-2 pl-4">
          {title}
        </h3>
        
        <p className="text-lg font-semibold text-gray-900 pb-5 pl-4">
          ${price}
        </p>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          Add to Cart
          <FontAwesomeIcon icon={faShoppingBag} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}