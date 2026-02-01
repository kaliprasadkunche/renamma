
import React, { useState } from 'react';

interface PersonaPickerProps {
  onNext: (character: string, favLine: string) => void;
}

const PersonaPicker: React.FC<PersonaPickerProps> = ({ onNext }) => {
  const [character, setCharacter] = useState('');
  const [line, setLine] = useState('');

  const personas = [
    { name: 'My Naughty Mardhal 🐭', desc: 'Playful, smart, and always escapes!', id: 'mardhal' },
    { name: 'My Sweet Angel 👼', desc: 'Kind, emotional, and caring', id: 'angel' },
    { name: 'My Best Friend 🌸', desc: 'Supports Bava in everything', id: 'bestie' }
  ];

  const lines = [
    "Always fighting, never leaving",
    "Bava's choice forever ❤️",
    "My peace in this chaos",
    "Destiny brought us here"
  ];

  return (
    <div className="w-full max-w-md glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl flex flex-col gap-6">
      <div className="text-center">
        <h3 className="text-2xl font-romantic text-pink-400">Who are you to your Bava? 🌹</h3>
      </div>

      <div className="space-y-3">
        {personas.map(p => (
          <button
            key={p.id}
            onClick={() => setCharacter(p.id)}
            className={`w-full p-5 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
              character === p.id ? 'bg-pink-600/30 border-pink-500 shadow-lg scale-[1.02]' : 'bg-white/5 border-white/5 opacity-60'
            }`}
          >
            <div>
              <p className="font-bold text-white">{p.name}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50 text-pink-100">{p.desc}</p>
            </div>
            {character === p.id && <span className="text-pink-400 text-xl">✓</span>}
          </button>
        ))}
      </div>

      <div className="space-y-3 mt-4">
        <p className="text-center text-xs italic text-gray-400">Which line describes us best, my Mardhal?</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {lines.map(l => (
            <button
              key={l}
              onClick={() => setLine(l)}
              className={`px-5 py-2 rounded-full text-[11px] border transition-all duration-300 ${
                line === l ? 'bg-white text-rose-600 border-white font-bold' : 'bg-white/5 border-white/10 opacity-70 text-gray-300'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <button 
        disabled={!character || !line}
        onClick={() => onNext(character, line)}
        className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-pink disabled:opacity-20"
      >
        Almost There ✨
      </button>
    </div>
  );
};

export default PersonaPicker;
