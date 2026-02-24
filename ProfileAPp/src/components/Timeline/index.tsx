import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

// Career data — months offset from March 2013
const TOTAL_MONTHS = 156; // Mar 2013 → Feb 2026

interface TEntry {
  id: string;
  role: string;
  roleShort: string;
  company: string;
  months: number;       // duration in months
  startMonth: number;   // offset from Mar 2013
  rarity: string;
}

const entries: TEntry[] = [
  { id: 'oschadbank',   role: 'Head of Lending & Methodology', roleShort: 'Head of Lending', company: 'Oschadbank',        startMonth: 0,   months: 29, rarity: 'common' },
  { id: 'teamsoft',     role: 'System Analyst / Reports Dev',  roleShort: 'System Analyst',  company: 'Teamsoft',           startMonth: 29,  months: 9,  rarity: 'uncommon' },
  { id: 'banza',        role: 'CRM Developer / Senior SA',     roleShort: 'CRM Dev / SA',    company: 'Banza',              startMonth: 38,  months: 22, rarity: 'rare' },
  { id: 'nullgravity',  role: 'Senior System Analyst',         roleShort: 'Senior SA',       company: 'Nullgravity',        startMonth: 60,  months: 8,  rarity: 'rare' },
  { id: 'wirex',        role: 'Senior System Analyst',         roleShort: 'Senior SA',       company: 'Wirex',              startMonth: 68,  months: 5,  rarity: 'epic' },
  { id: 'b2bsoft_ba',   role: 'UX BA / HTML Developer',        roleShort: 'UX BA',           company: 'B2B Soft',           startMonth: 73,  months: 11, rarity: 'epic' },
  { id: 'b2bsoft',      role: 'Fullstack Developer',           roleShort: 'Fullstack Dev',   company: 'B2B Soft',           startMonth: 84,  months: 51, rarity: 'legendary' },
  { id: 'military',     role: 'Military Service',              roleShort: 'Military',        company: 'Armed Forces 🇺🇦',   startMonth: 135, months: 21, rarity: 'legendary' },
];

const YEAR_MARKS = [2013, 2015, 2017, 2019, 2021, 2023, 2025];
const BASE_YEAR = 2013;
const BASE_MONTH = 3; // March (1-indexed)

function yearToOffset(year: number): number {
  return (year - BASE_YEAR) * 12 - BASE_MONTH + 1;
}

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <p className={s.label}>{t('timeline.label', 'Career Timeline')}</p>

      <div className={s.wrapper}>
        {/* Labels row */}
        <div className={s.labelsRow} aria-hidden="true">
          {entries.map((e, i) => {
            const leftPct = (e.startMonth / TOTAL_MONTHS) * 100;
            const widthPct = (e.months / TOTAL_MONTHS) * 100;
            const isNarrow = widthPct < 6;
            return (
              <div
                key={e.id}
                className={`${s.labelPin} ${i % 2 === 0 ? s.pinHigh : s.pinLow} ${isNarrow ? s.pinNarrow : ''}`}
                style={{ left: `${leftPct + widthPct / 2}%` }}
                title={`${e.role} @ ${e.company}`}
              >
                <span className={s.pinText}>
                  {isNarrow ? e.company : e.roleShort}
                </span>
                <span className={s.pinLine} />
              </div>
            );
          })}
        </div>

        {/* Segmented track */}
        <div className={s.track} role="list">
          {entries.map((e) => {
            const widthPct = (e.months / TOTAL_MONTHS) * 100;
            return (
              <div
                key={e.id}
                role="listitem"
                className={`${s.segment} ${s[`r_${e.rarity}`]}`}
                style={{ width: `${widthPct}%` }}
                title={`${e.role} @ ${e.company}`}
              >
                <span className={s.segLabel}>{e.company}</span>
              </div>
            );
          })}
        </div>

        {/* Year axis */}
        <div className={s.axis} aria-hidden="true">
          {YEAR_MARKS.map((y) => (
            <div
              key={y}
              className={s.yearMark}
              style={{ left: `${(yearToOffset(y) / TOTAL_MONTHS) * 100}%` }}
            >
              {y}
            </div>
          ))}
          <div className={s.yearMark} style={{ left: '100%', transform: 'translateX(-100%)' }}>
            {t('timeline.present', 'Now')}
          </div>
        </div>
      </div>
    </div>
  );
}
