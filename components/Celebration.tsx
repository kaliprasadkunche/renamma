
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationProps {
  onNext: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ onNext }) => {
  useEffect(() => {
    const end = Date.now() + (4 * 1000);
    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4d6d', '#c9184a']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4d6d', '#c9184a']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="text-center glass p-10 rounded-[3.5rem] max-w-sm animate-slide-up border-2 border-pink-500/20 shadow-[0_0_60px_rgba(255,77,109,0.3)] film-grain relative overflow-hidden">
      <div className="absolute inset-0 spotlight opacity-20"></div>
      
      <div className="relative mb-8 z-10">
        <div className="w-64 h-64 mx-auto rounded-full border-4 border-pink-500/30 overflow-hidden shadow-[0_0_40px_rgba(255,77,109,0.6)] animate-heartbeat bg-black ring-8 ring-pink-500/10">
          <img 
            src="portrait.jpeg" 
            alt="Bava & Renamma" 
            className="w-full h-full object-cover block"
            loading="eager"
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </div>
      </div>
      
      <h2 className="text-4xl font-romantic text-pink-400 mb-6 stagger-1 animate-slide-up z-10">
        Finally Caught You!
      </h2>
      
      <div className="space-y-4 text-lg text-gray-200 mb-10 leading-relaxed stagger-2 animate-slide-up z-10">
        <div className="space-y-2">
          <p className="opacity-90 text-xl font-medium">
            Plot twist…
          </p>
          <p className="italic text-pink-300 text-2xl font-romantic">
            Jerry got tired 😄
          </p>
        </div>
        
        <p className="font-black text-white text-5xl py-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Love won
        </p>

        <p className="text-sm text-pink-200/60 pt-4 border-t border-white/5">
          You are Bava's forever now, Renamma. 😌
        </p>
      </div>

      <button 
        onClick={onNext}
        className="w-full py-5 bg-white text-rose-600 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest relative z-10 glow-pink"
      >
        Tell Bava more ✨
      </button>
    </div>
  );
};

export default Celebration;
