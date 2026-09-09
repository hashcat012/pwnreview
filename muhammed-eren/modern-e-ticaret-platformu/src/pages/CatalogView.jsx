import React from 'react';
import { products } from '../data/products';

export default function CatalogView({ addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="glass p-6 rounded-2xl hover:border-indigo-500/50 transition-all">
          <div className="text-4xl mb-4">{product.image}</div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-zinc-400 text-sm mb-4">{product.category}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">${product.price}</span>
            <button onClick={() => addToCart(product)} className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
}