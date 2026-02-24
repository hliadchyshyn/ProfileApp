import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './i18n';
import './assets/styles/global.scss';
import { loadSavedTheme } from './utils/theme';

// Apply persisted (or default Emerald) theme before first render
loadSavedTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
