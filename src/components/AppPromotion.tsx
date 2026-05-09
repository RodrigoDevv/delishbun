import { motion } from 'motion/react';
import { Apple, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AppPromotion() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-[#090B0C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left - Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative w-[280px] md:w-[320px] mx-auto aspect-[9/19] bg-[#121212] rounded-[3rem] border-[8px] border-[#222] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 p-4 flex flex-col">
               <div className="h-6 w-1/2 bg-white/5 rounded-full mx-auto mb-8 mt-2"></div>
               <div className="flex flex-col gap-4">
                  <div className="h-32 w-full bg-white/5 rounded-2xl"></div>
                  <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                  <div className="h-4 w-1/2 bg-white/5 rounded-full"></div>
               </div>

               <div className="mt-auto w-full p-6 rounded-[2rem] bg-[#1A1A1A] border border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-burger-gold/10 blur-xl"></div>
                  <div className="font-black text-lg mb-3 text-center uppercase tracking-widest text-white relative z-10 text-glow">{t('arrivingIn')} <span className="text-burger-gold">15m</span></div>
                  <div className="h-3 bg-charcoal rounded-full overflow-hidden relative z-10 border border-white/5">
                    <div className="w-[65%] h-full bg-gradient-to-r from-burger-gold to-warm-orange rounded-full relative">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[marquee_2s_linear_infinite]"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 -right-12 lg:-right-16 w-56 bg-charcoal/80 p-5 rounded-[1.5rem] z-30 shadow-2xl backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xl ring-2 ring-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]">✓</div>
              <div className="flex flex-col">
                <div className="text-sm font-black uppercase tracking-wider text-white">{t('orderConfirmed')}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A0A0A0] mt-1">{t('justNow')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <div className="flex flex-col gap-8 order-1 lg:order-2 items-center lg:items-start text-center lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
               <span className="h-[2px] w-10 bg-warm-orange hidden lg:block"></span>
               <span className="text-warm-orange font-bold uppercase tracking-widest text-sm">{t('downloadApp')}</span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-none">
              {t('orderAnywhere').split(' ')[0]} <span className="text-transparent" style={{ WebkitTextStroke: '2px #fbbf24' }}>{t('orderAnywhere').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-md font-medium leading-relaxed">
              {t('appPromotionDesc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            {/* App Store button */}
            <button className="flex items-center justify-center sm:justify-start gap-4 bg-white text-black px-8 py-4 rounded-[1.5rem] hover:bg-burger-gold transition-colors min-w-[220px] active:scale-95 duration-300 group">
              <Apple className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
              <div className="flex flex-col items-start translate-y-[2px]">
                <span className="text-[10px] uppercase font-black tracking-widest leading-none text-black/60 group-hover:text-black/80">{t('downloadOnThe')}</span>
                <span className="text-xl font-sans font-black leading-none tracking-tight mt-1">{t('appStore')}</span>
              </div>
            </button>
            
            {/* Google Play button */}
            <button className="flex items-center justify-center sm:justify-start gap-4 bg-charcoal border border-white/20 text-white px-8 py-4 rounded-[1.5rem] hover:bg-white inset-ring inset-ring-white/10 hover:text-black hover:border-transparent transition-all min-w-[220px] active:scale-95 duration-300 group">
               <Play className="w-8 h-8 fill-current group-hover:-translate-y-1 transition-transform" />
               <div className="flex flex-col items-start translate-y-[2px]">
                <span className="text-[10px] uppercase font-black tracking-widest leading-none text-white/60 group-hover:text-black/80">{t('getItOn')}</span>
                 <span className="text-xl font-sans font-black leading-none tracking-tight mt-1">{t('googlePlay')}</span>
              </div>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
