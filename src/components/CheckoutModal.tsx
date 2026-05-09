import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, Truck, User, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'info' | 'delivery' | 'payment' | 'success';

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<Step>('info');
  const { cart, cartTotal, clearCart } = useCart();
  const { t, language } = useLanguage();

  const handleNext = () => {
    if (step === 'info') setStep('delivery');
    else if (step === 'delivery') setStep('payment');
    else if (step === 'payment') {
      setStep('success');
      clearCart();
    }
  };

  const handleBack = () => {
    if (step === 'delivery') setStep('info');
    else if (step === 'payment') setStep('delivery');
  };

  const steps = [
    { id: 'info', icon: <User size={18} />, label: t('info') },
    { id: 'delivery', icon: <Truck size={18} />, label: t('delivery') },
    { id: 'payment', icon: <CreditCard size={18} />, label: t('payment') },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-[#090B0C] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]"
          >
            {/* Left Side: Progress & Summary */}
            <div className="w-full md:w-72 bg-[#050606] p-8 border-b md:border-b-0 md:border-r border-white/5 flex flex-col">
              <div className="mb-10">
                <h3 className="text-white font-display text-2xl uppercase tracking-wider mb-2">{t('checkout')}</h3>
                <p className="text-[#A0A0A0] text-xs uppercase tracking-widest font-bold">{t('secureProcess')}</p>
              </div>

              <div className="space-y-6 flex-grow">
                {steps.map((s, idx) => (
                  <div key={s.id} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      step === s.id ? 'bg-burger-gold text-black' : 
                      steps.findIndex(st => st.id === step) > idx ? 'bg-green-500 text-white' : 'bg-white/5 text-[#A0A0A0]'
                    }`}>
                      {steps.findIndex(st => st.id === step) > idx ? <CheckCircle2 size={18} /> : s.icon}
                    </div>
                    <span className={`text-xs uppercase tracking-widest font-bold ${step === s.id ? 'text-white' : 'text-[#A0A0A0]'}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/5">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[#A0A0A0] text-[10px] uppercase tracking-widest font-bold">{t('totalPayable')}</span>
                  <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[#A0A0A0] text-[10px] italic">Includes all taxes and delivery fees.</p>
              </div>
            </div>

            {/* Right Side: Form Content */}
            <div className="flex-grow p-8 md:p-12 flex flex-col justify-between">
              {step !== 'success' && (
                <button 
                  onClick={onClose}
                  className="absolute top-8 right-8 p-2 rounded-full hover:bg-white/5 text-[#A0A0A0] hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              )}

              <div className="flex-grow">
                {step === 'info' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h4 className="text-white font-display text-3xl uppercase mb-8">{t('personalDetails')}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('firstName')}</label>
                        <input type="text" placeholder="James" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burger-gold/50" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('lastName')}</label>
                        <input type="text" placeholder="Wilson" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burger-gold/50" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('email')}</label>
                      <input type="email" placeholder="james@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burger-gold/50" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('phone')}</label>
                      <input type="tel" placeholder="+212 600 000 000" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burger-gold/50" />
                    </div>
                  </motion.div>
                )}

                {step === 'delivery' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h4 className="text-white font-display text-3xl uppercase mb-8">{t('deliveryAddress')}</h4>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('streetAddress')}</label>
                      <input type="text" placeholder="Ave Annakhil, Hay Riad" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burger-gold/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('city')}</label>
                        <input type="text" placeholder="Rabat" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burger-gold/50" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('zipCode')}</label>
                        <input type="text" placeholder="10100" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burger-gold/50" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-burger-gold ml-2">{t('deliveryNotes')}</label>
                      <textarea placeholder="Gate code, floor, etc..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white h-24 resize-none focus:outline-none focus:border-burger-gold/50"></textarea>
                    </div>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h4 className="text-white font-display text-3xl uppercase mb-8">{t('paymentMethod')}</h4>
                    <div className="bg-white/5 border border-burger-gold/50 rounded-2xl p-6 mb-6">
                      <div className="flex items-center justify-between mb-8">
                        <CreditCard className="text-burger-gold" size={32} />
                        <div className="flex gap-2">
                          <div className="w-10 h-6 bg-white/10 rounded"></div>
                          <div className="w-10 h-6 bg-white/10 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <input type="text" placeholder="Card Number" className="w-full bg-transparent border-b border-white/10 pb-2 text-white focus:outline-none focus:border-burger-gold" />
                        <div className="grid grid-cols-2 gap-8">
                          <input type="text" placeholder="MM/YY" className="bg-transparent border-b border-white/10 pb-2 text-white focus:outline-none focus:border-burger-gold" />
                          <input type="text" placeholder="CVC" className="bg-transparent border-b border-white/10 pb-2 text-white focus:outline-none focus:border-burger-gold" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                      <div className="w-5 h-5 rounded-full border-2 border-white/20"></div>
                      <span className="text-white font-bold uppercase tracking-widest text-xs">Cash on Delivery</span>
                    </div>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-8">
                      <CheckCircle2 size={64} className="animate-bounce" />
                    </div>
                    <h4 className="text-white font-display text-5xl uppercase mb-4">{t('orderPlaced')}</h4>
                    <p className="text-[#A0A0A0] text-lg mb-10 max-w-sm">
                      {t('successMessage')}
                    </p>
                    <button 
                      onClick={onClose}
                      className="bg-burger-gold text-black px-12 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-burger-gold/20"
                    >
                      {t('trackOrder')}
                    </button>
                  </motion.div>
                )}
              </div>

              {step !== 'success' && (
                <div className="flex gap-4 mt-12 pt-8 border-t border-white/5">
                  {step !== 'info' && (
                    <button 
                      onClick={handleBack}
                      className="flex-1 border border-white/10 py-5 rounded-2xl text-[#A0A0A0] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <ArrowLeft size={16} />
                      {t('back')}
                    </button>
                  )}
                  <button 
                    onClick={handleNext}
                    className="flex-[2] bg-burger-gold text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-burger-gold/20"
                  >
                    {step === 'payment' ? t('completeOrder') : t('nextStep')}
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
