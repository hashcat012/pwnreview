import React from 'react';
import { MessageSquare, Settings, Zap, History, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sidebar({ activeView, setActiveView }) {
  return (
    <div className="w-64 border-r border-zinc-800 bg-zinc-900/50 p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
          <Zap size={20} className="text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight">AI Nexus</span>
      </div>
      
      <button className="flex items-center gap-2 w-full px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all border border-zinc-700">
        <Plus size={18} /> Yeni Sohbet
      </button>

      <nav className="flex-1 flex flex-col gap-2">
        <button onClick={() => setActiveView('chat')} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${activeView === 'chat' ? 'bg-zinc-800 text-indigo-400' : 'hover:bg-zinc-800/50'}`}>
          <MessageSquare size={18} /> Sohbet
        </button>
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-zinc-800/50 transition-colors">
          <History size={18} /> Geçmiş
        </button>
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 rounded-xl transition-colors">
        <Settings size={18} /> Ayarlar
      </button>
    </div>
  );
}