import React, { useMemo, useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { prompts } from '../data/prompts';
import { useApp } from '../context/AppContext';
import PromptCard from '../components/PromptCard';

export default function ExplorePage() {
  const a = useApp();
  const [category, setCategory] = useState('Tümü');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => prompts.filter(p =>
    (category === 'Tümü' || p.category === category) &&
    `${p.title} ${p.text}`.toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr'))
  ), [category, query]);
  return <section className="content-page">
    <div className="eyebrow"><Sparkles size={15} /> FİKRİNDEN FAZLASI</div>
    <h1>Bir yerden <span>başla.</span></h1>
    <p className="page-description">Boş bir sayfayı, yeni bir olasılığa dönüştür.</p>
    <div className="explore-toolbar">
      <div className="filter-tabs">{['Tümü', 'Yazı', 'Kod', 'Fikir', 'Öğrenme'].map(c => <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>)}</div>
      <label className="explore-search"><Search size={16} /><span className="sr-only">Komutlarda ara</span><input value={query} onChange={e => setQuery(e.target.value)} aria-label="Komutlarda ara" /></label>
    </div>
    <div className="explore-grid">{filtered.map(item => <PromptCard key={item.id} item={item} onClick={text => { a.newChat(); a.setDraft(text); }} />)}</div>
    {!filtered.length && <div className="empty-state"><Search size={30} /><h2>Bu fikir henüz burada yok.</h2><p>Başka bir kelime veya kategori dene.</p><button className="light-button" onClick={() => { setCategory('Tümü'); setQuery(''); }}>Filtreleri temizle</button></div>}
    <div className="catalog-footer">{filtered.length} başlangıç noktası <span>Seç. Özelleştir. Birlikte geliştir.</span></div>
  </section>;
}