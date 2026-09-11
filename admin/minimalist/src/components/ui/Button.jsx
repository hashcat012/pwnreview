import React from 'react';
import { clsx } from 'clsx';

export default function Button({ children, className, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-white text-zinc-950 hover:bg-zinc-200',
    secondary: 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
  };
  return (
    <button className={clsx('px-4 py-2 rounded-md text-sm font-medium transition-all', variants[variant], className)} {...props}>
      {children}
    </button>
  );
}