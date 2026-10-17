import React, { useEffect } from 'react';
import { Menu, ChevronDown, CircleHelp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from './Sidebar';
import SearchModal from '../components/SearchModal';

export default function AppLayout({ children }) {
  const a = useApp();
  useEffect(() => {
    function key(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); a.setShowModal(v => !v); }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'n') { e.preventDefault(); a.newChat(); }
    }
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [a.setShowModal, a.newChat]);
  return <div className={`app ${a.settings.compact ? 'compact' : ''}`} style={{ '--tone': `rgba(255,255,255,${a.settings.tone / 100})` }}>
    <Sidebar />
    <main className="main">
      <header className="topbar">
        <div className="flex items-center gap-3">
          <button className="icon-btn mobile-only" aria-label="Menüyü aç" onClick={() => a.setSidebar(true)}><Menu size={20} /></button>
          <div className="model-select"><select aria-label="Model seçimi" value={a.model} onChange={e => a.setModel(e.target.value)}>
            <option>PwnAI Core</option><option>PwnAI Reason</option><option>PwnAI Code</option>
          </select><ChevronDown size={14} /></div>
          <span className="version">1.0</span>
        </div>
        <div className="flex items-center gap-4"><span className="demo-badge"><i /> YEREL DEMO</span>
          <button className="icon-btn" aria-label="Demo hakkında" onClick={() => a.setToast('Gerçek API bağlı değil. Sohbetler yalnızca bu tarayıcıda saklanır.')}><CircleHelp size={18} /></button>
        </div>
      </header>
      {children}
    </main>
    {a.showModal && <SearchModal />}
    {a.toast && <div role="status" className="toast">{a.toast}</div>}
  </div>;
}