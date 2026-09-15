import { useState, useEffect, useRef } from "react";
import { mockResponses } from "../data/mockResponses.js";

let messageId = 0;

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const responseIndex = useRef(0);

  const addMessage = (role, content) => {
    setMessages((prev) => [
      ...prev,
      { id: ++messageId, role, content }
    ]);
  };

  const sendMessage = (userText) => {
    addMessage("user", userText);
    setIsBotTyping(true);
  };

  // Simulate bot response after a short delay
  useEffect(() => {
    if (!isBotTyping) return;

    const timer = setTimeout(() => {
      const botReply =
        mockResponses[responseIndex.current % mockResponses.length];
      responseIndex.current += 1;
      addMessage("bot", botReply);
      setIsBotTyping(false);
    }, 1200 + Math.random() * 800);

    return () => clearTimeout(timer);
  }, [isBotTyping]);

  return { messages, sendMessage, isBotTyping };
}