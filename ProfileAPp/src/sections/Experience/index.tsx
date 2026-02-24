import { useTranslation } from 'react-i18next';
import SectionWrapper from '../../components/SectionWrapper';
import RpgNode from '../../components/RpgNode';
import Timeline from '../../components/Timeline';
import { experienceData } from '../../data/experience';
import s from './styles.module.scss';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="experience" className={s.experience}>
      <h2 className={s.heading}>{t('experience.heading')}</h2>
      <p className={s.questLine}>{t('experience.questLine')}</p>

      <Timeline />

      <div className={s.timeline}>
        <div className={s.line} aria-hidden="true" />
        {experienceData.map((entry, i) => (
          <RpgNode key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
