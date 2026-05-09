import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

interface CartDrawerProps {
  openCheckout: () => void;
}

export default function CartDrawer({ openCheckout }: CartDrawerProps) {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, itemCount } = useCart();

  const { t, language } = useLanguage();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: language === 'AR' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'AR' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 ${language === 'AR' ? 'left-0' : 'right-0'} h-full w-full max-w-md bg-[#050606] shadow-2xl z-[210] flex flex-col border-l border-white/5`}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#090B0C]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-burger-gold/20 flex items-center justify-center text-burger-gold">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h2 className="text-white font-display text-xl uppercase tracking-wider">{t('orderNow')}</h2>
                  <p className="text-[#A0A0A0] text-[10px] uppercase tracking-widest font-bold">{itemCount} {itemCount === 1 ? t('item') : t('items')}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white/20">
                    <ShoppingBag size={48} />
                  </div>
                  <h3 className="text-white font-display text-2xl uppercase mb-2">Cart is Empty</h3>
                  <p className="text-[#A0A0A0] text-sm max-w-[200px]">Looks like you haven't added any burgers yet.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-charcoal shrink-0 border border-white/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white font-bold uppercase tracking-wide text-sm">{item.name}</h4>
                        <span className="text-burger-gold font-black text-sm">{item.price}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-white/5 rounded-full p-1 border border-white/10">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-black text-white w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#A0A0A0] hover:text-ketchup-red transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-[#090B0C] border-t border-white/5">
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#A0A0A0] uppercase tracking-widest font-bold">{t('subtotal')}</span>
                    <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#A0A0A0] uppercase tracking-widest font-bold">{t('delivery')}</span>
                    <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">{t('free')}</span>
                  </div>
                  <div className="flex justify-between items-end pt-3 border-t border-white/5">
                    <span className="text-white font-display text-xl uppercase tracking-wider">{t('total')}</span>
                    <span className="text-burger-gold font-display text-3xl tracking-tight">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    openCheckout();
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-burger-gold text-black py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_15px_30px_rgba(251,191,36,0.2)] group"
                >
                  {t('checkout')}
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>

              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
