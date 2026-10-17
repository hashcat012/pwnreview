import React, { useEffect, useRef } from 'react';
import { Search, X, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function SearchModal() {
  const a = useApp();
  const panel = useRef(null);
  const results = a.items.filter(item => item.title.toLocaleLowerCase('tr').includes(a.searchQuery.toLocaleLowerCase('tr')));
  useEffect(() => {
    const old = document.activeElement;
    panel.current.querySelector('input').focus();
    function key(e) {
      if (e.key === 'Escape') a.setShowModal(false);
      if (e.key === 'Tab') {
        const nodes = panel.current.querySelectorAll('button,input');
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener('keydown', key); old?.focus(); };
  }, [a.setShowModal]);
  return <div className="modal-overlay" onClick={() => a.setShowModal(false)}>
    <motion.section ref={panel} role="dialog" aria-modal="true" aria-label="Sohbetlerde ara" className="search-modal" initial={{ opacity: 0, y: 15, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} onClick={e => e.stopPropagation()}>
      <div className="search-field"><Search size={19} /><input aria-label="Sohbet başlığı" value={a.searchQuery} onChange={e => a.setSearchQuery(e.target.value)} /><button className="icon-btn" aria-label="Aramayı kapat" onClick={() => a.setShowModal(false)}><X size={18} /></button></div>
      <div className="search-results">{results.length ? results.map(item => <button key={item.id} onClick={() => a.openChat(item.id)}><MessageSquare size={16} /><span>{item.title}</span></button>) : <p>Henüz eşleşen bir sohbet yok.<br /><small>Yeni bir sohbet başlatarak geçmişini oluştur.</small></p>}</div>
      <div className="modal-foot">SOHBETLERİN, TEK BİR YERDE. <kbd>ESC</kbd></div>
    </motion.section>
  </div>;
}