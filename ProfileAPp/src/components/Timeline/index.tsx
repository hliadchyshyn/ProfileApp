import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

// Career data — months offset from March 2013
const TOTAL_MONTHS = 156; // Mar 2013 → Feb 2026

interface TEntry {
  id: string;
  role: string;
  roleShort: string;
  company: string;
  months: number;
  startMonth: number;
  rarity: string;
}

const entries: TEntry[] = [
  { id: 'oschadbank',  role: 'Head of Lending & Methodology', roleShort: 'Head of Lending', company: 'Oschadbank',       startMonth: 0,   months: 29, rarity: 'common' },
  { id: 'teamsoft',    role: 'System Analyst / Reports Dev',  roleShort: 'System Analyst',  company: 'Teamsoft',          startMonth: 29,  months: 9,  rarity: 'uncommon' },
  { id: 'banza',       role: 'CRM Developer / Senior SA',     roleShort: 'CRM Dev / SA',    company: 'Banza',             startMonth: 38,  months: 22, rarity: 'rare' },
  { id: 'nullgravity', role: 'Senior System Analyst',         roleShort: 'Senior SA',       company: 'Nullgravity',       startMonth: 60,  months: 8,  rarity: 'rare' },
  { id: 'wirex',       role: 'Senior System Analyst',         roleShort: 'Senior SA',       company: 'Wirex',             startMonth: 68,  months: 5,  rarity: 'epic' },
  { id: 'b2bsoft_ba',  role: 'UX BA / HTML Developer',        roleShort: 'UX BA',           company: 'B2B Soft',          startMonth: 73,  months: 11, rarity: 'epic' },
  { id: 'b2bsoft',     role: 'Fullstack Developer',           roleShort: 'Fullstack Dev',   company: 'B2B Soft',          startMonth: 84,  months: 51, rarity: 'legendary' },
  { id: 'military',    role: 'Military Service',              roleShort: 'Military',        company: 'Armed Forces 🇺🇦',  startMonth: 135, months: 21, rarity: 'legendary' },
];

const YEAR_MARKS = [2013, 2015, 2017, 2019, 2021, 2023, 2025];
const BASE_YEAR = 2013;
const BASE_MONTH = 3;

function yearToOffset(year: number): number {
  return (year - BASE_YEAR) * 12 - BASE_MONTH + 1;
}

// ── Duration formatting ──────────────────────────────────

function pluralUA(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return `${n} ${many}`;
  if (mod10 === 1)                   return `${n} ${one}`;
  if (mod10 >= 2 && mod10 <= 4)     return `${n} ${few}`;
  return `${n} ${many}`;
}

function formatDuration(totalMonths: number, lng: string): string {
  const years  = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (lng === 'ua') {
    const parts: string[] = [];
    if (years  > 0) parts.push(pluralUA(years,  'рік',     'роки',   'років'));
    if (months > 0) parts.push(pluralUA(months, 'місяць',  'місяці', 'місяців'));
    return parts.join(' ');
  }

  // English
  const parts: string[] = [];
  if (years  > 0) parts.push(`${years} ${years  === 1 ? 'yr'  : 'yrs'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ');
}

// ── Component ────────────────────────────────────────────

export default function Timeline() {
  const { t, i18n } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeEntry = entries.find(e => e.id === activeId) ?? null;

  function activate(id: string) { setActiveId(id); }
  function deactivate()         { setActiveId(null); }
  function toggle(id: string)   { setActiveId(prev => prev === id ? null : id); }

  return (
    <div className={s.root}>
      <p className={s.label}>{t('timeline.label', 'Career Timeline')}</p>

      <div className={s.wrapper}>
        {/* Label pins */}
        <div className={s.labelsRow} aria-hidden="true">
          {entries.map((e, i) => {
            const leftPct  = (e.startMonth / TOTAL_MONTHS) * 100;
            const widthPct = (e.months / TOTAL_MONTHS) * 100;
            const isNarrow = widthPct < 6;
            return (
              <div
                key={e.id}
                className={`${s.labelPin} ${i % 2 === 0 ? s.pinHigh : s.pinLow} ${isNarrow ? s.pinNarrow : ''}`}
                style={{ left: `${leftPct + widthPct / 2}%` }}
              >
                <span className={s.pinText}>{isNarrow ? e.company : e.roleShort}</span>
                <span className={s.pinLine} />
              </div>
            );
          })}
        </div>

        {/* Tooltip */}
        {activeEntry && (() => {
          const centerPct = ((activeEntry.startMonth + activeEntry.months / 2) / TOTAL_MONTHS) * 100;
          // clamp so tooltip stays within wrapper
          const clampedPct = Math.min(Math.max(centerPct, 8), 92);
          return (
            <div
              className={s.tooltip}
              style={{ left: `${clampedPct}%` }}
              onMouseEnter={() => activate(activeEntry.id)}
              onMouseLeave={deactivate}
            >
              <span className={s.tooltipRole}>{activeEntry.role}</span>
              <span className={s.tooltipMeta}>
                {activeEntry.company}
                <span className={s.tooltipDot} />
                {formatDuration(activeEntry.months, i18n.language)}
              </span>
            </div>
          );
        })()}

        {/* Segmented track */}
        <div className={s.track} role="list">
          {entries.map((e) => {
            const widthPct = (e.months / TOTAL_MONTHS) * 100;
            const isActive = activeId === e.id;
            return (
              <div
                key={e.id}
                role="listitem"
                aria-label={`${e.role} at ${e.company}: ${formatDuration(e.months, i18n.language)}`}
                className={`${s.segment} ${s[`r_${e.rarity}`]} ${isActive ? s.segmentActive : ''}`}
                style={{ width: `${widthPct}%` }}
                onMouseEnter={() => activate(e.id)}
                onMouseLeave={deactivate}
                onClick={() => toggle(e.id)}
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
