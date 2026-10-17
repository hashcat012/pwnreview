import React, { useEffect, useRef } from 'react';
import { Copy, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Brand from './Brand';

export default function MessageList() {
  const a = useApp();
  const end = useRef(null);
  const [copied, setCopied] = React.useState(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }); }, [a.chat?.messages, a.busy]);
  async function copy(message) {
    try { await navigator.clipboard.writeText(message.text); setCopied(message.id); a.setToast('Yanıt kopyalandı.'); }
    catch { a.setToast('Panoya erişilemiyor. Metni seçerek kopyalayabilirsin.'); }
  }
  return <div className="messages" role="log" aria-label="Sohbet mesajları">
    {a.chat?.messages.map(message => <article key={message.id} className={`message ${message.role}`}>
      {message.role === 'assistant' && <div className="message-name"><Brand /><b>PwnAI</b><span>DEMO</span></div>}
      <div className="message-text">{message.text}</div>
      {message.role === 'assistant' && <button className="copy-button" onClick={() => copy(message)}>{copied === message.id ? <Check size={14} /> : <Copy size={14} />} {copied === message.id ? 'Kopyalandı' : 'Kopyala'}</button>}
    </article>)}
    {a.busy && <div className="thinking" role="status"><Brand /><span /><span /><span /><small>Örnek yanıt hazırlanıyor</small></div>}
    <div ref={end} />
  </div>;
}