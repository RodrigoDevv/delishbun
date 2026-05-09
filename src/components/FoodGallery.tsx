import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const images = [
  "./imgs/RestauShow.WEBP",
  "./imgs/Spicy Inferno.jpg",
  "./imgs/The Truffle Royale.jpg",
  "./imgs/BBQ Bacon.jpg",
  "./imgs/Original Salted.jpg",
  "./imgs/Loaded Queso.jpg",
  "./imgs/Sweet Potato.jpg",
  "./imgs/Truffle Fries.jpg"
];

export default function FoodGallery() {
  const { t } = useLanguage();
  return (
    <section id="gallery" className="py-32 bg-[#050606] relative">
       <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none"></div>
       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center relative z-10">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
         >
           <div className="flex items-center justify-center gap-4 mb-4">
               <span className="h-[2px] w-8 bg-burger-gold"></span>
               <span className="text-burger-gold font-bold uppercase tracking-widest text-sm">{t('ourGallery')}</span>
               <span className="h-[2px] w-8 bg-burger-gold"></span>
            </div>
           <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-none">
             {t('theArtOf').split(' ').slice(0, 3).join(' ')} <br/>
             <span className="text-transparent" style={{ WebkitTextStroke: '2px #fbbf24' }}>{t('theArtOf').split(' ').slice(3).join(' ')}</span>
           </h2>
           <p className="text-[#A0A0A0] max-w-2xl mx-auto font-medium tracking-wide uppercase text-sm">{t('feastWarning')}</p>
         </motion.div>
      </div>

      <div className="w-full overflow-hidden flex flex-wrap max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full auto-rows-[250px] md:auto-rows-[300px]">
           {images.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative overflow-hidden rounded-[2.5rem] bg-charcoal group shadow-2xl ${
                  idx === 0 ? 'col-span-2 row-span-2' : 
                  idx === 3 ? 'col-span-2' : ''
                }`}
              >
                 <div className="w-full h-full">
                   <img 
                      src={src} 
                      alt="Food Gallery" 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                      referrerPolicy="no-referrer"
                   />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                 <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white font-display text-3xl uppercase tracking-wide mb-2 hidden md:block">{t('doubleSizzle')}</span>
                    <span className="text-burger-gold font-black uppercase tracking-widest text-xs flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-burger-gold"></span>
                      {t('viewDetail')}
                    </span>
                 </div>
              </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
}
