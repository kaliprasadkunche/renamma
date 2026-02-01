
import React, { useState } from 'react';

interface FeelingsInputProps {
  onNext: (feelings: string) => void;
}

const FeelingsInput: React.FC<FeelingsInputProps> = ({ onNext }) => {
  const [feelings, setFeelings] = useState('');

  return (
    <div className="w-full max-w-sm glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl">
      <div className="text-center mb-6">
        <p className="text-sm uppercase tracking-widest text-pink-300/60 mb-2">A special moment 😌</p>
        <h3 className="text-2xl font-romantic text-pink-400">Before we go ahead... I want to hear you</h3>
      </div>
      
      <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/5">
        <p className="text-gray-300 text-center italic text-md mb-4 leading-relaxed">
          “In your own words… what do you feel about us? 💭”
        </p>
        
        <textarea 
          value={feelings}
          onChange={(e) => setFeelings(e.target.value)}
          placeholder="Write anything… funny, shy, serious, emotional… this bava will read it carefully ❤️"
          className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-white/20 resize-none h-40 scrollbar-hide text-center"
        />
      </div>

      <button 
        onClick={() => onNext(feelings)}
        className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-pink"
      >
        Next 💖
      </button>
      
      <p className="text-[10px] text-center text-white/20 mt-4 uppercase tracking-tighter">Optional, but your heart matters</p>
    </div>
  );
};

export default FeelingsInput;
