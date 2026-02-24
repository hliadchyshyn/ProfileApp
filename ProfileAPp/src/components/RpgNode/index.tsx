import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExperienceEntry } from '../../data/experience';
import s from './styles.module.scss';

interface Props {
  entry: ExperienceEntry;
  index: number;
}

export default function RpgNode({ entry, index }: Props) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const side = index % 2 === 0 ? 'left' : 'right';

  const quests = t(`experience.entries.${entry.id}.quests`, { returnObjects: true }) as string[];
  const hasQuests = Array.isArray(quests) && quests.length > 0;
  const duration = t(`experience.entries.${entry.id}.duration`);

  return (
    <div className={`${s.node} ${s[side]}`} data-rarity={entry.rarity}>
      <div className={s.orb}>
        <span className={s.icon}>{entry.icon}</span>
      </div>

      <div
        className={`${s.card} ${!hasQuests ? s.static : ''}`}
        onClick={hasQuests ? () => setExpanded(!expanded) : undefined}
      >
        <div className={s.header}>
          <span className={s.company}>{t(`experience.entries.${entry.id}.company`)}</span>
          <span className={s.rarity}>{entry.rarity}</span>
        </div>
        <h3 className={s.role}>{t(`experience.entries.${entry.id}.role`)}</h3>
        <div className={s.period}>
          <span>{t(`experience.entries.${entry.id}.period`)}</span>
          {duration && (
            <>
              <span className={s.dot}>·</span>
              <span>{duration}</span>
            </>
          )}
          <span className={s.dot}>·</span>
          <span>{t(`experience.entries.${entry.id}.location`)}</span>
        </div>

        {entry.techStack.length > 0 && (
          <div className={s.techStack}>
            {entry.techStack.map((tech) => (
              <span key={tech} className={s.tech}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {expanded && hasQuests && (
          <ul className={s.quests}>
            {quests.map((quest, i) => (
              <li key={i}>{quest}</li>
            ))}
          </ul>
        )}

        {hasQuests && (
          <button className={s.expandHint}>
            {expanded ? '▲' : '▼'}
          </button>
        )}
      </div>
    </div>
  );
}
