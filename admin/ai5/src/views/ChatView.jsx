import React from "react";
import { useChat } from "../hooks/useChat.js";
import ChatMessage from "../components/ChatMessage.jsx";
import MessageInput from "../components/MessageInput.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatView() {
  const { messages, sendMessage, isBotTyping } = useChat();

  return (
    <section className="flex flex-col h-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">🗨️ Gerçek‑Zamanlı Sohbet</h1>

      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-zinc-900/60 rounded-xl border border-white/10 backdrop-blur-md mb-4">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <ChatMessage {...msg} />
            </motion.div>
          ))}
        </AnimatePresence>
        {isBotTyping && (
          <div className="flex items-center gap-2 text-zinc-400 animate-pulse">
            <span className="w-2 h-2 bg-indigo-500 rounded-full" />
            Bot yanıt oluşturuyor...
          </div>
        )}
      </div>

      <MessageInput onSend={sendMessage} />
    </section>
  );
}