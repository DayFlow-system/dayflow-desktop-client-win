import { PropsWithChildren, useEffect } from 'react';
import { useSettingsStore } from '../store/settings.store';

function resolveSystemDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function Theme({ children }: PropsWithChildren) {
  const theme = useSettingsStore((state) => state.theme);
  const language = useSettingsStore((state) => state.language);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const shouldUseDarkTheme = theme === 'dark' || (theme === 'system' && resolveSystemDarkMode());
      document.documentElement.classList.toggle('dark', shouldUseDarkTheme);
      document.documentElement.classList.toggle('light', !shouldUseDarkTheme);
      document.documentElement.dataset.theme = shouldUseDarkTheme ? 'dark' : 'light';
    };

    applyTheme();
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
