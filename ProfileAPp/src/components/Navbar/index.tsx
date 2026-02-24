import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { type RootState, setActiveSection } from '../../store';
import LanguageToggle from '../LanguageToggle';
import ThemePicker from '../ThemePicker';
import s from './styles.module.scss';

const SECTIONS = ['hero', 'about', 'experience', 'skills', 'contact'] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activeSection = useSelector((state: RootState) => state.ui.activeSection);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 120;
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i]);
      if (el && el.offsetTop <= scrollY) {
        dispatch(setActiveSection(SECTIONS[i]));
        break;
      }
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={s.navbar}>
      <div className={s.inner}>
        <button className={s.logo} onClick={() => scrollTo('hero')}>
          IH
        </button>

        <ul className={s.links}>
          {SECTIONS.map((id) => (
            <li key={id}>
              <button
                className={`${s.link} ${activeSection === id ? s.active : ''}`}
                onClick={() => scrollTo(id)}
              >
                {t(`nav.${id}`)}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ThemePicker />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
