
import React, { useEffect } from 'react';
import { UserResponseData } from '../types';

declare const emailjs: any;

interface FinalScreenProps {
  responseData: UserResponseData;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ responseData }) => {
  const formattedDate = responseData.selectedDate 
    ? new Date(responseData.selectedDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'To be decided';

  useEffect(() => {
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    
    if (typeof emailjs !== 'undefined') {
      const emailParams = {
        to_name: "Bava",
        from_name: "Renamma",
        emotion: responseData.emotion,
        one_word: responseData.oneWord,
        character: responseData.character,
        fav_line: responseData.favLine,
        date: formattedDate,
        never_change: responseData.neverChange.join(', '),
        looking_forward: responseData.lookingForward,
        boundaries: responseData.boundaries || 'No boundaries mentioned.'
      };

      emailjs.send(serviceId, templateId, emailParams)
        .then(() => console.log('💖 Email sent silently!'))
        .catch((err: any) => console.error('Email failed:', err));
    }
  }, [responseData, formattedDate]);

  const shareText = encodeURIComponent(
    `💖 She Said YES! 💖\n\n` +
    `Bava finally caught his Mardhal! ❤️\n` +
    `📅 Date: ${formattedDate}\n` +
    `💭 Our Word: ${responseData.oneWord}\n` +
    `✨ Emotion: ${responseData.emotion}\n\n` +
    `Every heart needs a home... and I found mine in you, Renamma.`
  );
  
  const whatsappUrl = `https://wa.me/?text=${shareText}`;

  return (
    <div className="w-full max-w-md text-center p-6 space-y-8 animate-[zoomIn_0.6s]">
      <div id="memory-card" className="relative inline-block group w-full">
        {/* Animated outer glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative glass rounded-[2.5rem] overflow-hidden flex flex-col bg-black/80 border border-white/10 shadow-2xl">
          {/* THE PORTRAIT - Explicitly using portrait.jpeg */}
          <div className="h-[450px] w-full overflow-hidden relative flex items-center justify-center bg-black">
            <img 
              src="portrait.jpeg" 
              alt="Bava & Renamma" 
              className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-110"
              loading="eager"
              style={{ display: 'block', minWidth: '100%', minHeight: '100%' }}
            />
            {/* Cinematic Overlay - subtle for clear visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-3 text-center">
              {/* Names explicitly below the photo as requested */}
              <h2 className="text-4xl font-romantic text-pink-400 tracking-wide drop-shadow-[0_2px_10px_rgba(255,77,109,0.3)]">
                Bava & Renamma
              </h2>
              <div className="w-12 h-px bg-pink-500/30 mx-auto mb-2"></div>
              <p className="text-gray-300 italic text-sm leading-relaxed px-4">
                “Every heart needs a home… <br/>and I found mine in you.”
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/5">
              <div className="border-r border-white/5">
                <p className="text-[8px] text-pink-300/60 uppercase tracking-widest font-bold">Our Date</p>
                <p className="text-sm font-bold text-white">{formattedDate}</p>
              </div>
              <div>
                <p className="text-[8px] text-pink-300/60 uppercase tracking-widest font-bold">Our Bond</p>
                <p className="text-sm font-bold text-white uppercase">{responseData.oneWord}</p>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 space-y-1">
              <p>I promise effort, respect, laughter, and love.</p>
              <p className="italic font-bold text-pink-300/40 uppercase tracking-widest">Forever Yours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(37,211,102,0.3)] active:scale-95 transition-all w-full"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
          <span>Send Card to Bava ❤️</span>
        </a>
        
        <p className="text-gray-500 text-[10px] uppercase tracking-widest animate-pulse">
          Take a screenshot to keep this memory ✨
        </p>
      </div>

      <p className="text-gray-600 text-[8px] mt-8 uppercase tracking-tighter">Destiny always pulls us back together.</p>
    </div>
  );
};

export default FinalScreen;
