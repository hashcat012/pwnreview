import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function PromptBar({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto relative">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="PwnAI'a bir şeyler yaz..."
          className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 pl-12 pr-12 focus:outline-none focus:border-indigo-500 transition-all placeholder:text-zinc-600"
        />
        <Sparkles className="absolute left-4 top-4.5 text-indigo-500" size={20} />
        <button className="absolute right-4 top-4 text-zinc-400 hover:text-indigo-400">
          <Send size={20} />
        </button>
      </div>
    </form>
  );
}