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
        <div className={s.text}>
          <p className={s.greeting}>{t('hero.greeting')}</p>
          <h1 className={s.name}>{t('hero.name')}</h1>
          <p className={s.title}>{t('hero.title')}</p>
          <p className={s.subtitle}>{t('hero.subtitle')}</p>
          <div className={s.actions}>
            <button className={s.cta} onClick={scrollToExperience}>
              {t('hero.cta')}
            </button>
            <a
              href="/cv.pdf"
              download="Ihor_Hliadchyshyn_CV.pdf"
              className={s.cvLink}
            >
              {t('hero.downloadCv', 'Download CV')}
            </a>
          </div>
        </div>

        <div className={s.photoWrap} aria-hidden="false">
          <div className={s.photoRing}>
            <img
              src="/avatar.png"
              alt="Ihor Hliadchyshyn"
              className={s.photo}
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
      <div className={s.bgGlow} aria-hidden="true" />
    </section>
  );
}
