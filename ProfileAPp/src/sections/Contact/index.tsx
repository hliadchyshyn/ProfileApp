import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import SectionWrapper from '../../components/SectionWrapper';
import s from './styles.module.scss';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="contact">
      <div className={s.wrapper}>
        <h2 className={s.heading}>{t('contact.heading')}</h2>
        <p className={s.subtitle}>{t('contact.subtitle')}</p>

        <div className={s.links}>
          <a href={`mailto:${profile.email}`} className={s.link}>
            <span className={s.icon}>✉</span>
            <span>{t('contact.email')}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={s.link}>
            <span className={s.icon}>in</span>
            <span>{t('contact.linkedin')}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={s.link}>
            <span className={s.icon}>⌥</span>
            <span>{t('contact.github')}</span>
          </a>
        </div>

        <p className={s.location}>📍 {t('contact.location')}</p>
      </div>
    </SectionWrapper>
  );
}
