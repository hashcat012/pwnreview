import { ShoppingCart, LayoutGrid, Search } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, cartCount }) {
  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">NexusCommerce</h1>
      <div className="flex items-center gap-6">
        <button onClick={() => setActivePage('catalog')} className={activePage === 'catalog' ? 'text-indigo-400' : 'text-zinc-400'}>
          <LayoutGrid size={20} />
        </button>
        <button onClick={() => setActivePage('cart')} className="relative text-zinc-400">
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-indigo-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}