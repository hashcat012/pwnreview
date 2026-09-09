import React from 'react';
import { ShoppingBag, LayoutDashboard, Store } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
        <Store className="text-indigo-500" /> PwnShop
      </div>
      <div className="flex gap-2">
        <button onClick={() => setActivePage('dashboard')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${activePage === 'dashboard' ? 'bg-indigo-600' : 'hover:bg-zinc-800'}`}>
          <LayoutDashboard size={18} /> Dashboard
        </button>
        <button onClick={() => setActivePage('catalog')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${activePage === 'catalog' ? 'bg-indigo-600' : 'hover:bg-zinc-800'}`}>
          <ShoppingBag size={18} /> Katalog
        </button>
      </div>
    </nav>
  );
}