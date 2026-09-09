import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CatalogView from './pages/CatalogView';

export default function App() {
  const [activePage, setActivePage] = useState('catalog');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} cartCount={cart.length} />
      <main className="max-w-7xl mx-auto">
        {activePage === 'catalog' ? (
          <CatalogView addToCart={addToCart} />
        ) : (
          <div className="p-10 text-center">
            <h2 className="text-2xl">Sepetinizde {cart.length} ürün var.</h2>
          </div>
        )}
      </main>
    </div>
  );
}