import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import AppLayout from './layouts/AppLayout';
import ChatPage from './pages/ChatPage';
import ExplorePage from './pages/ExplorePage';
import SettingsPage from './pages/SettingsPage';

function Router() {
  const { activePage } = useApp();
  const pages = { chat: ChatPage, explore: ExplorePage, settings: SettingsPage };
  const Page = pages[activePage] || ChatPage;
  return <AppLayout><Page /></AppLayout>;
}
export default function App() {
  return <AppProvider><Router /></AppProvider>;
}