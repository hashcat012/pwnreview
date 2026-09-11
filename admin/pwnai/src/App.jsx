import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import PromptBar from './components/PromptBar';
import './styles/globals.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [history] = useState([
    { id: 1, title: 'Güvenlik Analizi' },
    { id: 2, title: 'React Mimarisi' }
  ]);

  const handleSend = (text) => {
    setMessages([...messages, { role: 'user', content: text }, { role: 'ai', content: 'İşleniyor...' }]);
  };

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar history={history} onNewChat={() => setMessages([])} />
      <div className="flex-1 flex flex-col">
        <ChatArea messages={messages} />
        <PromptBar onSend={handleSend} />
      </div>
    </div>
  );
}