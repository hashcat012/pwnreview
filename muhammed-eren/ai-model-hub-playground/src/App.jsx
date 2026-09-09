import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { models, stats } from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex min-h-screen">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-8 overflow-y-auto">
        {activePage === 'dashboard' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Genel Bakış</h2>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <p className="text-zinc-400 text-sm">{s.label}</p>
                  <p className="text-3xl font-bold mt-2">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activePage === 'catalog' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Model Kataloğu</h2>
            <div className="grid grid-cols-2 gap-4">
              {models.map(m => (
                <div key={m.id} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition-colors">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className="text-zinc-400 text-sm">{m.provider} • {m.type}</p>
                  <span className="inline-block mt-4 px-2 py-1 rounded bg-zinc-800 text-xs text-indigo-400">{m.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'playground' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Playground</h2>
            <div className="w-full h-96 rounded-2xl border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-500">
              Model seçimi yapın ve terminale bağlanın...
            </div>
          </div>
        )}
      </main>
    </div>
  );
}