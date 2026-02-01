
import React, { useState } from 'react';

interface EmotionalReflectionProps {
  onNext: (emotion: string, oneWord: string) => void;
}

const EmotionalReflection: React.FC<EmotionalReflectionProps> = ({ onNext }) => {
  const [emotion, setEmotion] = useState('');
  const [oneWord, setOneWord] = useState('');

  const emotions = [
    { label: 'Happy 😍', val: 'happy' },
    { label: 'Shy 😊', val: 'shy' },
    { label: 'Emotional 🥹', val: 'emotional' },
    { label: 'Laughing 😄', val: 'laughing' },
    { label: 'Blushing 😳', val: 'blushing' }
  ];

  return (
    <div className="w-full max-w-sm glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl flex flex-col gap-8">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-pink-300/60 mb-2">My Mardhal... 😌</p>
        <h3 className="text-2xl font-romantic text-pink-400 leading-tight">How did your Bava's chase make you feel?</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {emotions.map(e => (
          <button
            key={e.val}
            onClick={() => setEmotion(e.val)}
            className={`py-4 px-2 rounded-xl border text-sm transition-all duration-300 active:scale-95 ${
              emotion === e.val ? 'bg-pink-600 border-pink-500 shadow-lg text-white font-bold' : 'bg-white/5 border-white/5 opacity-70 text-gray-300'
            }`}
          >
            {e.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <label className="block text-center text-gray-300 text-sm italic">
          “Describe our bond in one word for Bava?”
        </label>
        <input
          type="text"
          value={oneWord}
          onChange={(e) => setOneWord(e.target.value)}
          placeholder="Home? Destiny? Us?"
          className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-center focus:outline-none focus:border-pink-500/50 transition-all text-white placeholder-white/20"
        />
      </div>

      <button 
        disabled={!emotion || !oneWord}
        onClick={() => onNext(emotion, oneWord)}
        className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-pink disabled:opacity-20"
      >
        Tell Bava ❤️
      </button>
    </div>
  );
};

export default EmotionalReflection;
