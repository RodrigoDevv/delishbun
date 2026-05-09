import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

export default function Hero() {
  const { t } = useLanguage();
  const { setIsCartOpen } = useCart();
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#050606] overflow-hidden flex items-center justify-center pt-24 pb-12">
      
      {/* --- AMAZING CREATIVE BACKGROUND --- */}
      
      {/* 1. Underlying Deep Space & Subtle Grid */}
      <div className="absolute inset-0 z-0 bg-[#020202]">
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>

      {/* 2. Abstract Glowing Organic Mesh Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden mix-blend-screen opacity-80 pointer-events-none">
         {/* Top Right Orange Glow */}
         <motion.div 
           animate={{ 
             x: ['0%', '-20%', '10%', '0%'],
             y: ['0%', '20%', '-10%', '0%'],
             scale: [1, 1.2, 0.8, 1]
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-600/20 rounded-full blur-[100px] md:blur-[150px]"
           style={{ willChange: 'transform' }}
         ></motion.div>
         
         {/* Bottom Left Red Glow */}
         <motion.div 
           animate={{ 
             x: ['0%', '30%', '-10%', '0%'],
             y: ['0%', '-20%', '20%', '0%'],
             scale: [1, 1.5, 0.9, 1]
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: -5 }}
           className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-red-700/20 rounded-full blur-[120px] md:blur-[180px]"
           style={{ willChange: 'transform' }}
         ></motion.div>
         
         {/* Center Gold Accent Glow */}
         <motion.div 
           animate={{ 
             scale: [1, 1.8, 1],
             opacity: [0.3, 0.6, 0.3],
             rotate: [0, 180, 360]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[30%] left-[25%] w-[40vw] h-[30vw] bg-yellow-500/10 rounded-[100%] blur-[100px] transform origin-center"
           style={{ willChange: 'transform, opacity' }}
         ></motion.div>
      </div>

      {/* 3. Floating Spark Particles (Depth layered) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none perspective-1000">
        {[...Array(35)].map((_, i) => {
           const size = Math.random() * 6 + 2; // varying sizes
           const isBlurry = Math.random() > 0.5;
           const animationDuration = 8 + Math.random() * 20;
           return (
             <motion.div
               key={i}
               initial={{ 
                 y: "110vh", 
                 x: `${Math.random() * 100}vw`, 
                 opacity: 0, 
                 scale: Math.random() * 1.5,
                 rotateX: Math.random() * 180 
               }}
               animate={{ 
                 y: "-10vh", 
                 opacity: [0, 1, 0.8, 0],
                 x: `calc(${Math.random() * 100}vw + ${Math.random() * 600 - 300}px)`,
                 rotateX: Math.random() * 360 + 180,
                 rotate: Math.random() * 360
               }}
               transition={{ 
                 duration: animationDuration, 
                 repeat: Infinity,
                 delay: Math.random() * -20, // Negative delay so they are on screen immediately
                 ease: "linear" 
               }}
               className="absolute rounded-sm bg-gradient-to-tr from-yellow-300 via-orange-500 to-red-500 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
               style={{ 
                 width: `${size}px`, 
                 height: `${size * (Math.random() * 2 + 1)}px`, // slightly elongated
                 filter: isBlurry ? `blur(${Math.random() * 3 + 1}px)` : 'none',
                 willChange: 'transform, opacity' 
               }}
             />
           )
        })}
      </div>

      {/* Editorial Side Typography */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-white font-mono text-xs tracking-[0.6em] hidden lg:block z-20 mix-blend-plus-lighter"
      >
        VOL 1. / {t('craftedToPerfection')} / EST 2024
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
        className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right text-white font-mono text-xs tracking-[0.6em] hidden lg:block z-20 mix-blend-plus-lighter"
      >
        {t('localIngredients')} / {t('woodFired')}
      </motion.div>

      {/* SVG Noise Filter */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-screen" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Massive Background Typography */}
      <div className="hidden md:flex absolute inset-0 md:top-[10vh] lg:top-0 flex-col items-center justify-center pointer-events-none z-10 w-full overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 120, scale: 0.85, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full px-4 flex flex-col items-center"
        >
          <h1 className="font-display md:text-[16vw] lg:text-[18vw] xl:text-[18vw] uppercase tracking-tighter leading-[0.8] text-white whitespace-nowrap overflow-visible flex items-center justify-center gap-6">
            <span>{t('discoverTaste')}</span>
          </h1>
        </motion.div>
      </div>

      {/* Massive Foreground Typography (Outline Overlay) */}
      <div className="hidden md:flex absolute inset-0 md:top-[10vh] lg:top-0 flex-col items-center justify-center pointer-events-none z-30 w-full overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 120, scale: 0.85, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center w-full px-4 flex flex-col items-center"
        >
          <div className="font-display md:text-[16vw] lg:text-[18vw] xl:text-[18vw] uppercase tracking-tighter leading-[0.8] text-transparent whitespace-nowrap overflow-visible flex items-center justify-center gap-6" style={{ WebkitTextStroke: '2px white' }}>
            <span>{t('discoverTaste')}</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:h-full justify-center items-center mt-12 md:mt-24 lg:mt-0 pb-28 lg:pb-0">
        
        {/* Top/Center: Main Burger Image & Floating Art */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.5, y: 200, rotateZ: -15, filter: 'blur(10px)' }}
           animate={{ opacity: 1, scale: 1, y: 0, rotateZ: 0, filter: 'blur(0px)' }}
           transition={{ duration: 2.2, type: "spring", bounce: 0.4, delay: 0.4 }}
           className="relative w-full max-w-[500px] md:max-w-[600px] xl:max-w-[800px] aspect-square flex items-center justify-center z-30 mx-auto"
        >
          {/* Main Image */}
          <motion.img 
            animate={{ 
              y: [-15, 10, -15],
              rotate: [0, 3, -2, 0]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"
            alt="Signature Burger"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] relative z-30"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            style={{ willChange: 'transform' }}
          />

          {/* Floating Words */}
          <motion.div
             initial={{ opacity: 0, x: -100, y: 50, scale: 0.5, rotate: -30, filter: 'blur(10px)' }}
             animate={{ opacity: 0.3, x: 0, y: [0, -20, 0], scale: 1, rotate: [-12, -5, -12], filter: 'blur(0px)' }}
             transition={{ 
               opacity: { duration: 1, delay: 0.8 },
               x: { duration: 1, delay: 0.8, type: "spring" },
               scale: { duration: 1, delay: 0.8, type: "spring" },
               filter: { duration: 1, delay: 0.8 },
               y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.8 },
               rotate: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.8 }
             }}
             className="absolute -left-4 md:-left-20 top-[15%] text-transparent font-display text-5xl md:text-8xl pointer-events-none mix-blend-screen z-20"
             style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
          >
             {t('juicy')}
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 100, y: 50, scale: 0.5, rotate: 30, filter: 'blur(10px)' }}
             animate={{ opacity: 0.3, x: 0, y: [0, 25, 0], scale: 1, rotate: [12, 18, 12], filter: 'blur(0px)' }}
             transition={{ 
               opacity: { duration: 1, delay: 1 },
               x: { duration: 1, delay: 1, type: "spring" },
               scale: { duration: 1, delay: 1, type: "spring" },
               filter: { duration: 1, delay: 1 },
               y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 },
               rotate: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }
             }}
             className="absolute -right-8 md:-right-24 bottom-[30%] text-transparent font-display text-4xl md:text-7xl pointer-events-none mix-blend-screen z-20"
             style={{ WebkitTextStroke: '2px rgba(251,191,36,0.3)' }}
          >
             {t('crispy')}
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 150, scale: 0.5, rotate: -20, filter: 'blur(10px)' }}
             animate={{ opacity: 0.2, y: [0, 15, 0], scale: 1, rotate: [-6, -2, -6], filter: 'blur(0px)' }}
             transition={{ 
               opacity: { duration: 1, delay: 1.2 },
               scale: { duration: 1, delay: 1.2, type: "spring" },
               y: { duration: 1.2, delay: 1.2, type: "spring" },
               filter: { duration: 1, delay: 1.2 },
               y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.4 },
               rotate: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2.4 }
             }}
             className="absolute left-[20%] md:left-[10%] -bottom-[5%] text-transparent font-display text-3xl md:text-6xl pointer-events-none mix-blend-screen z-20"
             style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
          >
             {t('cheesy')}
          </motion.div>

          {/* Floating Rotating SVG Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: [-5, 15, -5] }}
            transition={{ 
              opacity: { duration: 1, delay: 1.5 },
              scale: { duration: 1, delay: 1.5, type: "spring", bounce: 0.5 },
              rotate: { duration: 1.5, delay: 1.5, type: "spring", bounce: 0.4 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.5 }
            }}
            className="absolute -right-2 md:-right-12 top-0 md:top-[8%] w-28 md:w-40 aspect-square z-40 drop-shadow-xl"
            style={{ willChange: 'transform, opacity' }}
          >
             <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
                <defs>
                   <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <circle cx="50" cy="50" r="48" className="fill-burger-gold/10 stroke-burger-gold/30" strokeWidth="1" />
                <text className="text-[12px] font-black uppercase tracking-[0.2em] fill-burger-gold drop-shadow-md">
                   <textPath href="#circlePath" startOffset="0%">
                      {t('angusBeefDesc')}
                   </textPath>
                </text>
                <circle cx="50" cy="50" r="25" className="fill-burger-gold/20 backdrop-blur-sm" />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center font-display text-3xl md:text-5xl text-white drop-shadow-lg pr-1">
                #1
             </div>
          </motion.div>



        </motion.div>

        {/* Mobile ONLY: "DISCOVER THE TASTE" in flow */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:hidden w-full flex flex-col items-center justify-center mt-6 -mb-4 z-10 pointer-events-none"
        >
          <div className="font-display text-[15vw] sm:text-[14vw] uppercase tracking-tighter leading-[0.8] text-white whitespace-nowrap overflow-visible flex items-center justify-center gap-3">
            <span>{t('discoverTaste')}</span>
          </div>
        </motion.div>

        {/* Floating Accents & CTA (Desktop Grid, Mobile Stack) */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between mt-12 md:mt-16 lg:mt-0 lg:absolute lg:bottom-12 lg:left-0 lg:px-12 z-40 gap-8 md:gap-12 lg:gap-0">
          
          {/* Left Info Box */}
          <motion.div 
            initial={{ opacity: 0, x: -60, filter: 'blur(15px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left max-w-sm"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="w-8 h-[2px] bg-burger-gold"></span>
              <span className="font-bold uppercase tracking-widest text-xs text-burger-gold">{t('signatureSeries')}</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl uppercase text-white mb-4 tracking-tighter leading-[0.9]">
              {t('perfectlyCrafted')}
            </h3>
            <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
              {t('angusBeefDesc')}
            </p>
          </motion.div>



          {/* Right CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 60, filter: 'blur(15px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-burger-gold/20 rounded-full blur-[20px] group-hover:bg-burger-gold/40 transition-colors duration-500"></div>
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 rounded-full glass border-2 border-burger-gold/50 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(181,43,39,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-burger-gold/10 to-transparent opacity-50"></div>
                <span className="font-display text-2xl md:text-3xl text-burger-gold font-black leading-none mb-1 drop-shadow-sm">100%</span>
                <span className="font-display text-[12px] md:text-sm text-white font-bold leading-none tracking-[0.2em] uppercase drop-shadow-sm">{t('beef')}</span>
                {/* Rotating accent border */}
                <div className="absolute inset-0 border-t-2 border-burger-gold rounded-full animate-[spin_4s_linear_infinite] opacity-50"></div>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              aria-label={t('orderNow')}
              className="group relative bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-black uppercase tracking-widest text-sm md:text-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                {t('orderNow')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-burger-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Center Scroll Indicator - Absolutely Centered in Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40 cursor-pointer group"
        onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-bold uppercase tracking-[0.4em] text-[10px] text-[#A0A0A0] opacity-60 group-hover:text-burger-gold group-hover:opacity-100 transition-all duration-300">
          {t('scroll')}
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-burger-gold group-hover:scale-110 transition-transform duration-300"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.div>

    </section>
  );
}
