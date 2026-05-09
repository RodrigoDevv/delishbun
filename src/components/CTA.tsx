import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

export default function CTA() {
  const { t } = useLanguage();
  const { setIsCartOpen } = useCart();
  return (
    <section className="py-24 md:py-32 bg-matte-black relative overflow-hidden">
      {/* Dramatic backgrounds */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594212586054-07dffe380c54?q=80&w=2000')] bg-cover bg-center opacity-20 grayscale scale-110"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/80 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-ketchup-red rounded-[3rem] p-12 md:p-24 overflow-hidden relative group shadow-2xl flex flex-col items-center text-center">
          {/* Floating elements inside CTA */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-black/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="font-bold uppercase tracking-[0.4em] text-white/80 text-sm mb-6">{t('satisfactionGuaranteed')}</span>
            <h2 className="font-display text-6xl md:text-9xl text-white uppercase leading-[0.85] mb-12 tracking-tighter">
              {t('readyToSmash')}
            </h2>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-2xl mb-12 leading-relaxed">
              {t('ctaDesc')}
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="bg-white text-ketchup-red px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-lg flex items-center gap-3 shadow-xl hover:shadow-white/20 transition-all group/btn"
            >
              {t('orderNow')}
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
