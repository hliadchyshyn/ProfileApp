import type { ReactNode } from 'react';
import s from './styles.module.scss';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className }: Props) {
  return (
    <section id={id} className={`${s.section} ${className ?? ''}`}>
      <div className={s.container}>{children}</div>
    </section>
  );
}
