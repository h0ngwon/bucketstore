import React from 'react';
import { Product } from "../../types/data.interface";

type Props = {
  product: Product;
};

const Card = ({ product }: Props) => {
  return (
    <div className="flex-none">
      <img src={product.url} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.brandName}</h3>
        <p className="text-sm text-gray-600">{product.name}</p>
        <div className="mt-2">
          <span className="text-xl font-bold text-black">{product.price.real.toLocaleString()}원</span>
          <span className="text-sm text-gray-500 line-through ml-2">{product.price.tag.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
};

export default Card;