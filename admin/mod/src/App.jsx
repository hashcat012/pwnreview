import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardView from './views/DashboardView';
import { models as initialModels } from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [models] = useState(initialModels);

  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 ml-64">
        {activePage === 'dashboard' && <DashboardView models={models} />}
        {activePage === 'models' && <div className="p-8 text-2xl">Model Listesi Sayfası</div>}
      </main>
    </div>
  );
}