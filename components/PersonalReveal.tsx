import React from 'react';

interface PersonalRevealProps {
  onComplete: () => void;
}

const PersonalReveal: React.FC<PersonalRevealProps> = ({ onComplete }) => {
  const reasons = [
    "Your laugh is the best sound I've ever heard.",
    "The way you handle my drama like a pro.",
    "Your kindness that makes me want to be better.",
    "Because in this chaotic Tom & Jerry world, you're my peace.",
    "I chose you because my heart refused anyone else ❤️"
  ];

  return (
    <div className="w-full max-w-sm glass p-10 rounded-[3rem] animate-slide-up border border-pink-500/20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      
      <div className="text-center mb-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-pink-300 opacity-60 mb-2">A Secret Note 💌</p>
        <h3 className="text-3xl font-romantic text-pink-400">Why I Chose You</h3>
      </div>

      <div className="space-y-6">
        {reasons.map((r, i) => (
          <div 
            key={i} 
            className="flex items-start gap-4 animate-slide-up" 
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <span className="text-pink-500 text-lg">✨</span>
            <p className="text-sm text-gray-200 leading-relaxed italic">{r}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button 
          onClick={onComplete}
          className="w-full py-5 bg-white text-rose-600 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-white"
        >
          See Our Memory ❤️
        </button>
      </div>
    </div>
  );
};

export default PersonalReveal;