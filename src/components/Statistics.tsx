import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Statistics() {
  const { t } = useLanguage();
  const stats = [
    { value: '50K+', label: t('burgersSmashed') },
    { value: '20+', label: t('locations') },
    { value: '4.9', label: t('avgRatingStat') },
    { value: '100k+', label: t('happyCustomers') },
  ];

  return (
    <section className="py-32 bg-[#090B0C] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000')] bg-cover bg-fixed bg-center opacity-10 mix-blend-luminosity grayscale"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#090B0C] via-transparent to-[#090B0C]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            className="flex flex-col items-center justify-center text-center p-4 group"
          >
            <div className="relative mb-4">
               <div className="absolute inset-0 bg-burger-gold/20 blur-xl rounded-full scale-50 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
               <span className="relative z-10 font-display text-6xl md:text-7xl lg:text-8xl text-white group-hover:text-burger-gold transition-colors duration-300 drop-shadow-2xl">{stat.value}</span>
            </div>
            <span className="text-[#A0A0A0] uppercase tracking-[0.3em] font-black text-xs group-hover:text-white transition-colors duration-300">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
