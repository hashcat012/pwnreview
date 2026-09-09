import React, { useState } from 'react';
import { AI_MODELS } from '../data/mockData';

export default function ModelCatalogView() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Yapay Zeka Modelleri</h1>
      <div className="grid grid-cols-1 gap-4">
        {AI_MODELS.map((model) => (
          <div key={model.id} className="glass p-4 rounded-xl flex items-center justify-between hover:border-indigo-500 transition-colors">
            <div>
              <h3 className="font-semibold">{model.name}</h3>
              <p className="text-xs text-zinc-500">{model.type}</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm">{model.latency}</span>
              <span className={`px-2 py-1 rounded text-[10px] uppercase ${model.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                {model.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}