import React from 'react';
import { Code2, PenLine, Sparkles, BookOpen, ArrowUpRight } from 'lucide-react';
const icons = { code: Code2, pen: PenLine, spark: Sparkles, book: BookOpen };

export default function PromptCard({ item, onClick }) {
  const Icon = icons[item.icon];
  return <button className="prompt-card" onClick={() => onClick(item.text)}>
    <span className="card-top"><Icon size={19} strokeWidth={1.5} /><ArrowUpRight className="card-arrow" size={16} /></span>
    <b>{item.title}</b><small>{item.text}</small>
  </button>;
}