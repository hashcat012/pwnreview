import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardView from './views/DashboardView';
import ModelCatalogView from './views/ModelCatalogView';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-zinc-950">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-y-auto">
        {activePage === 'dashboard' && <DashboardView />}
        {activePage === 'models' && <ModelCatalogView />}
      </main>
    </div>
  );
}