import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const WORDS = [t('fire'), t('heat'), t('craft'), t('taste')];
  const [stage, setStage] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let wIndex = 0;
    const wordInterval = setInterval(() => {
      wIndex++;
      if (wIndex < WORDS.length) {
        setWordIndex(wIndex);
      } else {
        clearInterval(wordInterval);
        setStage(1); // DELISH appears
      }
    }, 280);

    const timer1 = setTimeout(() => setStage(2), WORDS.length * 280 + 400); // BUN appears
    const timer2 = setTimeout(() => {
      setStage(3); // Exit animation starts
      setTimeout(onComplete, 1200); // Wait for exit animation to finish
    }, WORDS.length * 280 + 2000);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete, WORDS.length]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="intro-screen"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ 
            clipPath: ["inset(0% 0% 0% 0%)", "inset(49.8% 0% 49.8% 0%)"], 
            filter: "blur(10px) brightness(2)",
            opacity: [1, 1, 0]
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], times: [0, 0.8, 1] }}
          className="fixed inset-0 z-[100] bg-[#050606] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background noise */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

          {/* Flash Overlay when Stage 2 hits */}
          {stage === 2 && (
            <motion.div 
               initial={{ opacity: 1 }}
               animate={{ opacity: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="absolute inset-0 bg-burger-gold/50 mix-blend-overlay z-50 pointer-events-none"
            />
          )}

          {/* Giant Burger Silhouette Reveal */}
          <motion.div
             initial={{ opacity: 0, scale: 1.3, filter: 'brightness(0) blur(20px)' }}
             animate={{ 
               opacity: stage >= 2 ? 0.35 : 0, 
               scale: stage >= 2 ? 1 : 1.3,
               filter: stage >= 2 ? 'brightness(0.3) sepia(1) hue-rotate(330deg) saturate(5) blur(0px)' : 'brightness(0) blur(20px)' 
             }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]"
          >
             <img src="/delishbun/imgs/intro-bg.jpg" alt="Burger Intro" className="w-[150vw] sm:w-[120vw] lg:w-[100vw] max-w-[1200px] object-contain drop-shadow-[0_0_100px_rgba(251,191,36,0.6)]" />
          </motion.div>

          {/* Explosive Sparks */}
          {stage >= 2 && [...Array(40)].map((_, i) => (
             <motion.div
               key={`spark-${i}`}
               initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
               animate={{ 
                 opacity: [1, 1, 0],
                 scale: [1, Math.random() * 2 + 1.5],
                 x: `${(Math.random() - 0.5) * 150}vw`,
                 y: `${Math.random() > 0.5 ? '-' : ''}${Math.random() * 150}vh`, // Move everywhere
               }}
               transition={{ duration: Math.random() * 2 + 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="absolute top-1/2 left-1/2 w-1.5 md:w-2.5 aspect-square bg-burger-gold rounded-full mix-blend-screen shadow-[0_0_20px_rgba(251,191,36,1)] z-40 pointer-events-none"
             />
          ))}

          <div className="relative z-10 flex items-center justify-center text-center w-full h-full">
            <AnimatePresence>
              {stage === 0 && (
                <motion.div
                  key={`word-${wordIndex}`}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)", transition: { duration: 0.15 } }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute font-display text-[22vw] md:text-[20vw] leading-none text-white uppercase tracking-tighter mix-blend-difference"
                >
                  {WORDS[wordIndex]}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {stage >= 1 && (
                <motion.div
                  key="final-logo"
                  initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute flex items-center gap-1 md:gap-3 font-display text-[15vw] md:text-[14vw] uppercase tracking-tighter leading-none"
                >
                  <span className="text-white drop-shadow-2xl">DELISH</span>
                  {stage >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -100, filter: "blur(20px)", rotate: 10 }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)", rotate: 0 }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                      className="text-burger-gold drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]"
                    >
                      BUN
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
