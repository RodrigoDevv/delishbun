import { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { setIsCartOpen, itemCount } = useCart();

  const languages: { code: 'EN' | 'AR' | 'FR'; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'AR', name: 'Arabic' },
    { code: 'FR', name: 'French' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', label: t('home') },
    { key: 'menu', label: t('menu') },
    { key: 'about', label: t('about') },
    { key: 'faq', label: t('faq') }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled 
            ? 'py-4 bg-[#050606]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'py-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group cursor-pointer select-none">
            <img src="./imgs/logo.png" alt="Delish Bun Logo" className="w-12 h-12 rounded-full shadow-lg border-2 border-burger-gold bg-white object-contain transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display text-2xl md:text-3xl tracking-[0.1em] text-white uppercase group-hover:text-burger-gold transition-colors duration-500">
              Delish<span className="text-burger-gold group-hover:text-white transition-colors duration-500">Bun</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.key}`}
                className="relative px-6 py-2 group overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-md"></div>
                <span className="relative z-10 font-mono text-xs font-bold text-[#A0A0A0] group-hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]">
                  {link.label}
                </span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-burger-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 group px-4 py-2 rounded-full border border-white/10 hover:border-burger-gold/50 transition-all duration-300 bg-white/5"
              >
                <Globe className="w-4 h-4 text-[#A0A0A0] group-hover:text-burger-gold transition-colors duration-300" />
                <span className="text-xs font-bold text-white tracking-widest">{language}</span>
                <ChevronDown className={`w-3 h-3 text-[#A0A0A0] transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-40 glass rounded-2xl overflow-hidden border border-white/10 z-[110]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-5 py-3 text-left text-xs font-bold tracking-widest transition-colors flex items-center justify-between group ${
                          language === lang.code ? 'text-burger-gold bg-white/5' : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {lang.name}
                        {language === lang.code && <div className="w-1 h-1 rounded-full bg-burger-gold" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative group bg-burger-gold text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.2)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                {t('orderNow')}
                {itemCount > 0 && (
                  <span className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] animate-pulse">
                    {itemCount}
                  </span>
                )}
              </span>
            </button>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => {
                const nextIdx = (languages.findIndex(l => l.code === language) + 1) % languages.length;
                setLanguage(languages[nextIdx].code);
              }}
              className="flex items-center gap-2 p-2 rounded-full border border-white/10 bg-white/5 text-white"
            >
              <Globe className="w-5 h-5 text-burger-gold" />
              <span className="text-[10px] font-black">{language}</span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-charcoal flex flex-col justify-between p-8"
          >
            <div className="flex justify-between items-center bg-charcoal">
              <span className="font-display text-3xl tracking-wide text-white">Delish<span className="text-burger-gold">Bun</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-white/10 p-2 rounded-full">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 mt-12 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.key}
                  href={`#${link.key}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-5xl uppercase tracking-wider text-white hover:text-burger-gold border-b border-white/10 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <button 
              onClick={() => {
                setIsCartOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-burger-gold text-matte-black py-5 rounded-full font-bold text-xl uppercase tracking-widest mt-8 flex items-center justify-center gap-4"
            >
              {t('orderNow')}
              {itemCount > 0 && (
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  {itemCount}
                </span>
              )}
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
