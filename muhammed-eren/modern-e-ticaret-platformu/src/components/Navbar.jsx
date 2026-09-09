import React from 'react';
import { ShoppingCart, LayoutGrid, Package } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, cartCount }) {
  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-zinc-800">
      <h1 className="text-xl font-bold tracking-tighter text-indigo-400">PWN-SHOP</h1>
      <div className="flex gap-2">
        <button onClick={() => setActivePage('catalog')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activePage === 'catalog' ? 'bg-zinc-800' : ''}`}>
          <LayoutGrid size={18} /> Katalog
        </button>
        <button onClick={() => setActivePage('cart')} className="relative px-4 py-2 rounded-lg flex items-center gap-2">
          <ShoppingCart size={18} /> Sepet 
          {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-indigo-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}