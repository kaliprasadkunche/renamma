
import React, { useState } from 'react';
import { UserResponseData } from '../types';

interface ExpectationsInputProps {
  formData: UserResponseData;
  onConfirm: (expectations: string[], other: string) => void;
}

const ExpectationsInput: React.FC<ExpectationsInputProps> = ({ formData, onConfirm }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = [
    "Respect & understanding",
    "Honest communication",
    "Emotional support",
    "Fun & laughter 😄",
    "Time & attention",
    "Patience"
  ];

  const toggleOption = (opt: string) => {
    setSelected(prev => 
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    );
  };

  const handleFinalConfirm = () => {
    setIsSubmitting(true);
    // Directly confirm to proceed to FinalScreen where WhatsApp sharing happens
    onConfirm(selected, other);
  };

  return (
    <div className="w-full max-w-md glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl flex flex-col h-[90vh] max-h-[600px]">
      <div className="text-center mb-6 flex-shrink-0">
        <h3 className="text-2xl font-romantic text-pink-400 mb-2">Every relationship needs understanding 💕</h3>
        <p className="text-gray-300 text-sm italic">What do you expect from this bava? <br/> Or what do you need to feel happy & safe with me?</p>
      </div>

      <div className="flex-grow overflow-y-auto space-y-3 pr-2 scrollbar-hide">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => toggleOption(opt)}
            className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
              selected.includes(opt) 
                ? 'bg-pink-600/30 border-pink-500 shadow-lg' 
                : 'bg-white/5 border-white/5 opacity-70'
            }`}
          >
            <span className="font-medium">{opt}</span>
            {selected.includes(opt) && <span className="text-pink-400">✓</span>}
          </button>
        ))}
        
        <div className="space-y-2 mt-4">
          <p className="text-xs text-pink-300/50 uppercase font-bold px-2">Something else...</p>
          <input 
            type="text"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            placeholder="Tell me… I’m listening 😌"
            className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-pink-500/50 transition-all"
          />
        </div>
      </div>

      <div className="pt-6 flex-shrink-0">
        <button 
          onClick={handleFinalConfirm}
          disabled={isSubmitting}
          className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-pink disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "Confirm ❤️"}
        </button>
      </div>
    </div>
  );
};

export default ExpectationsInput;
