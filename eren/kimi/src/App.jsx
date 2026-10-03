import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import { initialChats, initialMessages } from './data/mockData';
import './styles/globals.css';

export default function App() {
  const [chats] = useState(initialChats);
  const [activeChat, setActiveChat] = useState(1);
  const [messages, setMessages] = useState(initialMessages);

  return (
    <div className="flex h-screen w-full bg-[#050505] text-zinc-100 overflow-hidden">
      <Sidebar chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />
      <ChatArea messages={messages} setMessages={setMessages} />
    </div>
  );
}