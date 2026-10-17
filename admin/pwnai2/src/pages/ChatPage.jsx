import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LockKeyhole } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { prompts } from '../data/prompts';
import Brand from '../components/Brand';
import Composer from '../components/Composer';
import PromptCard from '../components/PromptCard';
import MessageList from '../components/MessageList';

export default function ChatPage() {
  const a = useApp();
  const hasMessages = Boolean(a.chat?.messages.length);
  return <section className={`chat-page ${hasMessages ? 'has-messages' : ''}`}>
    {hasMessages ? <MessageList /> :
      <motion.div className="welcome" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
        <div className="welcome-mark"><Brand large /><span className="orbit" /></div>
        <div className="eyebrow">DAHA AZ SINIR. DAHA ÇOK OLASILIK.</div>
        <h1>Düşüncenin <span>ötesinde.</span></h1>
        <p>Bir fikir, bir soru, bir başlangıç.<br className="mobile-only" /> Birlikte neler yapabiliriz?</p>
      </motion.div>}
    <div className="chat-bottom">
      <Composer />
      {!hasMessages && <div className="suggestion-section">
        <div className="section-heading"><span>İLHAM ARIYORSAN</span><button onClick={() => a.setActivePage('explore')}>Tümünü keşfet <ArrowRight size={13} /></button></div>
        <div className="prompt-grid">{prompts.slice(0, 4).map(item => <PromptCard key={item.id} item={item} onClick={a.setDraft} />)}</div>
      </div>}
      <footer className="chat-footer"><span>PwnAI hata yapabilir. Önemli bilgileri doğrula.</span><span><LockKeyhole size={11} /> Bu cihazda saklanır</span></footer>
    </div>
  </section>;
}