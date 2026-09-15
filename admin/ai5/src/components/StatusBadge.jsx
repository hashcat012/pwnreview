import React from "react";
import clsx from "clsx";

export default function StatusBadge({ status }) {
  const colors = {
    online: "bg-emerald-500/20 text-emerald-400 border-emerald-400",
    offline: "bg-zinc-700/30 text-zinc-400 border-zinc-600",
    busy: "bg-amber-500/20 text-amber-400 border-amber-400",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colors[status] || colors.offline
      )}
    >
      {status}
    </span>
  );
}