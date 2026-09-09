import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardView from './views/DashboardView';
import { AI_MODELS } from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [models] = useState(AI_MODELS);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-y-auto bg-zinc-950">
        {activePage === 'dashboard' && <DashboardView models={models} />}
        {activePage === 'models' && <div className="p-8 text-2xl">Model Katalogu Yapılandırılıyor...</div>}
      </main>
    </div>
  );
}