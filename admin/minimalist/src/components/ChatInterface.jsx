import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function ChatInterface({ activeChat }) {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Merhaba! Size nasıl yardımcı olabilirim?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), role: 'user', content: input }]);
    setInput('');
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col h-screen bg-zinc-950">
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-2xl px-4 py-3 rounded-lg ${m.role === 'user' ? 'bg-white text-zinc-950' : 'bg-zinc-900 text-zinc-100 border border-zinc-800'}`}>
              {m.content}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <div className="p-4 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto relative">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-md py-3 px-4 pr-12 focus:outline-none focus:border-zinc-500"
            placeholder="Mesajınızı yazın..."
          />
          <button onClick={handleSend} className="absolute right-2 top-2 p-1.5 hover:bg-zinc-800 rounded transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}