import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "James Wilson",
      role: t('localGuide'),
      text: t('testimonial1'),
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: t('foodBlogger'),
      text: t('testimonial2'),
      rating: 5
    },
    {
      name: "Michael Chen",
      role: t('verifiedOrder'),
      text: t('testimonial3'),
      rating: 5
    },
    {
      name: "Emma Stone",
      role: t('verifiedOrder'),
      text: t('testimonial4'),
      rating: 5
    },
    {
      name: t('nameOmar'),
      role: t('localGuide'),
      text: t('testimonial5'),
      rating: 5
    },
    {
      name: t('nameLayla'),
      role: t('foodBlogger'),
      text: t('testimonial6'),
      rating: 5
    },
    {
      name: t('nameYoussef'),
      role: t('verifiedOrder'),
      text: t('testimonial7'),
      rating: 5
    },
    {
      name: t('nameFatima'),
      role: t('verifiedOrder'),
      text: t('testimonial8'),
      rating: 5
    },
    {
      name: t('nameAhmed'),
      role: t('localGuide'),
      text: t('testimonial9'),
      rating: 5
    },
    {
      name: t('nameSalma'),
      role: t('foodBlogger'),
      text: t('testimonial10'),
      rating: 5
    },
    {
      name: t('nameKarim'),
      role: t('verifiedOrder'),
      text: t('testimonial11'),
      rating: 5
    },
    {
      name: t('nameZineb'),
      role: t('verifiedOrder'),
      text: t('testimonial12'),
      rating: 5
    }
  ];



  return (
    <section className="py-32 bg-[#050606] border-y border-white/5 overflow-hidden relative">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-burger-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center relative z-10">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
         >
           <div className="flex items-center gap-4 mb-6">
               <span className="text-burger-gold font-bold uppercase tracking-widest text-sm">{t('community')}</span>
            </div>
           <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-white mb-4 leading-none">
             {t('wordOnTheStreet').split(' ').slice(0, 3).join(' ')} <br/>
             <span className="text-transparent" style={{ WebkitTextStroke: '2px #fbbf24' }}>{t('wordOnTheStreet').split(' ').slice(3).join(' ')}</span>
           </h2>
         </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient fades on left/right for seamless look */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#050606] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#050606] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 px-6 animate-marquee-slow group-hover:[animation-play-state:paused] w-[200%]">
          {[...testimonials, ...testimonials, ...testimonials].map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] shrink-0 bg-[#090B0C] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-burger-gold to-transparent opacity-50"></div>
              
              <div className="flex text-burger-gold mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />
              <p className="text-white/80 font-medium text-lg md:text-xl mb-10 leading-relaxed italic relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-burger-gold font-display text-2xl uppercase">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">{review.name}</h4>
                  <p className="text-[#A0A0A0] text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
