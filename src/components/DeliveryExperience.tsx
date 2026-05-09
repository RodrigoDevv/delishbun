import { motion } from 'motion/react';
import { MapPin, Navigation, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DeliveryExperience() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-[#050606] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left - Content */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="h-[2px] w-12 bg-burger-gold"></span>
               <span className="text-burger-gold font-bold uppercase tracking-widest text-sm">{t('fastestDelivery')}</span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-none">
              {t('realTimeTracking').split(' ')[0]} <span className="text-transparent" style={{ WebkitTextStroke: '2px #fbbf24' }}>{t('realTimeTracking').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg font-medium leading-relaxed max-w-xl">
              {t('deliveryExperienceDesc')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 group hover:border-burger-gold/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-burger-gold/20 flex items-center justify-center text-burger-gold shrink-0 group-hover:scale-110 transition-transform">
                   <Zap size={24} />
                </div>
                <div>
                   <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{t('lightningFastTitle')}</h4>
                   <p className="text-[#A0A0A0] text-xs font-medium leading-relaxed">{t('lightningFastDesc')}</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 group hover:border-burger-gold/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-warm-orange/20 flex items-center justify-center text-warm-orange shrink-0 group-hover:scale-110 transition-transform">
                   <ShieldCheck size={24} />
                </div>
                <div>
                   <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{t('premiumQuality')}</h4>
                   <p className="text-[#A0A0A0] text-xs font-medium leading-relaxed">{t('premiumBeefDesc')}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right - Interactive Map Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] bg-[#111] border border-white/10 overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
        >
          {/* Faux map background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#090B0C] via-transparent to-[#090B0C] opacity-80"></div>
          
          {/* Map route curve */}
          <svg className="absolute w-full h-full text-warm-orange/50 overflow-visible" viewBox="0 0 400 400" preserveAspectRatio="none">
             <path id="delivery-route" d="M50,320 Q 200,200 350,80" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="8, 8" className="animate-[dash_30s_linear_infinite]" />
             <path d="M50,320 Q 200,200 350,80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="15" className="blur-sm" />
          </svg>

          {/* Restaurant Marker */}
          <div className="absolute bottom-1/4 left-[15%] translate-y-8 flex flex-col items-center">
             <div className="bg-charcoal text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-white/10 shadow-xl backdrop-blur-md">Delish Bun</div>
            <div className="w-8 h-8 rounded-full bg-burger-gold/20 flex items-center justify-center animate-ping absolute top-10"></div>
            <div className="w-6 h-6 rounded-full bg-burger-gold flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(245,176,65,0.6)]">
              <div className="w-2 h-2 bg-matte-black rounded-full"></div>
            </div>
          </div>

          {/* User Marker */}
          <div className="absolute top-[20%] right-[15%] flex flex-col items-center">
            <div className="bg-white text-matte-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-2 shadow-xl">{t('homeMarker')}</div>
            <MapPin className="w-8 h-8 text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" fill="#991B1B" />
          </div>

          {/* Moving Courier */}
          <motion.div 
             animate={{ top: ['80%', '20%'], left: ['15%', '85%'] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute ml-[-24px] mt-[-24px] flex items-center justify-center"
          >
             <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(244,114,33,0.6)] z-20">
               <Navigation className="w-6 h-6 text-white rotate-[60deg] fill-current" />
             </div>
             
             {/* ETA bubble */}
             <div className="absolute -top-14 bg-charcoal text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10 whitespace-nowrap shadow-xl backdrop-blur-md">
                {t('threeMinsAway')}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-charcoal border-b border-r border-white/10 rotate-45"></div>
             </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
