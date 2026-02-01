
import React, { useState } from 'react';

interface DatePickerProps {
  onNext: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onNext }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) onNext(date);
  };

  return (
    <div className="w-full max-w-sm glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl">
      <h3 className="text-2xl text-center font-romantic text-pink-300 mb-8">
        When should this bava take his mardhal on a date? 💕
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative group">
          <input 
            type="date" 
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-pink-500/50 transition-all text-center text-lg"
            style={{ colorScheme: 'dark' }}
          />
          <div className="absolute inset-0 rounded-2xl pointer-events-none border border-pink-500/0 group-focus-within:border-pink-500/30 transition-all"></div>
        </div>

        <button 
          disabled={!date}
          className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl disabled:opacity-30 disabled:grayscale shadow-xl active:scale-95 transition-all glow-pink"
        >
          Next ❤️
        </button>
      </form>
    </div>
  );
};

export default DatePicker;
