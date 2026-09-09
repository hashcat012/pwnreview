import React from 'react';
import { LayoutDashboard, FileText, Code, Image, Settings } from 'lucide-react';

export default function Sidebar({ activePage, setActivePage }) {
  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'editor', label: 'İçerik Editörü', icon: FileText },
  ];

  return (
    <div className="w-64 h-screen border-r border-zinc-800 bg-zinc-900/30 p-6 flex flex-col gap-8">
      <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">NEXUS AI</h1>
      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === item.id ? 'bg-indigo-500/10 text-indigo-400' : 'hover:bg-zinc-800'}`}
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}