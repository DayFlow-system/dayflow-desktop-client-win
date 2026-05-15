import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { useSettingsStore } from '../src/store/settings.store';

// Tests use fetch mocks instead of a real DayFlow Server so API behavior is deterministic and fast.
afterEach(() => {
  vi.restoreAllMocks();
  useSettingsStore.getState().resetSettings();
});
