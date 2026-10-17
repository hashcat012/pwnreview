import React from 'react';
export default function Brand({ large = false }) {
  return <span className={`brand-symbol ${large ? 'large' : ''}`} aria-hidden="true">
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M12 34V14h13c8 0 12 4 12 10s-4 10-12 10H12Z" stroke="currentColor" strokeWidth="3.5" />
      <path d="M19 40V22h7c3 0 4 1 4 3s-1 3-4 3H6M19 8v6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  </span>;
}