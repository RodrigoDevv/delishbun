import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'AR' | 'FR';

interface Translations {
  [key: string]: {
    EN: string;
    AR: string;
    FR: string;
  };
}

const translations: Translations = {
  // Navbar
  home: { EN: 'Home', AR: 'الرئيسية', FR: 'Accueil' },
  menu: { EN: 'Menu', AR: 'القائمة', FR: 'Menu' },
  about: { EN: 'About', AR: 'عنّا', FR: 'À propos' },
  locations: { EN: 'Locations', AR: 'مواقعنا', FR: 'Lieux' },
  faq: { EN: 'FAQ', AR: 'الأسئلة الشائعة', FR: 'FAQ' },
  contact: { EN: 'Contact', AR: 'اتصل بنا', FR: 'Contact' },
  orderNow: { EN: 'Order Now', AR: 'اطلب الآن', FR: 'Commander' },
  
  // Hero
  discoverTaste: { EN: 'DISCOVER THE TASTE', AR: 'اكتشف المذاق', FR: 'DÉCOUVREZ LE GOÛT' },
  juicy: { EN: 'JUICY', AR: 'عصاري', FR: 'JUTEUX' },
  crispy: { EN: 'CRISPY', AR: 'مقرمش', FR: 'CROUSTILLANT' },
  cheesy: { EN: 'CHEESY', AR: 'جبني', FR: 'FROMAGÉ' },
  perfectlyCrafted: { EN: 'Perfectly Crafted', AR: 'صنع بإتقان', FR: 'Parfaitement Conçu' },
  signatureSeries: { EN: 'Signature Series', AR: 'سلسلة التوقيع', FR: 'Série Signature' },
  angusBeefDesc: { EN: '100% Angus beef, aged cheddar, and our house-made secret sauce. An uncompromising culinary standard.', AR: 'لحم أنجوس 100٪، جبن شيدر معتق، وصلصتنا السرية المصنوعة منزليًا. معيار طهي لا يضاهى.', FR: 'Bœuf Angus 100 %, cheddar affiné et notre sauce secrète maison. Un standard culinaire sans compromis.' },
  craftedToPerfection: { EN: 'CRAFTED TO PERFECTION', AR: 'صنع بإتقان', FR: 'CONÇU À LA PERFECTION' },
  localIngredients: { EN: 'LOCAL INGREDIENTS', AR: 'مكونات محلية', FR: 'INGRÉDIENTS LOCAUX' },
  woodFired: { EN: 'WOOD FIRED', AR: 'مشوي على الحطب', FR: 'CUIT AU FEU DE BOIS' },
  premiumQuality: { EN: 'Premium Quality', AR: 'جودة ممتازة', FR: 'Qualité Premium' },
  beef: { EN: 'Beef', AR: 'لحم بقري', FR: 'Bœuf' },
  scroll: { EN: 'Scroll', AR: 'اسحب', FR: 'Défiler' },

  // TrustBar
  avgRating: { EN: '4.9 AVERAGE RATING', AR: '4.9 متوسط التقييم', FR: '4.9 NOTE MOYENNE' },
  flameGrilled: { EN: 'FLAME GRILLED TO PERFECTION', AR: 'مشوي على اللهب بإتقان', FR: 'GRILLÉ À LA FLAMME À LA PERFECTION' },
  freshIngredients: { EN: 'FRESH DAILY INGREDIENTS', AR: 'مكونات طازجة يوميًا', FR: 'INGRÉDIENTS FRAIS QUOTIDIENS' },
  fastDelivery: { EN: 'FAST 30 MIN DELIVERY', AR: 'توصيل سريع في 30 دقيقة', FR: 'LIVRAISON RAPIDE 30 MIN' },
  twentyLocations: { EN: '20+ LOCATIONS', AR: 'أكثر من 20 موقعاً', FR: 'PLUS DE 20 LIEUX' },

  // Location Section
  findUs: { EN: 'Find Us', AR: 'تجدنا', FR: 'Trouvez-nous' },
  comeVisit: { EN: 'COME VISIT', AR: 'تفضل بزيارتنا', FR: 'VENEZ NOUS VOIR' },
  theSource: { EN: 'THE SOURCE', AR: 'المصدر', FR: 'LA SOURCE' },
  address: { EN: 'Address', AR: 'العنوان', FR: 'Adresse' },
  contact: { EN: 'Contact', AR: 'اتصل بنا', FR: 'Contact' },
  openingHours: { EN: 'Opening Hours', AR: 'ساعات العمل', FR: 'Heures d\'ouverture' },
  monThu: { EN: 'Mon - Thu', AR: 'الاثنين - الخميس', FR: 'Lun - Jeu' },
  friday: { EN: 'Friday', AR: 'الجمعة', FR: 'Vendredi' },
  saturday: { EN: 'Saturday', AR: 'السبت', FR: 'Samedi' },
  sunday: { EN: 'Sunday', AR: 'الأحد', FR: 'Dimanche' },
  getDirections: { EN: 'GET DIRECTIONS', AR: 'احصل على الاتجاهات', FR: 'OBTENIR L\'ITINÉRAIRE' },
  locationDesc: { EN: 'Experience the atmosphere where the magic happens. Our flagship location in the heart of Rabat is designed for the ultimate burger enthusiast.', AR: 'اختبر الأجواء حيث يحدث السحر. تم تصميم موقعنا الرئيسي في قلب الرباط لعشاق البرغر.', FR: 'Découvrez l\'atmosphère où la magie opère. Notre emplacement phare au cœur de Rabat est conçu pour l\'amateur de burger ultime.' },
  downtownDistrict: { EN: 'Hay Riad', AR: 'حي الرياض', FR: 'Hay Riad' },
  headquarters: { EN: 'Delish Bun Headquarters', AR: 'مقر ديليش بن الرئيسي', FR: 'Siège Social Delish Bun' },
  
  // FAQ
  questions: { EN: 'Got Questions?', AR: 'هل لديك أسئلة؟', FR: 'Des questions ?' },
  faqSubtitle: { EN: 'Everything you need to know about the Delish experience.', AR: 'كل ما تحتاج لمعرفته حول تجربة ديليش.', FR: 'Tout ce que vous devez savoir sur l\'expérience Delish.' },
  faq1Q: { EN: 'Do you offer vegan options?', AR: 'هل تقدمون خيارات نباتية؟', FR: 'Proposez-vous des options végétaliennes ?' },
  faq1A: { EN: 'Yes! We have a dedicated plant-based patty that can be swapped into any of our signature burgers.', AR: 'نعم! لدينا شريحة نباتية مخصصة يمكن استبدالها في أي من برغر التوقيع الخاص بنا.', FR: 'Oui ! Nous avons un steak végétal dédié qui peut être échangé dans n\'importe lequel de nos burgers signatures.' },
  faq2Q: { EN: 'Is your beef halal?', AR: 'هل لحمكم حلال؟', FR: 'Votre bœuf est-il halal ?' },
  faq2A: { EN: 'All our beef is 100% certified halal and sourced from trusted premium suppliers.', AR: 'جميع لحومنا حلال معتمدة بنسبة 100٪ ويتم الحصول عليها من موردين متميزين موثوقين.', FR: 'Tout notre bœuf est certifié 100 % halal et provient de fournisseurs premium de confiance.' },
  faq3Q: { EN: 'How fast is delivery?', AR: 'ما مدى سرعة التوصيل؟', FR: 'Quelle est la rapidité de la livraison ?' },
  faq3A: { EN: 'We aim to deliver within 30 minutes for all orders within our 10-mile delivery zone.', AR: 'نهدف إلى التوصيل في غضون 30 دقيقة لجميع الطلبات داخل منطقة التوصيل التي تبلغ 10 أميال.', FR: 'Nous visons à livrer en 30 minutes pour toutes les commandes dans notre zone de livraison de 15 km.' },
  faq4Q: { EN: 'Can I track my order?', AR: 'هل يمكنني تتبع طلبي؟', FR: 'Puis-je suivre ma commande ?' },
  faq4A: { EN: 'Yes! Use our mobile app to track your delivery in real-time from the kitchen to your door.', AR: 'نعم! استخدم تطبيقنا للهاتف لتتبع توصيلك في الوقت الفعلي من المطبخ إلى باب منزلك.', FR: 'Oui ! Utilisez notre application mobile pour suivre votre livraison en temps réel de la cuisine à votre porte.' },
  faq5Q: { EN: 'Do you host private events?', AR: 'هل تستضيفون مناسبات خاصة؟', FR: 'Organisez-vous des événements privés ?' },
  faq5A: { EN: 'Absolutely! Contact our event team to book our flagship location for your next celebration.', AR: 'بالتأكيد! اتصل بفريق الفعاليات لدينا لحجز موقعنا الرئيسي لاحتفالك القادم.', FR: 'Absolument ! Contactez notre équipe événementielle pour réserver notre emplacement phare pour votre prochaine fête.' },
  faq6Q: { EN: 'Where do you source your ingredients?', AR: 'من أين تحصلون على مكوناتكم؟', FR: 'D\'où proviennent vos ingrédients ?' },
  faq6A: { EN: 'We partner with local organic farms to ensure the freshest produce and premium quality meat.', AR: 'نحن نتشارك مع مزارع عضوية محلية لضمان طزاجة المنتجات ولحوم عالية الجودة.', FR: 'Nous collaborons avec des fermes biologiques locales pour garantir les produits les plus frais et une viande de qualité premium.' },

  // CTA
  readyToSmash: { EN: 'READY TO SMASH?', AR: 'جاهز للتجربة؟', FR: 'PRÊT À DÉGUSTER ?' },
  ctaDesc: { EN: "Don't let your cravings wait. Order now and experience the burger that everyone is talking about.", AR: 'لا تدع رغباتك تنتظر. اطلب الآن وجرب البرغر الذي يتحدث عنه الجميع.', FR: 'Ne laissez pas vos envies attendre. Commandez maintenant et découvrez le burger dont tout le monde parle.' },
  orderNowBtn: { EN: 'ORDER NOW', AR: 'اطلب الآن', FR: 'COMMANDER MAINTENANT' },
  satisfactionGuaranteed: { EN: 'SATISFACTION GUARANTEED', AR: 'الرضا مضمون', FR: 'SATISFACTION GARANTIE' },

  // Footer
  quickLinks: { EN: 'Quick Links', AR: 'روابط سريعة', FR: 'Liens Rapides' },
  support: { EN: 'Support', AR: 'الدعم', FR: 'Support' },
  joinTheClub: { EN: 'Join the Club', AR: 'انضم إلى النادي', FR: 'Rejoindre le Club' },
  newsletterDesc: { EN: 'Get secret menu access and weekly deals delivered straight to your inbox.', AR: 'احصل على وصول إلى القائمة السرية والصفقات الأسبوعية مباشرة في صندوق الوارد الخاص بك.', FR: 'Accédez au menu secret et aux offres hebdomadaires directement dans votre boîte de réception.' },
  emailPlaceholder: { EN: 'Your email address', AR: 'عنوان بريدك الإلكتروني', FR: 'Votre adresse e-mail' },
  join: { EN: 'Join', AR: 'انضم', FR: 'Rejoindre' },
  allRightsReserved: { EN: 'All Rights Reserved.', AR: 'جميع الحقوق محفوظة.', FR: 'Tous droits réservés.' },
  backToTop: { EN: 'Back to top', AR: 'العودة للأعلى', FR: 'Retour en haut' },
  footerBrandDesc: { EN: 'Crafting the ultimate smash burger experience with premium ingredients, passion, and a touch of fire. Join the revolution.', AR: 'نصنع تجربة سماش برغر المثالية بمكونات فاخرة وشغف ولمسة من النار. انضم إلى الثورة.', FR: 'Créer l\'expérience ultime du smash burger avec des ingrédients premium, de la passion et une touche de feu. Rejoignez la révolution.' },
  navHome: { EN: 'Home', AR: 'الرئيسية', FR: 'Accueil' },
  navMenu: { EN: 'Menu', AR: 'القائمة', FR: 'Menu' },
  navAbout: { EN: 'About', AR: 'عنّا', FR: 'À propos' },
  navGallery: { EN: 'Gallery', AR: 'المعرض', FR: 'Galerie' },
  navLocation: { EN: 'Location', AR: 'الموقع', FR: 'Lieu' },
  helpCenter: { EN: 'Help Center', AR: 'مركز المساعدة', FR: 'Centre d\'Aide' },
  privacyPolicy: { EN: 'Privacy Policy', AR: 'سياسة الخصوصية', FR: 'Politique de Confidentialité' },
  termsOfService: { EN: 'Terms of Service', AR: 'شروط الخدمة', FR: 'Conditions d\'Utilisation' },
  deliveryAreas: { EN: 'Delivery Areas', AR: 'مناطق التوصيل', FR: 'Zones de Livraison' },

  // FeaturedBurgers
  signatureSelection: { EN: 'Signature Selection', AR: 'اختيارنا المميز', FR: 'Sélection Signature' },
  mostWanted: { EN: 'MOST WANTED', AR: 'الأكثر طلباً', FR: 'LES PLUS RECHERCHÉS' },
  burgers: { EN: 'BURGERS', AR: 'برغر', FR: 'BURGERS' },
  viewFullMenu: { EN: 'View Full Menu', AR: 'عرض القائمة الكاملة', FR: 'Voir tout le menu' },
  bestSeller: { EN: 'Best Seller', AR: 'الأكثر مبيعاً', FR: 'Meilleure Vente' },
  spicy: { EN: 'Spicy', AR: 'حار', FR: 'Épicé' },
  addToOrder: { EN: 'Add to Order', AR: 'أضف إلى الطلب', FR: 'Ajouter à la commande' },
  truffleRoyaleName: { EN: 'The Truffle Royale', AR: 'ترافل رويال', FR: 'Le Truffe Royale' },
  truffleRoyaleDesc: { EN: 'Double smashed wagyu, black truffle mayo, gruyere cheese, caramelized onions on a toasted brioche.', AR: 'واغيو مزدوج، مايو الترافل الأسود، جبنة غرويير، بصل مكرمل على خبز بريوش محمص.', FR: 'Wagyu double smash, mayo à la truffe noire, gruyère, oignons caramélisés sur brioche toastée.' },
  spicyInfernoName: { EN: 'Spicy Inferno', AR: 'جحيم التوابل', FR: 'L\'Inferno Épicé' },
  spicyInfernoDesc: { EN: 'Crispy jalapeños, pepper jack, ghost pepper aioli, smoked bacon, double beef patty.', AR: 'هلابينو مقرمش، جبنة بيبر جاك، أيولي فلفل غوست، لحم بقري مدخن، شريحة لحم مزدوجة.', FR: 'Jalapeños croustillants, pepper jack, aïoli ghost pepper, bacon fumé, double steak de bœuf.' },
  classicSmashName: { EN: 'Classic Smash', AR: 'كلاسيك سماش', FR: 'Le Classic Smash' },
  classicSmashDesc: { EN: 'Two 100% Angus patties, American cheese, house pickles, signature Delish sauce.', AR: 'شريحتان من لحم أنجوس 100٪، جبنة أمريكية، مخلل منزلي، صلصة ديليش المميزة.', FR: 'Deux steaks Angus 100 %, fromage américain, cornichons maison, sauce signature Delish.' },
  wagyuWonderName: { EN: 'Wagyu Wonder', AR: 'عجب الواغيو', FR: 'Merveille de Wagyu' },
  wagyuWonderDesc: { EN: 'Premium Wagyu beef, truffle butter, aged cheddar, and crispy shallots.', AR: 'لحم واغيو فاخر، زبدة الترافل، جبنة شيدر معتقة، وكراث مقرمش.', FR: 'Bœuf Wagyu premium, beurre à la truffe, cheddar affiné et échalotes croustillantes.' },
  bbqBlissName: { EN: 'BBQ Bliss', AR: 'نعيم الباربيكيو', FR: 'BBQ Bliss' },
  bbqBlissDesc: { EN: 'Smoked brisket, BBQ sauce, onion rings, and monterey jack cheese.', AR: 'صدر لحم مدخن، صلصة باربيكيو، حلقات بصل، وجبنة مونتيري جاك.', FR: 'Poitrine fumée, sauce BBQ, rondelles d\'oignon et fromage monterey jack.' },
  veganVibesName: { EN: 'Vegan Vibes', AR: 'أجواء نباتية', FR: 'Ambiance Végane' },
  veganVibesDesc: { EN: 'Plant-based patty, vegan mayo, fresh avocado, and sprouts on a gluten-free bun.', AR: 'شريحة نباتية، مايو نباتي، أفوكادو طازج، وبراعم على خبز خالٍ من الغلوتين.', FR: 'Steak végétal, mayo végane, avocat frais et germes sur pain sans gluten.' },

  // WhyChooseUs
  freshIngredientsTitle: { EN: 'Fresh Ingredients', AR: 'مكونات طازجة', FR: 'Ingrédients Frais' },
  freshIngredientsDesc: { EN: 'Sourced locally. Our produce is chopped daily and our brioche buns are baked every morning.', AR: 'يتم الحصول عليها محلياً. يتم تقطيع منتجاتنا يومياً ويتم خبز البريوش كل صباح.', FR: 'Sourcing local. Nos produits sont coupés quotidiennement et nos pains briochés sont cuits chaque matin.' },
  signatureSaucesTitle: { EN: 'Signature Sauces', AR: 'صلصات مميزة', FR: 'Sauces Signature' },
  signatureSaucesDesc: { EN: 'Secret recipes perfected over years. Made from scratch in our kitchens to elevate every bite.', AR: 'وصفات سرية تم إتقانها على مر السنين. مصنوعة من الصفر في مطابخنا لرفع مستوى كل قضمة.', FR: 'Recettes secrètes perfectionnées au fil des ans. Fabriquées de toutes pièces dans nos cuisines.' },
  lightningFastTitle: { EN: 'Lightning Fast', AR: 'برق سريع', FR: 'Rapide comme l\'éclair' },
  lightningFastDesc: { EN: 'From grill to your door. Our optimized delivery network keeps your food hot and fresh.', AR: 'من الشواية إلى باب منزلك. شبكة التوصيل المحسنة لدينا تحافظ على طعامك ساخناً وطازجاً.', FR: 'Du grill à votre porte. Notre réseau de livraison optimisé garde vos plats chauds et frais.' },
  premiumBeefTitle: { EN: 'Premium Beef', AR: 'لحم بقري فاخر', FR: 'Bœuf Premium' },
  premiumBeefDesc: { EN: '100% grass-fed Angus. No fillers, no preservatives, just pure quality meat smashed to perfection.', AR: 'لحم أنجوس مغذى على الأعشاب بنسبة 100٪. لا حشو، لا مواد حفظ، فقط لحم عالي الجودة.', FR: 'Angus 100 % nourri à l\'herbe. Sans additifs ni conservateurs, juste une viande de qualité pure.' },
  uncompromisingQuality: { EN: 'Uncompromising Quality', AR: 'جودة لا تساوم', FR: 'Qualité Sans Compromis' },
  whyUs: { EN: 'Why Us?', AR: 'لماذا نحن؟', FR: 'Pourquoi Nous ?' },
  whyUsDesc: { EN: 'We don\'t just make burgers. We engineer culinary experiences that challenge the status quo of fast food.', AR: 'نحن لا نصنع البرغر فحسب. نحن نصمم تجارب طهي تتحدى الوضع الراهن للوجبات السريعة.', FR: 'Nous ne nous contentons pas de faire des burgers. Nous concevons des expériences culinaires qui défient le statu quo de la restauration rapide.' },

  // MenuPreview
  categoryAll: { EN: 'All', AR: 'الكل', FR: 'Tout' },
  categoryBurgers: { EN: 'Burgers', AR: 'برغر', FR: 'Burgers' },
  categoryFries: { EN: 'Fries', AR: 'بطاطس', FR: 'Frites' },
  categoryDrinks: { EN: 'Drinks', AR: 'مشروبات', FR: 'Boissons' },
  categoryDesserts: { EN: 'Desserts', AR: 'حلويات', FR: 'Desserts' },
  popular: { EN: 'Popular', AR: 'شائع', FR: 'Populaire' },
  new: { EN: 'New', AR: 'جديد', FR: 'Nouveau' },
  ourMenu: { EN: 'Our Menu', AR: 'قائمتنا', FR: 'Notre Menu' },
  discoverFlavors: { EN: 'DISCOVER FLAVORS', AR: 'اكتشف النكهات', FR: 'DÉCOUVREZ LES SAVEURS' },
  bbqBaconName: { EN: 'BBQ Bacon', AR: 'بي بي كيو بيكون', FR: 'BBQ Bacon' },
  bbqBaconDesc: { EN: 'Crispy onion rings, thick-cut applewood bacon, house-made BBQ sauce.', AR: 'حلقات بصل مقرمشة، لحم بقري مقدد مقطع سميكاً، صلصة باربيكيو منزلية.', FR: 'Rondelles d\'oignons croustillantes, bacon fumé, sauce BBQ maison.' },
  originalSaltedName: { EN: 'Original Salted', AR: 'مملح أصلي', FR: 'Original Salé' },
  originalSaltedDesc: { EN: 'Crispy golden fries tossed in coarse sea salt.', AR: 'بطاطس مقلية ذهبية مقرمشة مع ملح البحر الخشن.', FR: 'Frites dorées et croustillantes au sel de mer.' },
  loadedQuesoName: { EN: 'Loaded Queso', AR: 'كيزو محمل', FR: 'Queso Chargé' },
  loadedQuesoDesc: { EN: 'Smothered in liquid gold cheese, bacon bits, and scallions.', AR: 'مغطاة بجبنة السائل الذهبية، قطع لحم بقري مقدد، وبصل أخضر.', FR: 'Nappé de fromage fondant, éclats de bacon et oignons verts.' },
  sweetPotatoName: { EN: 'Sweet Potato', AR: 'بطاطا حلوة', FR: 'Patate Douce' },
  sweetPotatoDesc: { EN: 'Perfectly crispy sweet potato fries served with spiced marshmallow dip.', AR: 'بطاطا حلوة مقلية مقرمشة تقدم مع صوص المارشميلو المتبل.', FR: 'Frites de patates douces servies avec un dip guimauve épicé.' },
  truffleFriesName: { EN: 'Truffle Fries', AR: 'بطاطس الترافل', FR: 'Frites à la Truffe' },
  truffleFriesDesc: { EN: 'Shoestring fries tossed in white truffle oil and aged parmesan.', AR: 'بطاطس رقيقة مع زيت الترافل الأبيض وجبن البارميزان المعتق.', FR: 'Frites allumettes à l\'huile de truffe blanche et parmesan affiné.' },
  craftColaName: { EN: 'Craft Cola', AR: 'كرافت كولا', FR: 'Craft Cola' },
  craftColaDesc: { EN: 'Small-batch cola made with real cane sugar.', AR: 'كولا مصنوعة يدوياً بكميات صغيرة مع سكر القصب الحقيقي.', FR: 'Cola artisanal fait avec du vrai sucre de canne.' },
  strawberryShakeName: { EN: 'Strawberry Shake', AR: 'ميلك شيك فراولة', FR: 'Milkshake Fraise' },
  strawberryShakeDesc: { EN: 'Hand-spun real ice cream topped with fresh whipped cream.', AR: 'آيس كريم حقيقي مخفوق يدوياً ومغطى بالكريمة المخفوقة الطازجة.', FR: 'Glace artisanale garnie de crème fouettée fraîche.' },
  icedLemonadeName: { EN: 'Iced Lemonade', AR: 'ليموناضة مثلجة', FR: 'Limonade Glacée' },
  icedLemonadeDesc: { EN: 'Freshly squeezed lemons with a hint of mint.', AR: 'ليمون معصور طازجاً مع لمسة من النعناع.', FR: 'Citrons fraîchement pressés avec un soupçon de menthe.' },
  lavaCakeName: { EN: 'Lava Cake', AR: 'لافا كيك', FR: 'Lava Cake' },
  lavaCakeDesc: { EN: 'Decadent molten chocolate center with vanilla bean ice cream.', AR: 'مركز شوكولاتة ذائب مع آيس كريم فانيليا.', FR: 'Cœur fondant au chocolat avec glace à la vanille.' },
  cookieSkilletName: { EN: 'Cookie Skillet', AR: 'كوكي سكيلت', FR: 'Cookie Skillet' },
  cookieSkilletDesc: { EN: 'Warm, gooey chocolate chip cookie baked fresh in a cast-iron skillet.', AR: 'كوكيز برقائق الشوكولاتة دافئة ولزجة مخبوزة طازجة في مقلاة حديدية.', FR: 'Cookie aux pépites de chocolat cuit dans une poêle en fonte.' },

  // Important
  important: { EN: 'Important', AR: 'هام', FR: 'Important' },
  whatYouShouldKnow: { EN: 'What You Should Know', AR: 'ما يجب أن تعرفه', FR: 'Ce que vous devez savoir' },
  importantText: { EN: 'We use only the freshest, highest-quality ingredients. Our kitchen is nut-free, and we offer gluten-free buns on request. Delivery is available within a 10-mile radius. For allergies or special requests, please contact us before ordering. Thank you for choosing Delish Bun!', AR: 'نحن نستخدم فقط المكونات الطازجة وعالية الجودة. مطبخنا خالٍ من المكسرات، ونقدم خبزاً خالياً من الغلوتين عند الطلب. التوصيل متاح في نطاق 10 أميال. للحساسية أو الطلبات الخاصة، يرجى الاتصال بنا قبل الطلب. شكراً لاختياركم ديليش بن!', FR: 'Nous n\'utilisons que des ingrédients frais. Notre cuisine est sans noix et nous proposons des pains sans gluten sur demande. Livraison à 15km. Contactez-nous pour les allergies. Merci d\'avoir choisi Delish Bun !' },

  // Testimonials
  community: { EN: 'Community', AR: 'المجتمع', FR: 'Communauté' },
  wordOnTheStreet: { EN: 'WORD ON THE STREET', AR: 'كلام الناس', FR: 'LES ÉCHOS DE LA RUE' },
  localGuide: { EN: 'Local Guide', AR: 'مرشد محلي', FR: 'Guide Local' },
  foodBlogger: { EN: 'Food Blogger', AR: 'مدون طعام', FR: 'Blogueur Culinaire' },
  verifiedOrder: { EN: 'Verified Order', AR: 'طلب مؤكد', FR: 'Commande Vérifiée' },
  testimonial1: { EN: "Hands down the best smash burger I've had in the city. The truffle mayo is life-changing and the delivery was surprisingly fast. The fries arrived perfectly crispy.", AR: "ببساطة أفضل سماش برغر تناولته في المدينة. مايو الترافل مذهل والتوصيل كان سريعاً بشكل مفاجئ. وصلت البطاطس مقرمشة تماماً.", FR: "Sans aucun doute le meilleur smash burger de la ville. La mayo à la truffe est incroyable et la livraison a été rapide." },
  testimonial2: { EN: "The spicy inferno is actually spicy, which is rare! Excellent quality beef, you can really taste the difference. This is my new weekend ritual.", AR: "جحيم التوابل حار حقاً، وهذا نادر! لحم بقر بجودة ممتازة، يمكنك حقاً تذوق الفرق. هذا هو طقسي الجديد في عطلة نهاية الأسبوع.", FR: "L'Inferno Épicé est vraiment piquant ! Bœuf d'excellente qualité, on sent la différence. C'est mon rituel du week-end." },
  testimonial3: { EN: "Consistently amazing. Every single time I order, the food looks exactly like the pictures. The mobile app makes reordering far too dangerously easy.", AR: "مذهل باستمرار. في كل مرة أطلب فيها، يبدو الطعام تماماً مثل الصور. تطبيق الهاتف يجعل إعادة الطلب سهلة للغاية.", FR: "Toujours incroyable. Chaque fois que je commande, le plat ressemble exactement aux photos. L'appli est top." },
  testimonial4: { EN: "Their sweet potato fries with marshmallow dip is a guilty pleasure. The packaging kept everything hot and intact. Premium experience from start to finish.", AR: "البطاطا الحلوة المقلية مع صوص المارشميلو هي متعة مذنبة. حافظت العبوة على كل شيء ساخناً وسليماً. تجربة فاخرة من البداية إلى النهاية.", FR: "Leurs frites de patates douces sont un pur délice. L'emballage a tout gardé au chaud. Une expérience premium." },
  testimonial5: { EN: "The best burger spot in Rabat, hands down! The service is top-notch.", AR: "أفضل مكان للبرغر في الرباط بلا منازع! الخدمة في المستوى العالي.", FR: "Le meilleur endroit pour les burgers à Rabat ! Le service est au top." },
  testimonial6: { EN: "Authentic smash burgers. The crust on the meat is perfection.", AR: "سماش برغر حقيقي. القشرة المقرمشة على اللحم مثالية.", FR: "De vrais smash burgers. La croûte sur la viande est parfaite." },
  testimonial7: { EN: "Love the atmosphere and the secret sauce is incredible.", AR: "أحببت الأجواء والصلصة السرية مذهلة.", FR: "J'adore l'ambiance et la sauce secrète est incroyable." },
  testimonial8: { EN: "Finally a place that respects the art of the bun!", AR: "أخيراً مكان يحترم فن خبز البرغر!", FR: "Enfin un endroit qui respecte l'art du bun !" },
  nameOmar: { EN: "Omar Alami", AR: "عمر العلمي", FR: "Omar Alami" },
  nameLayla: { EN: "Layla Bennani", AR: "ليلى بناني", FR: "Layla Bennani" },
  nameYoussef: { EN: "Youssef Idrisi", AR: "يوسف إدريسي", FR: "Youssef Idrisi" },
  nameFatima: { EN: "Fatima Zahra", AR: "فاطمة الزهراء", FR: "Fatima Zahra" },
  testimonial9: { EN: "The packaging is sleek and keeps the heat in. Best delivery experience.", AR: "التغليف أنيق ويحافظ على الحرارة. أفضل تجربة توصيل.", FR: "L'emballage est soigné et garde la chaleur. Meilleure expérience de livraison." },
  testimonial10: { EN: "A real gem in the city. The wagyu beef is succulent.", AR: "جوهرة حقيقية في المدينة. لحم الواغيو رائع.", FR: "Une vraie pépite dans la ville. Le bœuf wagyu est succulent." },
  testimonial11: { EN: "Finally, a burger that doesn't fall apart! Great quality buns.", AR: "أخيراً، برغر لا يتفكك! خبز بجودة رائعة.", FR: "Enfin un burger qui ne se décompose pas ! Pains de super qualité." },
  testimonial12: { EN: "The spicy inferno is my absolute favorite. Perfection.", AR: "جحيم التوابل هو المفضل لدي تماماً. كمال.", FR: "L'Inferno Épicé est mon préféré absolu. La perfection." },
  nameAhmed: { EN: "Ahmed Mansouri", AR: "أحمد منصوري", FR: "Ahmed Mansouri" },
  nameSalma: { EN: "Salma Radi", AR: "سلمى راضي", FR: "Salma Radi" },
  nameKarim: { EN: "Karim Tazi", AR: "كريم تازي", FR: "Karim Tazi" },
  nameZineb: { EN: "Zineb Alaoui", AR: "زينب علوي", FR: "Zineb Alaoui" },

  // Statistics
  burgersSmashed: { EN: 'BURGERS SMASHED', AR: 'برغر تم تحطيمه', FR: 'BURGERS ÉCRASÉS' },
  locations: { EN: 'LOCATIONS', AR: 'مواقع', FR: 'LIEUX' },
  avgRatingStat: { EN: 'AVG RATING', AR: 'متوسط التقييم', FR: 'NOTE MOYENNE' },
  happyCustomers: { EN: 'HAPPY CUSTOMERS', AR: 'عملاء سعداء', FR: 'CLIENTS HEUREUX' },

  // FoodGallery
  ourGallery: { EN: 'Our Gallery', AR: 'معرضنا', FR: 'Notre Galerie' },
  theArtOf: { EN: 'THE ART OF THE BUN', AR: 'فن البن', FR: 'L\'ART DU BUN' },
  smashedWithLove: { EN: 'SmashedWithLove', AR: 'حطم_بكل_حب', FR: 'SmashedAvecAmour' },
  feastWarning: { EN: 'Feast your eyes. Warning: may cause intense cravings and immediate hunger.', AR: 'متع عينيك. تحذير: قد يسبب رغبة شديدة وجوعاً فورياً.', FR: 'Régalez vos yeux. Attention : peut provoquer des envies intenses et une faim immédiate.' },
  doubleSizzle: { EN: 'Double Sizzle', AR: 'أزيز مزدوج', FR: 'Double Sizzle' },
  viewDetail: { EN: 'View detail', AR: 'عرض التفاصيل', FR: 'Voir le détail' },

  // IntroScreen
  fire: { EN: 'FIRE.', AR: 'نار.', FR: 'FEU.' },
  heat: { EN: 'HEAT.', AR: 'حرارة.', FR: 'CHALEUR.' },
  craft: { EN: 'CRAFT.', AR: 'حرفة.', FR: 'ARTISANAT.' },
  taste: { EN: 'TASTE.', AR: 'مذاق.', FR: 'GOÛT.' },

  // AppPromotion & DeliveryExperience
  arrivingIn: { EN: "Arriving in", AR: "يصل خلال", FR: "Arrive dans" },
  orderConfirmed: { EN: "Order Confirmed", AR: "تم تأكيد الطلب", FR: "Commande Confirmée" },
  justNow: { EN: "Just now", AR: "الآن", FR: "À l'instant" },
  downloadApp: { EN: "Download App", AR: "تحميل التطبيق", FR: "Télécharger l'App" },
  orderAnywhere: { EN: "Order Anywhere", AR: "اطلب من أي مكان", FR: "Commandez n'importe où" },
  appPromotionDesc: { EN: "Get exclusive deals, track your delivery in real-time, and earn loyalty points with every bite. The ultimate burger experience right in your pocket.", AR: "احصل على عروض حصرية، وتتبع طلبك في الوقت الفعلي، واكسب نقاط ولاء مع كل قضمة. تجربة البرجر المثالية في جيبك مباشرة.", FR: "Bénéficiez d'offres exclusives, suivez votre livraison en temps réel et gagnez des points de fidélité à chaque bouchée. L'expérience burger ultime directement dans votre poche." },
  downloadOnThe: { EN: "Download on the", AR: "حمل من", FR: "Télécharger sur l'" },
  appStore: { EN: "App Store", AR: "متجر التطبيقات", FR: "App Store" },
  getItOn: { EN: "Get it on", AR: "احصل عليه من", FR: "Disponible sur" },
  googlePlay: { EN: "Google Play", AR: "جوجل بلاي", FR: "Google Play" },
  fastestDelivery: { EN: "Fastest Delivery", AR: "أسرع توصيل", FR: "Livraison la Plus Rapide" },
  realTimeTracking: { EN: "Real-time Tracking", AR: "تتبع في الوقت الفعلي", FR: "Suivi en Temps Réel" },
  deliveryExperienceDesc: { EN: "From the moment you order to the final bite, we've optimized every second to ensure your burger arrives hot, fresh, and exactly how you want it.", AR: "من لحظة الطلب وحتى القضمة الأخيرة، قمنا بتحسين كل ثانية لضمان وصول البرجر الخاص بك ساخناً وطازجاً وبالطريقة التي تريدها تماماً.", FR: "Du moment où vous commandez à la dernière bouchée, nous avons optimisé chaque seconde pour garantir que votre burger arrive chaud, frais et exactement comme vous le souhaitez." },
  threeMinsAway: { EN: "3 MINS AWAY", AR: "على بعد 3 دقائق", FR: "À 3 MINUTES" },
  homeMarker: { EN: "Home", AR: "المنزل", FR: "Maison" },
  realAddress: { EN: "Ave Annakhil, Rabat 10100", AR: "شارع النخيل، الرباط 10100", FR: "Ave Annakhil, Rabat 10100" },
  rabatLocation: { EN: "Delish Bun Rabat", AR: "ديليش بن الرباط", FR: "Delish Bun Rabat" },
  item: { EN: "item", AR: "عنصر", FR: "article" },
  items: { EN: "items", AR: "عناصر", FR: "articles" },
  subtotal: { EN: "Subtotal", AR: "المجموع الفرعي", FR: "Sous-total" },
  delivery: { EN: "Delivery", AR: "التوصيل", FR: "Livraison" },
  free: { EN: "FREE", AR: "مجاني", FR: "GRATUIT" },
  total: { EN: "Total", AR: "المجموع الكلي", FR: "Total" },
  checkout: { EN: "Checkout", AR: "الدفع", FR: "Paiement" },
  secureProcess: { EN: "SECURE CHECKOUT PROCESS", AR: "عملية دفع آمنة", FR: "PROCESSUS DE PAIEMENT SÉCURISÉ" },
  totalPayable: { EN: "TOTAL PAYABLE", AR: "إجمالي المستحق", FR: "TOTAL À PAYER" },
  info: { EN: "Info", AR: "المعلومات", FR: "Infos" },
  personalDetails: { EN: "Personal Details", AR: "التفاصيل الشخصية", FR: "Détails Personnels" },
  firstName: { EN: "First Name", AR: "الاسم الأول", FR: "Prénom" },
  lastName: { EN: "Last Name", AR: "الاسم الأخير", FR: "Nom" },
  email: { EN: "Email", AR: "البريد الإلكتروني", FR: "E-mail" },
  phone: { EN: "Phone", AR: "الهاتف", FR: "Téléphone" },
  deliveryAddress: { EN: "Delivery Address", AR: "عنوان التوصيل", FR: "Adresse de Livraison" },
  streetAddress: { EN: "Street Address", AR: "اسم الشارع", FR: "Adresse" },
  city: { EN: "City", AR: "المدينة", FR: "Ville" },
  zipCode: { EN: "Zip Code", AR: "الرمز البريدي", FR: "Code Postal" },
  deliveryNotes: { EN: "Delivery Notes", AR: "ملاحظات التوصيل", FR: "Notes de Livraison" },
  paymentMethod: { EN: "Payment Method", AR: "طريقة الدفع", FR: "Méthode de Paiement" },
  orderPlaced: { EN: "Order Placed!", AR: "تم تقديم الطلب!", FR: "Commande Passée !" },
  successMessage: { EN: "Your burger is being smashed and will arrive shortly. Get ready for the heat!", AR: "يتم تحضير البرغر الخاص بك وسيصل قريباً. استعد للحرارة!", FR: "Votre burger est en préparation et arrivera bientôt. Préparez-vous !" },
  trackOrder: { EN: "Track Order", AR: "تتبع الطلب", FR: "Suivre la Commande" },
  back: { EN: "Back", AR: "رجوع", FR: "Retour" },
  nextStep: { EN: "Next Step", AR: "الخطوة التالية", FR: "Étape Suivante" },
  completeOrder: { EN: "Complete Order", AR: "إتمام الطلب", FR: "Terminer la Commande" },

  // InfoModal
  helpCenterTitle: { EN: "Help Center", AR: "مركز المساعدة", FR: "Centre d'Aide" },
  helpCenterContent: { EN: "Have questions or need assistance? Our support team is available 24/7. You can reach us via email at delishbun@gmail.com or call our hotline at +212 674 745 858. We aim to respond to all inquiries within 2 hours.", AR: "لديك أسئلة أو تحتاج إلى مساعدة؟ فريق الدعم لدينا متوفر على مدار الساعة طوال أيام الأسبوع. يمكنك التواصل معنا عبر البريد الإلكتروني على support@delishbun.com أو الاتصال بالخط الساخن على +212 674 745 858. نهدف إلى الرد على جميع الاستفسارات في غضون ساعتين.", FR: "Vous avez des questions ou besoin d'aide ? Notre équipe de support est disponible 24h/24 et 7j/7. Vous pouvez nous contacter par e-mail à support@delishbun.com ou appeler notre hotline au +212 674 745 858. Nous visons à répondre à toutes les demandes dans les 2 heures." },
  privacyPolicyTitle: { EN: "Privacy Policy", AR: "سياسة الخصوصية", FR: "Politique de Confidentialité" },
  privacyPolicyContent: { EN: "At Delish Bun, we take your privacy seriously. All personal data collected during the order process is encrypted and stored securely. We never share your information with third parties except for essential delivery services. You have the right to request your data deletion at any time.", AR: "في ديليش بن، نأخذ خصوصيتك على محمل الجد. يتم تشفير جميع البيانات الشخصية التي يتم جمعها أثناء عملية الطلب وتخزينها بشكل آمن. نحن لا نشارك معلوماتك أبدًا مع أطراف ثالثة باستثناء خدمات التوصيل الأساسية. لديك الحق في طلب حذف بياناتك في أي وقت.", FR: "Chez Delish Bun, nous prenons votre vie privée au sérieux. Toutes les données personnelles collectées lors du processus de commande sont cryptées et stockées de manière sécurisée. Nous ne partageons jamais vos informations avec des tiers, sauf pour les services de livraison essentiels. Vous avez le droit de demander la suppression de vos données à tout moment." },
  termsOfServiceTitle: { EN: "Terms of Service", AR: "شروط الخدمة", FR: "Conditions d'Utilisation" },
  termsOfServiceContent: { EN: "By accessing our services, you agree to our standard terms and conditions. Orders are non-refundable once the 'smashing' process has begun in our kitchen. We guarantee delivery within 45 minutes or your next burger is on us. All prices include applicable taxes.", AR: "من خلال الوصول إلى خدماتنا، فإنك توافق على الشروط والأحكام القياسية الخاصة بنا. الطلبات غير قابلة للاسترداد بمجرد بدء عملية 'التحضير' في مطبخنا. نحن نضمن التوصيل في غضون 45 دقيقة أو يكون البرجر التالي مجانيًا. جميع الأسعار تشمل الضرائب المطبقة.", FR: "En accédant à nos services, vous acceptez nos conditions générales. Les commandes ne sont pas remboursables une fois que le processus de préparation a commencé dans notre cuisine. Nous garantissons la livraison en 45 minutes ou votre prochain burger est offert. Tous les prix incluent les taxes applicables." },
  deliveryAreasTitle: { EN: "Delivery Areas", AR: "مناطق التوصيل", FR: "Zones de Livraison" },
  deliveryAreasContent: { EN: "Delish Bun currently serves the heart of Rabat. Our primary delivery zones include Hay Riad, Agdal, Souissi, and Hassan. We are rapidly expanding to Temara and Sale. If you're unsure if we deliver to your location, please check our live map on the mobile app.", AR: "يقدم ديليش بن خدماته حاليًا في قلب الرباط. تشمل مناطق التوصيل الأساسية لدينا حي الرياض وأكدال والسويسي وحسان. نحن نتوسع سريعًا إلى تمارة وسلا. إذا لم تكن متأكدًا مما إذا كنا نوصل إلى موقعك، فيرجى مراجعة خريطتنا الحية على تطبيق الهاتف.", FR: "Delish Bun dessert actuellement le cœur de Rabat. Nos principales zones de livraison comprennent Hay Riad, Agdal, Souissi et Hassan. Nous nous développons rapidement vers Témara et Salé. Si vous n'êtes pas sûr que nous livrons à votre emplacement, veuillez consulter notre carte en direct sur l'application mobile." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'AR' ? 'rtl' : 'ltr'} className={language === 'AR' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
