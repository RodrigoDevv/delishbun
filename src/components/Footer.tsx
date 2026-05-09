import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ openInfo }: { openInfo: (type: 'help' | 'privacy' | 'terms' | 'delivery') => void }) {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050606] pt-32 pb-12 relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <img src="./imgs/logo.png" alt="Delish Bun Logo" className="w-12 h-12 rounded-full shadow-lg border-2 border-burger-gold bg-white object-contain" />
              <span className="font-display text-3xl text-white uppercase tracking-tighter">Delish Bun</span>
            </div>
            <p className="text-[#A0A0A0] font-medium leading-relaxed">
              {t('footerBrandDesc')}
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/delishbun_ma/" },
                { Icon: Facebook, href: "https://facebook.com/delishbun" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-burger-gold hover:text-black hover:border-transparent transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t('quickLinks')}</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Menu', 'About', 'Gallery', 'Location'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#A0A0A0] hover:text-burger-gold transition-colors font-medium">
                    {t(`nav${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t('support')}</h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => openInfo('help')} className="text-[#A0A0A0] hover:text-burger-gold transition-colors font-medium">{t('helpCenter')}</button></li>
              <li><button onClick={() => openInfo('privacy')} className="text-[#A0A0A0] hover:text-burger-gold transition-colors font-medium">{t('privacyPolicy')}</button></li>
              <li><button onClick={() => openInfo('terms')} className="text-[#A0A0A0] hover:text-burger-gold transition-colors font-medium">{t('termsOfService')}</button></li>
              <li><button onClick={() => openInfo('delivery')} className="text-[#A0A0A0] hover:text-burger-gold transition-colors font-medium">{t('deliveryAreas')}</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t('joinTheClub')}</h4>
            <p className="text-[#A0A0A0] font-medium text-sm leading-relaxed">
              {t('newsletterDesc')}
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder={t('emailPlaceholder')} 
                className="w-full bg-[#121212] border border-white/10 rounded-xl py-4 px-6 text-white text-sm focus:outline-none focus:border-burger-gold transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-burger-gold text-black px-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                {t('join')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[#A0A0A0] text-sm font-medium">
            © {currentYear} Delish Bun. {t('allRightsReserved')}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[#A0A0A0] hover:text-white transition-colors"
          >
            <span className="font-bold uppercase tracking-widest text-xs">{t('backToTop')}</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-burger-gold group-hover:text-burger-gold transition-all">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
