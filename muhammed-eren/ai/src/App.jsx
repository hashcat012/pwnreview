import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './views/DashboardView';
import { initialContent } from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [items, setItems] = useState(initialContent);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-y-auto">
        {activePage === 'dashboard' ? (
          <DashboardView items={items} />
        ) : (
          <div className="p-8 text-center text-zinc-500">Editör modülü aktif...</div>
        )}
      </main>
    </div>
  );
}