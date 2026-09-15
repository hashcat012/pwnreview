import React, { useState } from "react";
import { Send } from "lucide-react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Mesajınızı yazın..."
        className="flex-1 rounded-xl bg-zinc-800/60 border border-white/10 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center gap-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-white transition-colors"
      >
        <Send size={18} />
        Gönder
      </button>
    </form>
  );
}