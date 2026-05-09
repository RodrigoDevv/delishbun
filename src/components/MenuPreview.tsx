import { useState } from 'react';
import { ShoppingBag, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

export default function MenuPreview({ openMenu }: { openMenu: () => void }) {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');

  const categories = [
    { key: 'All', label: t('categoryAll') },
    { key: 'Burgers', label: t('categoryBurgers') },
    { key: 'Fries', label: t('categoryFries') },
    { key: 'Drinks', label: t('categoryDrinks') },
    { key: 'Desserts', label: t('categoryDesserts') }
  ];

  const menuItems = {
    Burgers: [
      { id: 'b1', name: t('classicSmashName'), price: '$12.99', desc: t('classicSmashDesc'), img: '/delishbun/imgs/classicSmash.jpg' },
      { id: 'b2', name: t('spicyInfernoName'), price: '$16.50', desc: t('spicyInfernoDesc'), img: '/delishbun/imgs/Spicy Inferno.jpg' },
      { id: 'b3', name: t('truffleRoyaleName'), price: '$18.99', desc: t('truffleRoyaleDesc'), img: '/delishbun/imgs/The Truffle Royale.jpg' },
      { id: 'b4', name: t('bbqBaconName'), price: '$15.99', desc: t('bbqBaconDesc'), img: '/delishbun/imgs/BBQ Bacon.jpg' },
    ],
    Fries: [
      { id: 'f1', name: t('originalSaltedName'), price: '$4.99', desc: t('originalSaltedDesc'), img: '/delishbun/imgs/Original Salted.jpg' },
      { id: 'f2', name: t('loadedQuesoName'), price: '$8.99', desc: t('loadedQuesoDesc'), img: '/delishbun/imgs/Loaded Queso.jpg' },
      { id: 'f3', name: t('sweetPotatoName'), price: '$6.50', desc: t('sweetPotatoDesc'), img: '/delishbun/imgs/Sweet Potato.jpg' },
      { id: 'f4', name: t('truffleFriesName'), price: '$9.99', desc: t('truffleFriesDesc'), img: '/delishbun/imgs/Truffle Fries.jpg' },
    ],
    Drinks: [
      { id: 'd1', name: t('craftColaName'), price: '$3.50', desc: t('craftColaDesc'), img: '/delishbun/imgs/Craft Cola.jpg' },
      { id: 'd2', name: t('strawberryShakeName'), price: '$7.00', desc: t('strawberryShakeDesc'), img: '/delishbun/imgs/Strawberry Shake.jpg' },
      { id: 'd3', name: t('icedLemonadeName'), price: '$4.00', desc: t('icedLemonadeDesc'), img: '/delishbun/imgs/Iced Lemonade.jpg' },
    ],
    Desserts: [
      { id: 's1', name: t('lavaCakeName'), price: '$8.50', desc: t('lavaCakeDesc'), img: '/delishbun/imgs/Lava Cake.jpg' },
      { id: 's2', name: t('cookieSkilletName'), price: '$9.00', desc: t('cookieSkilletDesc'), img: '/delishbun/imgs/Cookie Skillet.jpg' },
    ]
  };

  // Flatten menu items for grid
  const allItems = Object.entries(menuItems).flatMap(([cat, items]) =>
    items.map(item => ({ ...item, category: cat, categoryLabel: t(`category${cat}`) }))
  );
  const filteredItems = filter === 'All' ? allItems : allItems.filter(item => item.category === filter);

  // Example badges for demo
  const badgeMap: Record<string, string> = {
    b2: t('popular'), // Spicy Inferno
    b3: t('new'),     // Truffle Royale
    f2: t('popular'),
    d2: t('new'),
    s1: t('popular'),
  };

  return (
    <section className="py-24 md:py-32 bg-[#050606] relative overflow-hidden">
      {/* Abstract Background Blur */}
      <div className="absolute top-1/4 right-1/4 w-[60vh] h-[60vh] bg-burger-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-12 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-0.5 w-12 bg-ketchup-red"></span>
            <span className="text-ketchup-red font-bold uppercase tracking-widest text-sm">{t('ourMenu')}</span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl md:text-[7rem] uppercase tracking-tighter leading-[0.85] text-white m-0">
            {t('discoverTaste').split(' ')[0]} <span className="text-transparent" style={{ WebkitTextStroke: '2px #A0A0A0' }}>{t('discoverFlavors').split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 font-bold uppercase tracking-widest text-sm md:text-base rounded-full transition-colors duration-300 ${
                filter === cat.key ? 'bg-burger-gold text-black shadow-lg' : 'bg-[#181818] text-[#A0A0A0] hover:bg-[#232323] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {/* Badge */}
                {badgeMap[item.id] && (
                  <span className="absolute top-4 left-4 bg-burger-gold text-black font-bold px-3 py-1 rounded-full text-xs uppercase shadow-md">
                    {badgeMap[item.id]}
                  </span>
                )}
                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.img
                    })}
                    className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-burger-gold hover:text-black shadow-lg transition-all duration-200"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-burger-gold hover:text-black shadow-lg transition-all duration-200">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter drop-shadow-sm">
                  {item.name}
                </h3>
                <span className="font-display text-xl text-burger-gold mb-2">{item.price}</span>
                <p className="text-[#A0A0A0] font-medium text-base md:text-lg leading-relaxed mb-4 flex-1">
                  {item.desc}
                </p>
                <span className="inline-block bg-[#232323] text-white/70 text-xs px-3 py-1 rounded-full uppercase tracking-widest self-start">{item.categoryLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={openMenu}
            className="group relative bg-burger-gold text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-base hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(251,191,36,0.2)] flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10">{t('viewFullMenu')}</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-20"></div>
            <ShoppingBag className="w-5 h-5 relative z-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
