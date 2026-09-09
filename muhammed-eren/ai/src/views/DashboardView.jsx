import React from 'react';
import { motion } from 'framer-motion';

export default function DashboardView({ items }) {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-3xl font-bold">Hoş Geldiniz</h2>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div whileHover={{ y: -5 }} key={item.id} className="glass p-6 rounded-2xl">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <span className="text-xs uppercase text-zinc-500">{item.type}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}