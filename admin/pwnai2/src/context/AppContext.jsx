import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { demoReply } from '../services/demoReply';

const Context = createContext(null);
export const useApp = () => useContext(Context);

export function AppProvider({ children }) {
  const [activePage, setActivePage] = useState('chat');
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useLocalStorage('pwnai.chats.v1', []);
  const [settings, setSettings] = useLocalStorage('pwnai.settings.v1', { tone: 75, name: 'Misafir', compact: false });
  const [selectedItem, setSelectedItem] = useState(null);
  const [model, setModel] = useState('PwnAI Core');
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [toast, setToast] = useState('');
  const timer = useRef(null);
  const chat = items.find(item => item.id === selectedItem);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(id);
  }, [toast]);
  function newChat() {
    setSelectedItem(null); setDraft(''); setActivePage('chat'); setSidebar(false);
  }
  function openChat(id) {
    setSelectedItem(id); setActivePage('chat'); setShowModal(false); setSidebar(false);
  }
  function send(input = draft) {
    const text = input.trim();
    if (!text || busy) return;
    const id = selectedItem || crypto.randomUUID();
    const message = { id: crypto.randomUUID(), role: 'user', text };
    setItems(prev => {
      const found = prev.find(item => item.id === id);
      return found
        ? prev.map(item => item.id === id ? { ...item, messages: [...item.messages, message] } : item)
        : [{ id, title: text.slice(0, 42), messages: [message], created: Date.now() }, ...prev];
    });
    setSelectedItem(id); setDraft(''); setActivePage('chat'); setBusy(true);
    timer.current = setTimeout(() => {
      const response = { id: crypto.randomUUID(), role: 'assistant', text: demoReply(text, model) };
      setItems(prev => prev.map(item => item.id === id ? { ...item, messages: [...item.messages, response] } : item));
      setBusy(false);
    }, 1000);
  }
  function stop() { clearTimeout(timer.current); setBusy(false); setToast('Yanıt durduruldu.'); }
  function removeChat(id) {
    setItems(prev => prev.filter(item => item.id !== id));
    if (selectedItem === id) newChat();
    setToast('Sohbet silindi.');
  }
  return <Context.Provider value={{
    activePage, setActivePage, showModal, setShowModal, searchQuery, setSearchQuery,
    items, setItems, selectedItem, settings, setSettings, model, setModel,
    draft, setDraft, busy, sidebar, setSidebar, toast, setToast, chat,
    newChat, openChat, send, stop, removeChat
  }}>{children}</Context.Provider>;
}