import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CatalogView from './views/CatalogView';
import { products } from './data/products';

export default function App() {
  const [activePage, setActivePage] = useState('catalog');

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="max-w-6xl mx-auto py-8">
        {activePage === 'catalog' ? (
          <CatalogView products={products} />
        ) : (
          <div className="p-10 text-center">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-zinc-500">İstatistikler burada görüntülenecek.</p>
          </div>
        )}
      </main>
    </div>
  );
}