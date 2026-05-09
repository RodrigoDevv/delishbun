import { motion, AnimatePresence } from 'motion/react';
import { X, Info, ShieldCheck, FileText, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type InfoType = 'help' | 'privacy' | 'terms' | 'delivery';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: InfoType;
}

export default function InfoModal({ isOpen, onClose, type }: InfoModalProps) {
  const { t, language } = useLanguage();

  const getContent = () => {
    switch (type) {
      case 'help':
        return {
          title: t('helpCenterTitle'),
          content: t('helpCenterContent'),
          icon: <Info className="w-8 h-8 text-burger-gold" />
        };
      case 'privacy':
        return {
          title: t('privacyPolicyTitle'),
          content: t('privacyPolicyContent'),
          icon: <ShieldCheck className="w-8 h-8 text-burger-gold" />
        };
      case 'terms':
        return {
          title: t('termsOfServiceTitle'),
          content: t('termsOfServiceContent'),
          icon: <FileText className="w-8 h-8 text-burger-gold" />
        };
      case 'delivery':
        return {
          title: t('deliveryAreasTitle'),
          content: t('deliveryAreasContent'),
          icon: <MapPin className="w-8 h-8 text-burger-gold" />
        };
      default:
        return { title: '', content: '', icon: null };
    }
  };

  const { title, content, icon } = getContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-charcoal rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Header with Background Accent */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-burger-gold/10 to-transparent pointer-events-none"></div>
            
            <div className="relative p-8 md:p-12">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-burger-gold hover:text-black transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-burger-gold/10 border border-burger-gold/20 flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <span className="text-burger-gold font-bold uppercase tracking-[0.2em] text-xs mb-1 block">
                      {t('important')}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
                      {title}
                    </h2>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-burger-gold/30 via-burger-gold/10 to-transparent mt-2"></div>

                <div className="text-[#A0A0A0] text-lg leading-relaxed font-medium space-y-4">
                  <p className={language === 'AR' ? 'font-arabic leading-loose text-right' : 'leading-relaxed'}>
                    {content}
                  </p>
                </div>

                <button 
                  onClick={onClose}
                  className="mt-8 w-full py-4 rounded-2xl bg-white/5 border border-white/10 font-bold uppercase tracking-widest text-sm text-white hover:bg-burger-gold hover:text-black transition-all"
                >
                  {t('back')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
