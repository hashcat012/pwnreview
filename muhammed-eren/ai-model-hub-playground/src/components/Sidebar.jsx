import React from 'react';
import { LayoutDashboard, BrainCircuit, Terminal, Settings } from 'lucide-react';

export default function Sidebar({ activePage, setActivePage }) {
  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'catalog', label: 'Model Kataloğu', icon: BrainCircuit },
    { id: 'playground', label: 'Playground', icon: Terminal },
    { id: 'settings', label: 'Ayarlar', icon: Settings },
  ];

  return (
    <div className="w-64 h-screen border-r border-zinc-800 bg-zinc-900/50 p-6 flex flex-col">
      <h1 className="text-xl font-bold mb-10 flex items-center gap-2 text-indigo-500">
        <BrainCircuit /> NEXUS AI
      </h1>
      <nav className="space-y-2">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === item.id ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:bg-zinc-800'}`}
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}