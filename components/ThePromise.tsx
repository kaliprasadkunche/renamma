import React, { useState } from 'react';

interface ThePromiseProps {
  onNext: (neverChange: string[], lookingForward: string, boundaries: string) => void;
}

const ThePromise: React.FC<ThePromiseProps> = ({ onNext }) => {
  const [neverChange, setNeverChange] = useState<string[]>([]);
  const [lookingForward, setLookingForward] = useState('');
  const [boundaries, setBoundaries] = useState('');

  const options = ["Respect", "Laughter", "Trust", "Friendship", "Care", "Honesty"];

  const toggle = (opt: string) => {
    setNeverChange(prev => prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]);
  };

  return (
    <div className="w-full max-w-md glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl flex flex-col h-[85vh] max-h-[700px]">
      <div className="flex-grow overflow-y-auto space-y-8 pr-2 scrollbar-hide">
        <div className="text-center">
          <h3 className="text-xl font-romantic text-pink-400">One thing we should never lose? 🫶</h3>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => toggle(opt)}
                className={`px-4 py-2 rounded-full text-xs border transition-all ${
                  neverChange.includes(opt) ? 'bg-pink-500 border-pink-500' : 'bg-white/5 border-white/10 opacity-60'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">Looking forward to... 🌸</h3>
          <textarea
            value={lookingForward}
            onChange={(e) => setLookingForward(e.target.value)}
            placeholder="Talking more? Laughing more? Everything? 😌"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:outline-none focus:border-pink-500/50 min-h-[100px]"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">Safety & Comfort 🫂</h3>
          <p className="text-[10px] text-center text-white/30 italic">Anything you want me to be careful about? I'm listening.</p>
          <textarea
            value={boundaries}
            onChange={(e) => setBoundaries(e.target.value)}
            placeholder="Tell me... your comfort matters more than my happiness ❤️"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:outline-none focus:border-pink-500/50 min-h-[80px]"
          />
        </div>
      </div>

      <button 
        onClick={() => onNext(neverChange, lookingForward, boundaries)}
        className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-pink mt-6"
      >
        Confirm Promises ❤️
      </button>
    </div>
  );
};

export default ThePromise;