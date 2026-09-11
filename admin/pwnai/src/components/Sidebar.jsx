import React from 'react';
import { Plus, MessageSquare, Settings, Trash2 } from 'lucide-react';

export default function Sidebar({ history, onNewChat }) {
  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 h-screen flex flex-col p-4">
      <button 
        onClick={onNewChat}
        className="flex items-center gap-2 w-full p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all font-medium text-sm"
      >
        <Plus size={18} /> Yeni Sohbet
      </button>
      
      <div className="flex-1 overflow-y-auto mt-6 space-y-2">
        {history.map((chat) => (
          <div key={chat.id} className="flex items-center justify-between p-3 hover:bg-zinc-800 rounded-lg group cursor-pointer text-sm text-zinc-400 hover:text-white">
            <div className="flex items-center gap-2 truncate">
              <MessageSquare size={16} />
              {chat.title}
            </div>
            <Trash2 size={14} className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-red-400" />
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-800 pt-4 mt-auto">
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm">
          <Settings size={18} /> Ayarlar
        </button>
      </div>
    </div>
  );
}