import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';

export default function App() {
  const [activeChat, setActiveChat] = useState('1');
  const [chats] = useState([
    { id: '1', title: 'JavaScript Optimizasyonu' },
    { id: '2', title: 'React Mimarisi' }
  ]);

  return (
    <div className="flex h-screen w-full font-sans">
      <Sidebar chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />
      <ChatInterface activeChat={activeChat} />
    </div>
  );
}