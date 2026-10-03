import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ChatArea({ messages, setMessages }) {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: "Veri işlendi: " + userMsg.content }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-[#050505] relative">
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide" ref={scrollRef}>
        {messages.map((m) => (
          <div key={m.id} className={cn("flex gap-4 max-w-3xl mx-auto", m.role === 'user' ? "justify-end" : "")}>
            {m.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0"><Bot size={16} className="text-indigo-400" /></div>}
            <div className={cn("px-4 py-2 rounded-xl text-sm", m.role === 'user' ? "bg-indigo-600 text-white" : "glass")}>{m.content}</div>
          </div>
        ))}
        {isTyping && <div className="max-w-3xl mx-auto px-4"><Loader2 className="animate-spin text-indigo-400" size={20} /></div>}
      </div>
      <div className="p-4 bg-[#050505] border-t border-white/5">
        <div className="max-w-3xl mx-auto relative">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none" placeholder="Mesaj gönder..." />
          <button onClick={handleSend} className="absolute right-2 top-2 p-1.5 bg-indigo-600 rounded-lg text-white"><Send size={16} /></button>
        </div>
      </div>
    </div>
  );
}