import { useLanguage } from '../context/LanguageContext';

export default function Important() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[#181818] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-8">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <span className="h-[2px] w-12 bg-burger-gold"></span>
          <span className="text-burger-gold font-bold uppercase tracking-widest text-sm">{t('important')}</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-white mb-6 leading-tight">
          {t('whatYouShouldKnow')}
        </h2>
        <p className="text-[#A0A0A0] text-lg max-w-2xl font-medium leading-relaxed mx-auto">
          {t('importantText')}
        </p>
      </div>
    </section>
  );
}
