import { useTranslation } from 'react-i18next';
import SectionWrapper from '../../components/SectionWrapper';
import SkillCard from '../../components/SkillCard';
import { skills, skillCategories } from '../../data/skills';
import s from './styles.module.scss';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="skills">
      <h2 className={s.heading}>{t('skills.heading')}</h2>

      <div className={s.categories}>
        {skillCategories.map((cat) => (
          <div key={cat} className={s.category}>
            <h3 className={s.catHeading}>{t(`skills.categories.${cat}`)}</h3>
            <div className={s.grid}>
              {skills
                .filter((sk) => sk.category === cat)
                .map((sk) => (
                  <SkillCard key={sk.name} skill={sk} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
