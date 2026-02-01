
import React from 'react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  return (
    <div className="w-full max-w-md glass rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-slide-up border border-white/10 relative overflow-hidden h-[85vh] max-h-[700px] flex flex-col justify-between film-grain">
      
      {/* Cinematic Spotlight Backdrop */}
      <div className="absolute inset-0 spotlight opacity-40"></div>

      {/* Elegant Visual Stage */}
      <div className="relative h-48 w-full flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-white/5 shadow-inner">
        <div className="flex flex-col items-center animate-slide-up">
          <div className="text-7xl text-pink-500 animate-heartbeat drop-shadow-[0_0_30px_rgba(255,77,109,0.8)]">❤️</div>
        </div>
        
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none"></div>
      </div>
      
      {/* Narrative Text - Focused on the Tom & Jerry theme */}
      <div className="flex-grow flex flex-col justify-center space-y-5 text-gray-200 text-center px-4 relative z-10 py-6">
        <div className="space-y-6 text-sm md:text-base leading-relaxed animate-slide-up">
          <p className="opacity-90 font-medium">
            “Tom and Jerry tease, fight, and run…<br/>
            <span className="text-pink-400">but they never leave each other.</span>”
          </p>
          
          <div className="w-8 h-px bg-white/10 mx-auto"></div>

          <p className="opacity-80 italic">
            Just like bava & mardhal —<br/>
            childhood teasing, small fights, silent care…<br/>
            <span className="text-white font-semibold">destiny always pulls them back.</span>
          </p>
          
          <p className="font-bold text-pink-400 text-lg leading-snug">
            No matter how much Jerry runs,<br/>
            this bava will always chase with love.
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="animate-slide-up">
        <button 
          onClick={onComplete}
          className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(225,29,72,0.4)] transition-all active:scale-95 glow-pink uppercase tracking-widest border border-white/10"
        >
          Listen to Bava ✨
        </button>
      </div>
    </div>
  );
};

export default Intro;
