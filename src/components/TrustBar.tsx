import { motion } from 'motion/react';
import { ShieldCheck, Clock, Star, MapPin, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();
  
  const trustItems = [
    { icon: <Star fill="currentColor" className="w-6 h-6 md:w-8 md:h-8" />, text: t('avgRating') },
    { icon: <Flame fill="currentColor" className="w-6 h-6 md:w-8 md:h-8" />, text: t('flameGrilled') },
    { icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />, text: t('freshIngredients') },
    { icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />, text: t('fastDelivery') },
    { icon: <MapPin fill="currentColor" className="w-6 h-6 md:w-8 md:h-8" />, text: t('twentyLocations') },
  ];
  return (
    <section className="relative w-full z-20 overflow-hidden py-32 md:py-48 flex items-center justify-center -mt-20 md:-mt-32">
      
      {/* Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-burger-gold/20 blur-[100px] pointer-events-none"></div>

      {/* 1. Secondary Outline Marquee (Rotated Opposite) */}
      <div className="absolute w-[120%] -left-[10%] bg-transparent border-y border-white/5 rotate-[2deg] flex overflow-hidden py-6 opacity-30">
        <div className="flex w-[200%] animate-marquee-slow whitespace-nowrap items-center text-white">
          {[...trustItems, ...trustItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 px-16">
              <span className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter opacity-20" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
                {item.text}
              </span>
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Tilted Marquee Bar */}
      <div className="absolute w-[120%] -left-[10%] bg-gradient-to-r from-burger-gold via-warm-orange to-burger-gold rotate-[-3deg] flex overflow-hidden border-y-[6px] border-matte-black shadow-[0_25px_60px_rgba(0,0,0,0.7)] py-6 md:py-8 z-10">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
        <div className="flex w-[200%] animate-marquee whitespace-nowrap items-center text-matte-black">
          {[...trustItems, ...trustItems, ...trustItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 md:gap-8 px-12 md:px-20 group">
              <motion.span 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.2 }}
                className="shrink-0 drop-shadow-md"
              >
                 {item.icon}
              </motion.span>
              <span className="font-display font-black text-2xl md:text-5xl uppercase tracking-tighter drop-shadow-sm">{item.text}</span>
              {/* Separator Dot */}
              <div className="ml-12 md:ml-20 flex gap-2">
                <span className="w-3 h-3 rounded-full bg-matte-black/40"></span>
                <span className="w-3 h-3 rounded-full bg-matte-black/20"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Overlay Lines */}
      <div className="absolute w-full h-[1px] bg-white/10 top-[45%] rotate-[-3deg] z-20 pointer-events-none"></div>
      <div className="absolute w-full h-[1px] bg-white/10 top-[55%] rotate-[-3deg] z-20 pointer-events-none"></div>
    </section>
  );
}

