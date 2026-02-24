import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('ua') ? 'ua' : 'en';

  const toggle = () => {
    const next = current === 'en' ? 'ua' : 'en';
    if (document.startViewTransition) {
      document.startViewTransition(() => i18n.changeLanguage(next));
    } else {
      i18n.changeLanguage(next);
    }
  };

  return (
    <button className={s.toggle} onClick={toggle} aria-label="Toggle language">
      <span className={current === 'en' ? s.active : ''}>EN</span>
      <span className={s.divider}>/</span>
      <span className={current === 'ua' ? s.active : ''}>UA</span>
    </button>
  );
}
