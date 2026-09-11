import React from 'react';
import { Plus, MessageSquare, Settings, LogOut } from 'lucide-react';

export default function Sidebar({ chats, activeChat, setActiveChat }) {
  return (
    <div className="w-64 border-r border-zinc-800 h-screen p-4 flex flex-col bg-zinc-950">
      <div className="mb-8">
        <h1 className="text-xl font-bold tracking-tighter mb-6">Linear AI</h1>
        <button className="flex items-center gap-2 w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md hover:border-zinc-600 transition-colors">
          <Plus size={16} /> Yeni Sohbet
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {chats.map(chat => (
          <button 
            key={chat.id}
            onClick={() => setActiveChat(chat.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${activeChat === chat.id ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <MessageSquare size={16} /> {chat.title}
          </button>
        ))}
      </div>

      <div className="border-t border-zinc-800 pt-4 mt-4 space-y-2">
        <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white"><Settings size={16} /> Ayarlar</button>
        <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white"><LogOut size={16} /> Çıkış Yap</button>
      </div>
    </div>
  );
}