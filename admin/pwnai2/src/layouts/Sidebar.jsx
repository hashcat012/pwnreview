import React from 'react';
import { Plus, Search, Compass, MessageSquare, Settings, ArrowUpRight, X, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Brand from '../components/Brand';

export default function Sidebar() {
  const a = useApp();
  return <>
    {a.sidebar && <button className="mobile-backdrop" aria-label="Menüyü kapat" onClick={() => a.setSidebar(false)} />}
    <aside className={`sidebar ${a.sidebar ? 'opened' : ''}`}>
      <div className="sidebar-brand"><Brand /><b>PwnAI<span className="brand-dot">®</span></b><button className="icon-btn mobile-only" aria-label="Kapat" onClick={() => a.setSidebar(false)}><X size={18} /></button></div>
      <button className="new-chat" onClick={a.newChat}><Plus size={18} /> Yeni sohbet <span>⌘ N</span></button>
      <nav className="nav-stack">
        <button onClick={() => a.setShowModal(true)}><Search size={18} /> Sohbetlerde ara <kbd>⌘ K</kbd></button>
        <button className={a.activePage === 'chat' ? 'active' : ''} onClick={() => { a.setActivePage('chat'); a.setSidebar(false); }}><MessageSquare size={18} /> Sohbet</button>
        <button className={a.activePage === 'explore' ? 'active' : ''} onClick={() => { a.setActivePage('explore'); a.setSidebar(false); }}><Compass size={18} /> Keşfet <span className="tiny-badge">YENİ</span></button>
      </nav>
      <div className="history-label">SOHBET GEÇMİŞİ <span>{a.items.length.toString().padStart(2, '0')}</span></div>
      <div className="history">
        {a.items.length === 0 ? <div className="history-empty">Yeni fikirlerin burada birikecek.<br />İlk sohbetini başlat.</div> :
          a.items.map(item => <div className={`history-row ${a.selectedItem === item.id ? 'selected' : ''}`} key={item.id}>
            <button onClick={() => a.openChat(item.id)}>{item.title}</button>
            <button className="delete-chat" aria-label={`${item.title} sohbetini sil`} onClick={() => a.removeChat(item.id)}><Trash2 size={13} /></button>
          </div>)}
      </div>
      <div className="sidebar-bottom">
        <button className="discover-box" onClick={() => a.setActivePage('explore')}>
          <span className="flex justify-between items-center"><b>Bir fikirle başla.</b><ArrowUpRight size={17} /></span>
          <small>İlham verecek komutları keşfet.</small>
          <span className="mini-line"><i /></span>
        </button>
        <button className="profile" onClick={() => { a.setActivePage('settings'); a.setSidebar(false); }}>
          <span className="avatar">{a.settings.name.slice(0, 1).toUpperCase() || 'M'}</span>
          <span><b>{a.settings.name || 'Misafir'}</b><small>Kişisel çalışma alanı</small></span>
          <Settings size={17} />
        </button>
      </div>
    </aside>
  </>;
}