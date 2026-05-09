import { motion } from 'motion/react';
import { Plus, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

export default function FeaturedBurgers({ openMenu }: { openMenu: () => void }) {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const burgers = [
    {
      id: 1,
      name: t('truffleRoyaleName'),
      description: t('truffleRoyaleDesc'),
      price: "$18.99",
      cals: "850 Cal",
      image: "/delishbun/imgs/Truffle Fries.jpg",
      badge: t('bestSeller')
    },
    {
      id: 2,
      name: t('spicyInfernoName'),
      description: t('spicyInfernoDesc'),
      price: "$16.50",
      cals: "920 Cal",
      image: "/delishbun/imgs/Spicy Inferno.jpg",
      badge: t('spicy'),
      icon: <Flame className="w-4 h-4" />
    },
    {
      id: 3,
      name: t('classicSmashName'),
      description: t('classicSmashDesc'),
      price: "$12.99",
      cals: "740 Cal",
      image: "/delishbun/imgs/classicSmash.jpg"
    },
    {
      id: 4,
      name: t('wagyuWonderName'),
      description: t('wagyuWonderDesc'),
      price: "$24.99",
      cals: "980 Cal",
      image: "/delishbun/imgs/Wagyu Wonder.jpg",
      badge: t('new')
    },
    {
      id: 5,
      name: t('bbqBlissName'),
      description: t('bbqBlissDesc'),
      price: "$17.95",
      cals: "1050 Cal",
      image: "/delishbun/imgs/BBQ Bliss.jpg"
    },
    {
      id: 6,
      name: t('veganVibesName'),
      description: t('veganVibesDesc'),
      price: "$15.50",
      cals: "620 Cal",
      image: "/delishbun/imgs/Vegan Vibes.jpg"
    }
  ];


  return (
    <section id="menu" className="py-24 bg-matte-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-4">
               <span className="h-[2px] w-12 bg-burger-gold"></span>
               <span className="text-burger-gold font-bold uppercase tracking-widest text-sm">{t('signatureSelection')}</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white m-0 leading-none mt-2">
              {t('mostWanted')} <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #A0A0A0' }}>{t('burgers')}</span>
            </h2>
          </motion.div>
          <button 
            onClick={openMenu}
            className="hidden md:block uppercase tracking-widest font-bold text-sm text-cream-white hover:text-burger-gold transition-colors pb-2 border-b-2 border-transparent hover:border-burger-gold"
          >
            {t('viewFullMenu')}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {burgers.map((burger, idx) => (
            <motion.div 
              key={burger.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative bg-[#090B0C] rounded-[2.5rem] p-4 md:p-6 border border-white/5 hover:border-burger-gold/30 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-burger-gold/10 hover:-translate-y-2"
            >
              {burger.badge && (
                <div className={`absolute top-8 left-8 z-20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md border border-white/10 shadow-xl ${
                  burger.badge === t('spicy') ? 'bg-ketchup-red/90 text-white' : 'bg-burger-gold/90 text-matte-black'
                }`}>
                  {burger.badge === t('spicy') ? <Flame className="w-4 h-4 fill-current animate-pulse" /> : null}
                  {burger.badge}
                </div>
              )}
              
              <div className="relative h-[250px] md:h-[280px] mb-8 overflow-hidden rounded-[2rem] bg-charcoal group-hover:bg-[#1A1412] transition-colors duration-500">
                <img 
                  src={burger.image} 
                  alt={`${burger.name} - ${burger.description}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90 group-hover:opacity-60 transition-opacity duration-500 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0C] via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Price tag floating inside image */}
                <div className="absolute bottom-4 right-4 bg-white text-black font-black text-xl px-4 py-2 rounded-xl transform rotate-[-3deg] shadow-xl group-hover:rotate-0 transition-transform duration-500">
                  {burger.price}
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <h3 className="font-display text-2xl md:text-3xl tracking-wide uppercase text-white group-hover:text-burger-gold transition-colors duration-300">{burger.name}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-warm-orange mt-1">{burger.cals}</span>
              </div>

              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8 flex-grow font-medium">
                {burger.description}
              </p>

              <button 
                onClick={() => addToCart({
                  id: burger.id,
                  name: burger.name,
                  price: burger.price,
                  image: burger.image
                })}
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 uppercase tracking-widest font-black text-sm text-white hover:bg-burger-gold hover:text-black transition-all group-hover:border-transparent group-hover:shadow-[0_10px_20px_rgba(251,191,36,0.2)] mt-auto active:scale-95"
              >
                {t('addToOrder')}
                <Plus className="w-5 h-5 stroke-[3]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
