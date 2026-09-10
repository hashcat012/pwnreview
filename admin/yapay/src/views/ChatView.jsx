import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatView({ messages, setMessages }) {
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), role: 'user', content: input }]);
    setInput('');
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: 'Bu bir simülasyon yanıtıdır.' }]);
    }, 1000);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4">
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 p-4">
        {messages.map((m) => (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${m.role === 'assistant' ? 'bg-indigo-500' : 'bg-zinc-700'}`}>
              {m.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'assistant' ? 'bg-zinc-800' : 'bg-indigo-600 text-white'}`}>
              {m.content}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="p-4 border-t border-zinc-800">
        <div className="relative flex items-center">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mesajınızı yazın..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:border-indigo-500 transition-all"
          />
          <button onClick={handleSend} className="absolute right-2 p-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}