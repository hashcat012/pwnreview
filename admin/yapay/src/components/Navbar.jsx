import React from 'react';

export default function Navbar() {
  return (
    <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-md">
      <h2 className="font-semibold text-zinc-400">Yeni Sohbet</h2>
      <div className="flex items-center gap-4">
        <span className="text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded">GPT-4 Turbo</span>
        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700" />
      </div>
    </header>
  );
}