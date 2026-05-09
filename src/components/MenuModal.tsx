import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Flame, Star, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Burgers', 'Fries', 'Drinks', 'Desserts'];

  const menuItems = [
    { id: 'b1', category: 'Burgers', name: t('classicSmashName'), price: '$12.99', desc: t('classicSmashDesc'), img: '/../imgs/classicSmash.jpg', badge: 'Popular' },
    { id: 'b2', category: 'Burgers', name: t('spicyInfernoName'), price: '$16.50', desc: t('spicyInfernoDesc'), img: '/../imgs/Spicy Inferno.jpg', badge: 'Spicy' },
    { id: 'b3', category: 'Burgers', name: t('truffleRoyaleName'), price: '$18.99', desc: t('truffleRoyaleDesc'), img: '/../imgs/The Truffle Royale.jpg', badge: 'Premium' },
    { id: 'b4', category: 'Burgers', name: t('bbqBaconName'), price: '$15.99', desc: t('bbqBaconDesc'), img: '/../imgs/BBQ Bacon.jpg', },
    { id: 'b5', category: 'Burgers', name: t('wagyuWonderName'), price: '$24.99', desc: t('wagyuWonderDesc'), img: '/../imgs/Wagyu Wonder.jpg', badge: 'New' },
    { id: 'b6', category: 'Burgers', name: t('bbqBlissName'), price: '$17.95', desc: t('bbqBlissDesc'), img: '/../imgs/BBQ Bliss.jpg', },
    { id: 'b7', category: 'Burgers', name: t('veganVibesName'), price: '$15.50', desc: t('veganVibesDesc'), img: '/../imgs/Vegan Vibes.jpg', },
    { id: 'f1', category: 'Fries', name: t('originalSaltedName'), price: '$4.99', desc: t('originalSaltedDesc'), img: '/../imgs/Original Salted.jpg', },
    { id: 'f2', category: 'Fries', name: t('loadedQuesoName'), price: '$8.99', desc: t('loadedQuesoDesc'), img: '/../imgs/Loaded Queso.jpg', badge: 'Popular' },
    { id: 'f3', category: 'Fries', name: t('sweetPotatoName'), price: '$6.50', desc: t('sweetPotatoDesc'), img: '/../imgs/Sweet Potato.jpg', },
    { id: 'f4', category: 'Fries', name: t('truffleFriesName'), price: '$9.99', desc: t('truffleFriesDesc'), img: '/../imgs/Truffle Fries.jpg', },
    { id: 'd1', category: 'Drinks', name: t('craftColaName'), price: '$3.50', desc: t('craftColaDesc'), img: '/../imgs/Craft Cola.jpg', },
    { id: 'd2', category: 'Drinks', name: t('strawberryShakeName'), price: '$7.00', desc: t('strawberryShakeDesc'), img: '/../imgs/Strawberry Shake.jpg', badge: 'New' },
    { id: 'd3', category: 'Drinks', name: t('icedLemonadeName'), price: '$4.00', desc: t('icedLemonadeDesc'), img: '/../imgs/Iced Lemonade.jpg', },
    { id: 's1', category: 'Desserts', name: t('lavaCakeName'), price: '$8.50', desc: t('lavaCakeDesc'), img: '/../imgs/Lava Cake.jpg', badge: 'Popular' },
    { id: 's2', category: 'Desserts', name: t('cookieSkilletName'), price: '$9.00', desc: t('cookieSkilletDesc'), img: '/../imgs/Cookie Skillet.jpg', },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-matte-black flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#090B0C]/80 backdrop-blur-xl">
            <div className="flex items-center gap-4">
               <img src="/imgs/logo.png" alt="Logo" className="w-10 h-10 rounded-full border border-burger-gold" />
               <h2 className="text-white font-display text-2xl uppercase tracking-widest">Full Menu</h2>
            </div>
            <button onClick={onClose} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
              <X size={28} />
            </button>
          </div>

          {/* Search & Categories */}
          <div className="p-6 bg-[#090B0C]/50 border-b border-white/5 flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0A0]" size={18} />
              <input 
                type="text" 
                placeholder="Search for flavors..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-burger-gold/50 transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all whitespace-nowrap ${
                    activeCategory === cat ? 'bg-burger-gold text-black' : 'bg-white/5 text-[#A0A0A0] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div className="flex-grow overflow-y-auto p-6 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id}
                  className="group bg-white/5 border border-white/10 rounded-[2rem] p-5 hover:border-burger-gold/30 transition-all duration-300"
                >
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-burger-gold text-black font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-lg">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-display text-xl uppercase tracking-tight group-hover:text-burger-gold transition-colors">{item.name}</h3>
                    <span className="text-burger-gold font-black">{item.price}</span>
                  </div>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 h-12 overflow-hidden text-ellipsis line-clamp-2">
                    {item.desc}
                  </p>
                  <button 
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.img
                    })}
                    className="w-full bg-white/5 border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-burger-gold hover:text-black transition-all font-black text-xs uppercase tracking-widest"
                  >
                    Add to Order
                    <ShoppingBag size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-32">
                <p className="text-[#A0A0A0] text-xl">No flavors found matching your search.</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
