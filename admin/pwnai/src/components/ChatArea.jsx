import React from 'react';

export default function ChatArea({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8">
      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-zinc-600">
          <h2 className="text-2xl font-bold text-zinc-400">PwnAI'a Başla</h2>
          <p>Bir komut göndererek süreci başlat.</p>
        </div>
      )}
      {messages.map((msg, idx) => (
        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-zinc-800'}`}>
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}