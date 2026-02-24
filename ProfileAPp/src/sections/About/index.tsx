import { useTranslation } from 'react-i18next';
import SectionWrapper from '../../components/SectionWrapper';
import s from './styles.module.scss';

export default function About() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="about">
      <h2 className={s.heading}>{t('about.heading')}</h2>

      <div className={s.grid}>
        <div className={s.main}>
          <p className={s.summary}>{t('about.summary')}</p>

          <div className={s.meta}>
            <div className={s.metaItem}>
              <span className={s.metaIcon}>📍</span>
              <span>{t('about.location')}</span>
            </div>
            <div className={s.metaItem}>
              <span className={s.metaIcon}>🌐</span>
              <span>{t('about.languages')}</span>
            </div>
            <div className={s.metaItem}>
              <span className={s.metaIcon}>⚡</span>
              <span>{t('about.yearsExp')}</span>
            </div>
          </div>
        </div>

        <div className={s.education}>
          <h3 className={s.eduHeading}>{t('about.education.heading')}</h3>
          <ul className={s.eduList}>
            <li>{t('about.education.masters')}</li>
            <li>{t('about.education.university')}</li>
            <li>{t('about.education.frontend')}</li>
            <li>{t('about.education.cert')}</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
