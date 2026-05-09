import { motion } from 'motion/react';
import { Wheat, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Wheat className="w-8 h-8" />,
      title: t('freshIngredientsTitle'),
      text: t('freshIngredientsDesc')
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: t('signatureSaucesTitle'),
      text: t('signatureSaucesDesc')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('lightningFastTitle'),
      text: t('lightningFastDesc')
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('premiumBeefTitle'),
      text: t('premiumBeefDesc')
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#090B0C] relative border-y border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute top-0 right-1/4 w-[60vh] h-[60vh] bg-ketchup-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
           <div className="flex items-center gap-4 mb-6">
               <span className="h-[2px] w-12 bg-ketchup-red"></span>
               <span className="text-ketchup-red font-bold uppercase tracking-widest text-sm">{t('whyUs')}</span>
               <span className="h-[2px] w-12 bg-ketchup-red"></span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-none">
              {t('uncompromisingQuality')}
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#A0A0A0] text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {t('whyUsDesc')}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#121212] p-8 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden border border-white/5 hover:border-burger-gold/30 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-burger-gold/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-charcoal outline outline-1 outline-white/10 flex items-center justify-center text-burger-gold mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:outline-burger-gold/50 shadow-xl relative z-10">
                {feature.icon}
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wide mb-4 text-white group-hover:text-burger-gold transition-colors">{feature.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed font-medium relative z-10">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
