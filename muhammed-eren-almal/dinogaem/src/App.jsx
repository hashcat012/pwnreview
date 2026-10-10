import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Trophy, Play } from 'lucide-react';

export default function App() {
  // ---------- State ----------
  const [isStarted, setIsStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dinoY, setDinoY] = useState(0);          // 0 = yerde, negatif = havada
  const [obstacleX, setObstacleX] = useState(800);
  const gameLoop = useRef(null);

  // ---------- Refs for latest values ----------
  const dinoYRef = useRef(dinoY);
  const scoreRef = useRef(score);
  const isStartedRef = useRef(isStarted);
  const isGameOverRef = useRef(isGameOver);

  // Keep refs in sync
  useEffect(() => {
    dinoYRef.current = dinoY;
    scoreRef.current = score;
    isStartedRef.current = isStarted;
    isGameOverRef.current = isGameOver;
  }, [dinoY, score, isStarted, isGameOver]);

  // ---------- Game Controls ----------
  const startGame = useCallback(() => {
    setIsStarted(true);
    setIsGameOver(false);
    setScore(0);
    setObstacleX(800);
    setDinoY(0);
  }, []);

  const jump = useCallback(() => {
    // Eğer oyun başlamamışsa otomatik başlat
    if (!isStartedRef.current) {
      startGame();
      return;
    }
    // Zaten havadaysa yeni zıplama başlatma
    if (dinoYRef.current !== 0) return;

    setDinoY(-130); // Zıplama yüksekliği
    setTimeout(() => setDinoY(0), 400); // 400 ms sonra yere in
  }, [startGame]);

  // ---------- Input Listeners ----------
  useEffect(() => {
    const handleAction = (e) => {
      if (e.type === 'keydown' && e.code !== 'Space') return;
      jump();
    };
    window.addEventListener('keydown', handleAction);
    window.addEventListener('touchstart', handleAction);
    return () => {
      window.removeEventListener('keydown', handleAction);
      window.removeEventListener('touchstart', handleAction);
    };
  }, [jump]);

  // ---------- Game Loop ----------
  useEffect(() => {
    if (!isStarted) return;

    gameLoop.current = setInterval(() => {
      // Engel hareketi
      setObstacleX((prev) => {
        const next = prev - 12;

        // Çarpışma kontrolü – sadece dino yere değiyorsa (dinoY === 0)
        if (next < 104 && next > 40 && dinoYRef.current === 0) {
          setIsGameOver(true);
          setIsStarted(false);
          setHighScore((prevHigh) => Math.max(prevHigh, scoreRef.current));
        }

        // Engel ekran dışına çıktıysa yeniden başlat
        return next <= -60 ? 850 : next;
      });

      // Skor artırma
      setScore((s) => s + 1);
    }, 20);

    return () => clearInterval(gameLoop.current);
  }, [isStarted]);

  // ---------- Render ----------
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-zinc-950 font-sans p-4 select-none">
      {/* Header */}
      <div className="absolute top-10 flex gap-8 text-zinc-400 font-mono z-10">
        <div className="flex items-center gap-2"><Trophy size={18} /> HI: {highScore}</div>
        <div className="text-xl font-bold text-white">SCORE: {score}</div>
      </div>

      {/* Game Area */}
      <div
        className="relative w-full max-w-[800px] h-[200px] border-b-4 border-zinc-700 bg-zinc-900/30 rounded-lg overflow-hidden cursor-pointer"
        onClick={jump}
      >
        {/* Zemin çizgisi */}
        <div className="absolute bottom-0 w-full h-1 bg-zinc-600" />

        {/* Dino */}
        <motion.div
          animate={{ y: dinoY }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className="absolute left-10 bottom-0 w-16 h-16 bg-indigo-500 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center font-bold text-sm z-20"
        >
          DINO
        </motion.div>

        {/* Engel */}
        <div
          style={{ left: `${obstacleX}px` }}
          className="absolute bottom-0 w-12 h-20 bg-rose-500 rounded-t-md shadow-[0_0_15px_rgba(244,63,94,0.4)] z-10"
        />

        {/* Başlat / Yeniden Başlat Ekranı */}
        <AnimatePresence>
          {!isStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm z-30"
            >
              <button
                onClick={startGame}
                className="px-8 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Play size={20} /> {isGameOver ? 'TEKRAR OYNA' : 'OYUNU BAŞLAT'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Over Overlay */}
        {isGameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 backdrop-blur-md z-30"
          >
            <h2 className="text-2xl font-bold mb-4 text-rose-500">GAME OVER</h2>
            <button
              onClick={startGame}
              className="px-6 py-2 border border-zinc-700 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition-colors"
            >
              <RefreshCw size={16} /> YENİDEN BAŞLAT
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer Hint */}
      <p className="mt-8 text-zinc-500 text-sm text-center">
        Zıplamak için <b>SPACE</b> tuşuna basın veya ekrana dokunun.
      </p>
    </div>
  );
}