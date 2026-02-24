export interface ThemePreset {
  name: string;
  hue: number;
}

export const PRESET_THEMES: ThemePreset[] = [
  { name: 'Violet',  hue: 262 },
  { name: 'Emerald', hue: 160 },
  { name: 'Cyan',    hue: 195 },
  { name: 'Amber',   hue: 38  },
  { name: 'Rose',    hue: 345 },
  { name: 'Indigo',  hue: 225 },
];

export const DEFAULT_HUE = 160; // Emerald

const LS_KEY = 'theme-hue';

function hsl(h: number, s: number, l: number) {
  return `hsl(${h} ${s}% ${l}%)`;
}
function hsla(h: number, s: number, l: number, a: number) {
  return `hsl(${h} ${s}% ${l}% / ${a})`;
}

export function applyTheme(hue: number) {
  const r = document.documentElement;
  const set = (name: string, val: string) => r.style.setProperty(name, val);

  // Accents
  set('--color-accent-primary',   hsl(hue, 72, 52));
  set('--color-accent-secondary', hsl(hue, 65, 68));
  set('--color-accent-gold',      '#fbbf24');   // gold stays fixed
  set('--color-accent-green',     hsl(hue, 60, 60));
  set('--color-accent-cyan',      hsl(hue + 30, 70, 60));

  // Backgrounds (very dark with subtle hue tint)
  set('--color-bg-primary',   hsl(hue, 18, 4));
  set('--color-bg-secondary', hsl(hue, 16, 6));
  set('--color-bg-tertiary',  hsl(hue, 14, 9));
  set('--color-bg-elevated',  hsl(hue, 20, 11));

  // Text
  set('--color-text-primary',   hsl(hue, 12, 92));
  set('--color-text-secondary', hsl(hue, 18, 62));
  set('--color-text-tertiary',  hsl(hue, 12, 42));
  set('--color-text-accent',    hsl(hue, 58, 76));

  // Borders
  set('--color-border',       hsla(hue, 72, 52, 0.15));
  set('--color-border-hover', hsla(hue, 72, 52, 0.45));

  // Glass
  set('--glass-bg', hsla(hue, 18, 4, 0.82));

  // Shadows
  set('--shadow-glow', `0 0 20px ${hsla(hue, 72, 52, 0.32)}`);
  set('--shadow-card', '0 4px 24px hsl(0 0% 0% / 0.4)');

  // Save
  localStorage.setItem(LS_KEY, String(hue));
}

export function loadSavedTheme() {
  const saved = localStorage.getItem(LS_KEY);
  applyTheme(saved ? Number(saved) : DEFAULT_HUE);
}

export function getSavedHue(): number {
  const saved = localStorage.getItem(LS_KEY);
  return saved ? Number(saved) : DEFAULT_HUE;
}

/** Convert any hex color to an approximate hue (0-360) */
export function hexToHue(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  if (d === 0) return 0;
  let h = 0;
  if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return Math.round(h * 60 + (h < 0 ? 360 : 0));
}

/** Convert hue to a representative hex for the input[type=color] */
export function hueToHex(hue: number): string {
  // Use HSL(hue, 72%, 52%) which is our accent-primary
  const s = 0.72, l = 0.52;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + hue / 30) % 12;
    const color = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
