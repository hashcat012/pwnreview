import React from 'react';
import { STATS } from '../data/mockData';

export default function DashboardView() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Sistem Genel Bakış</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATS.map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl">
            <p className="text-zinc-400 text-sm">{stat.label}</p>
            <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
            <span className="text-emerald-400 text-xs font-medium">{stat.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}