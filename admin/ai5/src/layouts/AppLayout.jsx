import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ChatView from "../views/ChatView.jsx";
import SettingsView from "../views/SettingsView.jsx";

export default function AppLayout({
  activePage,
  setActivePage,
  showModal,
  setShowModal,
}) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 container mx-auto px-4 py-8">
        {activePage === "chat" && <ChatView />}
        {activePage === "settings" && <SettingsView />}
      </main>
      <Footer />
    </div>
  );
}