import { Brain, LayoutDashboard, Database, Settings } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'models', label: 'Model Katalog', icon: Database },
  ];

  return (
    <nav className="w-64 border-r border-zinc-800 h-screen p-6 flex flex-col glass">
      <div className="flex items-center gap-2 mb-10 font-bold text-xl text-indigo-400">
        <Brain /> PwnAI Center
      </div>
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === item.id ? 'bg-indigo-600 text-white' : 'hover:bg-zinc-800 text-zinc-400'}`}
          >
            <item.icon size={20} /> {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}