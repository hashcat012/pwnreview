import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatView from './views/ChatView';
import Navbar from './components/Navbar';

export default function App() {
  const [activeView, setActiveView] = useState('chat');
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Merhaba! Ben AI Nexus. Size nasıl yardımcı olabilirim?' }
  ]);

  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col h-full">
        <Navbar />
        <main className="flex-1 overflow-hidden">
          {activeView === 'chat' && <ChatView messages={messages} setMessages={setMessages} />}
        </main>
      </div>
    </div>
  );
}