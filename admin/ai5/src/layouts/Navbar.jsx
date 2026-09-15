import React from "react";
import { Home, Settings, Bot } from "lucide-react";
import clsx from "clsx";

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: "chat", label: "Sohbet", icon: <Bot size={20} /> },
    { id: "settings", label: "Ayarlar", icon: <Settings size={20} /> },
  ];

  return (
    <header className="bg-zinc-900/80 border-b border-zinc-800 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3 text-xl font-bold text-white">
          <Home className="text-indigo-400" size={28} />
          <span>ChatBot Demo</span>
        </div>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActivePage(item.id)}
                className={clsx(
                  "flex items-center gap-2 px-3 py-1 rounded-md transition-colors",
                  activePage === item.id
                    ? "bg-indigo-600/30 text-indigo-200"
                    : "text-zinc-400 hover:bg-zinc-800/50"
                )}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}