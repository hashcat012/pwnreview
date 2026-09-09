import React from 'react';

export default function CatalogView({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map(p => (
        <div key={p.id} className="glass p-6 rounded-2xl hover:border-indigo-500/50 transition-all">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-zinc-400 text-sm mb-4">{p.category}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-indigo-400">{p.price} TL</span>
            <button className="bg-zinc-800 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm transition">Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
}