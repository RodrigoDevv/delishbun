import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Location() {
  const { t } = useLanguage();
  
  const hours = [
    { day: t('monThu'), time: "11:00 AM - 10:00 PM" },
    { day: t('friday'), time: "11:00 AM - 12:00 AM" },
    { day: t('saturday'), time: "10:00 AM - 12:00 AM" },
    { day: t('sunday'), time: "10:00 AM - 10:00 PM" }
  ];

  return (
    <section id="location" className="py-32 bg-[#090B0C] relative overflow-hidden">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-burger-gold/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <span className="h-[2px] w-12 bg-burger-gold"></span>
                 <span className="text-burger-gold font-bold uppercase tracking-widest text-sm">{t('findUs')}</span>
              </div>
              <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[0.85]">
                {t('comeVisit')} <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #A0A0A0' }}>{t('theSource')}</span>
              </h2>
              <p className="text-[#A0A0A0] text-lg font-medium leading-relaxed max-w-xl">
                {t('locationDesc')}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#121212] p-8 rounded-[2rem] border border-white/5 hover:border-burger-gold/20 transition-colors">
                <MapPin className="text-burger-gold w-8 h-8 mb-4" />
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('address')}</h3>
                <p className="text-[#A0A0A0] font-medium leading-relaxed">
                  {t('realAddress')}, <br />
                  {t('downtownDistrict')}, <br />
                  Morocco
                </p>
              </div>
              <div className="bg-[#121212] p-8 rounded-[2rem] border border-white/5 hover:border-burger-gold/20 transition-colors">
                <Phone className="text-burger-gold w-8 h-8 mb-4" />
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact')}</h3>
                <p className="text-[#A0A0A0] font-medium leading-relaxed">
                  +212 674 745 858 <br />
                  delishbuncom@gmail.com
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#121212] p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative group">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-burger-gold/5 rounded-full blur-2xl group-hover:bg-burger-gold/10 transition-colors"></div>
              <div className="flex items-center gap-3 mb-8">
                <Clock className="text-burger-gold w-6 h-6" />
                <h3 className="text-white font-display text-2xl uppercase tracking-wider">{t('openingHours')}</h3>
              </div>
              <div className="space-y-4">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-[#A0A0A0] font-bold uppercase tracking-widest text-xs">{h.day}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] lg:h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/5 group shadow-2xl"
          >
            {/* Custom styled Google Map Placeholder */}
            <div className="absolute inset-0 bg-[#181818]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13231.6961556942!2d-6.8466754!3d33.9955215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76df6b00978a7%3A0xc544af1cb50dbc8!2sDelish'Bun!5e0!3m2!1sen!2sma!4v1715260175402!5m2!1sen!2sma"
                className="w-full h-full border-0 grayscale invert contrast-[1.2] opacity-60 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-1000"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delish Bun Location"
              ></iframe>
              
              {/* Map Controls UI Mockup */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#090B0C]/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 z-10">
                <div className="flex flex-col">
                  <span className="text-white font-bold uppercase tracking-wider text-sm">{t('rabatLocation')}</span>
                  <span className="text-[#A0A0A0] text-xs">{t('realAddress')}, Morocco</span>
                </div>
                <a 
                  href="https://www.google.com/maps/dir//Delish'Bun/@33.9955215,-6.8466754,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-burger-gold transition-colors"
                >
                  {t('getDirections')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
