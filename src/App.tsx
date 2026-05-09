import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FeaturedBurgers from './components/FeaturedBurgers';

// Lazy Loaded Components for better performance
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const MenuPreview = lazy(() => import('./components/MenuPreview'));
const Important = lazy(() => import('./components/Important'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Statistics = lazy(() => import('./components/Statistics'));
const FoodGallery = lazy(() => import('./components/FoodGallery'));
const Location = lazy(() => import('./components/Location'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));
const IntroScreen = lazy(() => import('./components/IntroScreen'));
const AppPromotion = lazy(() => import('./components/AppPromotion'));
const DeliveryExperience = lazy(() => import('./components/DeliveryExperience'));
const CartDrawer = lazy(() => import('./components/CartDrawer'));
const MenuModal = lazy(() => import('./components/MenuModal'));
const CheckoutModal = lazy(() => import('./components/CheckoutModal'));
const InfoModal = lazy(() => import('./components/InfoModal'));

import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [infoType, setInfoType] = useState<'help' | 'privacy' | 'terms' | 'delivery'>('help');

  const openInfo = (type: 'help' | 'privacy' | 'terms' | 'delivery') => {
    setInfoType(type);
    setIsInfoOpen(true);
  };

  useEffect(() => {
    // If you want to prevent scrolling while intro is playing
    if (!introFinished) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [introFinished]);

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="bg-matte-black text-cream-white min-h-screen overflow-x-hidden">
          <Suspense fallback={<div className="fixed inset-0 bg-matte-black flex items-center justify-center"><div className="w-12 h-12 border-4 border-burger-gold border-t-transparent rounded-full animate-spin"></div></div>}>
            <AnimatePresence>
              {!introFinished && <IntroScreen onComplete={() => setIntroFinished(true)} />}
            </AnimatePresence>
            <CartDrawer openCheckout={() => setIsCheckoutOpen(true)} />
            <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
            <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} type={infoType} />
            <Navbar />
            <Hero />
            <TrustBar />
            <FeaturedBurgers openMenu={() => setIsMenuOpen(true)} />
            <WhyChooseUs />
            <MenuPreview openMenu={() => setIsMenuOpen(true)} />

            <Important />
            <Testimonials />
            <Statistics />
            <FoodGallery />
            <Location />
            <FAQ />
            <CTA />
            <Footer openInfo={openInfo} />
          </Suspense>
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
