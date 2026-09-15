import React from "react";
import { Bot, User } from "lucide-react";
import clsx from "clsx";

export default function ChatMessage({ id, role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={clsx(
        "flex gap-3",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className={clsx("flex-shrink-0", isUser ? "order-2" : "order-1")}>
        {isUser ? (
          <User className="text-indigo-400" size={24} />
        ) : (
          <Bot className="text-emerald-400" size={24} />
        )}
      </div>

      <div
        className={clsx(
          "max-w-[70%] rounded-xl p-3 text-sm",
          isUser
            ? "bg-indigo-600/70 text-white"
            : "bg-zinc-800/70 text-zinc-200"
        )}
      >
        {content}
      </div>
    </div>
  );
}