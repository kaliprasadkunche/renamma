
import React, { useState, useCallback, useRef, useEffect } from 'react';

interface ProposalGameProps {
  onYes: () => void;
}

interface Ghost {
  id: number;
  x: number;
  y: number;
}

const ProposalGame: React.FC<ProposalGameProps> = ({ onYes }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [yesPos, setYesPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [isEscaping, setIsEscaping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSad, setIsSad] = useState(false);
  const [ghosts, setGhosts] = useState<Ghost[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const playfulTaunts = [
    "Hey mardhal… not so easy 😉",
    "Nice try, mardhal",
    "Almost caught 😄",
    "You’re too quick",
    "This bava is watching",
    "Running isn’t leaving",
    "Tom is still waiting",
    "You know the answer"
  ];

  const phase2Messages = [
    "Hey mardhal… why so serious?",
    "That made Tom a little quiet…",
    "Hmm… this feels different now",
    "This bava is still here",
    "Silence says a lot"
  ];

  const phase3Messages = [
    "Please click YES",
    "Tom is still waiting",
    "This story needs a YES",
    "Your YES changes everything",
    "No rush… but Tom believes"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setYesPos({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const moveNoButton = useCallback(() => {
    if (attempts >= 8) return;

    if (!hasInteracted) {
      setHasInteracted(true);
    }

    const btnSize = 96; 
    const padding = 80;
    const maxX = (window.innerWidth / 2) - (btnSize / 2) - padding;
    const maxY = (window.innerHeight / 2) - (btnSize / 2) - padding;
    
    let nextX = 0;
    let nextY = 0;
    let distance = 0;
    let tryCount = 0;
    const minTravelDistance = Math.min(window.innerWidth, window.innerHeight) * 0.3;

    do {
      nextX = (Math.random() - 0.5) * 2 * maxX;
      nextY = (Math.random() - 0.5) * 2 * maxY;
      
      const distFromCenter = Math.sqrt(Math.pow(nextX, 2) + Math.pow(nextY, 2));
      if (distFromCenter < 140) {
        distance = 0; 
      } else {
        distance = Math.sqrt(Math.pow(nextX - noPos.x, 2) + Math.pow(nextY - noPos.y, 2));
      }
      tryCount++;
    } while (distance < minTravelDistance && tryCount < 50);

    const newGhost = { id: Date.now(), x: noPos.x, y: noPos.y };
    setGhosts(prev => [...prev.slice(-2), newGhost]);

    setNoPos({ x: nextX, y: nextY });
    setIsEscaping(true);
    setCurrentMessage(playfulTaunts[attempts]);
    setAttempts(prev => prev + 1);
    
    setTimeout(() => setIsEscaping(false), 2000);
    setTimeout(() => {
      setGhosts(prev => prev.filter(g => g.id !== newGhost.id));
    }, 800);
  }, [attempts, noPos, hasInteracted]);

  const handleNoClick = () => {
    if (attempts < 8) {
      moveNoButton();
      return;
    }

    const clickIndex = attempts - 8;
    
    if (clickIndex < phase2Messages.length) {
      setIsSad(true);
      setCurrentMessage(phase2Messages[clickIndex]);
      setIsEscaping(true);
      setAttempts(prev => prev + 1);
      setTimeout(() => setIsEscaping(false), 2500);
    } 
    else {
      const p3Index = clickIndex - phase2Messages.length;
      const safeIndex = Math.min(p3Index, phase3Messages.length - 1);
      setCurrentMessage(phase3Messages[safeIndex]);
      setIsEscaping(true);
      setAttempts(prev => prev + 1);
      setTimeout(() => setIsEscaping(false), 2500);
    }
  };

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center space-y-12 select-none overflow-hidden relative transition-colors duration-1000 ${isSad ? 'bg-rose-950/10' : ''}`}>
      
      <div className={`fixed inset-x-0 top-24 z-50 flex justify-center transition-all duration-700 pointer-events-none transform ${isEscaping && currentMessage ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="bg-white/90 backdrop-blur-md text-rose-600 px-8 py-4 rounded-full font-black shadow-[0_10px_40px_rgba(255,255,255,0.2)] border-2 border-pink-500 whitespace-nowrap text-xl animate-bounce">
          {currentMessage}
        </div>
      </div>

      <div className="text-center animate-slide-up relative z-10">
        <h1 className="text-5xl md:text-7xl font-romantic text-pink-400 mb-4 drop-shadow-[0_0_20px_rgba(255,77,109,0.5)]">
          Renamma
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-romantic tracking-wider italic">
          will you be my valentine ?
        </p>
      </div>

      <div className="flex items-center justify-center relative w-full h-[400px]">
        
        <div 
          className="animate-slide-up stagger-2 relative z-20 transition-all duration-1000 ease-in-out"
          style={{ 
            transform: `translate(${!hasInteracted ? '-70px' : '0px'}) translate(${yesPos.x}px, ${yesPos.y}px)` 
          }}
        >
          {/* Portrait Reveal Phase */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-32 h-32 flex items-center justify-center pointer-events-none">
            {attempts >= 8 ? (
              <div className="w-full h-full rounded-full border-4 border-pink-500 overflow-hidden shadow-[0_0_30px_rgba(255,77,109,0.5)] animate-heartbeat bg-black">
                <img 
                  src="portrait.jpeg" 
                  alt="Bava & Renamma" 
                  className="w-full h-full object-cover block"
                  loading="eager"
                  style={{ display: 'block', minWidth: '100%', minHeight: '100%' }}
                />
              </div>
            ) : (
              <div className="text-5xl animate-pulse filter drop-shadow-[0_0_20px_rgba(255,77,109,0.8)]">💖</div>
            )}
          </div>
          <button
            onClick={onYes}
            className="group relative bg-gradient-to-br from-pink-600 to-rose-800 w-24 h-24 rounded-full shadow-[0_0_40px_rgba(244,114,182,0.3)] animate-heartbeat flex flex-col items-center justify-center border border-white/20 active:scale-90 transition-all hover:scale-110"
          >
            <span className="text-xl font-black text-white drop-shadow-md uppercase">Yes</span>
          </button>
        </div>

        {ghosts.map(ghost => (
          <div
            key={ghost.id}
            className="absolute w-24 h-24 bg-pink-600/20 border border-white/5 rounded-full opacity-10 transition-opacity duration-1000 flex items-center justify-center"
            style={{ transform: `translate(${ghost.x}px, ${ghost.y}px) scale(0.9)` }}
          >
            <span className="text-sm font-bold text-white/5 tracking-widest uppercase">No</span>
          </div>
        ))}

        <div
          className={`absolute transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) flex items-center justify-center z-30`}
          style={{ 
            transform: !hasInteracted 
              ? `translate(70px, 0px)` 
              : `translate(${noPos.x}px, ${noPos.y}px)`
          }}
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center pointer-events-none">
             <div className={`text-2xl filter transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] ${isEscaping && attempts < 8 ? 'animate-bounce' : ''}`}>
               {isSad ? '🥹' : (attempts >= 8 ? '💗' : '😼')}
             </div>
          </div>
          
          <button
            ref={noBtnRef}
            onMouseEnter={moveNoButton}
            onClick={handleNoClick}
            onTouchStart={(e) => {
              if (attempts < 8) {
                e.preventDefault();
                moveNoButton();
              }
            }}
            className={`w-24 h-24 bg-gradient-to-br from-pink-600 to-rose-800 border border-white/20 rounded-full flex flex-col items-center justify-center relative group shadow-[0_0_40px_rgba(244,114,182,0.3)] transition-all ${attempts >= 8 ? 'cursor-pointer active:scale-95' : 'cursor-not-allowed'}`}
          >
            <span className="text-xl font-black text-white drop-shadow-md uppercase">No</span>
          </button>
        </div>
      </div>

      {attempts >= 8 && (
        <div className="animate-slide-up text-pink-400 font-bold text-center px-8 glass py-4 rounded-2xl border border-pink-500/10 max-w-[200px] relative z-10">
          <p className="text-[10px] italic text-white/70">
            {isSad ? "Jerry is finally tired of running... 😌" : "Your Bava is persistent... admit it, you're caught."}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProposalGame;
