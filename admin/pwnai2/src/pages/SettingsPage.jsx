import React, { useState } from 'react';
import { Download, Trash2, Check, Monitor } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const a = useApp();
  const [confirm, setConfirm] = useState(false);
  function update(key, value) { a.setSettings(prev => ({ ...prev, [key]: value })); }
  function download() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(a.items, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'pwnai-sohbetler.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000); a.setToast('Sohbet dışa aktarımı hazır.');
  }
  return <section className="content-page settings-page">
    <div className="eyebrow"><Monitor size={15} /> SANA AİT BİR ALAN</div>
    <h1>Kendi <span>tonunda.</span></h1>
    <p className="page-description">Küçük detaylar, daha kişisel bir deneyim. Değişiklikler otomatik kaydedilir.</p>
    <section className="setting-panel"><h2>Profil</h2><label className="setting-row"><span><b>Görünen ad</b><small>Yalnızca bu cihazda kullanılır.</small></span><input aria-label="Görünen ad" maxLength={30} value={a.settings.name} onChange={e => update('name', e.target.value)} /></label></section>
    <section className="setting-panel"><h2>Görünüm</h2>
      <div className="setting-row"><span><b>Beyaz vurgu tonu</b><small>İkincil yazılar ve arayüz detayları.</small></span><div className="tone-options">{[25, 50, 75].map(tone => <button aria-pressed={a.settings.tone === tone} key={tone} className={a.settings.tone === tone ? 'selected' : ''} onClick={() => update('tone', tone)}><i style={{ background: `rgba(255,255,255,${tone / 100})` }} />%{tone}{a.settings.tone === tone && <Check size={12} />}</button>)}</div></div>
      <div className="tone-preview"><span>01 / MONOCHROME</span><p>Fikirlerine alan aç.</p><div className="swatches">{['#000', '#404040', '#808080', '#bfbfbf', '#fff'].map(color => <i key={color} style={{ background: color }} />)}</div></div>
      <div className="setting-row"><span><b>Kompakt mesajlar</b><small>Sohbet içi boşlukları azaltır.</small></span><button className={`switch ${a.settings.compact ? 'on' : ''}`} role="switch" aria-checked={a.settings.compact} aria-label="Kompakt mesajlar" onClick={() => update('compact', !a.settings.compact)}><i /></button></div>
    </section>
    <section className="setting-panel"><h2>Verilerin</h2><div className="setting-row"><span><b>{a.items.length} kayıtlı sohbet</b><small>Veriler tarayıcının yerel depolamasında tutulur.</small></span><button className="outline-button" onClick={download}><Download size={15} /> Dışa aktar</button></div>
      <div className="setting-row"><span><b>Sohbet geçmişini temizle</b><small>Bu işlem geri alınamaz.</small></span><button className="outline-button" onClick={() => setConfirm(v => !v)}><Trash2 size={15} />{confirm ? 'Vazgeç' : 'Temizle'}</button></div>
      {confirm && <div className="confirm-panel"><span>Tüm sohbetlerin silinsin mi?</span><button className="light-button" onClick={() => { a.stop(); a.setItems([]); setConfirm(false); a.setToast('Tüm sohbetler silindi.'); }}>Evet, tümünü sil</button></div>}
    </section>
  </section>;
}