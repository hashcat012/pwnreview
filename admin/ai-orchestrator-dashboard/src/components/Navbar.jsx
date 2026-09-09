import React from 'react';
import { Brain, LayoutDashboard, Database, Settings } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'models', label: 'Modeller', icon: Database },
  ];

  return (
    <nav className="w-64 border-r border-zinc-800 h-screen p-6 flex flex-col glass">
      <div className="flex items-center gap-2 mb-10 text-indigo-500">
        <Brain size={32} />
        <span className="font-bold text-xl tracking-tight text-white">AI-Core</span>
      </div>
      <div className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === item.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-zinc-400 hover:bg-zinc-800'}`}
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}