import { useRef, useState } from 'react';
import { applyTheme, hexToHue, hueToHex, PRESET_THEMES, getSavedHue } from '../../utils/theme';
import s from './styles.module.scss';

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [currentHue, setCurrentHue] = useState(getSavedHue);
  const colorInputRef = useRef<HTMLInputElement>(null);

  function pickHue(hue: number) {
    setCurrentHue(hue);
    applyTheme(hue);
  }

  function onColorInput(e: React.ChangeEvent<HTMLInputElement>) {
    const hue = hexToHue(e.target.value);
    pickHue(hue);
  }

  return (
    <div className={s.root}>
      <button
        className={s.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-label="Change color theme"
        title="Color theme"
      >
        <span className={s.triggerDot} style={{ background: hueToHex(currentHue) }} />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 0 20" />
          <path d="M12 2v20M2 12h20" />
        </svg>
      </button>

      {open && (
        <div className={s.panel}>
          <p className={s.panelTitle}>Theme Color</p>
          <div className={s.swatches}>
            {PRESET_THEMES.map((t) => (
              <button
                key={t.hue}
                className={`${s.swatch} ${currentHue === t.hue ? s.swatchActive : ''}`}
                style={{ background: hueToHex(t.hue) }}
                onClick={() => pickHue(t.hue)}
                title={t.name}
                aria-label={t.name}
              />
            ))}
          </div>

          <label className={s.customLabel}>
            <span>Custom</span>
            <input
              ref={colorInputRef}
              type="color"
              className={s.colorInput}
              value={hueToHex(currentHue)}
              onChange={onColorInput}
            />
          </label>
        </div>
      )}

      {open && <div className={s.backdrop} onClick={() => setOpen(false)} />}
    </div>
  );
}
