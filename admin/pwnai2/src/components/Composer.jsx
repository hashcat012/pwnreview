import React, { useRef, useState } from 'react';
import { ArrowUp, Square, Paperclip, X, SlidersHorizontal } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Composer() {
  const a = useApp();
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [mode, setMode] = useState('Standart');
  async function attach(e) {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (selected.size > 50000) { a.setToast('En fazla 50 KB metin dosyası ekleyebilirsin.'); e.target.value = ''; return; }
    try { setFile({ name: selected.name, text: await selected.text() }); }
    catch { a.setToast('Dosya okunamadı.'); }
    e.target.value = '';
  }
  function submit(e) {
    e.preventDefault();
    if (!a.draft.trim() || a.busy) return;
    const prefix = mode === 'Detaylı' ? 'Detaylı açıkla: ' : '';
    a.send(`${prefix}${a.draft}${file ? `\n\nEk dosya: ${file.name}\n${file.text}` : ''}`);
    setFile(null);
  }
  return <form className="composer" onSubmit={submit}>
    {file && <div className="file-chip">{file.name}<button type="button" aria-label="Dosyayı kaldır" onClick={() => setFile(null)}><X size={14} /></button></div>}
    <label className="sr-only" htmlFor="message">PwnAI’a mesaj gönder</label>
    <div className="textarea-wrap">
      {!a.draft && <span className="input-hint" aria-hidden="true">Aklından geçenleri paylaş...</span>}
      <textarea id="message" value={a.draft} maxLength={12000} onChange={e => a.setDraft(e.target.value)} onKeyDown={e => {
        if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); submit(e); }
      }} />
    </div>
    <div className="composer-bottom">
      <div className="flex items-center gap-2">
        <input ref={fileRef} type="file" accept=".txt,.md,.csv,.json" hidden onChange={attach} />
        <button type="button" className="icon-btn" aria-label="Metin dosyası ekle" onClick={() => fileRef.current.click()}><Paperclip size={18} /></button>
        <span className="composer-divider" />
        <button type="button" className={`mode-button ${mode === 'Detaylı' ? 'enabled' : ''}`} onClick={() => setMode(mode === 'Standart' ? 'Detaylı' : 'Standart')}><SlidersHorizontal size={15} />{mode}</button>
      </div>
      <div className="flex items-center gap-3"><span className="enter-hint">Göndermek için ↵</span>
        {a.busy ? <button type="button" className="send-button" aria-label="Yanıtı durdur" onClick={a.stop}><Square size={16} /></button> :
          <button type="submit" className="send-button" aria-label="Mesajı gönder" disabled={!a.draft.trim()}><ArrowUp size={21} /></button>}
      </div>
    </div>
  </form>;
}