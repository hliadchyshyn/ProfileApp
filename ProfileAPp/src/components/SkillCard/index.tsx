import type { Skill } from '../../data/skills';
import s from './styles.module.scss';

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  return (
    <div className={s.card}>
      <span className={s.name}>{skill.name}</span>
      <div className={s.dots}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={`${s.dot} ${i < skill.level ? s.filled : ''}`} />
        ))}
      </div>
    </div>
  );
}
