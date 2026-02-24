import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={s.hero}>
      <div className={s.content}>
        <p className={s.greeting}>{t('hero.greeting')}</p>
        <h1 className={s.name}>{t('hero.name')}</h1>
        <p className={s.title}>{t('hero.title')}</p>
        <p className={s.subtitle}>{t('hero.subtitle')}</p>
        <button className={s.cta} onClick={scrollToExperience}>
          {t('hero.cta')}
        </button>
      </div>
      <div className={s.bgGlow} aria-hidden="true" />
    </section>
  );
}
