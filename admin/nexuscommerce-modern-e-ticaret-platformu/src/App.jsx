import { useState } from 'react';
import Navbar from './components/Navbar';
import CatalogView from './views/CatalogView';
import CartView from './views/CartView';
import { products } from './data/products';
import './styles/globals.css';

export default function App() {
  const [activePage, setActivePage] = useState('catalog');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} cartCount={cart.length} />
      <main className="max-w-5xl mx-auto">
        {activePage === 'catalog' ? (
          <CatalogView products={products} onAdd={addToCart} />
        ) : (
          <CartView cart={cart} />
        )}
      </main>
    </div>
  );
}