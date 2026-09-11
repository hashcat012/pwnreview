import { Brain, LayoutDashboard, Database, Settings } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'dashboard', label: 'Genel Bakış', icon: LayoutDashboard },
    { id: 'models', label: 'Modeller', icon: Database },
  ];

  return (
    <nav className="w-64 glass h-screen fixed left-0 top-0 p-6 flex flex-col border-r border-white/5">
      <div className="flex items-center gap-2 mb-10 text-indigo-500">
        <Brain size={28} />
        <span className="font-bold text-xl tracking-tight text-white">PwnAI Hub</span>
      </div>
      <div className="flex flex-col gap-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === item.id ? 'bg-indigo-600 text-white' : 'hover:bg-zinc-800'}`}
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}